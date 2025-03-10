function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function i(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function s(e) {
    var t = (function (e, t) {
        if ('object' !== a(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== a(r)) return r;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === a(t) ? t : String(t);
}
function a(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
n.d(t, {
    L3: () => c,
    W_: () => o,
    ZP: () => d
});
let l = (0, n(15729).U)(() => ({
        imgCache: {},
        toolsCache: {}
    })),
    o = () => ({
        getImgCache: (e) => {
            if (null != e) return l.getState().imgCache[e];
        },
        setImgCache: (e, t, n) => {
            l.setState((s) => ({
                imgCache: i(r({}, s.imgCache), {
                    [e]: {
                        animatedUrl: t,
                        staticUrl: n
                    }
                })
            }));
        }
    }),
    c = () => ({
        toolsCache: l.getState().toolsCache,
        setToolsCache: (e, t, n) => {
            l.setState((s) => ({
                toolsCache: i(r({}, s.toolsCache), {
                    [e]: {
                        url: t,
                        palette: n
                    }
                })
            }));
        },
        removeToolsCache: (e) => {
            l.setState((t) => {
                let {
                        toolsCache: { [e]: n }
                    } = t,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(t.toolsCache, [e].map(s));
                return {
                    imgCache: t.imgCache,
                    toolsCache: r
                };
            });
        }
    }),
    d = l;
