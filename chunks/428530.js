n.d(t, { Z: () => x }), n(388685), n(35282);
var a = n(951288);
n(647438);
var i = n(805203),
    r = n(692547),
    l = n(410030),
    s = n(411405),
    o = n(981631),
    c = n(451429);
let d = {
    base00: r.Z.colors.BACKGROUND_BASE_LOWER.css,
    base03: r.Z.colors.TEXT_FEEDBACK_WARNING.css,
    base07: r.Z.colors.TEXT_DEFAULT.css,
    base08: r.Z.colors.TEXT_MUTED.css,
    base09: r.Z.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: r.Z.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: r.Z.colors.TEXT_BRAND.css,
};
function u(e) {
    let t = {};
    for (let [n, a] of Object.entries(e)) t[n] = a;
    return t;
}
let m = u(d),
    p = u(d);
function h(e) {
    return o.Jn9.test(e)
        ? (0, a.jsx)(s.ZP, {
              type: s.ZP.Types.TEXT,
              children: () => e,
          })
        : e;
}
function x(e) {
    let { data: t } = e,
        n = (0, l.ZP)();
    return (0, a.jsx)("div", {
        className: c.inspectorWrapper,
        children: (0, a.jsx)(i.L, {
            data: t,
            theme: "light" === n ? p : m,
            invertTheme: !1,
            valueRenderer: h,
            shouldExpandNode: () => !0,
        }),
    });
}
