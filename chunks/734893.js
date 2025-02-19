n.d(t, {
    HH: () => y,
    O9: () => f,
    Vu: () => h,
    W4: () => l,
    Wz: () => c,
    Z3: () => u,
    ZR: () => s,
    am: () => _,
    av: () => I,
    cq: () => E,
    j: () => C,
    k3: () => N,
    kb: () => A,
    n: () => p,
    oi: () => g,
    pw: () => S,
    rk: () => O,
    tB: () => b,
    uo: () => T,
    vD: () => v,
    x3: () => m
}),
    n(266796);
var r = n(592125),
    i = n(823379),
    o = n(700785),
    a = n(981631);
let s = 7,
    l = 300,
    c = 7,
    u = 60,
    d = 3,
    f = 5,
    p = 1,
    _ = 30,
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
function b(e) {
    if (null == e) return null;
    let { welcome_message: t, new_member_actions: n, resource_channels: o, enabled: a } = e,
        s = {
            authorIds: t.author_ids,
            message: t.message
        };
    return {
        welcomeMessage: s,
        newMemberActions: n.filter((e) => (0, i.lm)(r.Z.getChannel(e.channel_id))).map(E),
        resourceChannels: o.filter((e) => (0, i.lm)(r.Z.getChannel(e.channel_id))).map(v),
        enabled: a
    };
}
function y(e, t) {
    var n, o;
    if (null == t) return null;
    let { welcomeMessage: a, newMemberActions: s, resourceChannels: l, enabled: c } = t,
        u = {
            author_ids: null !== (n = null == a ? void 0 : a.authorIds) && void 0 !== n ? n : [],
            message: null !== (o = null == a ? void 0 : a.message) && void 0 !== o ? o : ''
        };
    return {
        guild_id: e,
        welcome_message: u,
        new_member_actions: (null != s ? s : [])
            .filter((e) => (0, i.lm)(r.Z.getChannel(e.channelId)))
            .map((e) => {
                var t, n, r, i, o, a, s;
                return {
                    channel_id: e.channelId,
                    action_type: e.actionType,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (i = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : void 0,
                        name: null !== (o = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== o ? o : void 0,
                        animated: null !== (a = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== a ? a : void 0
                    },
                    icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
                };
            }),
        resource_channels: (null != l ? l : [])
            .filter((e) => (0, i.lm)(r.Z.getChannel(e.channelId)))
            .map((e) => {
                var t, n, r, i, o, a, s;
                return {
                    channel_id: e.channelId,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (i = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : void 0,
                        name: null !== (o = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== o ? o : void 0,
                        animated: null !== (a = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== a ? a : void 0
                    },
                    icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
                };
            }),
        enabled: c
    };
}
let O = (e) => {
    if (null == e) return null;
    let t = {};
    for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
    return t;
};
function S(e) {
    return null == e || ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)));
}
function I(e) {
    return null == e || (!!S(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)));
}
function T(e) {
    var t, n;
    return null != e && (!!I(e) || ((null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < s) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < d)));
}
function N(e) {
    return e.type === a.d4z.GUILD_TEXT && !o.Uu(a.Plq.SEND_MESSAGES, e) && o.Uu(a.Plq.VIEW_CHANNEL, e);
}
function A(e) {
    switch (e.type) {
        case a.d4z.GUILD_TEXT:
        case a.d4z.GUILD_ANNOUNCEMENT:
        case a.d4z.GUILD_FORUM:
        case a.d4z.GUILD_MEDIA:
            return o.Uu(a.Plq.VIEW_CHANNEL, e);
        default:
            return !1;
    }
}
var C = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.TODO = 1)] = 'TODO'), (e[(e.RESOURCE = 2)] = 'RESOURCE'), e;
})({});
