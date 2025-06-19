n.d(t, {
    $Y: () => j,
    JK: () => p,
    Je: () => m,
    T9: () => A,
    UE: () => S,
    Xx: () => P,
    mm: () => M,
    qY: () => _
}),
    n(388685);
var r = n(544891),
    l = n(570140),
    i = n(367907),
    a = n(430824),
    o = n(496675),
    u = n(823379),
    c = n(709054),
    s = n(177862),
    d = n(787824),
    f = n(226192),
    O = n(981631);
function E(e) {
    return {
        type: e.type,
        metadata: (0, d.X)(e.metadata)
    };
}
function g(e) {
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
            actions: e.actions.filter(u.lm).map(E),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
            exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
        }
    );
}
function b(e) {
    return {
        type: e.type,
        metadata: (0, d.C)(e.metadata)
    };
}
function y(e) {
    var t, n, r;
    let l = {
        id: null != (t = e.id) ? t : c.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.C)(e.trigger_metadata),
        actions: e.actions.filter(u.lm).map(b),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
        exemptRoles: new Set(null != (r = e.exempt_roles) ? r : [])
    };
    return null != l.triggerMetadata && delete l.triggerMetadata.keywordLists, l;
}
async function _(e) {
    let t = g(e),
        n = await r.tn.post({
            url: O.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, d.C)(n.body);
}
async function p(e) {
    let t = g(e);
    return (
        delete t.id,
        y(
            (
                await r.tn.post({
                    url: O.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function m(e) {
    let t = g(e);
    return y(
        (
            await r.tn.patch({
                url: O.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1
            })
        ).body
    );
}
async function M(e, t) {
    return (
        await r.tn.del({
            url: O.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1
        }),
        !0
    );
}
async function j(e) {
    let t = await r.tn.get({
        url: O.ANM.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(y) : [];
}
async function P(e, t, n) {
    o.Z.can(O.Plq.MANAGE_MESSAGES, t) &&
        (await r.tn.post({
            url: O.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            },
            rejectWithError: !1
        }));
}
function S(e, t, n) {
    let l = a.Z.getGuild(e);
    null != l &&
        o.Z.can(O.Plq.MANAGE_GUILD, l) &&
        (0, f.UV)(() => {
            (0, i.yw)(O.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: s.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                r.tn.post({
                    url: O.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                    rejectWithError: !0
                }),
                n();
        });
}
function A(e) {
    l.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
