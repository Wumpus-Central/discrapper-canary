n.d(t, { Ay: () => C, WK: () => p, cr: () => A, j1: () => f });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(534890),
    r = n(770880),
    o = n(276293),
    c = n(661531),
    d = n(534514),
    u = n(834730),
    h = n(375901),
    m = n(652215),
    g = n(564052);
function p(e) {
    let { locked: t = !1, channelType: n } = e,
        i = n === m.rbe.GUILD_VOICE || n === m.rbe.GUILD_STAGE_VOICE ? a.o : t ? r.I : o.N;
    return (0, l.jsx)("div", {
        className: s()(g.qk, g.tP),
        children: (0, l.jsx)(i, { color: c.A.colors.ICON_STRONG, size: "custom", width: 42, height: 42 }),
    });
}
function A(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(d.D, {
        "aria-hidden": "true",
        className: s()(n, g.wx),
        variant: "heading-xxl/extrabold",
        children: t,
    });
}
function f(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(u.E, { variant: "text-md/normal", color: "none", className: s()(g.h_, n), children: t });
}
let C = function (e) {
    let { className: t, channelId: n, children: i, ...a } = e;
    return (0, l.jsx)("div", { className: s()(t, g.kL), id: (0, h.j)(n, n), ...a, children: i });
};
