"use strict";
n.d(t, { G: () => i, K: () => s });
var l = n(228366);
let i = (e) => {
    l.h.dispatch({ type: "TOGGLE_GUILD_EXPANDED_STATE", guildId: e });
};
function s(e) {
    l.h.dispatch({ type: "EMOJI_INTERACTION_INITIATED", interaction: e });
}
