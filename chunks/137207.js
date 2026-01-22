n.d(t, {
    E5: () => v,
    G6: () => b,
    H0: () => A,
    Vj: () => y,
    W5: () => S,
    nV: () => O,
    s6: () => E,
    wu: () => I,
}),
    n(896048);
var r = n(562465),
    i = n(73153),
    a = n(58149),
    s = n(71393),
    o = n(576705),
    l = n(403362),
    c = n(661191),
    u = n(615550),
    d = n(488703),
    f = n(449585),
    p = n(652215);
function _(e) {
    return {
        type: e.type,
        metadata: (0, d.A)(e.metadata),
    };
}
function h(e) {
    var t, n;
    let r = (0, d.A)(e.triggerMetadata);
    return (
        null != r && delete r.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: r,
            actions: e.actions.filter(l.Vq).map(_),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
            exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : []),
        }
    );
}
function m(e) {
    return {
        type: e.type,
        metadata: (0, d.W)(e.metadata),
    };
}
function g(e) {
    var t, n, r;
    let i = {
        id: null != (t = e.id) ? t : c.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.W)(e.trigger_metadata),
        actions: e.actions.filter(l.Vq).map(m),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
        exemptRoles: new Set(null != (r = e.exempt_roles) ? r : []),
    };
    return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i;
}
async function E(e) {
    let t = h(e),
        n = await r.Bo.post({
            url: p.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1,
        });
    return (0, d.W)(n.body);
}
async function b(e) {
    let t = h(e);
    return (
        delete t.id,
        g(
            (
                await r.Bo.post({
                    url: p.Rsh.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1,
                })
            ).body,
        )
    );
}
async function y(e) {
    let t = h(e);
    return g(
        (
            await r.Bo.patch({
                url: p.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1,
            })
        ).body,
    );
}
async function O(e, t) {
    return (
        await r.Bo.del({
            url: p.Rsh.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1,
        }),
        !0
    );
}
async function A(e) {
    let t = await r.Bo.get({
        url: p.Rsh.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1,
    });
    return Array.isArray(t.body) ? t.body.map(g) : [];
}
async function v(e, t, n) {
    o.A.can(p.xBc.MANAGE_MESSAGES, t) &&
        (await r.Bo.post({
            url: p.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n,
            },
            rejectWithError: !1,
        }));
}
function S(e, t, n) {
    let i = s.A.getGuild(e);
    if (null == i || !o.A.can(p.xBc.MANAGE_GUILD, i)) return;
    let l = () => {
        (0, a.zV)(p.HAw.GUILD_AUTOMOD_FEEDBACK, {
            feedback_type: u.Gb.MENTION_RAID_REMOVE_RESTRICTION,
            decision_id: t,
        }),
            r.Bo.post({
                url: p.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                rejectWithError: !0,
            }),
            n();
    };
    (0, f.rI)(l);
}
function I(e) {
    i.h.dispatch({
        type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
        guildId: e,
    });
}
