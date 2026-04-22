"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(205693),
    s = n(827343),
    a = n(37965),
    o = n(487329),
    l = n(975571),
    u = n(200749),
    d = n(652215),
    c = n(985018);
let _ = n(745652);
function f(e) {
    let { userId: t, width: n, avError: f, selected: E = !1, noArt: h = !1 } = e,
        p = (0, o.B1)(f)?.errorCode;
    return (0, r.jsx)(u.A, {
        artURL: _,
        header: c.intl.string(c.t["z+mxvo"]),
        size: (0, u.J)(n),
        noArt: h,
        selected: E,
        description: c.intl.format(c.t.d486Wm, { helpUrl: l.A.getArticleURL(d.MVz.VOICE_VIDEO_TROUBLESHOOTING) }),
        errorCodeMessage: c.intl.formatToPlainString(c.t.ejOT95, { errorCode: p }),
        onCTAClick: function () {
            (0, a.W)(i.x.DEFAULT, t),
                s.A.setDisableLocalVideo(t, d.bb8.DISABLED, i.x.DEFAULT, !1),
                setTimeout(() => {
                    s.A.setDisableLocalVideo(t, d.bb8.MANUAL_ENABLED, i.x.DEFAULT, !1);
                }, 1e3);
        },
        callToAction: c.intl.string(c.t["hxmQ/e"]),
    });
}
