"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    r = n(459838),
    s = n(827343),
    a = n(37965),
    o = n(487329),
    l = n(975571),
    u = n(200749),
    c = n(652215),
    d = n(375708);
let _ = n(745652);
function h(e) {
    let { userId: t, width: n, avError: h, selected: f = !1, noArt: p = !1 } = e,
        E = (0, o.B1)(h)?.errorCode;
    return (0, i.jsx)(u.A, {
        artURL: _,
        header: d.intl.string(d.t["z+mxvo"]),
        size: (0, u.J)(n),
        noArt: p,
        selected: f,
        description: d.intl.format(d.t.d486Wm, { helpUrl: l.A.getArticleURL(c.MVz.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: E }),
        onCTAClick: function () {
            (0, a.W)(r.x.DEFAULT, t),
                s.A.setDisableLocalVideo(t, c.bb8.DISABLED, r.x.DEFAULT, !1),
                setTimeout(() => {
                    s.A.setDisableLocalVideo(t, c.bb8.MANUAL_ENABLED, r.x.DEFAULT, !1);
                }, 1e3);
        },
        callToAction: d.intl.string(d.t["hxmQ/e"]),
    });
}
