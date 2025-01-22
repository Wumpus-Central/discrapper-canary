r.d(n, {
    D: function () {
        return a;
    },
    x: function () {
        return o;
    }
});
var i = r(570140);
let a = (e) => {
    i.Z.dispatch({
        type: 'TOGGLE_GUILD_EXPANDED_STATE',
        guildId: e
    });
};
function o(e) {
    i.Z.dispatch({
        type: 'EMOJI_INTERACTION_INITIATED',
        interaction: e
    });
}
