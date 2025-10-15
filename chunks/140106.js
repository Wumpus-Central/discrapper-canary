n.d(t, {
    ND: () => p,
    P5: () => h,
    g6: () => f,
});
var i = n(951288);
n(647438);
var r = n(347715),
    l = n(481060),
    a = n(668781),
    o = n(493683),
    s = n(100527),
    c = n(346486),
    u = n(486324),
    d = n(388032);
let p = (e, t) =>
        (0, l.ZDy)(async () => {
            let { default: r } = await Promise.all([n.e("91689"), n.e("89289"), n.e("53488")]).then(n.bind(n, 28130));
            return (n) =>
                (0, i.jsx)(
                    r,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })(
                        {
                            maxFileSizeBytes: 8388608,
                            onComplete: e,
                            uploadType: u.pC.AVATAR,
                            showUpsellHeader: !1,
                            modalTitle: d.intl.string(d.t["6yrpFR"]),
                            analyticsLocation: s.Z.GROUP_DM_ICON_EDITOR,
                            analyticsLocations: t,
                            allowRecentAvatarsSelection: !1,
                        },
                        n,
                    ),
                );
        }),
    h = (e, t) => {
        p(
            (n) => {
                o.Z.setIcon(e, n.imageUri, t).catch(f);
            },
            [t],
        );
    },
    f = (e) => {
        var t;
        if ((null == e || null == (t = e.body) ? void 0 : t.retry_after) != null) {
            let t = (0, r.Z)(new Date(), e.body.retry_after);
            a.Z.show({
                title: d.intl.string(d.t.Whhv4w),
                body: d.intl.format(d.t.VIJkAy, {
                    duration: (0, i.jsx)(c.Z, {
                        showUnits: !0,
                        deadline: t,
                    }),
                }),
            });
        }
    };
