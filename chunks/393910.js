n.d(e, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(442837),
    o = n(481060),
    c = n(26732),
    a = n(406763),
    l = n(893642),
    u = n(388032);
function s(t, e) {
    let n = (0, i.e7)([l.Z], () => l.Z.getMute(t)),
        s = !n;
    return (0, r.jsx)(o.S89, {
        id: "mute-game",
        label: u.intl.string(u.t["6EwEwp"]),
        checked: n,
        action: () => {
            (0, c.Eq)({
                gameName: e,
                applicationId: t,
                label: s ? c.$_.MUTED : c.$_.UNMUTED,
                source: c.UE.GAME_CONTEXT_MENU,
            }),
                (0, a.X)(t, s);
        },
    });
}
