var i = n(477900),
    r = n(205693),
    l = n(827343),
    s = n(37965),
    a = n(487329),
    o = n(975571),
    u = n(200749),
    c = n(652215),
    d = n(792996);
let h = n(745652);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { userId: t, width: n, avError: m, selected: f = !1, noArt: p = !1 } = e,
                g = (0, a.B1)(m)?.errorCode;
            return (0, i.jsx)(u.A, {
                artURL: h,
                header: d.intl.string(d.t["z+mxvo"]),
                size: (0, u.J)(n),
                noArt: p,
                selected: f,
                description: d.intl.format(d.t.d486Wm, {
                    helpUrl: o.A.getArticleURL(c.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                }),
                errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: g }),
                onCTAClick: function () {
                    ((0, s.W)(r.x.DEFAULT, t),
                        l.default.setDisableLocalVideo(t, c.bb8.DISABLED, r.x.DEFAULT, !1),
                        setTimeout(() => {
                            l.default.setDisableLocalVideo(t, c.bb8.MANUAL_ENABLED, r.x.DEFAULT, !1);
                        }, 1e3));
                },
                callToAction: d.intl.string(d.t["hxmQ/e"]),
            });
        },
    },
);
