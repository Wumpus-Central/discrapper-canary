n.d(t, {
    ND: () => p,
    P5: () => h,
    es: () => m
});
var l = n(200651);
n(192379);
var r = n(347715),
    i = n(481060),
    o = n(668781),
    a = n(493683),
    c = n(100527),
    s = n(346486),
    u = n(486324),
    d = n(388032);
let p = (e, t) =>
        (0, i.ZDy)(async () => {
            let { default: r } = await Promise.all([n.e('91689'), n.e('89289'), n.e('78701')]).then(n.bind(n, 28130));
            return (n) =>
                (0, l.jsx)(
                    r,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })(
                        {
                            maxFileSizeBytes: 8388608,
                            onComplete: e,
                            uploadType: u.pC.AVATAR,
                            showUpsellHeader: !1,
                            modalTitle: d.intl.string(d.t['6yrpFR']),
                            analyticsLocation: c.Z.GROUP_DM_ICON_EDITOR,
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
                a.Z.setIcon(e, n.imageUri, t).catch(m);
            },
            [t]
        );
    },
    m = (e) => {
        var t;
        if ((null == e || null == (t = e.body) ? void 0 : t.retry_after) != null) {
            let t = (0, r.Z)(new Date(), e.body.retry_after);
            o.Z.show({
                title: d.intl.string(d.t['Whhv4+']),
                body: d.intl.format(d.t.VIJkAw, {
                    duration: (0, l.jsx)(s.Z, {
                        showUnits: !0,
                        deadline: t
                    })
                })
            });
        }
    };
