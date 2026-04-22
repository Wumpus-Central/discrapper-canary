n.d(t, { Ay: () => f, WK: () => g, cr: () => p, j1: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(534890),
    r = n(770880),
    o = n(276293),
    c = n(827734),
    d = n(534514),
    u = n(834730),
    h = n(375901),
    m = n(652215),
    A = n(564052);
function g(e) {
    let { locked: t = !1, channelType: n } = e,
        l = n === m.rbe.GUILD_VOICE || n === m.rbe.GUILD_STAGE_VOICE ? s.o : t ? r.I : o.N;
    return (0, i.jsx)("div", {
        className: a()(A.qk, A.tP),
        children: (0, i.jsx)(l, { color: c.A.colors.ICON_STRONG, size: "custom", width: 42, height: 42 }),
    });
}
function p(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(d.D, {
        "aria-hidden": "true",
        className: a()(n, A.wx),
        variant: "heading-xxl/extrabold",
        children: t,
    });
}
function _(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(u.E, { variant: "text-md/normal", color: "none", className: a()(A.h_, n), children: t });
}
let f = function (e) {
    let { className: t, channelId: n, children: l, ...s } = e;
    return (0, i.jsx)("div", { className: a()(t, A.kL), id: (0, h.j)(n, n), ...s, children: l });
};
