a.d(t, { A: () => b });
var r = a(627968);
a(64700);
var n = a(788806),
    i = a(661531),
    l = a(736653),
    s = a(302031),
    o = a(652215),
    c = a(505206);
let u = {
    base00: i.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: i.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: i.A.colors.TEXT_DEFAULT.css,
    base08: i.A.colors.TEXT_MUTED.css,
    base09: i.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: i.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: i.A.colors.TEXT_BRAND.css,
};
function d(e) {
    let t = {};
    for (let [a, r] of Object.entries(e)) t[a] = r;
    return t;
}
let f = d(u),
    h = d(u);
function p(e) {
    return o.AKn.test(e) ? (0, r.jsx)(s.Ay, { type: s.Ay.Types.TEXT, children: () => e }) : e;
}
function b(e) {
    let { data: t } = e,
        a = (0, l.Ay)();
    return (0, r.jsx)("div", {
        className: c.H$,
        children: (0, r.jsx)(n.d, {
            data: t,
            theme: "light" === a ? h : f,
            invertTheme: !1,
            valueRenderer: p,
            shouldExpandNode: () => !0,
        }),
    });
}
