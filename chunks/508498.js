n.d(t, { Db: () => o }), n(35282), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(473749),
    l = n(828700),
    i = n(37234),
    a = n(703656),
    s = n(981631);
function o() {
    let { search: e } = (0, l.TH)(),
        t = (0, l.UO)(),
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
                    (0, a.op)(), (0, i.jN)(s.S9g.USER_SETTINGS);
                    return;
                }
                if ((0, a.uv)()) return void (0, a.op)();
                (0, a.uL)(s.Z5c.APP);
            }, [o]),
            source: o,
        },
        t,
    );
}
