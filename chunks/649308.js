n.d(i, { A: () => p });
var t = n(627968),
    l = n(397927),
    a = n(72152),
    r = n(976860),
    d = n(967198),
    s = n(422258),
    c = n(93055),
    o = n(5180),
    u = n(652215),
    g = n(665606),
    A = n(985018);
function p() {
    let { hasAccess: e } = (0, c.TW)("useHideServerItem");
    return (0, t.jsx)(l.Drp, {
        id: "hide-favorites",
        label: e ? A.intl.string(g.default["8FO0y9"]) : A.intl.string(A.t.ojM1xJ),
        subtext: e ? A.intl.string(g.default.FaHxWl) : void 0,
        color: e ? "danger" : "default",
        action: function () {
            (0, a.Z)(!1), e && (0, s.tV)(!1, "server_context_menu"), (0, o.ai)(d.A.getGuildId()) && (0, r.pX)(u.BVt.ME);
        },
    });
}
