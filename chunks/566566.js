n.d(t, { A: () => m });
var i = n(477900),
    r = n(205693),
    l = n(827343),
    s = n(37965),
    a = n(487329),
    o = n(975571),
    u = n(200749),
    c = n(652215),
    d = n(660183);
let h = n(745652);
function m(e) {
    let { userId: t, width: n, avError: m, selected: A = !1, noArt: E = !1 } = e,
        g = (0, a.B1)(m)?.errorCode;
    return (0, i.jsx)(u.A, {
        artURL: h,
        header: d.intl.string(d.t["z+mxvo"]),
        size: (0, u.J)(n),
        noArt: E,
        selected: A,
        description: d.intl.format(d.t.d486Wm, { helpUrl: o.A.getArticleURL(c.MVz.VOICE_VIDEO_TROUBLESHOOTING) }),
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
}
