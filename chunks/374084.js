"use strict";
n.d(t, {
    CW: () => f,
    Fi: () => d,
    Fn: () => C,
    Ic: () => O,
    K5: () => D,
    Mu: () => I,
    NewMemberActionTypes: () => p,
    RR: () => m,
    Rc: () => y,
    SM: () => A,
    Xu: () => g,
    Y4: () => S,
    Yt: () => L,
    _7: () => E,
    dl: () => c,
    jJ: () => R,
    kh: () => _,
    kk: () => T,
    oW: () => h,
    oc: () => u,
    xr: () => N,
});
var i,
    r,
    a = n(734057),
    s = n(403362),
    l = n(488926),
    o = n(652215);
let d = 7,
    c = 300,
    u = 7,
    _ = 60,
    E = 5,
    A = 1,
    h = 30,
    I = 200,
    f = 7;
var p = (((i = {})[(i.VIEW = 0)] = "VIEW"), (i[(i.CHAT = 1)] = "CHAT"), i);
function T(e) {
    return {
        channelId: e.channel_id,
        actionType: e.action_type,
        title: e.title,
        description: e.description,
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function m(e) {
    return {
        channelId: e.channel_id,
        title: e.title,
        description: e.description ?? "",
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function g(e) {
    if (null == e) return null;
    let { welcome_message: t, new_member_actions: n, resource_channels: i, enabled: r } = e,
        l = { authorIds: t.author_ids, message: t.message };
    return {
        welcomeMessage: l,
        newMemberActions: n.filter((e) => (0, s.Vq)(a.A.getChannel(e.channel_id))).map(T),
        resourceChannels: i.filter((e) => (0, s.Vq)(a.A.getChannel(e.channel_id))).map(m),
        enabled: r,
    };
}
function S(e, t) {
    if (null == t) return null;
    let { welcomeMessage: n, newMemberActions: i, resourceChannels: r, enabled: l } = t,
        o = { author_ids: n?.authorIds ?? [], message: n?.message ?? "" };
    return {
        guild_id: e,
        welcome_message: o,
        new_member_actions: (i ?? [])
            .filter((e) => (0, s.Vq)(a.A.getChannel(e.channelId)))
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
        resource_channels: (r ?? [])
            .filter((e) => (0, s.Vq)(a.A.getChannel(e.channelId)))
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
        enabled: l,
    };
}
function N(e) {
    if (null == e) return null;
    let t = {};
    for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
    return t;
}
function C(e) {
    return (
        null == e ||
        ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)))
    );
}
function R(e) {
    return (
        null == e ||
        (!!C(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)))
    );
}
function O(e) {
    if (null == e) return !1;
    if (R(e)) return !0;
    if (
        e.welcomeMessage?.message == null ||
        e.welcomeMessage.message.length < d ||
        e.welcomeMessage?.authorIds == null ||
        0 === e.welcomeMessage.authorIds.length ||
        null == e.newMemberActions ||
        e.newMemberActions.length < 3
    )
        return !1;
    if (null != e.newMemberActions)
        for (let t of e.newMemberActions) {
            let e = a.A.getChannel(t.channelId);
            if (null == e || !l.MJ(o.xBc.VIEW_CHANNEL, e)) return !1;
        }
    return !0;
}
function L(e) {
    return e.type === o.rbe.GUILD_TEXT && !l.MJ(o.xBc.SEND_MESSAGES, e) && l.MJ(o.xBc.VIEW_CHANNEL, e);
}
function y(e) {
    switch (e.type) {
        case o.rbe.GUILD_TEXT:
        case o.rbe.GUILD_ANNOUNCEMENT:
        case o.rbe.GUILD_FORUM:
        case o.rbe.GUILD_MEDIA:
            return l.MJ(o.xBc.VIEW_CHANNEL, e);
        default:
            return !1;
    }
}
var D =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.TODO = 1)] = "TODO"),
    (r[(r.RESOURCE = 2)] = "RESOURCE"),
    (r[(r.RULES = 3)] = "RULES"),
    (r[(r.UPDATES = 4)] = "UPDATES"),
    r);
