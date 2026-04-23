n.d(e, { A: () => A });
var l = n(627968),
    t = n(477782),
    a = n(72152),
    d = n(976860),
    r = n(967198),
    s = n(422258),
    o = n(93055),
    c = n(5180),
    u = n(652215),
    g = n(335993),
    y = n(985018);
function A() {
    let { hasAccess: i } = (0, o.TW)("useHideServerItem");
    return (0, l.jsx)(t.Dr, {
        id: "hide-favorites",
        label: i ? y.intl.string(g.default["8FO0y9"]) : y.intl.string(y.t.ojM1xJ),
        subtext: i ? y.intl.string(g.default.FaHxWl) : void 0,
        color: i ? "danger" : "default",
        action: function () {
            (0, a.Z)(!1), i && (0, s.tV)(!1, "server_context_menu"), (0, c.ai)(r.A.getGuildId()) && (0, d.pX)(u.BVt.ME);
        },
    });
}
