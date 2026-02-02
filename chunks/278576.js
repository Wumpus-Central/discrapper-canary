n.d(t, {
    tR: () => o,
}),
    n(747238),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(64700),
    l = n(960488),
    s = n(976860),
    a = n(840065),
    i = n(652215);

function o() {
    let { search: e } = (0, l.zy)(),
        t = (0, l.g)(),
        n = r.useMemo(() => new URLSearchParams(e), [e]).get("source"),
        o = null != n ? parseInt(n, 10) : null;
    return (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    }),
                )),
                r.forEach(function (t) {
                    var r;
                    (r = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (e[t] = r);
                });
        }
        return e;
    })(
        {
            onClose: r.useCallback(() => {
                if (0 === o) {
                    (0, s.aX)(), (0, a.openUserSettings)();
                    return;
                }
                (0, s.EL)() ? (0, s.aX)() : (0, s.pX)(i.BVt.APP);
            }, [o]),
            source: o,
        },
        t,
    );
}
