n.d(t, { A: () => A }), n(938796);
var i = n(627968);
n(64700);
var l = n(665260),
    a = n(311907),
    r = n(397927),
    s = n(843472),
    o = n(71393),
    d = n(576705),
    c = n(472282),
    u = n(652215),
    g = n(985018);
function A(e, t) {
    let n = (0, a.bG)([o.A], () => (null != t.guild_id ? o.A.getGuild(t.guild_id) : null), [t.guild_id]),
        A = (0, a.bG)([d.A], () => d.A.can(u.xBc.MANAGE_OFFICIAL_MESSAGES, t), [t]),
        { enabled: p } = c.A.useExperiment({ guildId: t.guild_id, location: "MessageContextMenu" }),
        m = (0, l.Lt)(e.flags, u.pr7.IS_GUILD_OFFICIAL);
    return null != n && n.features.has(u.GuildFeatures.VERIFIED) && p && A
        ? m
            ? (0, i.jsx)(r.Drp, {
                  id: "guild-official-unset",
                  action: () => {
                      s.A.patchMessageGuildOfficial(t.id, e.id, !1);
                  },
                  label: g.intl.string(g.t["2km5Gf"]),
                  leadingAccessory: { type: "icon", icon: r.IdC },
              })
            : (0, i.jsx)(r.Drp, {
                  id: "guild-official-set",
                  action: () => {
                      s.A.patchMessageGuildOfficial(t.id, e.id, !0);
                  },
                  label: g.intl.string(g.t["lE/PG3"]),
                  leadingAccessory: { type: "icon", icon: r.oyn },
              })
        : null;
}
