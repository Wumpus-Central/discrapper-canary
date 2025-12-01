n.d(t, { Z: () => p });
var r = n(54381),
    i = n(46973),
    a = n(846027),
    o = n(878001),
    s = n(458725),
    l = n(63063),
    c = n(112560),
    u = n(981631),
    d = n(388032);
let f = n(66737);
function p(e) {
    var t;
    let { userId: n, width: p, avError: _, selected: m = !1, noArt: h = !1 } = e,
        g = null == (t = (0, s.hp)(_)) ? void 0 : t.errorCode;
    function E() {
        (0, o.w)(i.Yn.DEFAULT, n),
            a.Z.setDisableLocalVideo(n, u.ZUi.DISABLED, i.Yn.DEFAULT, !1),
            setTimeout(() => {
                a.Z.setDisableLocalVideo(n, u.ZUi.MANUAL_ENABLED, i.Yn.DEFAULT, !1);
            }, 1000);
    }
    return (0, r.jsx)(c.Z, {
        artURL: f,
        header: d.intl.string(d.t["z+mxvo"]),
        size: (0, c.L)(p),
        noArt: h,
        selected: m,
        description: d.intl.format(d.t.d486Wm, { helpUrl: l.Z.getArticleURL(u.BhN.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: g }),
        onCTAClick: E,
        callToAction: d.intl.string(d.t["hxmQ/e"]),
    });
}
