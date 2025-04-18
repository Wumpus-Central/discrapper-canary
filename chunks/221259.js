i.d(e, {
    IG: () => E,
    JK: () => h,
    ZA: () => N,
    _m: () => L,
    ft: () => b,
    yN: () => u
}),
    i(388685);
var n = i(399606),
    s = i(87051),
    a = i(592125),
    r = i(9156),
    l = i(621600),
    d = i(423589),
    g = i(113449),
    c = i(686660),
    o = i(981631),
    S = i(490897),
    _ = i(526761);
function N(t) {
    let e = (0, n.e7)([r.ZP], () => r.ZP.resolveUnreadSetting(t)),
        i = (0, n.e7)([r.ZP], () => r.ZP.resolvedMessageNotifications(t));
    return {
        unread: e,
        notification: i,
        preset: (0, c.gs)(e, i)
    };
}
function u(t) {
    let e = (0, n.Wu)([r.ZP], () =>
            (0, d.OD)(r.ZP.getChannelOverrides(t.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [i, s] = (0, n.Wu)(
            [r.ZP, a.Z],
            () => {
                let i = a.Z.getChannel(t.parent_id);
                return null != i && e.includes(i.id) ? ['parent', (0, c.p1)((0, c.gs)(r.ZP.resolveUnreadSetting(i), r.ZP.resolvedMessageNotifications(i)))] : ['guild', (0, c.p1)((0, c.gs)(r.ZP.getGuildUnreadSetting(t.guild_id), r.ZP.getMessageNotifications(t.guild_id)))];
            },
            [t.guild_id, t.parent_id, e]
        );
    return {
        inherited: !e.includes(t.id),
        inheritedFrom: i,
        inheritedPreset: s
    };
}
function L(t, e, i) {
    let n = r.ZP.getChannelIdFlags(t, e);
    i === c.s8.ALL_MESSAGES
        ? s.Z.updateChannelOverrideSettings(
              t,
              e,
              {
                  message_notifications: o.bL.ALL_MESSAGES,
                  flags: (0, g.pq)(n, _.ic.UNREADS_ALL_MESSAGES)
              },
              l.ZB.PresetAll
          )
        : i === c.s8.MENTIONS
          ? s.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: o.bL.ONLY_MENTIONS,
                    flags: (0, g.pq)(n, _.ic.UNREADS_ONLY_MENTIONS)
                },
                l.ZB.PresetMentions
            )
          : i === c.s8.NOTHING &&
            s.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: o.bL.NO_MESSAGES,
                    flags: (0, g.pq)(n, _.ic.UNREADS_ONLY_MENTIONS)
                },
                l.ZB.PresetNothing
            );
}
function h(t, e) {
    s.Z.updateChannelOverrideSettings(
        t,
        e,
        {
            message_notifications: o.bL.NULL,
            flags: (0, g.YF)(r.ZP.getChannelIdFlags(t, e))
        },
        l.ZB.PresetDefault
    );
}
function E(t, e, i) {
    let n = r.ZP.getChannelIdFlags(t, e);
    s.Z.updateChannelOverrideSettings(t, e, { flags: (0, g.pq)(n, i === S.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS) }, l.UE.unreads(i));
}
function b(t, e, i) {
    s.Z.updateChannelOverrideSettings(t, e, { message_notifications: i }, l.UE.notifications(i));
}
