n.d(t, {
    $Y: () => _,
    JK: () => v,
    Je: () => S,
    T9: () => w,
    UE: () => b,
    Xx: () => E,
    mm: () => m,
    qY: () => y
}),
    n(388685);
var i = n(544891),
    s = n(570140),
    r = n(367907),
    l = n(430824),
    a = n(496675),
    o = n(823379),
    d = n(709054),
    h = n(177862),
    u = n(787824),
    c = n(226192),
    g = n(981631);
function C(e) {
    return {
        type: e.type,
        metadata: (0, u.X)(e.metadata)
    };
}
function p(e) {
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
            actions: e.actions.filter(o.lm).map(C),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
            exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
        }
    );
}
function f(e) {
    return {
        type: e.type,
        metadata: (0, u.C)(e.metadata)
    };
}
function I(e) {
    var t, n, i;
    let s = {
        id: null != (t = e.id) ? t : d.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, u.C)(e.trigger_metadata),
        actions: e.actions.filter(o.lm).map(f),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
        exemptRoles: new Set(null != (i = e.exempt_roles) ? i : [])
    };
    return null != s.triggerMetadata && delete s.triggerMetadata.keywordLists, s;
}
async function y(e) {
    let t = p(e),
        n = await i.tn.post({
            url: g.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, u.C)(n.body);
}
async function v(e) {
    let t = p(e);
    return (
        delete t.id,
        I(
            (
                await i.tn.post({
                    url: g.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function S(e) {
    let t = p(e);
    return I(
        (
            await i.tn.patch({
                url: g.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1
            })
        ).body
    );
}
async function m(e, t) {
    return (
        await i.tn.del({
            url: g.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1
        }),
        !0
    );
}
async function _(e) {
    let t = await i.tn.get({
        url: g.ANM.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(I) : [];
}
async function E(e, t, n) {
    a.Z.can(g.Plq.MANAGE_MESSAGES, t) &&
        (await i.tn.post({
            url: g.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            },
            rejectWithError: !1
        }));
}
function b(e, t, n) {
    let s = l.Z.getGuild(e);
    null != s &&
        a.Z.can(g.Plq.MANAGE_GUILD, s) &&
        (0, c.UV)(() => {
            (0, r.yw)(g.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: h.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                i.tn.post({
                    url: g.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                    rejectWithError: !0
                }),
                n();
        });
}
function w(e) {
    s.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
