var e = t(477900);
t(582128);
var i = t(28863),
    u = t(834730),
    a = t(211824),
    c = t(701256),
    d = t(792996);
function o(n, r) {
    return (0, e.jsx)(i.Anchor, { href: a.j, children: n }, r);
}
function s() {
    return d.intl.format(c.default.y2YmJv, { nonPremiumEndDate: a.Fg, premiumEndDate: a.zv, learnMoreHook: o });
}
t.d(
    r,
    {},
    {
        A: function (n) {
            let { variant: r = "body-sm/normal" } = n;
            return (0, e.jsx)(u.E, { variant: r, color: "text-muted", children: s() });
        },
        R: s,
    },
);
