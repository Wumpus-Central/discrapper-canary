"use strict";
n.d(t, { A: () => s });
var i = n(73153);
let s = {
    viewPrompt: function (e, t) {
        i.h.wait(() => {
            i.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: t });
        });
    },
};
