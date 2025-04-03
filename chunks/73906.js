n.d(t, { Z: () => l }), n(301563);
var r = n(200651);
n(192379);
var i = n(3570),
    o = n(685311),
    a = n(186901);
let l = function (e) {
    let { match: t, location: n } = e,
        l = async (e, t) => {
            await (0, i.s)(a.jE.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search
            });
        };
    return (0, r.jsx)(o.Z, {
        match: t,
        location: n,
        attemptDeepLink: l
    });
};
