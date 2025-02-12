t.d(e, { Z: () => s });
var l = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    c = t(496675),
    r = t(981631),
    d = t(388032);
function s(n, e) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.type,
        u = (0, a.e7)([c.Z], () => c.Z.can(r.Plq.MANAGE_CHANNELS, n), [n]);
    if (__OVERLAY__ || !u) return null;
    let o = () => {
        (0, i.ZDy)(async () => {
            let { default: e } = await Promise.all([t.e('7590'), t.e('45094'), t.e('76924')]).then(t.bind(t, 218613));
            return (t) =>
                (0, l.jsx)(e, {
                    ...t,
                    channelType: s,
                    guildId: n.guild_id,
                    categoryId: n.parent_id
                });
        });
    };
    switch (s) {
        case r.d4z.GUILD_TEXT:
            return (0, l.jsx)(i.sNh, {
                id: 'create-text-channel',
                label: d.intl.string(d.t.HHkTJC),
                action: o
            });
        case r.d4z.GUILD_VOICE:
            return (0, l.jsx)(i.sNh, {
                id: 'create-voice-channel',
                label: d.intl.string(d.t.AlbZaG),
                action: o
            });
        default:
            return null;
    }
}
