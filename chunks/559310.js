n.d(t, {
    am: () => r,
    s6: () => s,
});
var i = n(973285);
let l = (0, n(818083).B)({
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
function s(e) {
    let { autoTrackExposure: t, location: n, guildId: s } = e,
        { enabled: r } = i.W.getCurrentConfig({
            guildId: s,
            location: n,
        });
    return l.getCurrentConfig(
        {
            guildId: s,
            location: n,
        },
        {
            autoTrackExposure: t,
            disable: !r,
        },
    );
}
function r(e) {
    let { autoTrackExposure: t, location: n, guildId: s } = e,
        { enabled: r } = i.W.useExperiment({
            guildId: s,
            location: n,
        });
    return l.useExperiment(
        {
            guildId: s,
            location: n,
        },
        {
            autoTrackExposure: t,
            disable: !r,
        },
    );
}
