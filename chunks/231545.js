a.d(t, { A: () => x });
var n = a(627968);
a(64700);
var l = a(92653),
    i = a(827734),
    s = a(736653),
    r = a(302031),
    o = a(652215),
    d = a(505206);
let c = {
    base00: i.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: i.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: i.A.colors.TEXT_DEFAULT.css,
    base08: i.A.colors.TEXT_MUTED.css,
    base09: i.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: i.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: i.A.colors.TEXT_BRAND.css,
};
function u(e) {
    let t = {};
    for (let [a, n] of Object.entries(e)) t[a] = n;
    return t;
}
let m = u(c),
    h = u(c);
function p(e) {
    return o.AKn.test(e) ? (0, n.jsx)(r.Ay, { type: r.Ay.Types.TEXT, children: () => e }) : e;
}
function x(e) {
    let { data: t } = e,
        a = (0, s.Ay)();
    return (0, n.jsx)("div", {
        className: d.H$,
        children: (0, n.jsx)(l.d, {
            data: t,
            theme: "light" === a ? h : m,
            invertTheme: !1,
            valueRenderer: p,
            shouldExpandNode: () => !0,
        }),
    });
}
