n.d(t, {
    Jv: () => a,
    xY: () => s,
}),
    n(388685);
var r = n(818083),
    i = n(141537),
    l = n(981631);
let o = (0, r.B)({
        kind: "user",
        id: "2025-11_invite_friend_members",
        label: "Show Friends in Server on Invite Modal",
        defaultConfig: {
            showFriendsInServer: !1,
            showInviter: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Show Friends in Server",
                config: {
                    showFriendsInServer: !0,
                    showInviter: !1,
                },
            },
            {
                id: 2,
                label: "Show Friends in Server and Inviter",
                config: {
                    showFriendsInServer: !0,
                    showInviter: !0,
                },
            },
        ],
    }),
    a = (e) => (0, i.Z6)(o, e);
function s(e) {
    if (null == e) return !1;
    let t = e.features;
    return Array.isArray(t)
        ? !t.includes(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)
        : !(t instanceof Set) || !t.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
}
