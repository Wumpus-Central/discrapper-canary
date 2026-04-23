"use strict";
n.d(t, { G: () => i, K: () => s });
var r = n(73153);
let i = (e) => {
    r.h.dispatch({ type: "TOGGLE_GUILD_EXPANDED_STATE", guildId: e });
};
function s(e) {
    r.h.dispatch({ type: "EMOJI_INTERACTION_INITIATED", interaction: e });
}
