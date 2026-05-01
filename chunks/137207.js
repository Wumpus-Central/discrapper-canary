n.d(t, { E5: () => T, G6: () => N, H0: () => R, Vj: () => S, W5: () => U, nV: () => p, s6: () => M, wu: () => y });
var a = n(636537),
    r = n(228366),
    i = n(58149),
    o = n(71393),
    d = n(576705),
    l = n(403362),
    _ = n(935208),
    s = n(615550),
    E = n(488703),
    A = n(449585),
    u = n(652215);
function c(e) {
    return { type: e.type, metadata: (0, E.A)(e.metadata) };
}
function I(e) {
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
            actions: e.actions.filter(l.Vq).map(c),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(e.exemptChannels ?? []),
            exempt_roles: Array.from(e.exemptRoles ?? []),
        }
    );
}
function O(e) {
    return { type: e.type, metadata: (0, E.W)(e.metadata) };
}
function L(e) {
    let t = {
        id: e.id ?? _.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, E.W)(e.trigger_metadata),
        actions: e.actions.filter(l.Vq).map(O),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? []),
    };
    return null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t;
}
async function M(e) {
    let t = I(e),
        n = await a.Bo.post({ url: u.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId), body: t, rejectWithError: !1 });
    return (0, E.W)(n.body);
}
async function N(e) {
    let t = I(e);
    return (
        delete t.id,
        L((await a.Bo.post({ url: u.Rsh.GUILD_AUTOMOD_RULES(e.guildId), body: t, rejectWithError: !1 })).body)
    );
}
async function S(e) {
    let t = I(e);
    return L((await a.Bo.patch({ url: u.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id), body: t, rejectWithError: !1 })).body);
}
async function p(e, t) {
    return await a.Bo.del({ url: u.Rsh.GUILD_AUTOMOD_RULE(t, e), rejectWithError: !1 }), !0;
}
async function R(e) {
    let t = await a.Bo.get({ url: u.Rsh.GUILD_AUTOMOD_RULES(e), rejectWithError: !1 });
    return Array.isArray(t.body) ? t.body.map(L) : [];
}
async function T(e, t, n) {
    d.A.can(u.xBc.MANAGE_MESSAGES, t) &&
        (await a.Bo.post({
            url: u.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: !1,
        }));
}
function U(e, t, n) {
    let r = o.A.getGuild(e);
    null != r &&
        d.A.can(u.xBc.MANAGE_GUILD, r) &&
        (0, A.rI)(() => {
            (0, i.zV)(u.HAw.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: s.Gb.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t,
            }),
                a.Bo.post({ url: u.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e), rejectWithError: !0 }),
                n();
        });
}
function y(e) {
    r.h.dispatch({ type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId: e });
}
