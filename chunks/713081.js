r.d(t, {
    Q: () => o,
    j: () => a
});
var n = r(570140);
function a(e) {
    n.Z.dispatch({
        type: 'GUILD_POWERUPS_ACK_NOTIFICATION',
        guildId: e
    });
}
function o() {
    n.Z.dispatch({ type: 'GUILD_POWERUPS_RESET_NOTIFICATIONS' });
}
