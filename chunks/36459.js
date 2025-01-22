e.d(n, {
    $Y: function () {
        return h;
    },
    JK: function () {
        return C;
    },
    Je: function () {
        return I;
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
        return T;
    },
    qY: function () {
        return m;
    }
}),
    e(47120);
var i = e(544891),
    r = e(570140),
    l = e(367907),
    u = e(430824),
    o = e(496675),
    a = e(823379),
    s = e(709054),
    c = e(177862),
    d = e(787824),
    f = e(226192),
    _ = e(981631);
function E(t) {
    return {
        type: t.type,
        metadata: (0, d.X)(t.metadata)
    };
}
function p(t) {
    var n, e;
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
            exempt_channels: Array.from(null !== (n = t.exemptChannels) && void 0 !== n ? n : []),
            exempt_roles: Array.from(null !== (e = t.exemptRoles) && void 0 !== e ? e : [])
        }
    );
}
function g(t) {
    return {
        type: t.type,
        metadata: (0, d.C)(t.metadata)
    };
}
function S(t) {
    var n, e, i;
    let r = {
        id: null !== (n = t.id) && void 0 !== n ? n : s.default.fromTimestamp(Date.now()),
        name: t.name,
        guildId: t.guild_id,
        eventType: t.event_type,
        triggerType: t.trigger_type,
        triggerMetadata: (0, d.C)(t.trigger_metadata),
        actions: t.actions.filter(a.lm).map(g),
        enabled: t.enabled,
        creatorId: t.creator_id,
        position: t.position,
        exemptChannels: new Set(null !== (e = t.exempt_channels) && void 0 !== e ? e : []),
        exemptRoles: new Set(null !== (i = t.exempt_roles) && void 0 !== i ? i : [])
    };
    return null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r;
}
async function m(t) {
    let n = p(t),
        e = await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_VALIDATE_RULE(t.guildId),
            body: n,
            rejectWithError: !1
        });
    return (0, d.C)(e.body);
}
async function C(t) {
    let n = p(t);
    return (
        delete n.id,
        S(
            (
                await i.tn.post({
                    url: _.ANM.GUILD_AUTOMOD_RULES(t.guildId),
                    body: n,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function I(t) {
    let n = p(t);
    return S(
        (
            await i.tn.patch({
                url: _.ANM.GUILD_AUTOMOD_RULE(t.guildId, t.id),
                body: n,
                rejectWithError: !1
            })
        ).body
    );
}
async function T(t, n) {
    return (
        await i.tn.del({
            url: _.ANM.GUILD_AUTOMOD_RULE(n, t),
            rejectWithError: !1
        }),
        !0
    );
}
async function h(t) {
    let n = await i.tn.get({
        url: _.ANM.GUILD_AUTOMOD_RULES(t),
        rejectWithError: !1
    });
    return Array.isArray(n.body) ? n.body.map(S) : [];
}
async function v(t, n, e) {
    if (!!o.Z.can(_.Plq.MANAGE_MESSAGES, n))
        await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
            body: {
                message_id: t,
                channel_id: n.id,
                alert_action_type: e
            },
            rejectWithError: !1
        });
}
function N(t, n, e) {
    let r = u.Z.getGuild(t);
    if (null != r && !!o.Z.can(_.Plq.MANAGE_GUILD, r))
        (0, f.UV)(() => {
            (0, l.yw)(_.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: n
            }),
                i.tn.post({
                    url: _.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(t),
                    rejectWithError: !0
                }),
                e();
        });
}
function A(t) {
    r.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: t
    });
}
