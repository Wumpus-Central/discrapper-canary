"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(97808),
    s = n(778712),
    a = n(151900);
function o(e) {
    let { user: t, nickname: n } = e,
        o = null != n;
    return (0, r.jsx)(i.eu, {
        src: t.getAvatarURL(void 0, o ? 16 : 24),
        size: o ? s._3.SIZE_16 : s._3.SIZE_24,
        className: o ? a.H : a.tM,
        "aria-hidden": !0,
    });
}
