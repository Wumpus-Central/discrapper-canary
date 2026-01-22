n.d(t, { a: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(587895),
    a = n(851907);
function s(e) {
    let { applicationId: t, customId: s, linkId: o, message: c, onShare: u } = e,
        d = l.A.getApplication(t);
    if (null == d) return void u(!1, !1);
    let p = null != (0, a.LU)({ applicationId: d.id }) ? i.KX8 : i.SYi,
        f = !1;
    function h(e) {
        u(e, f);
    }
    function A() {
        f = !0;
    }
    (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("48587").then(n.bind(n, 824774));
            return (n) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
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
                            applicationId: t,
                            customId: s,
                            linkId: o,
                            message: c,
                            onCopyLink: A,
                            onShare: h,
                        },
                        n,
                    ),
                );
        },
        {
            modalKey: "activity-share-moment-modal",
            contextKey: p,
            onCloseCallback: () => {
                u(!1, f);
            },
        },
    );
}
