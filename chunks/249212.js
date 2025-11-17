n.d(t, { Z: () => _ });
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
function _(e) {
    var t;
    let { userId: n, width: _, avError: p, selected: h = !1, noArt: m = !1 } = e,
        g = null == (t = (0, s.hp)(p)) ? void 0 : t.errorCode;
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
        size: (0, c.L)(_),
        noArt: m,
        selected: h,
        description: d.intl.format(d.t.d486Wm, { helpUrl: l.Z.getArticleURL(u.BhN.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: g }),
        onCTAClick: E,
        callToAction: d.intl.string(d.t["hxmQ/e"]),
    });
}
