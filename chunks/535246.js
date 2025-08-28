n.d(t, { v: () => o });
var r = n(427164),
    i = n(380249);
let a = (0, r.le)({
    name: "2025-08-remote-join-game-invite",
    kind: "user",
    defaultConfig: { enableRemoteJoin: !1 },
    variations: {
        0: { enableRemoteJoin: !1 },
        1: { enableRemoteJoin: !0 },
    },
});
function o() {
    let e = a.getConfig({ location: "useIsRemoteJoinGameInviteEnabled" }).enableRemoteJoin,
        t = i.m.getCurrentConfig({ location: "useIsRemoteJoinGameInviteEnabled" }).enabled;
    return e && t;
}
