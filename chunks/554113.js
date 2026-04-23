n.d(t, { B: () => p, G1: () => m, jB: () => g, tr: () => h, xE: () => x });
var i = n(989349),
    l = n.n(i),
    s = n(562465),
    a = n(58149),
    r = n(997509),
    o = n(71393),
    d = n(954571),
    c = n(183389),
    u = n(652215);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    0 !== t.length && d.default.track(u.HAw.GUILD_RAID_REPORTED, { ...(0, a.H$)(e), guild_id: e, raid_types: t });
}
async function g(e, t) {
    let n = new Set(e.features);
    n.has(u.GuildFeatures.COMMUNITY)
        ? t
            ? n.delete(u.GuildFeatures.RAID_ALERTS_DISABLED)
            : n.add(u.GuildFeatures.RAID_ALERTS_DISABLED)
        : t
          ? n.add(u.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)
          : n.delete(u.GuildFeatures.NON_COMMUNITY_RAID_ALERTS),
        await r.A.saveGuild(e.id, { features: n }, { throwErr: !0 });
}
async function h(e, t, n, i) {
    let a = l()().add(i, "hours").toISOString();
    return await s.Bo.put({
        url: u.Rsh.GUILD_INCIDENT_ACTIONS(e),
        body: { invites_disabled_until: t ? a : null, dms_disabled_until: n ? a : null },
        rejectWithError: !1,
    });
}
async function x(e, t, n) {
    let i = o.A.getGuild(e);
    return null == (null != i ? (0, c.A)(i) : null)
        ? null
        : await s.Bo.post({
              url: u.Rsh.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: t, reason: n },
              rejectWithError: !1,
          });
}
async function p(e) {
    let t = o.A.getGuild(e);
    return null == (null != t ? (0, c.A)(t) : null)
        ? null
        : await s.Bo.post({ url: u.Rsh.GUILD_INCIDENT_REPORT_RAID(e), rejectWithError: !1 });
}
