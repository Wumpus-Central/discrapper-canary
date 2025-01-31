n.d(e, {
    $Y: () => T,
    JK: () => I,
    Je: () => y,
    T9: () => L,
    UE: () => A,
    Xx: () => C,
    mm: () => h,
    qY: () => m
}),
    n(47120);
var i = n(544891),
    r = n(570140),
    l = n(367907),
    a = n(430824),
    u = n(496675),
    s = n(823379),
    o = n(709054),
    d = n(177862),
    c = n(787824),
    _ = n(226192),
    g = n(981631);
function p(t) {
    return {
        type: t.type,
        metadata: (0, c.X)(t.metadata)
    };
}
function f(t) {
    var e, n;
    let i = (0, c.X)(t.triggerMetadata);
    return (
        null != i && delete i.keywordLists,
        {
            id: t.id,
            name: t.name,
            guild_id: t.guildId,
            event_type: t.eventType,
            trigger_type: t.triggerType,
            trigger_metadata: i,
            actions: t.actions.filter(s.lm).map(p),
            enabled: t.enabled,
            creator_id: t.creatorId,
            position: t.position,
            exempt_channels: Array.from(null !== (e = t.exemptChannels) && void 0 !== e ? e : []),
            exempt_roles: Array.from(null !== (n = t.exemptRoles) && void 0 !== n ? n : [])
        }
    );
}
function S(t) {
    return {
        type: t.type,
        metadata: (0, c.C)(t.metadata)
    };
}
function E(t) {
    var e, n, i;
    let r = {
        id: null !== (e = t.id) && void 0 !== e ? e : o.default.fromTimestamp(Date.now()),
        name: t.name,
        guildId: t.guild_id,
        eventType: t.event_type,
        triggerType: t.trigger_type,
        triggerMetadata: (0, c.C)(t.trigger_metadata),
        actions: t.actions.filter(s.lm).map(S),
        enabled: t.enabled,
        creatorId: t.creator_id,
        position: t.position,
        exemptChannels: new Set(null !== (n = t.exempt_channels) && void 0 !== n ? n : []),
        exemptRoles: new Set(null !== (i = t.exempt_roles) && void 0 !== i ? i : [])
    };
    return null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r;
}
async function m(t) {
    let e = f(t),
        n = await i.tn.post({
            url: g.ANM.GUILD_AUTOMOD_VALIDATE_RULE(t.guildId),
            body: e,
            rejectWithError: !1
        });
    return (0, c.C)(n.body);
}
async function I(t) {
    let e = f(t);
    return (
        delete e.id,
        E(
            (
                await i.tn.post({
                    url: g.ANM.GUILD_AUTOMOD_RULES(t.guildId),
                    body: e,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function y(t) {
    let e = f(t);
    return E(
        (
            await i.tn.patch({
                url: g.ANM.GUILD_AUTOMOD_RULE(t.guildId, t.id),
                body: e,
                rejectWithError: !1
            })
        ).body
    );
}
async function h(t, e) {
    return (
        await i.tn.del({
            url: g.ANM.GUILD_AUTOMOD_RULE(e, t),
            rejectWithError: !1
        }),
        !0
    );
}
async function T(t) {
    let e = await i.tn.get({
        url: g.ANM.GUILD_AUTOMOD_RULES(t),
        rejectWithError: !1
    });
    return Array.isArray(e.body) ? e.body.map(E) : [];
}
async function C(t, e, n) {
    u.Z.can(g.Plq.MANAGE_MESSAGES, e) &&
        (await i.tn.post({
            url: g.ANM.GUILD_AUTOMOD_ALERT_ACTION(e.guild_id),
            body: {
                message_id: t,
                channel_id: e.id,
                alert_action_type: n
            },
            rejectWithError: !1
        }));
}
function A(t, e, n) {
    let r = a.Z.getGuild(t);
    null != r &&
        u.Z.can(g.Plq.MANAGE_GUILD, r) &&
        (0, _.UV)(() => {
            (0, l.yw)(g.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: e
            }),
                i.tn.post({
                    url: g.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(t),
                    rejectWithError: !0
                }),
                n();
        });
}
function L(t) {
    r.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: t
    });
}
