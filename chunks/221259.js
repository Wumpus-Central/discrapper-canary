n.d(t, {
    IG: () => p,
    JK: () => f,
    ZA: () => h,
    _m: () => b,
    ft: () => N,
    yN: () => S
}),
    n(388685);
var i = n(399606),
    a = n(87051),
    r = n(592125),
    o = n(9156),
    c = n(621600),
    s = n(423589),
    l = n(113449),
    d = n(686660),
    _ = n(981631),
    g = n(490897),
    u = n(526761);
function h(e) {
    let t = (0, i.e7)([o.ZP], () => o.ZP.resolveUnreadSetting(e)),
        n = (0, i.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(e));
    return {
        unread: t,
        notification: n,
        preset: (0, d.gs)(t, n)
    };
}
function S(e) {
    let t = (0, i.Wu)([o.ZP], () =>
            (0, s.OD)(o.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [n, a] = (0, i.Wu)(
            [o.ZP, r.Z],
            () => {
                let n = r.Z.getChannel(e.parent_id);
                return null != n && t.includes(n.id) ? ['parent', (0, d.p1)((0, d.gs)(o.ZP.resolveUnreadSetting(n), o.ZP.resolvedMessageNotifications(n)))] : ['guild', (0, d.p1)((0, d.gs)(o.ZP.getGuildUnreadSetting(e.guild_id), o.ZP.getMessageNotifications(e.guild_id)))];
            },
            [e.guild_id, e.parent_id, t]
        );
    return {
        inherited: !t.includes(e.id),
        inheritedFrom: n,
        inheritedPreset: a
    };
}
function b(e, t, n) {
    let i = o.ZP.getChannelIdFlags(e, t);
    n === d.s8.ALL_MESSAGES
        ? a.Z.updateChannelOverrideSettings(
              e,
              t,
              {
                  message_notifications: _.bL.ALL_MESSAGES,
                  flags: (0, l.pq)(i, u.ic.UNREADS_ALL_MESSAGES)
              },
              c.ZB.PresetAll
          )
        : n === d.s8.MENTIONS
          ? a.Z.updateChannelOverrideSettings(
                e,
                t,
                {
                    message_notifications: _.bL.ONLY_MENTIONS,
                    flags: (0, l.pq)(i, u.ic.UNREADS_ONLY_MENTIONS)
                },
                c.ZB.PresetMentions
            )
          : n === d.s8.NOTHING &&
            a.Z.updateChannelOverrideSettings(
                e,
                t,
                {
                    message_notifications: _.bL.NO_MESSAGES,
                    flags: (0, l.pq)(i, u.ic.UNREADS_ONLY_MENTIONS)
                },
                c.ZB.PresetNothing
            );
}
function f(e, t) {
    a.Z.updateChannelOverrideSettings(
        e,
        t,
        {
            message_notifications: _.bL.NULL,
            flags: (0, l.YF)(o.ZP.getChannelIdFlags(e, t))
        },
        c.ZB.PresetDefault
    );
}
function p(e, t, n) {
    let i = o.ZP.getChannelIdFlags(e, t);
    a.Z.updateChannelOverrideSettings(e, t, { flags: (0, l.pq)(i, n === g.i.ALL_MESSAGES ? u.ic.UNREADS_ALL_MESSAGES : u.ic.UNREADS_ONLY_MENTIONS) }, c.UE.unreads(n));
}
function N(e, t, n) {
    a.Z.updateChannelOverrideSettings(e, t, { message_notifications: n }, c.UE.notifications(n));
}
