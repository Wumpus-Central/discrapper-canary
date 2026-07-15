"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(459838),
    a = n(827343),
    s = n(37965),
    l = n(487329),
    o = n(975571),
    d = n(200749),
    c = n(652215),
    u = n(375708);
let _ = n(745652);
function E(e) {
    let { userId: t, width: n, avError: E, selected: A = !1, noArt: h = !1 } = e,
        I = (0, l.B1)(E)?.errorCode;
    return (0, i.jsx)(d.A, {
        artURL: _,
        header: u.intl.string(u.t["z+mxvo"]),
        size: (0, d.J)(n),
        noArt: h,
        selected: A,
        description: u.intl.format(u.t.d486Wm, { helpUrl: o.A.getArticleURL(c.MVz.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: u.intl.formatToPlainString(u.t.ejOT95, { errorCode: I }),
        onCTAClick: function () {
            (0, s.W)(r.x.DEFAULT, t),
                a.A.setDisableLocalVideo(t, c.bb8.DISABLED, r.x.DEFAULT, !1),
                setTimeout(() => {
                    a.A.setDisableLocalVideo(t, c.bb8.MANUAL_ENABLED, r.x.DEFAULT, !1);
                }, 1e3);
        },
        callToAction: u.intl.string(u.t["hxmQ/e"]),
    });
}
