n.d(t, {
    D: () => r,
    x: () => a
});
var i = n(570140);
let r = (e) => {
    i.Z.dispatch({
        type: 'TOGGLE_GUILD_EXPANDED_STATE',
        guildId: e
    });
};
function a(e) {
    i.Z.dispatch({
        type: 'EMOJI_INTERACTION_INITIATED',
        interaction: e
    });
}
