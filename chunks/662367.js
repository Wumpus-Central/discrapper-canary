n.d(t, { i: () => a });
let i = (0, n(250105).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
function a(e) {
    let { location: t } = e,
        { inviteMaxAgeSeconds: n } = i.getConfig({ location: t });
    return n;
}
