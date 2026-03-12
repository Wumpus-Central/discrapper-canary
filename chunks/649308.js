n.d(i, { A: () => A });
var t = n(627968),
    l = n(397927),
    a = n(72152),
    r = n(976860),
    d = n(967198),
    s = n(422258),
    c = n(93055),
    o = n(652215),
    u = n(525736),
    g = n(985018);
function A() {
    let { hasAccess: e } = (0, c.TW)("useHideServerItem");
    return (0, t.jsx)(l.Drp, {
        id: "hide-favorites",
        label: e ? g.intl.string(u.default["8FO0y9"]) : g.intl.string(g.t.ojM1xJ),
        subtext: e ? g.intl.string(u.default.FaHxWl) : void 0,
        color: e ? "danger" : "default",
        action: function () {
            (0, a.Z)(!1), e && (0, s.tV)(!1), d.A.getGuildId() === o.YYv && (0, r.pX)(o.BVt.ME);
        },
    });
}
