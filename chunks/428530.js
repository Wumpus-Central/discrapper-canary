(a.d(t, { Z: () => h }), a(388685), a(35282));
var n = a(255367);
a(73800);
var r = a(404905),
    l = a(692547),
    i = a(410030),
    s = a(95398),
    o = a(981631),
    c = a(616257);
let d = {
    base00: l.Z.colors.BACKGROUND_BASE_LOWER.css,
    base03: l.Z.colors.TEXT_FEEDBACK_WARNING.css,
    base07: l.Z.colors.TEXT_DEFAULT.css,
    base08: l.Z.colors.TEXT_MUTED.css,
    base09: l.Z.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: l.Z.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: l.Z.colors.TEXT_BRAND.css
};
function u(e) {
    let t = {};
    for (let [a, n] of Object.entries(e)) t[a] = n;
    return t;
}
let m = u(d),
    x = u(d);
function p(e) {
    return o.Jn9.test(e)
        ? (0, n.jsx)(s.ZP, {
              type: s.ZP.Types.TEXT,
              children: () => e
          })
        : e;
}
function h(e) {
    let { data: t } = e,
        a = (0, i.ZP)();
    return (0, n.jsx)('div', {
        className: c.inspectorWrapper,
        children: (0, n.jsx)(r.L, {
            data: t,
            theme: 'light' === a ? x : m,
            invertTheme: !1,
            valueRenderer: p,
            shouldExpandNode: () => !0
        })
    });
}
