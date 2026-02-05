"use strict";
n.d(t, {
    CW: () => m,
    Fi: () => o,
    Fn: () => S,
    Ic: () => C,
    K5: () => R,
    Mu: () => h,
    NewMemberActionTypes: () => g,
    RR: () => A,
    Rc: () => N,
    SM: () => f,
    Xu: () => I,
    Y4: () => T,
    Yt: () => b,
    _7: () => _,
    dl: () => l,
    jJ: () => v,
    kh: () => c,
    kk: () => E,
    oW: () => p,
    oc: () => u,
    xr: () => y,
});
var r = n(734057),
    i = n(403362),
    a = n(488926),
    s = n(652215);
let o = 7,
    l = 300,
    u = 7,
    c = 60,
    d = 3,
    _ = 5,
    f = 1,
    p = 30,
    h = 200,
    m = 7;
var g = (function (e) {
    return (e[(e.VIEW = 0)] = "VIEW"), (e[(e.CHAT = 1)] = "CHAT"), e;
})({});
function E(e) {
    return {
        channelId: e.channel_id,
        actionType: e.action_type,
        title: e.title,
        description: e.description,
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function A(e) {
    return {
        channelId: e.channel_id,
        title: e.title,
        description: e.description ?? "",
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function I(e) {
    if (null == e) return null;
    let { welcome_message: t, new_member_actions: n, resource_channels: a, enabled: s } = e,
        o = { authorIds: t.author_ids, message: t.message };
    return {
        welcomeMessage: o,
        newMemberActions: n.filter((e) => (0, i.Vq)(r.A.getChannel(e.channel_id))).map(E),
        resourceChannels: a.filter((e) => (0, i.Vq)(r.A.getChannel(e.channel_id))).map(A),
        enabled: s,
    };
}
function T(e, t) {
    if (null == t) return null;
    let { welcomeMessage: n, newMemberActions: a, resourceChannels: s, enabled: o } = t,
        l = { author_ids: n?.authorIds ?? [], message: n?.message ?? "" };
    return {
        guild_id: e,
        welcome_message: l,
        new_member_actions: (a ?? [])
            .filter((e) => (0, i.Vq)(r.A.getChannel(e.channelId)))
            .map((e) => ({
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                    id: e.emoji?.id ?? void 0,
                    name: e.emoji?.name ?? void 0,
                    animated: e.emoji?.animated ?? void 0,
                },
                icon: e.icon ?? void 0,
            })),
        resource_channels: (s ?? [])
            .filter((e) => (0, i.Vq)(r.A.getChannel(e.channelId)))
            .map((e) => ({
                channel_id: e.channelId,
                title: e.title,
                description: e.description,
                emoji: {
                    id: e.emoji?.id ?? void 0,
                    name: e.emoji?.name ?? void 0,
                    animated: e.emoji?.animated ?? void 0,
                },
                icon: e.icon ?? void 0,
            })),
        enabled: o,
    };
}
let y = (e) => {
    if (null == e) return null;
    let t = {};
    for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
    return t;
};
function S(e) {
    return (
        null == e ||
        ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)))
    );
}
function v(e) {
    return (
        null == e ||
        (!!S(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)))
    );
}
function C(e) {
    if (null == e) return !1;
    if (v(e)) return !0;
    if (
        e.welcomeMessage?.message == null ||
        e.welcomeMessage.message.length < o ||
        e.welcomeMessage?.authorIds == null ||
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
function b(e) {
    return e.type === s.rbe.GUILD_TEXT && !a.MJ(s.xBc.SEND_MESSAGES, e) && a.MJ(s.xBc.VIEW_CHANNEL, e);
}
function N(e) {
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
var R = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.TODO = 1)] = "TODO"),
        (e[(e.RESOURCE = 2)] = "RESOURCE"),
        (e[(e.RULES = 3)] = "RULES"),
        (e[(e.UPDATES = 4)] = "UPDATES"),
        e
    );
})({});
