n.d(t, {
    IG: () => E,
    JK: () => g,
    ZA: () => p,
    _m: () => m,
    ft: () => b,
    yN: () => h,
}),
    n(388685);
var r = n(399606),
    i = n(87051),
    o = n(592125),
    a = n(9156),
    s = n(621600),
    l = n(423589),
    c = n(113449),
    u = n(686660),
    d = n(981631),
    f = n(490897),
    _ = n(526761);
function p(e) {
    let t = (0, r.e7)([a.ZP], () => a.ZP.resolveUnreadSetting(e)),
        n = (0, r.e7)([a.ZP], () => a.ZP.resolvedMessageNotifications(e));
    return {
        unread: t,
        notification: n,
        preset: (0, u.gs)(t, n),
    };
}
function h(e) {
    let t = (0, r.Wu)([a.ZP], () =>
            (0, l.OD)(a.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [n, i] = (0, r.Wu)([a.ZP, o.Z], () => {
            let n = o.Z.getChannel(e.parent_id);
            return null != n && t.includes(n.id)
                ? ["parent", (0, u.p1)((0, u.gs)(a.ZP.resolveUnreadSetting(n), a.ZP.resolvedMessageNotifications(n)))]
                : [
                      "guild",
                      (0, u.p1)(
                          (0, u.gs)(a.ZP.getGuildUnreadSetting(e.guild_id), a.ZP.getMessageNotifications(e.guild_id)),
                      ),
                  ];
        }, [e.guild_id, e.parent_id, t]);
    return {
        inherited: !t.includes(e.id),
        inheritedFrom: n,
        inheritedPreset: i,
    };
}
function m(e, t, n) {
    let r = a.ZP.getChannelIdFlags(e, t);
    n === u.s8.ALL_MESSAGES
        ? i.Z.updateChannelOverrideSettings(
              e,
              t,
              {
                  message_notifications: d.bL.ALL_MESSAGES,
                  flags: (0, c.pq)(r, _.ic.UNREADS_ALL_MESSAGES),
              },
              s.ZB.PresetAll,
          )
        : n === u.s8.MENTIONS
          ? i.Z.updateChannelOverrideSettings(
                e,
                t,
                {
                    message_notifications: d.bL.ONLY_MENTIONS,
                    flags: (0, c.pq)(r, _.ic.UNREADS_ONLY_MENTIONS),
                },
                s.ZB.PresetMentions,
            )
          : n === u.s8.NOTHING &&
            i.Z.updateChannelOverrideSettings(
                e,
                t,
                {
                    message_notifications: d.bL.NO_MESSAGES,
                    flags: (0, c.pq)(r, _.ic.UNREADS_ONLY_MENTIONS),
                },
                s.ZB.PresetNothing,
            );
}
function g(e, t) {
    i.Z.updateChannelOverrideSettings(
        e,
        t,
        {
            message_notifications: d.bL.NULL,
            flags: (0, c.YF)(a.ZP.getChannelIdFlags(e, t)),
        },
        s.ZB.PresetDefault,
    );
}
function E(e, t, n) {
    let r = a.ZP.getChannelIdFlags(e, t);
    i.Z.updateChannelOverrideSettings(
        e,
        t,
        { flags: (0, c.pq)(r, n === f.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS) },
        s.UE.unreads(n),
    );
}
function b(e, t, n) {
    i.Z.updateChannelOverrideSettings(e, t, { message_notifications: n }, s.UE.notifications(n));
}
