e.d(i, {
    IG: () => f,
    JK: () => E,
    ZA: () => S,
    _m: () => N,
    ft: () => h,
    yN: () => L,
}),
    e(388685);
var n = e(399606),
    l = e(87051),
    s = e(592125),
    a = e(9156),
    r = e(621600),
    d = e(423589),
    o = e(113449),
    c = e(686660),
    u = e(981631),
    g = e(490897),
    _ = e(526761);
function S(t) {
    let i = (0, n.e7)([a.ZP], () => a.ZP.resolveUnreadSetting(t)),
        e = (0, n.e7)([a.ZP], () => a.ZP.resolvedMessageNotifications(t));
    return {
        unread: i,
        notification: e,
        preset: (0, c.gs)(i, e),
    };
}
function L(t) {
    let i = (0, n.Wu)([a.ZP], () =>
            (0, d.OD)(a.ZP.getChannelOverrides(t.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [e, l] = (0, n.Wu)([a.ZP, s.Z], () => {
            let e = s.Z.getChannel(t.parent_id);
            return null != e && i.includes(e.id)
                ? ["parent", (0, c.p1)((0, c.gs)(a.ZP.resolveUnreadSetting(e), a.ZP.resolvedMessageNotifications(e)))]
                : [
                      "guild",
                      (0, c.p1)(
                          (0, c.gs)(a.ZP.getGuildUnreadSetting(t.guild_id), a.ZP.getMessageNotifications(t.guild_id)),
                      ),
                  ];
        }, [t.guild_id, t.parent_id, i]);
    return {
        inherited: !i.includes(t.id),
        inheritedFrom: e,
        inheritedPreset: l,
    };
}
function N(t, i, e) {
    let n = a.ZP.getChannelIdFlags(t, i);
    e === c.s8.ALL_MESSAGES
        ? l.Z.updateChannelOverrideSettings(
              t,
              i,
              {
                  message_notifications: u.bL.ALL_MESSAGES,
                  flags: (0, o.pq)(n, _.ic.UNREADS_ALL_MESSAGES),
              },
              r.ZB.PresetAll,
          )
        : e === c.s8.MENTIONS
          ? l.Z.updateChannelOverrideSettings(
                t,
                i,
                {
                    message_notifications: u.bL.ONLY_MENTIONS,
                    flags: (0, o.pq)(n, _.ic.UNREADS_ONLY_MENTIONS),
                },
                r.ZB.PresetMentions,
            )
          : e === c.s8.NOTHING &&
            l.Z.updateChannelOverrideSettings(
                t,
                i,
                {
                    message_notifications: u.bL.NO_MESSAGES,
                    flags: (0, o.pq)(n, _.ic.UNREADS_ONLY_MENTIONS),
                },
                r.ZB.PresetNothing,
            );
}
function E(t, i) {
    l.Z.updateChannelOverrideSettings(
        t,
        i,
        {
            message_notifications: u.bL.NULL,
            flags: (0, o.YF)(a.ZP.getChannelIdFlags(t, i)),
        },
        r.ZB.PresetDefault,
    );
}
function f(t, i, e) {
    let n = a.ZP.getChannelIdFlags(t, i);
    l.Z.updateChannelOverrideSettings(
        t,
        i,
        { flags: (0, o.pq)(n, e === g.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS) },
        r.UE.unreads(e),
    );
}
function h(t, i, e) {
    l.Z.updateChannelOverrideSettings(t, i, { message_notifications: e }, r.UE.notifications(e));
}
