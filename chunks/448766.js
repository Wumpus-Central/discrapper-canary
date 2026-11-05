var i = t(477900);
t(582128);
var n = t(435558),
    l = t.n(n),
    s = t(826059),
    r = t(862316),
    c = t(605275),
    o = t(551965),
    d = t(268246);
let u = ["escape", "text", "strong", "em", "u", "url", "autolink"],
    m = (0, o.A)([l().pick(c.Ay.RULES, u), (0, r.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    p = s.aV(m),
    g = (0, o.A)([
        l().pick(c.Ay.RULES, u),
        (0, r.Ay)({ enableBuildOverrides: !1 }),
        { link: { react: (e, a, t) => (0, i.jsx)("span", { className: d.p, children: a(e.content, t) }, t.key) } },
    ]),
    h = s.aV(g);
t.d(a, {}, { d: p, j: h });
