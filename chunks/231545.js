n.d(t, {
    A: () => f,
}),
    n(896048),
    n(747238);
var a = n(627968);
n(64700);
var l = n(92653),
    i = n(827734),
    r = n(736653),
    s = n(302031),
    o = n(652215),
    c = n(661251);
let d = {
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
    for (let [n, a] of Object.entries(e)) t[n] = a;
    return t;
}
let m = u(d),
    p = u(d);

function h(e) {
    return o.AKn.test(e)
        ? (0, a.jsx)(s.Ay, {
              type: s.Ay.Types.TEXT,
              children: () => e,
          })
        : e;
}

function f(e) {
    let { data: t } = e,
        n = (0, r.Ay)();
    return (0, a.jsx)("div", {
        className: c.H$,
        children: (0, a.jsx)(l.d, {
            data: t,
            theme: "light" === n ? p : m,
            invertTheme: !1,
            valueRenderer: h,
            shouldExpandNode: () => !0,
        }),
    });
}
