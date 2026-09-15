n.d(t, { A: () => u });
var a = n(477900);
n(582128);
var r = n(17928),
    i = n(192308),
    l = n(477782),
    c = n(576705),
    d = n(652215),
    s = n(375708);
function u(e, t) {
    let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
        h = (0, r.bG)([c.A], () => c.A.can(d.xBc.MANAGE_CHANNELS, e), [e]);
    if (__OVERLAY__ || !h) return null;
    let o = () => {
        (0, i.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("377476"),
                n.e("766811"),
                n.e("746309"),
                n.e("778799"),
                n.e("470068"),
                n.e("203589"),
                n.e("692513"),
                n.e("589916"),
                n.e("460773"),
                n.e("208018"),
                n.e("120379"),
                n.e("898377"),
                n.e("819193"),
                n.e("507775"),
                n.e("662068"),
                n.e("358608"),
                n.e("221500"),
                n.e("637038"),
            ]).then(n.bind(n, 684343));
            return (n) => (0, a.jsx)(t, { ...n, channelType: u, guildId: e.guild_id, categoryId: e.parent_id });
        });
    };
    switch (u) {
        case d.rbe.GUILD_TEXT:
            return (0, a.jsx)(l.Dr, { id: "create-text-channel", label: s.intl.string(s.t.HHkTJP), action: o });
        case d.rbe.GUILD_VOICE:
            return (0, a.jsx)(l.Dr, { id: "create-voice-channel", label: s.intl.string(s.t.AlbZaI), action: o });
        default:
            return null;
    }
}
