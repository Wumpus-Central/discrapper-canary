"use strict";
n.d(t, { E5: () => P, G6: () => S, H0: () => p, Vj: () => O, W5: () => D, nV: () => C, s6: () => R, wu: () => M });
var i = n(562465),
    r = n(73153),
    l = n(58149),
    s = n(71393),
    a = n(576705),
    o = n(403362),
    E = n(661191),
    c = n(615550),
    _ = n(488703),
    d = n(449585),
    A = n(652215);
function u(e) {
    return { type: e.type, metadata: (0, _.A)(e.metadata) };
}
function T(e) {
    let t = (0, _.A)(e.triggerMetadata);
    return (
        null != t && delete t.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: t,
            actions: e.actions.filter(o.Vq).map(u),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(e.exemptChannels ?? []),
            exempt_roles: Array.from(e.exemptRoles ?? []),
        }
    );
}
function I(e) {
    return { type: e.type, metadata: (0, _.W)(e.metadata) };
}
function N(e) {
    let t = {
        id: e.id ?? E.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, _.W)(e.trigger_metadata),
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
        n = await i.Bo.post({ url: A.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId), body: t, rejectWithError: !1 });
    return (0, _.W)(n.body);
}
async function S(e) {
    let t = T(e);
    return (
        delete t.id,
        N((await i.Bo.post({ url: A.Rsh.GUILD_AUTOMOD_RULES(e.guildId), body: t, rejectWithError: !1 })).body)
    );
}
async function O(e) {
    let t = T(e);
    return N((await i.Bo.patch({ url: A.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id), body: t, rejectWithError: !1 })).body);
}
async function C(e, t) {
    return await i.Bo.del({ url: A.Rsh.GUILD_AUTOMOD_RULE(t, e), rejectWithError: !1 }), !0;
}
async function p(e) {
    let t = await i.Bo.get({ url: A.Rsh.GUILD_AUTOMOD_RULES(e), rejectWithError: !1 });
    return Array.isArray(t.body) ? t.body.map(N) : [];
}
async function P(e, t, n) {
    a.A.can(A.xBc.MANAGE_MESSAGES, t) &&
        (await i.Bo.post({
            url: A.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: !1,
        }));
}
function D(e, t, n) {
    let r = s.A.getGuild(e);
    null != r &&
        a.A.can(A.xBc.MANAGE_GUILD, r) &&
        (0, d.rI)(() => {
            (0, l.zV)(A.HAw.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.Gb.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t,
            }),
                i.Bo.post({ url: A.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e), rejectWithError: !0 }),
                n();
        });
}
function M(e) {
    r.h.dispatch({ type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId: e });
}
