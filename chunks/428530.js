n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var a = n(189223),
    l = n(692547),
    i = n(410030),
    o = n(95398),
    s = n(981631),
    c = n(941469);
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
    for (let [n, r] of Object.entries(e)) t[n] = r;
    return t;
}
let h = u(d),
    m = u(d);
function x(e) {
    return s.Jn9.test(e)
        ? (0, r.jsx)(o.Z, {
              type: o.Z.Types.TEXT,
              children: () => (0, r.jsx)(r.Fragment, { children: e })
          })
        : e;
}
function f(e) {
    let { data: t } = e,
        n = (0, i.ZP)();
    return (0, r.jsx)('div', {
        className: c.inspectorWrapper,
        children: (0, r.jsx)(a.L, {
            data: t,
            theme: 'light' === n ? m : h,
            invertTheme: !1,
            valueRenderer: x,
            shouldExpandNode: () => !0
        })
    });
}
