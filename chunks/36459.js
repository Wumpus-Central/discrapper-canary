n.d(t, {
    $Y: () => E,
    JK: () => O,
    Je: () => S,
    T9: () => v,
    UE: () => j,
    Xx: () => I,
    mm: () => h,
    qY: () => b
}),
    n(47120);
var r = n(544891),
    i = n(570140),
    l = n(367907),
    a = n(430824),
    o = n(496675),
    u = n(823379),
    s = n(709054),
    c = n(177862),
    d = n(787824),
    p = n(226192),
    g = n(981631);
function f(e) {
    return {
        type: e.type,
        metadata: (0, d.X)(e.metadata)
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
            actions: e.actions.filter(u.lm).map(f),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null !== (t = e.exemptChannels) && void 0 !== t ? t : []),
            exempt_roles: Array.from(null !== (n = e.exemptRoles) && void 0 !== n ? n : [])
        }
    );
}
function y(e) {
    return {
        type: e.type,
        metadata: (0, d.C)(e.metadata)
    };
}
function _(e) {
    var t, n, r;
    let i = {
        id: null !== (t = e.id) && void 0 !== t ? t : s.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, d.C)(e.trigger_metadata),
        actions: e.actions.filter(u.lm).map(y),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
        exemptRoles: new Set(null !== (r = e.exempt_roles) && void 0 !== r ? r : [])
    };
    return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i;
}
async function b(e) {
    let t = m(e),
        n = await r.tn.post({
            url: g.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, d.C)(n.body);
}
async function O(e) {
    let t = m(e);
    return (
        delete t.id,
        _(
            (
                await r.tn.post({
                    url: g.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function S(e) {
    let t = m(e);
    return _(
        (
            await r.tn.patch({
                url: g.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1
            })
        ).body
    );
}
async function h(e, t) {
    return (
        await r.tn.del({
            url: g.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1
        }),
        !0
    );
}
async function E(e) {
    let t = await r.tn.get({
        url: g.ANM.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(_) : [];
}
async function I(e, t, n) {
    o.Z.can(g.Plq.MANAGE_MESSAGES, t) &&
        (await r.tn.post({
            url: g.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            },
            rejectWithError: !1
        }));
}
function j(e, t, n) {
    let i = a.Z.getGuild(e);
    null != i &&
        o.Z.can(g.Plq.MANAGE_GUILD, i) &&
        (0, p.UV)(() => {
            (0, l.yw)(g.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                r.tn.post({
                    url: g.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                    rejectWithError: !0
                }),
                n();
        });
}
function v(e) {
    i.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
