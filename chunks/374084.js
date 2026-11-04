var i,
    r,
    a = n(734057),
    s = n(403362),
    l = n(488926),
    o = n(652215),
    d = (((i = {})[(i.VIEW = 0)] = "VIEW"), (i[(i.CHAT = 1)] = "CHAT"), i);
function c(e) {
    return {
        channelId: e.channel_id,
        actionType: e.action_type,
        title: e.title,
        description: e.description,
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function u(e) {
    return {
        channelId: e.channel_id,
        title: e.title,
        description: e.description ?? "",
        emoji: null == e.emoji ? null : { id: e.emoji.id, name: e.emoji.name, animated: e.emoji.animated },
        icon: e.icon ?? null,
    };
}
function _(e) {
    return (
        null == e ||
        ((null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)))
    );
}
function E(e) {
    return (
        null == e ||
        (!!_(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)))
    );
}
var A =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.TODO = 1)] = "TODO"),
    (r[(r.RESOURCE = 2)] = "RESOURCE"),
    (r[(r.UPDATES = 3)] = "UPDATES"),
    r);
n.d(
    t,
    {},
    {
        Fn: _,
        Ic: function (e) {
            if (null == e) return !1;
            if (E(e)) return !0;
            if (
                e.welcomeMessage?.message == null ||
                e.welcomeMessage.message.length < 7 ||
                e.welcomeMessage?.authorIds == null ||
                0 === e.welcomeMessage.authorIds.length
            )
                return !1;
            if (null != e.newMemberActions)
                for (let t of e.newMemberActions) {
                    let e = a.A.getChannel(t.channelId);
                    if (null == e || !l.MJ(o.xBc.VIEW_CHANNEL, e)) return !1;
                }
            return !0;
        },
        K5: A,
        NewMemberActionTypes: d,
        RR: u,
        Rc: function (e) {
            switch (e.type) {
                case o.rbe.GUILD_TEXT:
                case o.rbe.GUILD_ANNOUNCEMENT:
                case o.rbe.GUILD_FORUM:
                case o.rbe.GUILD_MEDIA:
                    return l.MJ(o.xBc.VIEW_CHANNEL, e);
                default:
                    return !1;
            }
        },
        Xu: function (e) {
            if (null == e) return null;
            let { welcome_message: t, new_member_actions: n, resource_channels: i, enabled: r } = e,
                l = { authorIds: t.author_ids, message: t.message };
            return {
                welcomeMessage: l,
                newMemberActions: n.filter((e) => (0, s.Vq)(a.A.getChannel(e.channel_id))).map(c),
                resourceChannels: i.filter((e) => (0, s.Vq)(a.A.getChannel(e.channel_id))).map(u),
                enabled: r,
            };
        },
        Y4: function (e, t) {
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
        },
        Yt: function (e) {
            return e.type === o.rbe.GUILD_TEXT && !l.MJ(o.xBc.SEND_MESSAGES, e) && l.MJ(o.xBc.VIEW_CHANNEL, e);
        },
        jJ: E,
        kk: c,
        xr: function (e) {
            if (null == e) return null;
            let t = {};
            for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
            return t;
        },
    },
);
