"use strict";
n.d(t, { A: () => o });
var i = n(477900),
    r = n(582128),
    a = n(778712),
    s = n(97808),
    l = n(386467);
let o = r.memo(function (e) {
    var t;
    let { user: n, size: o = a._3.SIZE_32, animate: d = !1, "aria-hidden": c = !1, ...u } = e,
        _ = r.useContext(l.A);
    return (0, i.jsx)(s.eu, {
        src: ((t = (0, a.FT)(o)), n.getAvatarURL(_, t, d)),
        size: o,
        "aria-label": c ? void 0 : n.username,
        "aria-hidden": c,
        ...u,
    });
});
