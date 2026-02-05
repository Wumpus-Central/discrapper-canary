e.d(t, { A: () => c });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(576705),
    d = e(652215),
    s = e(985018);
function c(n, t) {
    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.type,
        u = (0, l.bG)([a.A], () => a.A.can(d.xBc.MANAGE_CHANNELS, n), [n]);
    if (__OVERLAY__ || !u) return null;
    let o = () => {
        (0, r.mMO)(async () => {
            let { default: t } = await Promise.all([e.e("93142"), e.e("64233"), e.e("56651")]).then(e.bind(e, 409200));
            return (e) => (0, i.jsx)(t, { ...e, channelType: c, guildId: n.guild_id, categoryId: n.parent_id });
        });
    };
    switch (c) {
        case d.rbe.GUILD_TEXT:
            return (0, i.jsx)(r.Drp, { id: "create-text-channel", label: s.intl.string(s.t.HHkTJP), action: o });
        case d.rbe.GUILD_VOICE:
            return (0, i.jsx)(r.Drp, { id: "create-voice-channel", label: s.intl.string(s.t.AlbZaI), action: o });
        default:
            return null;
    }
}
