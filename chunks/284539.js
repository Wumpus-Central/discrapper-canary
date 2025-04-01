n.d(t, { Z: () => o });
var r = n(192379),
    i = n(442837),
    s = n(668826),
    a = n(120421);
function o(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getItemMetadata(e)),
        n = (0, r.useMemo)(() => (null != t ? t : {}), [t]),
        o = (0, r.useRef)(n);
    (0, r.useEffect)(() => {
        o.current = n;
    }, [n]);
    let l = (0, r.useCallback)(
        (t) => {
            (0, s.cn)(
                e,
                (function (e) {
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
                })({}, o.current, t)
            );
        },
        [e]
    );
    return (0, r.useMemo)(() => [n, l], [n, l]);
}
