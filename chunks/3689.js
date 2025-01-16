t.d(e, {
    Z: function () {
        return o;
    }
});
var l = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    r = t(496675),
    u = t(981631),
    c = t(388032);
function o(n, e) {
    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.type,
        d = (0, a.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
    if (__OVERLAY__ || !d) return null;
    let s = () => {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await Promise.all([t.e('7590'), t.e('45094'), t.e('74100')]).then(t.bind(t, 218613));
            return (t) =>
                (0, l.jsx)(e, {
                    ...t,
                    channelType: o,
                    guildId: n.guild_id,
                    categoryId: n.parent_id
                });
        });
    };
    switch (o) {
        case u.d4z.GUILD_TEXT:
            return (0, l.jsx)(i.MenuItem, {
                id: 'create-text-channel',
                label: c.intl.string(c.t.HHkTJC),
                action: s
            });
        case u.d4z.GUILD_VOICE:
            return (0, l.jsx)(i.MenuItem, {
                id: 'create-voice-channel',
                label: c.intl.string(c.t.AlbZaG),
                action: s
            });
        default:
            return null;
    }
}
