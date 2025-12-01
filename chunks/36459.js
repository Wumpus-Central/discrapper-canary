n.d(t, {
    $Y: () => v,
    JK: () => b,
    Je: () => y,
    T9: () => T,
    UE: () => I,
    Xx: () => S,
    mm: () => O,
    qY: () => E,
}),
    n(388685);
var r = n(544891),
    i = n(570140),
    a = n(367907),
    o = n(430824),
    s = n(496675),
    l = n(823379),
    c = n(709054),
    u = n(177862),
    d = n(787824),
    f = n(226192),
    p = n(981631);
function _(e) {
    return {
        type: e.type,
        metadata: (0, d.X)(e.metadata),
    };
}
function m(e) {
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
            actions: e.actions.filter(l.lm).map(_),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
            exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : []),
        }
    );
}
function h(e) {
    return {
        type: e.type,
        metadata: (0, d.C)(e.metadata),
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
        triggerMetadata: (0, d.C)(e.trigger_metadata),
        actions: e.actions.filter(l.lm).map(h),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
        exemptRoles: new Set(null != (r = e.exempt_roles) ? r : []),
    };
    return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i;
}
async function E(e) {
    let t = m(e),
        n = await r.tn.post({
            url: p.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1,
        });
    return (0, d.C)(n.body);
}
async function b(e) {
    let t = m(e);
    return (
        delete t.id,
        g(
            (
                await r.tn.post({
                    url: p.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1,
                })
            ).body,
        )
    );
}
async function y(e) {
    let t = m(e);
    return g(
        (
            await r.tn.patch({
                url: p.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1,
            })
        ).body,
    );
}
async function O(e, t) {
    return (
        await r.tn.del({
            url: p.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1,
        }),
        !0
    );
}
async function v(e) {
    let t = await r.tn.get({
        url: p.ANM.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1,
    });
    return Array.isArray(t.body) ? t.body.map(g) : [];
}
async function S(e, t, n) {
    s.Z.can(p.Plq.MANAGE_MESSAGES, t) &&
        (await r.tn.post({
            url: p.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n,
            },
            rejectWithError: !1,
        }));
}
function I(e, t, n) {
    let i = o.Z.getGuild(e);
    if (null == i || !s.Z.can(p.Plq.MANAGE_GUILD, i)) return;
    let l = () => {
        (0, a.yw)(p.rMx.GUILD_AUTOMOD_FEEDBACK, {
            feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
            decision_id: t,
        }),
            r.tn.post({
                url: p.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                rejectWithError: !0,
            }),
            n();
    };
    (0, f.UV)(l);
}
function T(e) {
    i.Z.dispatch({
        type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
        guildId: e,
    });
}
