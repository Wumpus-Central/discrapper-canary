n.d(t, { Ay: () => m, WK: () => d, cr: () => u, j1: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(397927),
    r = n(375901),
    o = n(652215),
    c = n(982692);
function d(e) {
    let { locked: t = !1, channelType: n } = e,
        l = n === o.rbe.GUILD_VOICE || n === o.rbe.GUILD_STAGE_VOICE ? a.oyn : t ? a.I$d : a.N$i;
    return (0, i.jsx)("div", {
        className: s()(c.qk, c.tP),
        children: (0, i.jsx)(l, { color: a.LU0.colors.ICON_STRONG, size: "custom", width: 42, height: 42 }),
    });
}
function u(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(a.Heading, {
        "aria-hidden": "true",
        className: s()(n, c.wx),
        variant: "heading-xxl/extrabold",
        children: t,
    });
}
function h(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(a.Text, { variant: "text-md/normal", color: "none", className: s()(c.h_, n), children: t });
}
let m = function (e) {
    let { className: t, channelId: n, children: l, ...a } = e;
    return (0, i.jsx)("div", { className: s()(t, c.kL), id: (0, r.j)(n, n), ...a, children: l });
};
