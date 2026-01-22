n.d(t, {
    CW: () => m,
    Fi: () => o,
    Fn: () => v,
    Ic: () => I,
    K5: () => N,
    Mu: () => h,
    NewMemberActionTypes: () => g,
    RR: () => b,
    Rc: () => C,
    SM: () => p,
    Xu: () => y,
    Y4: () => O,
    Yt: () => T,
    _7: () => f,
    dl: () => l,
    jJ: () => S,
    kh: () => u,
    kk: () => E,
    oW: () => _,
    oc: () => c,
    xr: () => A,
}),
    n(228524),
    n(896048);
var r = n(734057),
    i = n(403362),
    a = n(488926),
    s = n(652215);
let o = 7,
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
    return (e[(e.VIEW = 0)] = "VIEW"), (e[(e.CHAT = 1)] = "CHAT"), e;
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
                      animated: e.emoji.animated,
                  },
        icon: null != (t = e.icon) ? t : null,
    };
}
function b(e) {
    var t, n;
    return {
        channelId: e.channel_id,
        title: e.title,
        description: null != (t = e.description) ? t : "",
        emoji:
            null == e.emoji
                ? null
                : {
                      id: e.emoji.id,
                      name: e.emoji.name,
                      animated: e.emoji.animated,
                  },
        icon: null != (n = e.icon) ? n : null,
    };
}
function y(e) {
    if (null == e) return null;
    let { welcome_message: t, new_member_actions: n, resource_channels: a, enabled: s } = e,
        o = {
            authorIds: t.author_ids,
            message: t.message,
        };
    return {
        welcomeMessage: o,
        newMemberActions: n.filter((e) => (0, i.Vq)(r.A.getChannel(e.channel_id))).map(E),
        resourceChannels: a.filter((e) => (0, i.Vq)(r.A.getChannel(e.channel_id))).map(b),
        enabled: s,
    };
}
function O(e, t) {
    var n, a;
    if (null == t) return null;
    let { welcomeMessage: s, newMemberActions: o, resourceChannels: l, enabled: c } = t,
        u = {
            author_ids: null != (n = null == s ? void 0 : s.authorIds) ? n : [],
            message: null != (a = null == s ? void 0 : s.message) ? a : "",
        };
    return {
        guild_id: e,
        welcome_message: u,
        new_member_actions: (null != o ? o : [])
            .filter((e) => (0, i.Vq)(r.A.getChannel(e.channelId)))
            .map((e) => {
                var t, n, r, i, a, s, o;
                return {
                    channel_id: e.channelId,
                    action_type: e.actionType,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null != (t = null == (a = e.emoji) ? void 0 : a.id) ? t : void 0,
                        name: null != (n = null == (s = e.emoji) ? void 0 : s.name) ? n : void 0,
                        animated: null != (r = null == (o = e.emoji) ? void 0 : o.animated) ? r : void 0,
                    },
                    icon: null != (i = e.icon) ? i : void 0,
                };
            }),
        resource_channels: (null != l ? l : [])
            .filter((e) => (0, i.Vq)(r.A.getChannel(e.channelId)))
            .map((e) => {
                var t, n, r, i, a, s, o;
                return {
                    channel_id: e.channelId,
                    title: e.title,
                    description: e.description,
                    emoji: {
                        id: null != (t = null == (a = e.emoji) ? void 0 : a.id) ? t : void 0,
                        name: null != (n = null == (s = e.emoji) ? void 0 : s.name) ? n : void 0,
                        animated: null != (r = null == (o = e.emoji) ? void 0 : o.animated) ? r : void 0,
                    },
                    icon: null != (i = e.icon) ? i : void 0,
                };
            }),
        enabled: c,
    };
}
let A = (e) => {
    if (null == e) return null;
    let t = {};
    for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
    return t;
};
function v(e) {
    return (
        null == e ||
        ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)))
    );
}
function S(e) {
    return (
        null == e ||
        (!!v(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)))
    );
}
function I(e) {
    var t, n;
    if (null == e) return !1;
    if (S(e)) return !0;
    if (
        (null == (t = e.welcomeMessage) ? void 0 : t.message) == null ||
        e.welcomeMessage.message.length < o ||
        (null == (n = e.welcomeMessage) ? void 0 : n.authorIds) == null ||
        0 === e.welcomeMessage.authorIds.length ||
        null == e.newMemberActions ||
        e.newMemberActions.length < d
    )
        return !1;
    if (null != e.newMemberActions)
        for (let t of e.newMemberActions) {
            let e = r.A.getChannel(t.channelId);
            if (null == e || !a.MJ(s.xBc.VIEW_CHANNEL, e)) return !1;
        }
    return !0;
}
function T(e) {
    return e.type === s.rbe.GUILD_TEXT && !a.MJ(s.xBc.SEND_MESSAGES, e) && a.MJ(s.xBc.VIEW_CHANNEL, e);
}
function C(e) {
    switch (e.type) {
        case s.rbe.GUILD_TEXT:
        case s.rbe.GUILD_ANNOUNCEMENT:
        case s.rbe.GUILD_FORUM:
        case s.rbe.GUILD_MEDIA:
            return a.MJ(s.xBc.VIEW_CHANNEL, e);
        default:
            return !1;
    }
}
var N = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.TODO = 1)] = "TODO"),
        (e[(e.RESOURCE = 2)] = "RESOURCE"),
        (e[(e.RULES = 3)] = "RULES"),
        (e[(e.UPDATES = 4)] = "UPDATES"),
        e
    );
})({});
