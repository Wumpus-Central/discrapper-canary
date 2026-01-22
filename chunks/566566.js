n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(205693),
    a = n(827343),
    s = n(37965),
    o = n(487329),
    l = n(975571),
    c = n(200749),
    u = n(652215),
    d = n(985018);
let f = n(745652);

function p(e) {
    var t;
    let { userId: n, width: p, avError: _, selected: h = !1, noArt: m = !1 } = e,
        g = null == (t = (0, o.B1)(_)) ? void 0 : t.errorCode;

    function E() {
        (0, s.W)(i.x.DEFAULT, n),
            a.A.setDisableLocalVideo(n, u.bb8.DISABLED, i.x.DEFAULT, !1),
            setTimeout(() => {
                a.A.setDisableLocalVideo(n, u.bb8.MANUAL_ENABLED, i.x.DEFAULT, !1);
            }, 1e3);
    }
    return (0, r.jsx)(c.A, {
        artURL: f,
        header: d.intl.string(d.t["z+mxvo"]),
        size: (0, c.J)(p),
        noArt: m,
        selected: h,
        description: d.intl.format(d.t.d486Wm, {
            helpUrl: l.A.getArticleURL(u.MVz.VOICE_VIDEO_TROUBLESHOOTING),
        }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, {
            errorCode: g,
        }),
        onCTAClick: E,
        callToAction: d.intl.string(d.t["hxmQ/e"]),
    });
}
