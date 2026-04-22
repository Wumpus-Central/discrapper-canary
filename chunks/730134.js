"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(778712),
    r = n(97808),
    a = n(386467);
let o = l.memo(function (e) {
    var t;
    let { user: n, size: o = s._3.SIZE_32, animate: c = !1, "aria-hidden": u = !1, ...d } = e,
        h = l.useContext(a.A);
    return (0, i.jsx)(r.eu, {
        src: ((t = (0, s.FT)(o)), n.getAvatarURL(h, t, c)),
        size: o,
        "aria-label": u ? void 0 : n.username,
        "aria-hidden": u,
        ...d,
    });
});
