n.d(t, {
    F5: () => f,
    XA: () => h,
    jv: () => p,
});
var r = n(627968);
n(64700);
var l = n(653922),
    i = n(397927),
    a = n(157559),
    s = n(308528),
    o = n(793574),
    c = n(576470),
    u = n(339984),
    d = n(985018);
let f = (e, t) =>
        (0, i.mMO)(async () => {
            let { default: l } = await Promise.all([n.e("79149"), n.e("53653"), n.e("92812")]).then(n.bind(n, 551028));
            return (n) =>
                (0, r.jsx)(
                    l,
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
                            maxFileSizeBytes: 8388608,
                            onComplete: e,
                            uploadType: u.HL.AVATAR,
                            showUpsellHeader: !1,
                            modalTitle: d.intl.string(d.t["6yrpFR"]),
                            analyticsLocation: o.A.GROUP_DM_ICON_EDITOR,
                            analyticsLocations: t,
                            allowRecentAvatarsSelection: !1,
                        },
                        n,
                    ),
                );
        }),
    p = (e, t) => {
        f(
            (n) => {
                s.A.setIcon(e, n.imageUri, t).catch(h);
            },
            [t],
        );
    },
    h = (e) => {
        var t;
        if ((null == e || null == (t = e.body) ? void 0 : t.retry_after) != null) {
            let t = (0, l.A)(new Date(), e.body.retry_after);
            a.A.show({
                title: d.intl.string(d.t.Whhv4w),
                body: d.intl.format(d.t.VIJkAy, {
                    duration: (0, r.jsx)(c.A, {
                        showUnits: !0,
                        deadline: t,
                    }),
                }),
            });
        }
    };
