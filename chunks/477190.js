t.d(e, { A: () => u });
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(192308),
    r = t(477782),
    d = t(576705),
    c = t(652215),
    o = t(985018);
function u(n, e) {
    let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.type,
        s = (0, l.bG)([d.A], () => d.A.can(c.xBc.MANAGE_CHANNELS, n), [n]);
    if (__OVERLAY__ || !s) return null;
    let A = () => {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([t.e("93142"), t.e("64233"), t.e("36126")]).then(t.bind(t, 409200));
            return (t) => (0, i.jsx)(e, { ...t, channelType: u, guildId: n.guild_id, categoryId: n.parent_id });
        });
    };
    switch (u) {
        case c.rbe.GUILD_TEXT:
            return (0, i.jsx)(r.Dr, { id: "create-text-channel", label: o.intl.string(o.t.HHkTJP), action: A });
        case c.rbe.GUILD_VOICE:
            return (0, i.jsx)(r.Dr, { id: "create-voice-channel", label: o.intl.string(o.t.AlbZaI), action: A });
        default:
            return null;
    }
}
