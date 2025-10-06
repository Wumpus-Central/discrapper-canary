n.d(t, { v: () => i });
let r = (0, n(427164).le)({
    name: "2025-08-remote-join-game-invite",
    kind: "user",
    defaultConfig: { enableRemoteJoin: !1 },
    variations: {
        0: { enableRemoteJoin: !1 },
        1: { enableRemoteJoin: !0 },
    },
});
function i() {
    return r.getConfig({ location: "useIsRemoteJoinGameInviteEnabled" }).enableRemoteJoin;
}
