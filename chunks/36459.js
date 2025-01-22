n.d(t, {
    $Y: function () {
        return m;
    },
    JK: function () {
        return I;
    },
    Je: function () {
        return S;
    },
    T9: function () {
        return A;
    },
    UE: function () {
        return N;
    },
    Xx: function () {
        return T;
    },
    mm: function () {
        return v;
    },
    qY: function () {
        return _;
    }
}),
    n(47120);
var i = n(544891),
    r = n(570140),
    l = n(367907),
    o = n(430824),
    s = n(496675),
    a = n(823379),
    u = n(709054),
    d = n(177862),
    c = n(787824),
    h = n(226192),
    f = n(981631);
function g(e) {
    return {
        type: e.type,
        metadata: (0, c.X)(e.metadata)
    };
}
function C(e) {
    var t, n;
    let i = (0, c.X)(e.triggerMetadata);
    return (
        null != i && delete i.keywordLists,
        {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: i,
            actions: e.actions.filter(a.lm).map(g),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(null !== (t = e.exemptChannels) && void 0 !== t ? t : []),
            exempt_roles: Array.from(null !== (n = e.exemptRoles) && void 0 !== n ? n : [])
        }
    );
}
function p(e) {
    return {
        type: e.type,
        metadata: (0, c.C)(e.metadata)
    };
}
function E(e) {
    var t, n, i;
    let r = {
        id: null !== (t = e.id) && void 0 !== t ? t : u.default.fromTimestamp(Date.now()),
        name: e.name,
        guildId: e.guild_id,
        eventType: e.event_type,
        triggerType: e.trigger_type,
        triggerMetadata: (0, c.C)(e.trigger_metadata),
        actions: e.actions.filter(a.lm).map(p),
        enabled: e.enabled,
        creatorId: e.creator_id,
        position: e.position,
        exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
        exemptRoles: new Set(null !== (i = e.exempt_roles) && void 0 !== i ? i : [])
    };
    return null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r;
}
async function _(e) {
    let t = C(e),
        n = await i.tn.post({
            url: f.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1
        });
    return (0, c.C)(n.body);
}
async function I(e) {
    let t = C(e);
    return (
        delete t.id,
        E(
            (
                await i.tn.post({
                    url: f.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t,
                    rejectWithError: !1
                })
            ).body
        )
    );
}
async function S(e) {
    let t = C(e);
    return E(
        (
            await i.tn.patch({
                url: f.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                body: t,
                rejectWithError: !1
            })
        ).body
    );
}
async function v(e, t) {
    return (
        await i.tn.del({
            url: f.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1
        }),
        !0
    );
}
async function m(e) {
    let t = await i.tn.get({
        url: f.ANM.GUILD_AUTOMOD_RULES(e),
        rejectWithError: !1
    });
    return Array.isArray(t.body) ? t.body.map(E) : [];
}
async function T(e, t, n) {
    if (!!s.Z.can(f.Plq.MANAGE_MESSAGES, t))
        await i.tn.post({
            url: f.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: {
                message_id: e,
                channel_id: t.id,
                alert_action_type: n
            },
            rejectWithError: !1
        });
}
function N(e, t, n) {
    let r = o.Z.getGuild(e);
    if (null != r && !!s.Z.can(f.Plq.MANAGE_GUILD, r))
        (0, h.UV)(() => {
            (0, l.yw)(f.rMx.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
                decision_id: t
            }),
                i.tn.post({
                    url: f.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                    rejectWithError: !0
                }),
                n();
        });
}
function A(e) {
    r.Z.dispatch({
        type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
        guildId: e
    });
}
