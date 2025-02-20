var r,
    i = n(444675);
function o(e, t, n) {
    return (
        (t = a(t)) in e
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
function a(e) {
    var t = s(e, 'string');
    return 'symbol' == typeof t ? t : String(t);
}
function s(e, t) {
    if ('object' != typeof e || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' != typeof r) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
var l = n(133495),
    c = Symbol('lastResolve'),
    u = Symbol('lastReject'),
    d = Symbol('error'),
    f = Symbol('ended'),
    p = Symbol('lastPromise'),
    _ = Symbol('handlePromise'),
    h = Symbol('stream');
function m(e, t) {
    return {
        value: e,
        done: t
    };
}
function g(e) {
    var t = e[c];
    if (null !== t) {
        var n = e[h].read();
        null !== n && ((e[p] = null), (e[c] = null), (e[u] = null), t(m(n, !1)));
    }
}
function E(e) {
    i.nextTick(g, e);
}
function v(e, t) {
    return function (n, r) {
        e.then(function () {
            if (t[f]) {
                n(m(void 0, !0));
                return;
            }
            t[_](n, r);
        }, r);
    };
}
var b = Object.getPrototypeOf(function () {}),
    y = Object.setPrototypeOf(
        (o(
            (r = {
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
                            i.nextTick(function () {
                                t[d] ? n(t[d]) : e(m(void 0, !0));
                            });
                        });
                    var r = this[p];
                    if (r) e = new Promise(v(r, this));
                    else {
                        var o = this[h].read();
                        if (null !== o) return Promise.resolve(m(o, !1));
                        e = new Promise(this[_]);
                    }
                    return (this[p] = e), e;
                }
            }),
            Symbol.asyncIterator,
            function () {
                return this;
            }
        ),
        o(r, 'return', function () {
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
        r),
        b
    ),
    O = function (e) {
        var t,
            n = Object.create(
                y,
                (o((t = {}), h, {
                    value: e,
                    writable: !0
                }),
                o(t, c, {
                    value: null,
                    writable: !0
                }),
                o(t, u, {
                    value: null,
                    writable: !0
                }),
                o(t, d, {
                    value: null,
                    writable: !0
                }),
                o(t, f, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }),
                o(t, _, {
                    value: function (e, t) {
                        var r = n[h].read();
                        r ? ((n[p] = null), (n[c] = null), (n[u] = null), e(m(r, !1))) : ((n[c] = e), (n[u] = t));
                    },
                    writable: !0
                }),
                t)
            );
        return (
            (n[p] = null),
            l(e, function (e) {
                if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
                    var t = n[u];
                    null !== t && ((n[p] = null), (n[c] = null), (n[u] = null), t(e)), (n[d] = e);
                    return;
                }
                var r = n[c];
                null !== r && ((n[p] = null), (n[c] = null), (n[u] = null), r(m(void 0, !0))), (n[f] = !0);
            }),
            e.on('readable', E.bind(null, n)),
            n
        );
    };
e.exports = O;
