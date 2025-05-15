n.d(t, {
    D: () => i,
    x: () => o
});
var r = n(570140);
let i = (e) => {
    r.Z.dispatch({
        type: 'TOGGLE_GUILD_EXPANDED_STATE',
        guildId: e
    });
};
function o(e) {
    r.Z.dispatch({
        type: 'EMOJI_INTERACTION_INITIATED',
        interaction: e
    });
}
