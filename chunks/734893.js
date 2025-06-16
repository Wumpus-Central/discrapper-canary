n.d(t, {
    HH: () => O,
    O9: () => _,
    Vu: () => h,
    W4: () => l,
    Wz: () => c,
    Z3: () => u,
    ZR: () => s,
    am: () => p,
    av: () => T,
    cq: () => E,
    j: () => C,
    k3: () => A,
    kb: () => N,
    n: () => f,
    oi: () => g,
    pw: () => I,
    rk: () => v,
    tB: () => y,
    uo: () => S,
    vD: () => b,
    x3: () => m
}),
    n(953529),
    n(388685);
var r = n(592125),
    i = n(823379),
    a = n(700785),
    o = n(981631);
let s = 7,
    l = 300,
    c = 7,
    u = 60,
    d = 3,
    _ = 5,
    f = 1,
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
        icon: null != (t = e.icon) ? t : null
    };
}
function b(e) {
    var t, n;
    return {
        channelId: e.channel_id,
        title: e.title,
        description: null != (t = e.description) ? t : '',
        emoji:
            null == e.emoji
                ? null
                : {
                      id: e.emoji.id,
                      name: e.emoji.name,
                      animated: e.emoji.animated
                  },
        icon: null != (n = e.icon) ? n : null
    };
}
function y(e) {
    if (null == e) return null;
    let { welcome_message: t, new_member_actions: n, resource_channels: a, enabled: o } = e,
        s = {
            authorIds: t.author_ids,
            message: t.message
        };
    return {
        welcomeMessage: s,
        newMemberActions: n.filter((e) => (0, i.lm)(r.Z.getChannel(e.channel_id))).map(E),
        resourceChannels: a.filter((e) => (0, i.lm)(r.Z.getChannel(e.channel_id))).map(b),
        enabled: o
    };
}
function O(e, t) {
    var n, a;
    if (null == t) return null;
    let { welcomeMessage: o, newMemberActions: s, resourceChannels: l, enabled: c } = t,
        u = {
            author_ids: null != (n = null == o ? void 0 : o.authorIds) ? n : [],
            message: null != (a = null == o ? void 0 : o.message) ? a : ''
        };
    return {
        guild_id: e,
        welcome_message: u,
        new_member_actions: (null != s ? s : [])
            .filter((e) => (0, i.lm)(r.Z.getChannel(e.channelId)))
            .map((e) => {
                var t, n, r, i, a, o, s;
                return {
                    channel_id: e.channelId,
                    action_type: e.actionType,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null != (i = null == (t = e.emoji) ? void 0 : t.id) ? i : void 0,
                        name: null != (a = null == (n = e.emoji) ? void 0 : n.name) ? a : void 0,
                        animated: null != (o = null == (r = e.emoji) ? void 0 : r.animated) ? o : void 0
                    },
                    icon: null != (s = e.icon) ? s : void 0
                };
            }),
        resource_channels: (null != l ? l : [])
            .filter((e) => (0, i.lm)(r.Z.getChannel(e.channelId)))
            .map((e) => {
                var t, n, r, i, a, o, s;
                return {
                    channel_id: e.channelId,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null != (i = null == (t = e.emoji) ? void 0 : t.id) ? i : void 0,
                        name: null != (a = null == (n = e.emoji) ? void 0 : n.name) ? a : void 0,
                        animated: null != (o = null == (r = e.emoji) ? void 0 : r.animated) ? o : void 0
                    },
                    icon: null != (s = e.icon) ? s : void 0
                };
            }),
        enabled: c
    };
}
let v = (e) => {
    if (null == e) return null;
    let t = {};
    for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
    return t;
};
function I(e) {
    return null == e || ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)));
}
function T(e) {
    return null == e || (!!I(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)));
}
function S(e) {
    var t, n;
    if (null == e) return !1;
    if (T(e)) return !0;
    if ((null == (t = e.welcomeMessage) ? void 0 : t.message) == null || e.welcomeMessage.message.length < s || (null == (n = e.welcomeMessage) ? void 0 : n.authorIds) == null || 0 === e.welcomeMessage.authorIds.length || null == e.newMemberActions || e.newMemberActions.length < d) return !1;
    if (null != e.newMemberActions)
        for (let t of e.newMemberActions) {
            let e = r.Z.getChannel(t.channelId);
            if (null == e || !a.Uu(o.Plq.VIEW_CHANNEL, e)) return !1;
        }
    return !0;
}
function A(e) {
    return e.type === o.d4z.GUILD_TEXT && !a.Uu(o.Plq.SEND_MESSAGES, e) && a.Uu(o.Plq.VIEW_CHANNEL, e);
}
function N(e) {
    switch (e.type) {
        case o.d4z.GUILD_TEXT:
        case o.d4z.GUILD_ANNOUNCEMENT:
        case o.d4z.GUILD_FORUM:
        case o.d4z.GUILD_MEDIA:
            return a.Uu(o.Plq.VIEW_CHANNEL, e);
        default:
            return !1;
    }
}
var C = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.TODO = 1)] = 'TODO'), (e[(e.RESOURCE = 2)] = 'RESOURCE'), (e[(e.RULES = 3)] = 'RULES'), (e[(e.UPDATES = 4)] = 'UPDATES'), e;
})({});
