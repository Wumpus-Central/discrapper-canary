n.d(t, { Z: () => p }), n(47120);
var a = n(200651);
n(192379);
var l = n(189223),
    r = n(692547),
    i = n(410030),
    o = n(95398),
    s = n(981631),
    c = n(941469);
let d = {
    base00: r.Z.colors.BACKGROUND_SECONDARY.css,
    base03: r.Z.colors.TEXT_WARNING.css,
    base07: r.Z.colors.TEXT_NORMAL.css,
    base08: r.Z.colors.TEXT_MUTED.css,
    base09: r.Z.colors.TEXT_POSITIVE.css,
    base0B: r.Z.colors.TEXT_WARNING.css,
    base0D: r.Z.colors.TEXT_BRAND.css
};
function u(e) {
    let t = {};
    for (let [n, a] of Object.entries(e)) t[n] = a;
    return t;
}
let m = u(d),
    h = u(d);
function x(e) {
    return s.Jn9.test(e)
        ? (0, a.jsx)(o.Z, {
              type: o.Z.Types.TEXT,
              children: () => (0, a.jsx)(a.Fragment, { children: e })
          })
        : e;
}
function p(e) {
    let { data: t } = e,
        n = (0, i.ZP)();
    return (0, a.jsx)('div', {
        className: c.inspectorWrapper,
        children: (0, a.jsx)(l.L, {
            data: t,
            theme: 'light' === n ? h : m,
            invertTheme: !1,
            valueRenderer: x,
            shouldExpandNode: () => !0
        })
    });
}
