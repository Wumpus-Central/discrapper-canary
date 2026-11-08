var i = n(477900),
    r = n(205693),
    l = n(827343),
    s = n(37965),
    a = n(487329),
    o = n(975571),
    c = n(200749),
    u = n(652215),
    d = n(792996);
let m = n(745652);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { userId: t, width: n, avError: h, selected: g = !1, noArt: f = !1 } = e,
                p = (0, a.B1)(h)?.errorCode;
            return (0, i.jsx)(c.A, {
                artURL: m,
                header: d.intl.string(d.t["z+mxvo"]),
                size: (0, c.J)(n),
                noArt: f,
                selected: g,
                description: d.intl.format(d.t.d486Wm, {
                    helpUrl: o.A.getArticleURL(u.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                }),
                errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: p }),
                onCTAClick: function () {
                    ((0, s.W)(r.x.DEFAULT, t),
                        l.default.setDisableLocalVideo(t, u.bb8.DISABLED, r.x.DEFAULT, !1),
                        setTimeout(() => {
                            l.default.setDisableLocalVideo(t, u.bb8.MANUAL_ENABLED, r.x.DEFAULT, !1);
                        }, 1e3));
                },
                callToAction: d.intl.string(d.t["hxmQ/e"]),
            });
        },
    },
);
