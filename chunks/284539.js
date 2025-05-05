n.d(t, { Z: () => a });
var i = n(73800),
    r = n(442837),
    s = n(668826),
    l = n(120421);
function a(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getItemMetadata(e)),
        n = (0, i.useMemo)(() => (null != t ? t : {}), [t]),
        a = (0, i.useRef)(n);
    (0, i.useEffect)(() => {
        a.current = n;
    }, [n]);
    let o = (0, i.useCallback)(
        (t) => {
            (0, s.cn)(
                e,
                (function (e) {
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
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, a.current, t)
            );
        },
        [e]
    );
    return (0, i.useMemo)(() => [n, o], [n, o]);
}
