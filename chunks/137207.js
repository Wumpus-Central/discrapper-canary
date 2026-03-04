n.d(t, { E5: () => m, G6: () => S, H0: () => p, Vj: () => C, W5: () => P, nV: () => O, s6: () => R, wu: () => D });
var i = n(562465),
    l = n(73153),
    r = n(58149),
    a = n(71393),
    s = n(576705),
    o = n(403362),
    c = n(661191),
    _ = n(615550),
    E = n(488703),
    d = n(449585),
    u = n(652215);
function A(e) {
    return { type: e.type, metadata: (0, E.A)(e.metadata) };
}
function T(e) {
    let t = (0, E.A)(e.triggerMetadata);
    return (
        null != t && delete t.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: t,
            actions: e.actions.filter(o.Vq).map(A),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(e.exemptChannels ?? []),
            exempt_roles: Array.from(e.exemptRoles ?? []),
        }
    );
}
function I(e) {
    return { type: e.type, metadata: (0, E.W)(e.metadata) };
}
function N(e) {
    let t = {
        id: e.id ?? c.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, E.W)(e.trigger_metadata),
        actions: e.actions.filter(o.Vq).map(I),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? []),
    };
    return null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t;
}
async function R(e) {
    let t = T(e),
        n = await i.Bo.post({ url: u.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId), body: t, rejectWithError: !1 });
    return (0, E.W)(n.body);
}
async function S(e) {
    let t = T(e);
    return (
        delete t.id,
        N((await i.Bo.post({ url: u.Rsh.GUILD_AUTOMOD_RULES(e.guildId), body: t, rejectWithError: !1 })).body)
    );
}
async function C(e) {
    let t = T(e);
    return N((await i.Bo.patch({ url: u.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id), body: t, rejectWithError: !1 })).body);
}
async function O(e, t) {
    return await i.Bo.del({ url: u.Rsh.GUILD_AUTOMOD_RULE(t, e), rejectWithError: !1 }), !0;
}
async function p(e) {
    let t = await i.Bo.get({ url: u.Rsh.GUILD_AUTOMOD_RULES(e), rejectWithError: !1 });
    return Array.isArray(t.body) ? t.body.map(N) : [];
}
async function m(e, t, n) {
    s.A.can(u.xBc.MANAGE_MESSAGES, t) &&
        (await i.Bo.post({
            url: u.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: !1,
        }));
}
function P(e, t, n) {
    let l = a.A.getGuild(e);
    null != l &&
        s.A.can(u.xBc.MANAGE_GUILD, l) &&
        (0, d.rI)(() => {
            (0, r.zV)(u.HAw.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: _.Gb.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t,
            }),
                i.Bo.post({ url: u.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e), rejectWithError: !0 }),
                n();
        });
}
function D(e) {
    l.h.dispatch({ type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId: e });
}
