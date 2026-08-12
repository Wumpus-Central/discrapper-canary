"use strict";
n.d(t, { d: () => E, j: () => h });
var i = n(477900);
n(582128);
var r = n(435558),
    a = n.n(r),
    s = n(807081),
    l = n(480084),
    o = n(29814),
    d = n(551965),
    c = n(703067);
let u = ["escape", "text", "strong", "em", "u", "url", "autolink"],
    _ = (0, d.A)([a().pick(o.Ay.RULES, u), (0, l.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    E = s.aV(_),
    A = (0, d.A)([
        a().pick(o.Ay.RULES, u),
        (0, l.A)({ enableBuildOverrides: !1 }),
        { link: { react: (e, t, n) => (0, i.jsx)("span", { className: c.p, children: t(e.content, n) }, n.key) } },
    ]),
    h = s.aV(A);
