n.d(t, {
    HH: () => I,
    O9: () => f,
    Vu: () => h,
    W4: () => l,
    Wz: () => u,
    Z3: () => c,
    ZR: () => o,
    am: () => p,
    av: () => S,
    cq: () => E,
    j: () => R,
    k3: () => N,
    kb: () => C,
    n: () => _,
    oi: () => g,
    pw: () => b,
    rk: () => T,
    tB: () => y,
    uo: () => A,
    vD: () => v,
    x3: () => m
});
var i = n(592125),
    r = n(823379),
    a = n(700785),
    s = n(981631);
let o = 7,
    l = 300,
    u = 7,
    c = 60,
    d = 3,
    f = 5,
    _ = 1,
    p = 30,
    h = 200,
    m = 7;
var g = (function (e) {
    return (e[(e.VIEW = 0)] = 'VIEW'), (e[(e.CHAT = 1)] = 'CHAT'), e;
})({});
function E(e) {
    var t;
    return {
        channelId: e.channel_id,
        actionType: e.action_type,
        title: e.title,
        description: e.description,
        emoji:
            null == e.emoji
                ? null
                : {
                      id: e.emoji.id,
                      name: e.emoji.name,
                      animated: e.emoji.animated
                  },
        icon: null !== (t = e.icon) && void 0 !== t ? t : null
    };
}
function v(e) {
    var t, n;
    return {
        channelId: e.channel_id,
        title: e.title,
        description: null !== (t = e.description) && void 0 !== t ? t : '',
        emoji:
            null == e.emoji
                ? null
                : {
                      id: e.emoji.id,
                      name: e.emoji.name,
                      animated: e.emoji.animated
                  },
        icon: null !== (n = e.icon) && void 0 !== n ? n : null
    };
}
function y(e) {
    if (null == e) return null;
    let { welcome_message: t, new_member_actions: n, resource_channels: a, enabled: s } = e,
        o = {
            authorIds: t.author_ids,
            message: t.message
        };
    return {
        welcomeMessage: o,
        newMemberActions: n.filter((e) => (0, r.lm)(i.Z.getChannel(e.channel_id))).map(E),
        resourceChannels: a.filter((e) => (0, r.lm)(i.Z.getChannel(e.channel_id))).map(v),
        enabled: s
    };
}
function I(e, t) {
    var n, a;
    if (null == t) return null;
    let { welcomeMessage: s, newMemberActions: o, resourceChannels: l, enabled: u } = t,
        c = {
            author_ids: null !== (n = null == s ? void 0 : s.authorIds) && void 0 !== n ? n : [],
            message: null !== (a = null == s ? void 0 : s.message) && void 0 !== a ? a : ''
        };
    return {
        guild_id: e,
        welcome_message: c,
        new_member_actions: (null != o ? o : [])
            .filter((e) => (0, r.lm)(i.Z.getChannel(e.channelId)))
            .map((e) => {
                var t, n, i, r, a, s, o;
                return {
                    channel_id: e.channelId,
                    action_type: e.actionType,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
                        name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                        animated: null !== (s = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== s ? s : void 0
                    },
                    icon: null !== (o = e.icon) && void 0 !== o ? o : void 0
                };
            }),
        resource_channels: (null != l ? l : [])
            .filter((e) => (0, r.lm)(i.Z.getChannel(e.channelId)))
            .map((e) => {
                var t, n, i, r, a, s, o;
                return {
                    channel_id: e.channelId,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
                        name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
                        animated: null !== (s = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== s ? s : void 0
                    },
                    icon: null !== (o = e.icon) && void 0 !== o ? o : void 0
                };
            }),
        enabled: u
    };
}
let T = (e) => {
    if (null == e) return null;
    let t = {};
    for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
    return t;
};
function b(e) {
    return null == e || ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)));
}
function S(e) {
    return null == e || (!!b(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)));
}
function A(e) {
    var t, n;
    return null != e && (!!S(e) || ((null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < o) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < d)));
}
function N(e) {
    return e.type === s.d4z.GUILD_TEXT && !a.Uu(s.Plq.SEND_MESSAGES, e) && a.Uu(s.Plq.VIEW_CHANNEL, e);
}
function C(e) {
    switch (e.type) {
        case s.d4z.GUILD_TEXT:
        case s.d4z.GUILD_ANNOUNCEMENT:
        case s.d4z.GUILD_FORUM:
        case s.d4z.GUILD_MEDIA:
            return a.Uu(s.Plq.VIEW_CHANNEL, e);
        default:
            return !1;
    }
}
var R = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.TODO = 1)] = 'TODO'), (e[(e.RESOURCE = 2)] = 'RESOURCE'), e;
})({});
