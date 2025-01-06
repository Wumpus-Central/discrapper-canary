n.d(e, {
    $Y: function () {
        return T;
    },
    JK: function () {
        return S;
    },
    Je: function () {
        return h;
    },
    T9: function () {
        return A;
    },
    UE: function () {
        return N;
    },
    Xx: function () {
        return v;
    },
    mm: function () {
        return C;
    },
    qY: function () {
        return I;
    }
}),
    n(47120);
var i = n(544891),
    r = n(570140),
    l = n(367907),
    o = n(430824),
    u = n(496675),
    a = n(823379),
    s = n(709054),
    c = n(177862),
    d = n(787824),
    f = n(226192),
    _ = n(981631);
function E(t) {
    return {
        type: t.type,
        metadata: (0, d.X)(t.metadata)
    };
}
function p(t) {
    var e, n;
    let i = (0, d.X)(t.triggerMetadata);
    return (
        null != i && delete i.keywordLists,
        {
            id: t.id,
            name: t.name,
            guild_id: t.guildId,
            event_type: t.eventType,
            trigger_type: t.triggerType,
            trigger_metadata: i,
            actions: t.actions.filter(a.lm).map(E),
            enabled: t.enabled,
            creator_id: t.creatorId,
            position: t.position,
            exempt_channels: Array.from(null !== (e = t.exemptChannels) && void 0 !== e ? e : []),
            exempt_roles: Array.from(null !== (n = t.exemptRoles) && void 0 !== n ? n : [])
        }
    );
}
function m(t) {
    return {
        type: t.type,
        metadata: (0, d.C)(t.metadata)
    };
}
function g(t) {
    var e, n, i;
    let r = {
        id: null !== (e = t.id) && void 0 !== e ? e : s.default.fromTimestamp(Date.now()),
        name: t.name,
        guildId: t.guild_id,
        eventType: t.event_type,
        triggerType: t.trigger_type,
        triggerMetadata: (0, d.C)(t.trigger_metadata),
        actions: t.actions.filter(a.lm).map(m),
        enabled: t.enabled,
        creatorId: t.creator_id,
        position: t.position,
        exemptChannels: new Set(null !== (n = t.exempt_channels) && void 0 !== n ? n : []),
        exemptRoles: new Set(null !== (i = t.exempt_roles) && void 0 !== i ? i : [])
    };
    return null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r;
}
async function I(t) {
    let e = p(t),
        n = await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_VALIDATE_RULE(t.guildId),
            body: e,
            rejectWithError: !1
        });
    return (0, d.C)(n.body);
}
async function S(t) {
    let e = p(t);
    return (
        delete e.id,
        g(
            (
                await i.tn.post({
                    url: _.ANM.GUILD_AUTOMOD_RULES(t.guildId),
                    body: e,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function h(t) {
    let e = p(t);
    return g(
        (
            await i.tn.patch({
                url: _.ANM.GUILD_AUTOMOD_RULE(t.guildId, t.id),
                body: e,
                rejectWithError: !1
            })
        ).body
    );
}
async function C(t, e) {
    return (
        await i.tn.del({
            url: _.ANM.GUILD_AUTOMOD_RULE(e, t),
            rejectWithError: !1
        }),
        !0
    );
}
async function T(t) {
    let e = await i.tn.get({
        url: _.ANM.GUILD_AUTOMOD_RULES(t),
        rejectWithError: !1
    });
    return Array.isArray(e.body) ? e.body.map(g) : [];
}
async function v(t, e, n) {
    if (!!u.Z.can(_.Plq.MANAGE_MESSAGES, e))
        await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_ALERT_ACTION(e.guild_id),
            body: {
                message_id: t,
                channel_id: e.id,
                alert_action_type: n
            },
            rejectWithError: !1
        });
}
function N(t, e, n) {
    let r = o.Z.getGuild(t);
    if (null != r && !!u.Z.can(_.Plq.MANAGE_GUILD, r))
        (0, f.UV)(() => {
            (0, l.yw)(_.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: e
            }),
                i.tn.post({
                    url: _.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(t),
                    rejectWithError: !0
                }),
                n();
        });
}
function A(t) {
    r.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: t
    });
}
