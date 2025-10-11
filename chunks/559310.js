n.d(t, {
    am: () => r,
    s6: () => a,
});
var l = n(973285);
let i = (0, n(818083).B)({
    id: "2025-10_server_friends_in_vc_invites",
    label: "Server Friends in VC Invites",
    kind: "guild",
    defaultConfig: { isFriendsInVCInvitesEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Friends in VC Invites",
            config: { isFriendsInVCInvitesEnabled: !0 },
        },
    ],
});
function a(e) {
    let { autoTrackExposure: t, location: n, guildId: a } = e,
        { enabled: r } = l.W.getCurrentConfig({
            guildId: a,
            location: n,
        });
    return i.getCurrentConfig(
        {
            guildId: a,
            location: n,
        },
        {
            autoTrackExposure: t,
            disable: !r,
        },
    );
}
function r(e) {
    let { autoTrackExposure: t, location: n, guildId: a } = e,
        { enabled: r } = l.W.useExperiment({
            guildId: a,
            location: n,
        });
    return i.useExperiment(
        {
            guildId: a,
            location: n,
        },
        {
            autoTrackExposure: t,
            disable: !r,
        },
    );
}
