n.d(t, {
    g: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(587895),
    a = n(851907);

function s(e) {
    let { applicationId: t, channelId: s, mediaUrl: o } = e,
        c = l.A.getApplication(t),
        u =
            null !=
            (0, a.Ay)({
                application: c,
                channelId: s,
            })
                ? i.KX8
                : i.SYi;
    (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("21743"), n.e("81078")]).then(n.bind(n, 190930));
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
                            mediaUrl: o,
                        },
                        n,
                    ),
                );
        },
        {
            modalKey: "activity-share-moment-modal",
            contextKey: u,
        },
    );
}
