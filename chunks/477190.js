t.d(e, { A: () => o });
var i = t(627968);
t(64700);
var l = t(17928),
    a = t(192308),
    r = t(477782),
    d = t(576705),
    s = t(652215),
    c = t(985018);
function o(n, e) {
    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.type,
        A = (0, l.bG)([d.A], () => d.A.can(s.xBc.MANAGE_CHANNELS, n), [n]);
    if (__OVERLAY__ || !A) return null;
    let u = () => {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([t.e("8018"), t.e("42282"), t.e("9431"), t.e("43735")]).then(
                t.bind(t, 113194),
            );
            return (t) => (0, i.jsx)(e, { ...t, channelType: o, guildId: n.guild_id, categoryId: n.parent_id });
        });
    };
    switch (o) {
        case s.rbe.GUILD_TEXT:
            return (0, i.jsx)(r.Dr, { id: "create-text-channel", label: c.intl.string(c.t.HHkTJP), action: u });
        case s.rbe.GUILD_VOICE:
            return (0, i.jsx)(r.Dr, { id: "create-voice-channel", label: c.intl.string(c.t.AlbZaI), action: u });
        default:
            return null;
    }
}
