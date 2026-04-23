"use strict";
n.d(t, { G: () => r, K: () => s });
var i = n(228366);
let r = (e) => {
    i.h.dispatch({ type: "TOGGLE_GUILD_EXPANDED_STATE", guildId: e });
};
function s(e) {
    i.h.dispatch({ type: "EMOJI_INTERACTION_INITIATED", interaction: e });
}
