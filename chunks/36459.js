(n.d(t, {
    $Y: () => g,
    JK: () => h,
    Je: () => T,
    T9: () => R,
    UE: () => y,
    Xx: () => N,
    mm: () => m,
    qY: () => f
}),
    n(388685));
var r = n(544891),
    i = n(570140),
    l = n(367907),
    a = n(430824),
    o = n(496675),
    s = n(823379),
    c = n(709054),
    u = n(177862),
    d = n(787824),
    _ = n(226192),
    E = n(981631);
function p(e) {
    return {
        type: e.type,
        metadata: (0, d.X)(e.metadata)
    };
}
function O(e) {
    var t, n;
    let r = (0, d.X)(e.triggerMetadata);
    return (
        null != r && delete r.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: r,
            actions: e.actions.filter(s.lm).map(p),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
            exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
        }
    );
}
function S(e) {
    return {
        type: e.type,
        metadata: (0, d.C)(e.metadata)
    };
}
function I(e) {
    var t, n, r;
    let i = {
        id: null != (t = e.id) ? t : c.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.C)(e.trigger_metadata),
        actions: e.actions.filter(s.lm).map(S),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
        exemptRoles: new Set(null != (r = e.exempt_roles) ? r : [])
    };
    return (null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i);
}
async function f(e) {
    let t = O(e),
        n = await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, d.C)(n.body);
}
async function h(e) {
    let t = O(e);
    return (
        delete t.id,
        I(
            (
                await r.tn.post({
                    url: E.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function T(e) {
    let t = O(e);
    return I(
        (
            await r.tn.patch({
                url: E.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1
            })
        ).body
    );
}
async function m(e, t) {
    return (
        await r.tn.del({
            url: E.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1
        }),
        !0
    );
}
async function g(e) {
    let t = await r.tn.get({
        url: E.ANM.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(I) : [];
}
async function N(e, t, n) {
    o.Z.can(E.Plq.MANAGE_MESSAGES, t) &&
        (await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            },
            rejectWithError: !1
        }));
}
function y(e, t, n) {
    let i = a.Z.getGuild(e);
    null != i &&
        o.Z.can(E.Plq.MANAGE_GUILD, i) &&
        (0, _.UV)(() => {
            ((0, l.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                r.tn.post({
                    url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                    rejectWithError: !0
                }),
                n());
        });
}
function R(e) {
    i.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
