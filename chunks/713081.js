n.d(t, {
    Qh: () => s,
    T7: () => l,
    jd: () => a
});
var r = n(570140),
    i = n(763792),
    o = n(535396);
function a(e) {
    r.Z.dispatch({
        type: 'GUILD_POWERUPS_ACK_NOTIFICATION',
        guildId: e
    });
}
function s() {
    r.Z.dispatch({ type: 'GUILD_POWERUPS_RESET_NOTIFICATIONS' });
}
function l(e) {
    r.Z.dispatch({
        type: 'GUILD_POWERUPS_FETCH_SUCCESS',
        guildId: e,
        catalog: {
            [o.U.LEVEL]: i.G,
            [o.U.PERK]: i.W
        }
    });
}
