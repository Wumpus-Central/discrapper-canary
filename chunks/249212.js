n.d(t, { Z: () => p });
var r = n(200651),
    i = n(46973),
    o = n(846027),
    a = n(785141),
    s = n(272395),
    l = n(878001),
    c = n(63063),
    u = n(112560),
    d = n(981631),
    f = n(388032);
let _ = n(66737);
function p(e) {
    var t;
    let { userId: n, width: p, avError: h, selected: m = !1, noArt: g = !1 } = e,
        { avErrorUIEnabled: E } = (0, s.JN)({ location: 'UserVideoFailed' }),
        b = null == (t = (0, a.hp)(h)) ? void 0 : t.errorCode;
    function y() {
        (0, l.w)(i.Yn.DEFAULT, n),
            o.Z.setDisableLocalVideo(n, d.ZUi.DISABLED, i.Yn.DEFAULT, !1),
            setTimeout(() => {
                o.Z.setDisableLocalVideo(n, d.ZUi.MANUAL_ENABLED, i.Yn.DEFAULT, !1);
            }, 1000);
    }
    return (0, r.jsx)(u.Z, {
        artURL: _,
        header: f.NW.string(f.t['z+mxvr']),
        size: (0, u.L)(p),
        noArt: g,
        selected: m,
        description: f.NW.format(f.t.d486Wl, { helpUrl: c.Z.getArticleURL(d.BhN.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: E ? f.NW.formatToPlainString(f.t['ejOT9/'], { errorCode: b }) : void 0,
        onCTAClick: y,
        callToAction: f.NW.string(f.t['hxmQ/f'])
    });
}
