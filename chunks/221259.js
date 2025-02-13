e.d(i, {
    IG: () => E,
    JK: () => N,
    ZA: () => u,
    _m: () => h,
    ft: () => b,
    yN: () => L
}),
    e(47120);
var n = e(399606),
    s = e(87051),
    l = e(592125),
    a = e(9156),
    r = e(621600),
    d = e(423589),
    g = e(113449),
    c = e(686660),
    o = e(981631),
    S = e(490897),
    _ = e(526761);
function u(t) {
    let i = (0, n.e7)([a.ZP], () => a.ZP.resolveUnreadSetting(t)),
        e = (0, n.e7)([a.ZP], () => a.ZP.resolvedMessageNotifications(t));
    return {
        unread: i,
        notification: e,
        preset: (0, c.gs)(i, e)
    };
}
function L(t) {
    let i = (0, n.Wu)([a.ZP], () =>
            (0, d.OD)(a.ZP.getChannelOverrides(t.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [e, s] = (0, n.Wu)(
            [a.ZP, l.Z],
            () => {
                let e = l.Z.getChannel(t.parent_id);
                return null != e && i.includes(e.id) ? ['parent', (0, c.p1)((0, c.gs)(a.ZP.resolveUnreadSetting(e), a.ZP.resolvedMessageNotifications(e)))] : ['guild', (0, c.p1)((0, c.gs)(a.ZP.getGuildUnreadSetting(t.guild_id), a.ZP.getMessageNotifications(t.guild_id)))];
            },
            [t.guild_id, t.parent_id, i]
        );
    return {
        inherited: !i.includes(t.id),
        inheritedFrom: e,
        inheritedPreset: s
    };
}
function h(t, i, e) {
    let n = a.ZP.getChannelIdFlags(t, i);
    e === c.s8.ALL_MESSAGES
        ? s.Z.updateChannelOverrideSettings(
              t,
              i,
              {
                  message_notifications: o.bL.ALL_MESSAGES,
                  flags: (0, g.pq)(n, _.ic.UNREADS_ALL_MESSAGES)
              },
              r.ZB.PresetAll
          )
        : e === c.s8.MENTIONS
          ? s.Z.updateChannelOverrideSettings(
                t,
                i,
                {
                    message_notifications: o.bL.ONLY_MENTIONS,
                    flags: (0, g.pq)(n, _.ic.UNREADS_ONLY_MENTIONS)
                },
                r.ZB.PresetMentions
            )
          : e === c.s8.NOTHING &&
            s.Z.updateChannelOverrideSettings(
                t,
                i,
                {
                    message_notifications: o.bL.NO_MESSAGES,
                    flags: (0, g.pq)(n, _.ic.UNREADS_ONLY_MENTIONS)
                },
                r.ZB.PresetNothing
            );
}
function N(t, i) {
    s.Z.updateChannelOverrideSettings(
        t,
        i,
        {
            message_notifications: o.bL.NULL,
            flags: (0, g.YF)(a.ZP.getChannelIdFlags(t, i))
        },
        r.ZB.PresetDefault
    );
}
function E(t, i, e) {
    let n = a.ZP.getChannelIdFlags(t, i);
    s.Z.updateChannelOverrideSettings(t, i, { flags: (0, g.pq)(n, e === S.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS) }, r.UE.unreads(e));
}
function b(t, i, e) {
    s.Z.updateChannelOverrideSettings(t, i, { message_notifications: e }, r.UE.notifications(e));
}
