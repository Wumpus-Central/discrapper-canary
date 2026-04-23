i.d(e, { A: () => u });
var t = i(627968);
i(64700);
var l = i(17928),
    a = i(192308),
    r = i(477782),
    d = i(576705),
    c = i(652215),
    o = i(985018);
function u(n, e) {
    let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.type,
        s = (0, l.bG)([d.A], () => d.A.can(c.xBc.MANAGE_CHANNELS, n), [n]);
    if (__OVERLAY__ || !s) return null;
    let A = () => {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("42282"), i.e("9431"), i.e("36126")]).then(i.bind(i, 113194));
            return (i) => (0, t.jsx)(e, { ...i, channelType: u, guildId: n.guild_id, categoryId: n.parent_id });
        });
    };
    switch (u) {
        case c.rbe.GUILD_TEXT:
            return (0, t.jsx)(r.Dr, { id: "create-text-channel", label: o.intl.string(o.t.HHkTJP), action: A });
        case c.rbe.GUILD_VOICE:
            return (0, t.jsx)(r.Dr, { id: "create-voice-channel", label: o.intl.string(o.t.AlbZaI), action: A });
        default:
            return null;
    }
}
