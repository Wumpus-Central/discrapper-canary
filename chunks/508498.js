(r.d(t, { Db: () => s }), r(35282), r(65234), r(111804), r(490233), r(97749), r(388685));
var n = r(73800),
    l = r(114858),
    i = r(37234),
    o = r(703656),
    a = r(981631);
function s() {
    let { search: e } = (0, l.TH)(),
        t = (0, l.UO)(),
        r = n.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        s = null != r ? parseInt(r, 10) : null;
    return (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            ('function' == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                    Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })
                )),
                n.forEach(function (t) {
                    var n;
                    ((n = r[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = n));
                }));
        }
        return e;
    })(
        {
            onClose: n.useCallback(() => {
                if (0 === s) {
                    ((0, o.op)(), (0, i.jN)(a.S9g.USER_SETTINGS));
                    return;
                }
                if ((0, o.uv)()) return void (0, o.op)();
                (0, o.uL)(a.Z5c.APP);
            }, [s]),
            source: s
        },
        t
    );
}
