n.d(t, { Ay: () => E, WK: () => f, cr: () => C, j1: () => x });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(901117),
    r = n(323384),
    o = n(534890),
    c = n(770880),
    d = n(276293),
    u = n(661531),
    h = n(297264),
    m = n(834730),
    g = n(375901),
    p = n(652215),
    A = n(560529);
function f(e) {
    let t,
        { locked: n = !1, channelType: i } = e,
        h = i === p.rbe.GUILD_VOICE || i === p.rbe.GUILD_STAGE_VOICE;
    return (
        (t = i === p.rbe.GUILD_APP ? (n ? a.Z : r.k) : h ? o.ChatIcon : n ? c.I : d.N),
        (0, l.jsx)("div", {
            className: s()(A.qk, A.tP),
            children: (0, l.jsx)(t, { color: u.A.colors.ICON_STRONG, size: "custom", width: 42, height: 42 }),
        })
    );
}
function C(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(h.D, {
        "aria-hidden": "true",
        className: s()(n, A.wx),
        variant: "heading-xxl/extrabold",
        children: t,
    });
}
function x(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)(m.E, { variant: "text-md/normal", color: "none", className: s()(A.h_, n), children: t });
}
let E = function (e) {
    let { className: t, channelId: n, children: i, ...a } = e;
    return (0, l.jsx)("div", { className: s()(t, A.kL), id: (0, g.j)(n, n), ...a, children: i });
};
