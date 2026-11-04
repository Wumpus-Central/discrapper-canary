n.d(t, { wu: () => D, G6: () => S, nV: () => y, E5: () => U, H0: () => m, W5: () => g, Vj: () => p, s6: () => R });
var r = n(620632),
    a = n(73153),
    i = n(149468),
    o = n(317525),
    l = n(71393),
    d = n(576705),
    s = n(403362),
    _ = n(811091),
    E = n(615550),
    u = n(435558);
function A(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let r = (0, u.camelCase)(n);
              return ("object" != typeof e[n] || Array.isArray(e[n]) ? (t[r] = e[n]) : (t[r] = A(e[n])), t);
          }, {});
}
function c(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let r = (0, u.snakeCase)(n);
              return (
                  "object" != typeof e[n] || Array.isArray(e[n]) ? (t[r] = e[n]) : (t[r] = c(e[n])), (t[r] = e[n]), t
              );
          }, {});
}
var I = n(449585),
    O = n(652215);
function T(e) {
    return { type: e.type, metadata: c(e.metadata) };
}
function M(e) {
    let t = c(e.triggerMetadata);
    return (
        null != t && delete t.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: t,
            actions: e.actions.filter(s.Vq).map(T),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(e.exemptChannels ?? []),
            exempt_roles: Array.from(e.exemptRoles ?? []).filter((t) => null != o.A.getRole(e.guildId, t)),
        }
    );
}
function L(e) {
    return { type: e.type, metadata: A(e.metadata) };
}
function N(e) {
    let t = {
        id: e.id ?? _.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: A(e.trigger_metadata),
        actions: e.actions.filter(s.Vq).map(L),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(e.exempt_channels ?? []),
        exemptRoles: new Set(e.exempt_roles ?? []),
    };
    return (null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t);
}
async function R(e) {
    let t = M(e);
    return A(
        (await r.Bo.post({ url: O.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId), body: t, rejectWithError: (0, r.fT)() }))
            .body,
    );
}
async function S(e) {
    let t = M(e);
    return (
        delete t.id,
        N((await r.Bo.post({ url: O.Rsh.GUILD_AUTOMOD_RULES(e.guildId), body: t, rejectWithError: (0, r.fT)() })).body)
    );
}
async function p(e) {
    let t = M(e);
    return N(
        (await r.Bo.patch({ url: O.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id), body: t, rejectWithError: (0, r.fT)() }))
            .body,
    );
}
async function y(e, t) {
    return (await r.Bo.del({ url: O.Rsh.GUILD_AUTOMOD_RULE(t, e), rejectWithError: (0, r.fT)() }), !0);
}
async function m(e) {
    let t = await r.Bo.get({ url: O.Rsh.GUILD_AUTOMOD_RULES(e), rejectWithError: (0, r.fT)() });
    return Array.isArray(t.body) ? t.body.map(N) : [];
}
async function U(e, t, n) {
    d.A.can(O.xBc.MANAGE_MESSAGES, t) &&
        (await r.Bo.post({
            url: O.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: (0, r.fT)(),
        }));
}
function g(e, t, n) {
    let a = l.A.getGuild(e);
    null == a ||
        (d.A.can(O.xBc.MANAGE_GUILD, a) &&
            (0, I.rI)(function () {
                ((0, i.zV)(O.HAw.GUILD_AUTOMOD_FEEDBACK, {
                    feedback_type: E.Gb.MENTION_RAID_REMOVE_RESTRICTION,
                    decision_id: t,
                }),
                    r.Bo.post({ url: O.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e), rejectWithError: !0 }),
                    n());
            }));
}
function D(e) {
    a.h.dispatch({ type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId: e });
}
