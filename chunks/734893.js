r.d(n, {
    HH: function () {
        return T;
    },
    O9: function () {
        return _;
    },
    Vu: function () {
        return E;
    },
    W4: function () {
        return d;
    },
    Wz: function () {
        return f;
    },
    Z3: function () {
        return p;
    },
    ZR: function () {
        return c;
    },
    am: function () {
        return g;
    },
    av: function () {
        return C;
    },
    cq: function () {
        return y;
    },
    j: function () {
        return a;
    },
    k3: function () {
        return R;
    },
    kb: function () {
        return O;
    },
    n: function () {
        return m;
    },
    oi: function () {
        return i;
    },
    pw: function () {
        return A;
    },
    rk: function () {
        return S;
    },
    tB: function () {
        return I;
    },
    uo: function () {
        return N;
    },
    vD: function () {
        return b;
    },
    x3: function () {
        return v;
    }
});
var i,
    a,
    o = r(592125),
    s = r(823379),
    l = r(700785),
    u = r(981631);
let c = 7,
    d = 300,
    f = 7,
    p = 60,
    h = 3,
    _ = 5,
    m = 1,
    g = 30,
    E = 200,
    v = 7;
function y(e) {
    var n;
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
        icon: null !== (n = e.icon) && void 0 !== n ? n : null
    };
}
function b(e) {
    var n, r;
    return {
        channelId: e.channel_id,
        title: e.title,
        description: null !== (n = e.description) && void 0 !== n ? n : '',
        emoji:
            null == e.emoji
                ? null
                : {
                      id: e.emoji.id,
                      name: e.emoji.name,
                      animated: e.emoji.animated
                  },
        icon: null !== (r = e.icon) && void 0 !== r ? r : null
    };
}
function I(e) {
    if (null == e) return null;
    let { welcome_message: n, new_member_actions: r, resource_channels: i, enabled: a } = e,
        l = {
            authorIds: n.author_ids,
            message: n.message
        },
        u = r.filter((e) => (0, s.lm)(o.Z.getChannel(e.channel_id))).map(y);
    return {
        welcomeMessage: l,
        newMemberActions: u,
        resourceChannels: i.filter((e) => (0, s.lm)(o.Z.getChannel(e.channel_id))).map(b),
        enabled: a
    };
}
function T(e, n) {
    var r, i;
    if (null == n) return null;
    let { welcomeMessage: a, newMemberActions: l, resourceChannels: u, enabled: c } = n,
        d = {
            author_ids: null !== (r = null == a ? void 0 : a.authorIds) && void 0 !== r ? r : [],
            message: null !== (i = null == a ? void 0 : a.message) && void 0 !== i ? i : ''
        },
        f = (null != l ? l : [])
            .filter((e) => (0, s.lm)(o.Z.getChannel(e.channelId)))
            .map((e) => {
                var n, r, i, a, o, s, l;
                return {
                    channel_id: e.channelId,
                    action_type: e.actionType,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== a ? a : void 0,
                        name: null !== (o = null === (r = e.emoji) || void 0 === r ? void 0 : r.name) && void 0 !== o ? o : void 0,
                        animated: null !== (s = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== s ? s : void 0
                    },
                    icon: null !== (l = e.icon) && void 0 !== l ? l : void 0
                };
            });
    return {
        guild_id: e,
        welcome_message: d,
        new_member_actions: f,
        resource_channels: (null != u ? u : [])
            .filter((e) => (0, s.lm)(o.Z.getChannel(e.channelId)))
            .map((e) => {
                var n, r, i, a, o, s, l;
                return {
                    channel_id: e.channelId,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== a ? a : void 0,
                        name: null !== (o = null === (r = e.emoji) || void 0 === r ? void 0 : r.name) && void 0 !== o ? o : void 0,
                        animated: null !== (s = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== s ? s : void 0
                    },
                    icon: null !== (l = e.icon) && void 0 !== l ? l : void 0
                };
            }),
        enabled: c
    };
}
!(function (e) {
    (e[(e.VIEW = 0)] = 'VIEW'), (e[(e.CHAT = 1)] = 'CHAT');
})(i || (i = {}));
let S = (e) => {
    if (null == e) return null;
    let n = {};
    for (let r in e.channel_actions) n[r] = e.channel_actions[r].completed;
    return n;
};
function A(e) {
    return null == e || ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0);
}
function C(e) {
    return null == e || (!!A(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0);
}
function N(e) {
    var n, r;
    return null != e && (!!C(e) || ((null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.message) != null && !(e.welcomeMessage.message.length < c) && (null === (r = e.welcomeMessage) || void 0 === r ? void 0 : r.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < h) && !0));
}
function R(e) {
    return e.type === u.d4z.GUILD_TEXT && !l.Uu(u.Plq.SEND_MESSAGES, e) && l.Uu(u.Plq.VIEW_CHANNEL, e);
}
function O(e) {
    switch (e.type) {
        case u.d4z.GUILD_TEXT:
        case u.d4z.GUILD_ANNOUNCEMENT:
        case u.d4z.GUILD_FORUM:
        case u.d4z.GUILD_MEDIA:
            return l.Uu(u.Plq.VIEW_CHANNEL, e);
        default:
            return !1;
    }
}
!(function (e) {
    (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.TODO = 1)] = 'TODO'), (e[(e.RESOURCE = 2)] = 'RESOURCE');
})(a || (a = {}));
