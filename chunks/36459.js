(n.d(t, {
    $Y: () => f,
    JK: () => O,
    Je: () => S,
    T9: () => R,
    UE: () => m,
    Xx: () => N,
    mm: () => T,
    qY: () => g
}),
    n(388685));
var i = n(544891),
    r = n(570140),
    l = n(367907),
    o = n(430824),
    s = n(496675),
    a = n(823379),
    c = n(709054),
    d = n(177862),
    u = n(787824),
    _ = n(226192),
    h = n(981631);
function E(e) {
    return {
        type: e.type,
        metadata: (0, u.X)(e.metadata)
    };
}
function I(e) {
    var t, n;
    let i = (0, u.X)(e.triggerMetadata);
    return (
        null != i && delete i.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: i,
            actions: e.actions.filter(a.lm).map(E),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
            exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
        }
    );
}
function p(e) {
    return {
        type: e.type,
        metadata: (0, u.C)(e.metadata)
    };
}
function C(e) {
    var t, n, i;
    let r = {
        id: null != (t = e.id) ? t : c.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, u.C)(e.trigger_metadata),
        actions: e.actions.filter(a.lm).map(p),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
        exemptRoles: new Set(null != (i = e.exempt_roles) ? i : [])
    };
    return (null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r);
}
async function g(e) {
    let t = I(e),
        n = await i.tn.post({
            url: h.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, u.C)(n.body);
}
async function O(e) {
    let t = I(e);
    return (
        delete t.id,
        C(
            (
                await i.tn.post({
                    url: h.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function S(e) {
    let t = I(e);
    return C(
        (
            await i.tn.patch({
                url: h.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1
            })
        ).body
    );
}
async function T(e, t) {
    return (
        await i.tn.del({
            url: h.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1
        }),
        !0
    );
}
async function f(e) {
    let t = await i.tn.get({
        url: h.ANM.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(C) : [];
}
async function N(e, t, n) {
    s.Z.can(h.Plq.MANAGE_MESSAGES, t) &&
        (await i.tn.post({
            url: h.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            },
            rejectWithError: !1
        }));
}
function m(e, t, n) {
    let r = o.Z.getGuild(e);
    null != r &&
        s.Z.can(h.Plq.MANAGE_GUILD, r) &&
        (0, _.UV)(() => {
            ((0, l.yw)(h.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                i.tn.post({
                    url: h.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                    rejectWithError: !0
                }),
                n());
        });
}
function R(e) {
    r.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
