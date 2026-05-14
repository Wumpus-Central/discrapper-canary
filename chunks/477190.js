n.d(t, { A: () => u });
var a = n(627968);
n(64700);
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
                n.e("94513"),
                n.e("11585"),
                n.e("3589"),
                n.e("89916"),
                n.e("60773"),
                n.e("8018"),
                n.e("20379"),
                n.e("19193"),
                n.e("7775"),
                n.e("58608"),
                n.e("70195"),
                n.e("37038"),
            ]).then(n.bind(n, 946430));
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
