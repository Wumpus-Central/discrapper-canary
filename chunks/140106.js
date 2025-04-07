n.d(t, {
    ND: () => d,
    P5: () => p,
    es: () => h
});
var r = n(200651);
n(192379);
var i = n(347715),
    l = n(481060),
    o = n(668781),
    a = n(493683),
    s = n(346486),
    c = n(486324),
    u = n(388032);
let d = (e) =>
        (0, l.ZDy)(async () => {
            let { default: t } = await Promise.all([n.e('91689'), n.e('89289'), n.e('36016')]).then(n.bind(n, 28130));
            return (n) =>
                (0, r.jsx)(
                    t,
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
                            uploadType: c.pC.AVATAR,
                            showUpsellHeader: !1,
                            modalTitle: u.NW.string(u.t['6yrpFR']),
                            allowRecentAvatarsSelection: !1
                        },
                        n
                    )
                );
        }),
    p = (e) => {
        d((t) => {
            a.Z.setIcon(e, t.imageUri).catch(h);
        });
    },
    h = (e) => {
        var t;
        if ((null == e || null == (t = e.body) ? void 0 : t.retry_after) != null) {
            let t = (0, i.Z)(new Date(), e.body.retry_after);
            o.Z.show({
                title: u.NW.string(u.t['Whhv4+']),
                body: u.NW.format(u.t.VIJkAw, {
                    duration: (0, r.jsx)(s.Z, {
                        showUnits: !0,
                        deadline: t
                    })
                })
            });
        }
    };
