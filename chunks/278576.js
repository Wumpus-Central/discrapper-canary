l.d(t, { tR: () => o }), l(747238), l(896048), l(680155), l(323874), l(14289), l(35956);
var n = l(64700),
    r = l(960488),
    s = l(398590),
    a = l(976860),
    i = l(652215);
function o() {
    let { search: e } = (0, r.zy)(),
        t = (0, r.g)(),
        l = n.useMemo(() => new URLSearchParams(e), [e]).get("source"),
        o = null != l ? parseInt(l, 10) : null;
    return (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var l = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(l);
            "function" == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                    Object.getOwnPropertySymbols(l).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(l, e).enumerable;
                    }),
                )),
                n.forEach(function (t) {
                    var n;
                    (n = l[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (e[t] = n);
                });
        }
        return e;
    })(
        {
            onClose: n.useCallback(() => {
                if (0 === o) {
                    (0, a.aX)(), (0, s.id)(i.zgK.USER_SETTINGS);
                    return;
                }
                (0, a.EL)() ? (0, a.aX)() : (0, a.pX)(i.BVt.APP);
            }, [o]),
            source: o,
        },
        t,
    );
}
