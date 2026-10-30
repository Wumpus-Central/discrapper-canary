l.d(e, { xE: () => R, jB: () => c, tr: () => A, B: () => h, G1: () => I });
var u = l(536637),
    r = l.n(u),
    n = l(636537),
    a = l(666860),
    d = l(468689),
    i = l(71393),
    s = l(174459),
    _ = l(218113),
    o = l(652215);
function I(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    0 !== e.length && s.default.track(o.HAw.GUILD_RAID_REPORTED, { ...(0, a.H$)(t), guild_id: t, raid_types: e });
}
async function c(t, e) {
    let l = new Set(t.features);
    (l.has(o.GuildFeatures.COMMUNITY)
        ? e
            ? l.delete(o.GuildFeatures.RAID_ALERTS_DISABLED)
            : l.add(o.GuildFeatures.RAID_ALERTS_DISABLED)
        : e
          ? l.add(o.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)
          : l.delete(o.GuildFeatures.NON_COMMUNITY_RAID_ALERTS),
        await d.A.saveGuild(t.id, { features: l }, { throwErr: !0 }));
}
async function A(t, e, l, u) {
    let a = e || l,
        d = u ?? _.f7,
        i = a ? r()().add(d, "hours").toISOString() : null;
    return await n.Bo.put({
        url: o.Rsh.GUILD_INCIDENT_ACTIONS(t),
        body: {
            invites_disabled_until: e ? i : null,
            dms_disabled_until: l ? i : null,
            lockdown_duration_hours: a ? d : null,
        },
        rejectWithError: (0, n.fT)(),
    });
}
async function R(t, e, l) {
    return await n.Bo.post({
        url: o.Rsh.GUILD_INCIDENT_REPORT_FALSE_ALARM(t),
        body: { alert_message_id: e, reason: l },
        rejectWithError: (0, n.fT)(),
    });
}
async function h(t) {
    let e = i.A.getGuild(t);
    return null == (null != e ? (e.safetyAlertsChannelId ?? e.publicUpdatesChannelId) : null)
        ? null
        : await n.Bo.post({ url: o.Rsh.GUILD_INCIDENT_REPORT_RAID(t), rejectWithError: (0, n.fT)() });
}
