(n.d(e, {
    IG: () => N,
    JK: () => h,
    ZA: () => f,
    _m: () => E,
    ft: () => b,
    yN: () => S
}),
    n(388685));
var i = n(399606),
    l = n(87051),
    a = n(592125),
    r = n(9156),
    s = n(621600),
    o = n(423589),
    d = n(113449),
    c = n(686660),
    u = n(981631),
    g = n(490897),
    _ = n(526761);
function f(t) {
    let e = (0, i.e7)([r.ZP], () => r.ZP.resolveUnreadSetting(t)),
        n = (0, i.e7)([r.ZP], () => r.ZP.resolvedMessageNotifications(t));
    return {
        unread: e,
        notification: n,
        preset: (0, c.gs)(e, n)
    };
}
function S(t) {
    let e = (0, i.Wu)([r.ZP], () =>
            (0, o.OD)(r.ZP.getChannelOverrides(t.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [n, l] = (0, i.Wu)(
            [r.ZP, a.Z],
            () => {
                let n = a.Z.getChannel(t.parent_id);
                return null != n && e.includes(n.id) ? ['parent', (0, c.p1)((0, c.gs)(r.ZP.resolveUnreadSetting(n), r.ZP.resolvedMessageNotifications(n)))] : ['guild', (0, c.p1)((0, c.gs)(r.ZP.getGuildUnreadSetting(t.guild_id), r.ZP.getMessageNotifications(t.guild_id)))];
            },
            [t.guild_id, t.parent_id, e]
        );
    return {
        inherited: !e.includes(t.id),
        inheritedFrom: n,
        inheritedPreset: l
    };
}
function E(t, e, n) {
    let i = r.ZP.getChannelIdFlags(t, e);
    n === c.s8.ALL_MESSAGES
        ? l.Z.updateChannelOverrideSettings(
              t,
              e,
              {
                  message_notifications: u.bL.ALL_MESSAGES,
                  flags: (0, d.pq)(i, _.ic.UNREADS_ALL_MESSAGES)
              },
              s.ZB.PresetAll
          )
        : n === c.s8.MENTIONS
          ? l.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: u.bL.ONLY_MENTIONS,
                    flags: (0, d.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
                },
                s.ZB.PresetMentions
            )
          : n === c.s8.NOTHING &&
            l.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: u.bL.NO_MESSAGES,
                    flags: (0, d.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
                },
                s.ZB.PresetNothing
            );
}
function h(t, e) {
    l.Z.updateChannelOverrideSettings(
        t,
        e,
        {
            message_notifications: u.bL.NULL,
            flags: (0, d.YF)(r.ZP.getChannelIdFlags(t, e))
        },
        s.ZB.PresetDefault
    );
}
function N(t, e, n) {
    let i = r.ZP.getChannelIdFlags(t, e);
    l.Z.updateChannelOverrideSettings(t, e, { flags: (0, d.pq)(i, n === g.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS) }, s.UE.unreads(n));
}
function b(t, e, n) {
    l.Z.updateChannelOverrideSettings(t, e, { message_notifications: n }, s.UE.notifications(n));
}
