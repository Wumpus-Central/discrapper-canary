var i,
    a = r(444675);
function o(e, n, r) {
    return (
        (n = s(n)) in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function s(e) {
    var n = l(e, 'string');
    return 'symbol' == typeof n ? n : String(n);
}
function l(e, n) {
    if ('object' != typeof e || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
        var i = r.call(e, n || 'default');
        if ('object' != typeof i) return i;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === n ? String : Number)(e);
}
var u = r(133495),
    c = Symbol('lastResolve'),
    d = Symbol('lastReject'),
    f = Symbol('error'),
    p = Symbol('ended'),
    h = Symbol('lastPromise'),
    _ = Symbol('handlePromise'),
    m = Symbol('stream');
function g(e, n) {
    return {
        value: e,
        done: n
    };
}
function E(e) {
    var n = e[c];
    if (null !== n) {
        var r = e[m].read();
        null !== r && ((e[h] = null), (e[c] = null), (e[d] = null), n(g(r, !1)));
    }
}
function v(e) {
    a.nextTick(E, e);
}
function y(e, n) {
    return function (r, i) {
        e.then(function () {
            if (n[p]) {
                r(g(void 0, !0));
                return;
            }
            n[_](r, i);
        }, i);
    };
}
var b = Object.getPrototypeOf(function () {}),
    I = Object.setPrototypeOf(
        (o(
            (i = {
                get stream() {
                    return this[m];
                },
                next: function () {
                    var e,
                        n = this,
                        r = this[f];
                    if (null !== r) return Promise.reject(r);
                    if (this[p]) return Promise.resolve(g(void 0, !0));
                    if (this[m].destroyed)
                        return new Promise(function (e, r) {
                            a.nextTick(function () {
                                n[f] ? r(n[f]) : e(g(void 0, !0));
                            });
                        });
                    var i = this[h];
                    if (i) e = new Promise(y(i, this));
                    else {
                        var o = this[m].read();
                        if (null !== o) return Promise.resolve(g(o, !1));
                        e = new Promise(this[_]);
                    }
                    return (this[h] = e), e;
                }
            }),
            Symbol.asyncIterator,
            function () {
                return this;
            }
        ),
        o(i, 'return', function () {
            var e = this;
            return new Promise(function (n, r) {
                e[m].destroy(null, function (e) {
                    if (e) {
                        r(e);
                        return;
                    }
                    n(g(void 0, !0));
                });
            });
        }),
        i),
        b
    ),
    T = function (e) {
        var n,
            r = Object.create(
                I,
                (o((n = {}), m, {
                    value: e,
                    writable: !0
                }),
                o(n, c, {
                    value: null,
                    writable: !0
                }),
                o(n, d, {
                    value: null,
                    writable: !0
                }),
                o(n, f, {
                    value: null,
                    writable: !0
                }),
                o(n, p, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }),
                o(n, _, {
                    value: function (e, n) {
                        var i = r[m].read();
                        i ? ((r[h] = null), (r[c] = null), (r[d] = null), e(g(i, !1))) : ((r[c] = e), (r[d] = n));
                    },
                    writable: !0
                }),
                n)
            );
        return (
            (r[h] = null),
            u(e, function (e) {
                if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
                    var n = r[d];
                    null !== n && ((r[h] = null), (r[c] = null), (r[d] = null), n(e)), (r[f] = e);
                    return;
                }
                var i = r[c];
                null !== i && ((r[h] = null), (r[c] = null), (r[d] = null), i(g(void 0, !0))), (r[p] = !0);
            }),
            e.on('readable', v.bind(null, r)),
            r
        );
    };
e.exports = T;
