function r(e, t, n) {
    return (
        t in e
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
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = l(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function c(e, t) {
    if ('object' !== d(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' !== d(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
function u(e) {
    var t = c(e, 'string');
    return 'symbol' === d(t) ? t : String(t);
}
function d(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
n.d(t, {
    L3: () => p,
    W_: () => _,
    ZP: () => h
});
let f = (0, n(290486).U)(() => ({
        imgCache: {},
        toolsCache: {}
    })),
    _ = () => {
        let e = f;
        return {
            getImgCache: (t) => {
                if (null != t) return e.getState().imgCache[t];
            },
            setImgCache: (t, n, r) => {
                e.setState((e) => ({
                    imgCache: o(i({}, e.imgCache), {
                        [t]: {
                            animatedUrl: n,
                            staticUrl: r
                        }
                    })
                }));
            }
        };
    },
    p = () => {
        let e = f;
        return {
            toolsCache: e.getState().toolsCache,
            setToolsCache: (t, n, r) => {
                e.setState((e) => ({
                    toolsCache: o(i({}, e.toolsCache), {
                        [t]: {
                            url: n,
                            palette: r
                        }
                    })
                }));
            },
            removeToolsCache: (t) => {
                e.setState((e) => {
                    let {
                            toolsCache: { [t]: n }
                        } = e,
                        r = s(e.toolsCache, [t].map(u));
                    return {
                        imgCache: e.imgCache,
                        toolsCache: r
                    };
                });
            }
        };
    },
    h = f;
