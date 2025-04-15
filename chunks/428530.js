n.d(t, { Z: () => p }), n(388685), n(35282);
var a = n(200651);
n(192379);
var r = n(189223),
    l = n(692547),
    i = n(410030),
    s = n(95398),
    o = n(981631),
    c = n(616257);
let d = {
    base00: l.Z.colors.BACKGROUND_SECONDARY.css,
    base03: l.Z.colors.TEXT_WARNING.css,
    base07: l.Z.colors.TEXT_NORMAL.css,
    base08: l.Z.colors.TEXT_MUTED.css,
    base09: l.Z.colors.TEXT_POSITIVE.css,
    base0B: l.Z.colors.TEXT_WARNING.css,
    base0D: l.Z.colors.TEXT_BRAND.css
};
function u(e) {
    let t = {};
    for (let [n, a] of Object.entries(e)) t[n] = a;
    return t;
}
let m = u(d),
    x = u(d);
function h(e) {
    return o.Jn9.test(e)
        ? (0, a.jsx)(s.ZP, {
              type: s.ZP.Types.TEXT,
              children: () => e
          })
        : e;
}
function p(e) {
    let { data: t } = e,
        n = (0, i.ZP)();
    return (0, a.jsx)('div', {
        className: c.inspectorWrapper,
        children: (0, a.jsx)(r.L, {
            data: t,
            theme: 'light' === n ? x : m,
            invertTheme: !1,
            valueRenderer: h,
            shouldExpandNode: () => !0
        })
    });
}
