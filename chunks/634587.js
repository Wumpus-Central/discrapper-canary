var i,
    r = n(444675);
function a(e, t, n) {
    return (
        (t = s(t)) in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    var t = o(e, 'string');
    return 'symbol' == typeof t ? t : String(t);
}
function o(e, t) {
    if ('object' != typeof e || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var i = n.call(e, t || 'default');
        if ('object' != typeof i) return i;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
var l = n(133495),
    u = Symbol('lastResolve'),
    c = Symbol('lastReject'),
    d = Symbol('error'),
    f = Symbol('ended'),
    _ = Symbol('lastPromise'),
    p = Symbol('handlePromise'),
    h = Symbol('stream');
function m(e, t) {
    return {
        value: e,
        done: t
    };
}
function g(e) {
    var t = e[u];
    if (null !== t) {
        var n = e[h].read();
        null !== n && ((e[_] = null), (e[u] = null), (e[c] = null), t(m(n, !1)));
    }
}
function E(e) {
    r.nextTick(g, e);
}
function v(e, t) {
    return function (n, i) {
        e.then(function () {
            if (t[f]) {
                n(m(void 0, !0));
                return;
            }
            t[p](n, i);
        }, i);
    };
}
var y = Object.getPrototypeOf(function () {}),
    I = Object.setPrototypeOf(
        (a(
            (i = {
                get stream() {
                    return this[h];
                },
                next: function () {
                    var e,
                        t = this,
                        n = this[d];
                    if (null !== n) return Promise.reject(n);
                    if (this[f]) return Promise.resolve(m(void 0, !0));
                    if (this[h].destroyed)
                        return new Promise(function (e, n) {
                            r.nextTick(function () {
                                t[d] ? n(t[d]) : e(m(void 0, !0));
                            });
                        });
                    var i = this[_];
                    if (i) e = new Promise(v(i, this));
                    else {
                        var a = this[h].read();
                        if (null !== a) return Promise.resolve(m(a, !1));
                        e = new Promise(this[p]);
                    }
                    return (this[_] = e), e;
                }
            }),
            Symbol.asyncIterator,
            function () {
                return this;
            }
        ),
        a(i, 'return', function () {
            var e = this;
            return new Promise(function (t, n) {
                e[h].destroy(null, function (e) {
                    if (e) {
                        n(e);
                        return;
                    }
                    t(m(void 0, !0));
                });
            });
        }),
        i),
        y
    ),
    b = function (e) {
        var t,
            n = Object.create(
                I,
                (a((t = {}), h, {
                    value: e,
                    writable: !0
                }),
                a(t, u, {
                    value: null,
                    writable: !0
                }),
                a(t, c, {
                    value: null,
                    writable: !0
                }),
                a(t, d, {
                    value: null,
                    writable: !0
                }),
                a(t, f, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }),
                a(t, p, {
                    value: function (e, t) {
                        var i = n[h].read();
                        i ? ((n[_] = null), (n[u] = null), (n[c] = null), e(m(i, !1))) : ((n[u] = e), (n[c] = t));
                    },
                    writable: !0
                }),
                t)
            );
        return (
            (n[_] = null),
            l(e, function (e) {
                if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
                    var t = n[c];
                    null !== t && ((n[_] = null), (n[u] = null), (n[c] = null), t(e)), (n[d] = e);
                    return;
                }
                var i = n[u];
                null !== i && ((n[_] = null), (n[u] = null), (n[c] = null), i(m(void 0, !0))), (n[f] = !0);
            }),
            e.on('readable', E.bind(null, n)),
            n
        );
    };
e.exports = b;
