n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(3570),
    a = n(685311),
    l = n(186901);
let o = function (e) {
    let { match: t, location: n } = e,
        o = async (e, t) => {
            await (0, r.s)(l.jE.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search
            });
        };
    return (0, i.jsx)(a.Z, {
        match: t,
        location: n,
        attemptDeepLink: o
    });
};
