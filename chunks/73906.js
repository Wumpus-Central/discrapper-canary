n.d(t, { Z: () => o }), n(35282);
var r = n(200651);
n(192379);
var i = n(3570),
    l = n(685311),
    s = n(186901);
let o = function (e) {
    let { match: t, location: n } = e,
        o = async (e, t) => {
            await (0, i.s)(s.jE.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search
            });
        };
    return (0, r.jsx)(l.Z, {
        match: t,
        location: n,
        attemptDeepLink: o
    });
};
