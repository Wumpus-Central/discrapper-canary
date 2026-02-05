"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(205693),
    a = n(827343),
    s = n(37965),
    o = n(709710),
    l = n(975571),
    u = n(200749),
    c = n(652215),
    d = n(985018);
let _ = n(745652);
function f(e) {
    let { userId: t, width: n, avError: f, selected: p = !1, noArt: h = !1 } = e,
        m = (0, o.B1)(f)?.errorCode;
    function g() {
        (0, s.W)(i.x.DEFAULT, t),
            a.A.setDisableLocalVideo(t, c.bb8.DISABLED, i.x.DEFAULT, !1),
            setTimeout(() => {
                a.A.setDisableLocalVideo(t, c.bb8.MANUAL_ENABLED, i.x.DEFAULT, !1);
            }, 1e3);
    }
    return (0, r.jsx)(u.A, {
        artURL: _,
        header: d.intl.string(d.t["z+mxvo"]),
        size: (0, u.J)(n),
        noArt: h,
        selected: p,
        description: d.intl.format(d.t.d486Wm, { helpUrl: l.A.getArticleURL(c.MVz.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: m }),
        onCTAClick: g,
        callToAction: d.intl.string(d.t["hxmQ/e"]),
    });
}
