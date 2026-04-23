n.d(t, {
    CW: () => S,
    Fi: () => o,
    Fn: () => m,
    Ic: () => D,
    K5: () => b,
    Mu: () => T,
    NewMemberActionTypes: () => N,
    RR: () => R,
    Rc: () => g,
    SM: () => I,
    Xu: () => f,
    Y4: () => C,
    Yt: () => h,
    _7: () => u,
    dl: () => E,
    jJ: () => L,
    kh: () => c,
    kk: () => O,
    oW: () => A,
    oc: () => d,
    xr: () => p,
});
var i,
    r,
    a = n(734057),
    s = n(403362),
    _ = n(488926),
    l = n(652215);
let o = 7,
    E = 300,
    d = 7,
    c = 60,
    u = 5,
    I = 1,
    A = 30,
    T = 200,
    S = 7;
var N = (((i = {})[(i.VIEW = 0)] = "VIEW"), (i[(i.CHAT = 1)] = "CHAT"), i);
function O(e) {
    return {
        channelId: e.channel_id,
        actionType: e.action_type,
        title: e.title,
        description: e.description,
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function R(e) {
    return {
        channelId: e.channel_id,
        title: e.title,
        description: e.description ?? "",
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function f(e) {
    if (null == e) return null;
    let { welcome_message: t, new_member_actions: n, resource_channels: i, enabled: r } = e,
        _ = { authorIds: t.author_ids, message: t.message };
    return {
        welcomeMessage: _,
        newMemberActions: n.filter((e) => (0, s.Vq)(a.A.getChannel(e.channel_id))).map(O),
        resourceChannels: i.filter((e) => (0, s.Vq)(a.A.getChannel(e.channel_id))).map(R),
        enabled: r,
    };
}
function C(e, t) {
    if (null == t) return null;
    let { welcomeMessage: n, newMemberActions: i, resourceChannels: r, enabled: _ } = t,
        l = { author_ids: n?.authorIds ?? [], message: n?.message ?? "" };
    return {
        guild_id: e,
        welcome_message: l,
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
        enabled: _,
    };
}
let p = (e) => {
    if (null == e) return null;
    let t = {};
    for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
    return t;
};
function m(e) {
    return (
        null == e ||
        ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)))
    );
}
function L(e) {
    return (
        null == e ||
        (!!m(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)))
    );
}
function D(e) {
    if (null == e) return !1;
    if (L(e)) return !0;
    if (
        e.welcomeMessage?.message == null ||
        e.welcomeMessage.message.length < o ||
        e.welcomeMessage?.authorIds == null ||
        0 === e.welcomeMessage.authorIds.length ||
        null == e.newMemberActions ||
        e.newMemberActions.length < 3
    )
        return !1;
    if (null != e.newMemberActions)
        for (let t of e.newMemberActions) {
            let e = a.A.getChannel(t.channelId);
            if (null == e || !_.MJ(l.xBc.VIEW_CHANNEL, e)) return !1;
        }
    return !0;
}
function h(e) {
    return e.type === l.rbe.GUILD_TEXT && !_.MJ(l.xBc.SEND_MESSAGES, e) && _.MJ(l.xBc.VIEW_CHANNEL, e);
}
function g(e) {
    switch (e.type) {
        case l.rbe.GUILD_TEXT:
        case l.rbe.GUILD_ANNOUNCEMENT:
        case l.rbe.GUILD_FORUM:
        case l.rbe.GUILD_MEDIA:
            return _.MJ(l.xBc.VIEW_CHANNEL, e);
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
