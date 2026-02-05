"use strict";
n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(725499);
function s(e) {
    let { user: t, nickname: n } = e,
        s = null != n;
    return (0, r.jsx)(i.euF, {
        src: t.getAvatarURL(void 0, s ? 16 : 24),
        size: s ? i._3J.SIZE_16 : i._3J.SIZE_24,
        className: s ? a.H : a.tM,
        "aria-hidden": !0,
    });
}
