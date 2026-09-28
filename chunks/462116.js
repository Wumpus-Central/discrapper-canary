l.d(e, { xE: () => h, jB: () => A, tr: () => R, B: () => E, G1: () => c });
var u = l(536637),
    n = l.n(u),
    r = l(636537),
    a = l(95561),
    d = l(468689),
    i = l(71393),
    s = l(174459);
function _(t) {
    return t.safetyAlertsChannelId ?? t.publicUpdatesChannelId;
}
var o = l(218113),
    I = l(652215);
function c(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    0 !== e.length && s.default.track(I.HAw.GUILD_RAID_REPORTED, { ...(0, a.H$)(t), guild_id: t, raid_types: e });
}
async function A(t, e) {
    let l = new Set(t.features);
    (l.has(I.GuildFeatures.COMMUNITY)
        ? e
            ? l.delete(I.GuildFeatures.RAID_ALERTS_DISABLED)
            : l.add(I.GuildFeatures.RAID_ALERTS_DISABLED)
        : e
          ? l.add(I.GuildFeatures.NON_COMMUNITY_RAID_ALERTS)
          : l.delete(I.GuildFeatures.NON_COMMUNITY_RAID_ALERTS),
        await d.default.saveGuild(t.id, { features: l }, { throwErr: !0 }));
}
async function R(t, e, l, u) {
    let a = e || l,
        d = u ?? o.f7,
        i = a ? n()().add(d, "hours").toISOString() : null;
    return await r.Bo.put({
        url: I.Rsh.GUILD_INCIDENT_ACTIONS(t),
        body: {
            invites_disabled_until: e ? i : null,
            dms_disabled_until: l ? i : null,
            lockdown_duration_hours: a ? d : null,
        },
        rejectWithError: (0, r.fT)(),
    });
}
async function h(t, e, l) {
    let u = i.A.getGuild(t);
    return null == (null != u ? _(u) : null)
        ? null
        : await r.Bo.post({
              url: I.Rsh.GUILD_INCIDENT_REPORT_FALSE_ALARM(t),
              body: { alert_message_id: e, reason: l },
              rejectWithError: (0, r.fT)(),
          });
}
async function E(t) {
    let e = i.A.getGuild(t);
    return null == (null != e ? _(e) : null)
        ? null
        : await r.Bo.post({ url: I.Rsh.GUILD_INCIDENT_REPORT_RAID(t), rejectWithError: (0, r.fT)() });
}
