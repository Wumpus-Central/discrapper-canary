n.d(t, { A: () => h });
var i = n(627968),
    r = n(459838),
    l = n(827343),
    s = n(37965),
    a = n(487329),
    o = n(975571),
    c = n(200749),
    u = n(652215),
    d = n(375708);
let A = n(745652);
function h(e) {
    let { userId: t, width: n, avError: h, selected: m = !1, noArt: g = !1 } = e,
        p = (0, a.B1)(h)?.errorCode;
    return (0, i.jsx)(c.A, {
        artURL: A,
        header: d.intl.string(d.t["z+mxvo"]),
        size: (0, c.J)(n),
        noArt: g,
        selected: m,
        description: d.intl.format(d.t.d486Wm, { helpUrl: o.A.getArticleURL(u.MVz.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: p }),
        onCTAClick: function () {
            (0, s.W)(r.x.DEFAULT, t),
                l.A.setDisableLocalVideo(t, u.bb8.DISABLED, r.x.DEFAULT, !1),
                setTimeout(() => {
                    l.A.setDisableLocalVideo(t, u.bb8.MANUAL_ENABLED, r.x.DEFAULT, !1);
                }, 1e3);
        },
        callToAction: d.intl.string(d.t["hxmQ/e"]),
    });
}
