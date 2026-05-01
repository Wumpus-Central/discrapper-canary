"use strict";
n.d(t, {
    CW: () => m,
    Fi: () => u,
    Fn: () => y,
    Ic: () => v,
    K5: () => b,
    Mu: () => E,
    NewMemberActionTypes: () => g,
    RR: () => I,
    Rc: () => R,
    SM: () => h,
    Xu: () => T,
    Y4: () => S,
    Yt: () => O,
    _7: () => f,
    dl: () => c,
    jJ: () => C,
    kh: () => _,
    kk: () => A,
    oW: () => p,
    oc: () => d,
    xr: () => N,
});
var i,
    r,
    s = n(734057),
    a = n(403362),
    o = n(488926),
    l = n(652215);
let u = 7,
    c = 300,
    d = 7,
    _ = 60,
    f = 5,
    h = 1,
    p = 30,
    E = 200,
    m = 7;
var g = (((i = {})[(i.VIEW = 0)] = "VIEW"), (i[(i.CHAT = 1)] = "CHAT"), i);
function A(e) {
    return {
        channelId: e.channel_id,
        actionType: e.action_type,
        title: e.title,
        description: e.description,
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function I(e) {
    return {
        channelId: e.channel_id,
        title: e.title,
        description: e.description ?? "",
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function T(e) {
    if (null == e) return null;
    let { welcome_message: t, new_member_actions: n, resource_channels: i, enabled: r } = e,
        o = { authorIds: t.author_ids, message: t.message };
    return {
        welcomeMessage: o,
        newMemberActions: n.filter((e) => (0, a.Vq)(s.A.getChannel(e.channel_id))).map(A),
        resourceChannels: i.filter((e) => (0, a.Vq)(s.A.getChannel(e.channel_id))).map(I),
        enabled: r,
    };
}
function S(e, t) {
    if (null == t) return null;
    let { welcomeMessage: n, newMemberActions: i, resourceChannels: r, enabled: o } = t,
        l = { author_ids: n?.authorIds ?? [], message: n?.message ?? "" };
    return {
        guild_id: e,
        welcome_message: l,
        new_member_actions: (i ?? [])
            .filter((e) => (0, a.Vq)(s.A.getChannel(e.channelId)))
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
            .filter((e) => (0, a.Vq)(s.A.getChannel(e.channelId)))
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
let N = (e) => {
    if (null == e) return null;
    let t = {};
    for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
    return t;
};
function y(e) {
    return (
        null == e ||
        ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)))
    );
}
function C(e) {
    return (
        null == e ||
        (!!y(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)))
    );
}
function v(e) {
    if (null == e) return !1;
    if (C(e)) return !0;
    if (
        e.welcomeMessage?.message == null ||
        e.welcomeMessage.message.length < u ||
        e.welcomeMessage?.authorIds == null ||
        0 === e.welcomeMessage.authorIds.length ||
        null == e.newMemberActions ||
        e.newMemberActions.length < 3
    )
        return !1;
    if (null != e.newMemberActions)
        for (let t of e.newMemberActions) {
            let e = s.A.getChannel(t.channelId);
            if (null == e || !o.MJ(l.xBc.VIEW_CHANNEL, e)) return !1;
        }
    return !0;
}
function O(e) {
    return e.type === l.rbe.GUILD_TEXT && !o.MJ(l.xBc.SEND_MESSAGES, e) && o.MJ(l.xBc.VIEW_CHANNEL, e);
}
function R(e) {
    switch (e.type) {
        case l.rbe.GUILD_TEXT:
        case l.rbe.GUILD_ANNOUNCEMENT:
        case l.rbe.GUILD_FORUM:
        case l.rbe.GUILD_MEDIA:
            return o.MJ(l.xBc.VIEW_CHANNEL, e);
        default:
            return !1;
    }
}
var b =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.TODO = 1)] = "TODO"),
    (r[(r.RESOURCE = 2)] = "RESOURCE"),
    (r[(r.RULES = 3)] = "RULES"),
    (r[(r.UPDATES = 4)] = "UPDATES"),
    r);
