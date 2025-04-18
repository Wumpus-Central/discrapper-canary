n.d(t, {
    ND: () => p,
    P5: () => h,
    es: () => f
});
var r = n(200651);
n(192379);
var i = n(347715),
    l = n(481060),
    o = n(668781),
    a = n(493683),
    s = n(100527),
    c = n(346486),
    u = n(486324),
    d = n(388032);
let p = (e, t) =>
        (0, l.ZDy)(async () => {
            let { default: i } = await Promise.all([n.e('91689'), n.e('89289'), n.e('36016')]).then(n.bind(n, 28130));
            return (n) =>
                (0, r.jsx)(
                    i,
                    (function (e) {
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
                            maxFileSizeBytes: 8388608,
                            onComplete: e,
                            uploadType: u.pC.AVATAR,
                            showUpsellHeader: !1,
                            modalTitle: d.NW.string(d.t['6yrpFR']),
                            analyticsLocation: s.Z.GROUP_DM_ICON_EDITOR,
                            analyticsLocations: t,
                            allowRecentAvatarsSelection: !1
                        },
                        n
                    )
                );
        }),
    h = (e, t) => {
        p(
            (n) => {
                a.Z.setIcon(e, n.imageUri, t).catch(f);
            },
            [t]
        );
    },
    f = (e) => {
        var t;
        if ((null == e || null == (t = e.body) ? void 0 : t.retry_after) != null) {
            let t = (0, i.Z)(new Date(), e.body.retry_after);
            o.Z.show({
                title: d.NW.string(d.t['Whhv4+']),
                body: d.NW.format(d.t.VIJkAw, {
                    duration: (0, r.jsx)(c.Z, {
                        showUnits: !0,
                        deadline: t
                    })
                })
            });
        }
    };
