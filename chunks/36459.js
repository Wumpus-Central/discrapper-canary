n.d(t, {
    $Y: () => R,
    JK: () => p,
    Je: () => f,
    T9: () => g,
    UE: () => C,
    Xx: () => P,
    mm: () => A,
    qY: () => S
}),
    n(388685);
var r = n(544891),
    i = n(570140),
    l = n(367907),
    o = n(430824),
    a = n(496675),
    s = n(823379),
    c = n(709054),
    u = n(177862),
    d = n(787824),
    E = n(226192),
    _ = n(981631);
function I(e) {
    return {
        type: e.type,
        metadata: (0, d.X)(e.metadata)
    };
}
function N(e) {
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
            actions: e.actions.filter(s.lm).map(I),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
            exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
        }
    );
}
function O(e) {
    return {
        type: e.type,
        metadata: (0, d.C)(e.metadata)
    };
}
function T(e) {
    var t, n, r;
    let i = {
        id: null != (t = e.id) ? t : c.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.C)(e.trigger_metadata),
        actions: e.actions.filter(s.lm).map(O),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
        exemptRoles: new Set(null != (r = e.exempt_roles) ? r : [])
    };
    return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i;
}
async function S(e) {
    let t = N(e),
        n = await r.tn.post({
            url: _.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, d.C)(n.body);
}
async function p(e) {
    let t = N(e);
    return (
        delete t.id,
        T(
            (
                await r.tn.post({
                    url: _.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function f(e) {
    let t = N(e);
    return T(
        (
            await r.tn.patch({
                url: _.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1
            })
        ).body
    );
}
async function A(e, t) {
    return (
        await r.tn.del({
            url: _.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1
        }),
        !0
    );
}
async function R(e) {
    let t = await r.tn.get({
        url: _.ANM.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(T) : [];
}
async function P(e, t, n) {
    a.Z.can(_.Plq.MANAGE_MESSAGES, t) &&
        (await r.tn.post({
            url: _.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            },
            rejectWithError: !1
        }));
}
function C(e, t, n) {
    let i = o.Z.getGuild(e);
    null != i &&
        a.Z.can(_.Plq.MANAGE_GUILD, i) &&
        (0, E.UV)(() => {
            (0, l.yw)(_.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                r.tn.post({
                    url: _.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                    rejectWithError: !0
                }),
                n();
        });
}
function g(e) {
    i.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
