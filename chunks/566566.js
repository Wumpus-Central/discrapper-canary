n.d(t, { A: () => h });
var i = n(477900),
    r = n(205693),
    l = n(827343),
    s = n(37965),
    a = n(487329),
    o = n(975571),
    u = n(200749),
    c = n(652215),
    d = n(105292);
let m = n(745652);
function h(e) {
    let { userId: t, width: n, avError: h, selected: g = !1, noArt: f = !1 } = e,
        A = (0, a.B1)(h)?.errorCode;
    return (0, i.jsx)(u.A, {
        artURL: m,
        header: d.intl.string(d.t["z+mxvo"]),
        size: (0, u.J)(n),
        noArt: f,
        selected: g,
        description: d.intl.format(d.t.d486Wm, { helpUrl: o.A.getArticleURL(c.MVz.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: A }),
        onCTAClick: function () {
            ((0, s.W)(r.x.DEFAULT, t),
                l.default.setDisableLocalVideo(t, c.bb8.DISABLED, r.x.DEFAULT, !1),
                setTimeout(() => {
                    l.default.setDisableLocalVideo(t, c.bb8.MANUAL_ENABLED, r.x.DEFAULT, !1);
                }, 1e3));
        },
        callToAction: d.intl.string(d.t["hxmQ/e"]),
    });
}
