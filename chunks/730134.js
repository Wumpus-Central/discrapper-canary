"use strict";
n.d(t, { A: () => o });
var l = n(627968),
    i = n(64700),
    s = n(778712),
    a = n(97808),
    r = n(386467);
let o = i.memo(function (e) {
    var t;
    let { user: n, size: o = s._3.SIZE_32, animate: c = !1, "aria-hidden": u = !1, ...d } = e,
        h = i.useContext(r.A);
    return (0, l.jsx)(a.eu, {
        src: ((t = (0, s.FT)(o)), n.getAvatarURL(h, t, c)),
        size: o,
        "aria-label": u ? void 0 : n.username,
        "aria-hidden": u,
        ...d,
    });
});
