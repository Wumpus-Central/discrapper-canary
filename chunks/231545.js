a.d(t, { A: () => b });
var n = a(477900);
a(582128);
var r = a(940545),
    i = a(661531),
    l = a(736653),
    s = a(302031),
    o = a(652215),
    c = a(730441);
let u = {
    base00: i.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: i.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: i.A.colors.TEXT_DEFAULT.css,
    base08: i.A.colors.TEXT_MUTED.css,
    base09: i.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: i.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: i.A.colors.TEXT_BRAND.css,
};
function f(e) {
    let t = {};
    for (let [a, n] of Object.entries(e)) t[a] = n;
    return t;
}
let d = f(u),
    h = f(u);
function p(e) {
    return o.AKn.test(e) ? (0, n.jsx)(s.Ay, { type: s.Ay.Types.TEXT, children: () => e }) : e;
}
function b(e) {
    let { data: t } = e,
        a = (0, l.Ay)();
    return (0, n.jsx)("div", {
        className: c.H$,
        children: (0, n.jsx)(r.d, {
            data: t,
            theme: "light" === a ? h : d,
            invertTheme: !1,
            valueRenderer: p,
            shouldExpandNode: () => !0,
        }),
    });
}
