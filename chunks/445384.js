n.d(t, { Z: () => l });
var i = n(570140);
let l = {
    viewPrompt: function (e, t) {
        i.Z.wait(() => {
            i.Z.dispatch({
                type: 'GUILD_PROMPT_VIEWED',
                prompt: e,
                guildId: t
            });
        });
    }
};
