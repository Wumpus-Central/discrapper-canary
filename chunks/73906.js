n.d(t, { Z: () => s }), n(35282);
var r = n(951288);
n(647438);
var i = n(3570),
    l = n(685311),
    o = n(186901);
let s = function (e) {
    let { match: t, location: n } = e,
        s = async (e, t) => {
            await (0, i.s)(o.jE.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        };
    return (0, r.jsx)(l.Z, {
        match: t,
        location: n,
        attemptDeepLink: s,
    });
};
