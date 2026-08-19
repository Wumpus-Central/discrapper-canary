"use strict";
n.d(t, { A: () => o });
var l = n(477900),
    i = n(582128),
    s = n(778712),
    r = n(97808),
    a = n(386467);
let o = i.memo(function (e) {
    var t;
    let { user: n, size: o = s._3.SIZE_32, animate: u = !1, "aria-hidden": c = !1, ...d } = e,
        h = i.useContext(a.A);
    return (0, l.jsx)(r.eu, {
        src: ((t = (0, s.FT)(o)), n.getAvatarURL(h, t, u)),
        size: o,
        "aria-label": c ? void 0 : n.username,
        "aria-hidden": c,
        ...d,
    });
});
