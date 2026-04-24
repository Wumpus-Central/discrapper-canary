"use strict";
n.d(t, { Ay: () => g, T4: () => p, XQ: () => m, Z5: () => _, ns: () => h });
var i,
    a = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(419354),
    c = n(661531),
    d = n(939249),
    u = n(295890);
function h(e) {
    let { scrollPosition: t } = e;
    return (0, a.jsx)(o.animated.div, { className: u.tB, style: { opacity: t?.to([0, 100], [0, 1]) } });
}
function p(e) {
    let { icon: t } = e;
    return (0, a.jsx)(t, { className: u.Kk, color: c.A.colors.TEXT_STRONG, size: "md" });
}
function m(e) {
    let { onClick: t, icon: n } = e;
    return (0, a.jsx)(d.D, {
        className: u.gb,
        onClick: t,
        children: (0, a.jsx)(n, { color: "currentColor", size: "sm" }),
    });
}
var _ = (((i = {}).OVERLAY = "overlay"), (i.RELATIVE = "relative"), i);
function g(e) {
    let { className: t, variant: n, children: i } = e,
        l = s.useMemo(() => ("overlay" === n ? u.Lw : u.V8), [n]);
    return (0, a.jsx)("div", { className: r()(u.jr, l, t), children: i });
}
