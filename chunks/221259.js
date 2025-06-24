n.d(e, {
    IG: () => L,
    JK: () => E,
    ZA: () => S,
    _m: () => h,
    ft: () => N,
    yN: () => f
}),
    n(388685);
var i = n(399606),
    l = n(87051),
    r = n(592125),
    s = n(9156),
    a = n(621600),
    o = n(423589),
    d = n(113449),
    u = n(686660),
    c = n(981631),
    g = n(490897),
    _ = n(526761);
function S(t) {
    let e = (0, i.e7)([s.ZP], () => s.ZP.resolveUnreadSetting(t)),
        n = (0, i.e7)([s.ZP], () => s.ZP.resolvedMessageNotifications(t));
    return {
        unread: e,
        notification: n,
        preset: (0, u.gs)(e, n)
    };
}
function f(t) {
    let e = (0, i.Wu)([s.ZP], () =>
            (0, o.OD)(s.ZP.getChannelOverrides(t.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [n, l] = (0, i.Wu)(
            [s.ZP, r.Z],
            () => {
                let n = r.Z.getChannel(t.parent_id);
                return null != n && e.includes(n.id) ? ['parent', (0, u.p1)((0, u.gs)(s.ZP.resolveUnreadSetting(n), s.ZP.resolvedMessageNotifications(n)))] : ['guild', (0, u.p1)((0, u.gs)(s.ZP.getGuildUnreadSetting(t.guild_id), s.ZP.getMessageNotifications(t.guild_id)))];
            },
            [t.guild_id, t.parent_id, e]
        );
    return {
        inherited: !e.includes(t.id),
        inheritedFrom: n,
        inheritedPreset: l
    };
}
function h(t, e, n) {
    let i = s.ZP.getChannelIdFlags(t, e);
    n === u.s8.ALL_MESSAGES
        ? l.Z.updateChannelOverrideSettings(
              t,
              e,
              {
                  message_notifications: c.bL.ALL_MESSAGES,
                  flags: (0, d.pq)(i, _.ic.UNREADS_ALL_MESSAGES)
              },
              a.ZB.PresetAll
          )
        : n === u.s8.MENTIONS
          ? l.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: c.bL.ONLY_MENTIONS,
                    flags: (0, d.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
                },
                a.ZB.PresetMentions
            )
          : n === u.s8.NOTHING &&
            l.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: c.bL.NO_MESSAGES,
                    flags: (0, d.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
                },
                a.ZB.PresetNothing
            );
}
function E(t, e) {
    l.Z.updateChannelOverrideSettings(
        t,
        e,
        {
            message_notifications: c.bL.NULL,
            flags: (0, d.YF)(s.ZP.getChannelIdFlags(t, e))
        },
        a.ZB.PresetDefault
    );
}
function L(t, e, n) {
    let i = s.ZP.getChannelIdFlags(t, e);
    l.Z.updateChannelOverrideSettings(t, e, { flags: (0, d.pq)(i, n === g.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS) }, a.UE.unreads(n));
}
function N(t, e, n) {
    l.Z.updateChannelOverrideSettings(t, e, { message_notifications: n }, a.UE.notifications(n));
}
