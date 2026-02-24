n.d(t, { i: () => r });
var i = n(600975),
    l = n(250105);
let s = (0, i.C)({
        kind: "user",
        id: "2021-04_longer_group_dm_invites",
        label: "Longer Group DM Invites",
        defaultConfig: { isEnabled: !1, inviteMaxAgeSeconds: 86400 },
        treatments: [
            {
                id: 1,
                label: "Makes group DM invites expire after 1 week.",
                config: { isEnabled: !0, inviteMaxAgeSeconds: 604800 },
            },
        ],
    }),
    a = (0, l.Ay)({
        kind: "user",
        name: "2026-02-longer-group-dm-invites",
        defaultConfig: { isEnabled: !1, inviteMaxAgeSeconds: 86400 },
        variations: {
            0: { isEnabled: !1, inviteMaxAgeSeconds: 86400 },
            1: { isEnabled: !0, inviteMaxAgeSeconds: 604800 },
        },
    });
function r(e) {
    let { location: t } = e,
        { isEnabled: n, inviteMaxAgeSeconds: i } = a.getConfig({ location: t });
    return n ? i : s.getCurrentConfig({ location: t }).inviteMaxAgeSeconds;
}
