n.d(t, { A: () => A });
var i = n(477900),
    r = n(459838),
    l = n(827343),
    s = n(37965),
    a = n(487329),
    o = n(975571),
    c = n(200749),
    u = n(652215),
    d = n(375708);
let h = n(745652);
function A(e) {
    let { userId: t, width: n, avError: A, selected: m = !1, noArt: g = !1 } = e,
        f = (0, a.B1)(A)?.errorCode;
    return (0, i.jsx)(c.A, {
        artURL: h,
        header: d.intl.string(d.t["z+mxvo"]),
        size: (0, c.J)(n),
        noArt: g,
        selected: m,
        description: d.intl.format(d.t.d486Wm, { helpUrl: o.A.getArticleURL(u.MVz.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: f }),
        onCTAClick: function () {
            ((0, s.W)(r.x.DEFAULT, t),
                l.A.setDisableLocalVideo(t, u.bb8.DISABLED, r.x.DEFAULT, !1),
                setTimeout(() => {
                    l.A.setDisableLocalVideo(t, u.bb8.MANUAL_ENABLED, r.x.DEFAULT, !1);
                }, 1e3));
        },
        callToAction: d.intl.string(d.t["hxmQ/e"]),
    });
}
