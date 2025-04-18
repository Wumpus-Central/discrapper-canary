n.d(t, { Db: () => s }), n(35282), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(192379),
    l = n(512969),
    a = n(37234),
    i = n(703656),
    o = n(981631);
function s() {
    let { search: e } = (0, l.TH)(),
        t = (0, l.UO)(),
        n = r.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        s = null != n ? parseInt(n, 10) : null;
    return (function (e) {
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
    })(
        {
            onClose: r.useCallback(() => {
                if (0 === s) {
                    (0, i.op)(), (0, a.jN)(o.S9g.USER_SETTINGS);
                    return;
                }
                if ((0, i.uv)()) return void (0, i.op)();
                (0, i.uL)(o.Z5c.APP);
            }, [s]),
            source: s
        },
        t
    );
}
