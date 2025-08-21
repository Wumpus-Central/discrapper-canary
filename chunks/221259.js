t.d(n, {
    IG: () => p,
    JK: () => N,
    ZA: () => S,
    _m: () => b,
    ft: () => E,
    yN: () => h,
}),
    t(388685);
var i = t(399606),
    a = t(87051),
    o = t(592125),
    s = t(9156),
    _ = t(621600),
    r = t(423589),
    c = t(113449),
    l = t(686660),
    d = t(981631),
    g = t(490897),
    u = t(526761);
function S(e) {
    let n = (0, i.e7)([s.ZP], () => s.ZP.resolveUnreadSetting(e)),
        t = (0, i.e7)([s.ZP], () => s.ZP.resolvedMessageNotifications(e));
    return {
        unread: n,
        notification: t,
        preset: (0, l.gs)(n, t),
    };
}
function h(e) {
    let n = (0, i.Wu)([s.ZP], () =>
            (0, r.OD)(s.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [t, a] = (0, i.Wu)([s.ZP, o.Z], () => {
            let t = o.Z.getChannel(e.parent_id);
            return null != t && n.includes(t.id)
                ? ["parent", (0, l.p1)((0, l.gs)(s.ZP.resolveUnreadSetting(t), s.ZP.resolvedMessageNotifications(t)))]
                : [
                      "guild",
                      (0, l.p1)(
                          (0, l.gs)(s.ZP.getGuildUnreadSetting(e.guild_id), s.ZP.getMessageNotifications(e.guild_id)),
                      ),
                  ];
        }, [e.guild_id, e.parent_id, n]);
    return {
        inherited: !n.includes(e.id),
        inheritedFrom: t,
        inheritedPreset: a,
    };
}
function b(e, n, t) {
    let i = s.ZP.getChannelIdFlags(e, n);
    t === l.s8.ALL_MESSAGES
        ? a.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                  message_notifications: d.bL.ALL_MESSAGES,
                  flags: (0, c.pq)(i, u.ic.UNREADS_ALL_MESSAGES),
              },
              _.ZB.PresetAll,
          )
        : t === l.s8.MENTIONS
          ? a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: d.bL.ONLY_MENTIONS,
                    flags: (0, c.pq)(i, u.ic.UNREADS_ONLY_MENTIONS),
                },
                _.ZB.PresetMentions,
            )
          : t === l.s8.NOTHING &&
            a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: d.bL.NO_MESSAGES,
                    flags: (0, c.pq)(i, u.ic.UNREADS_ONLY_MENTIONS),
                },
                _.ZB.PresetNothing,
            );
}
function N(e, n) {
    a.Z.updateChannelOverrideSettings(
        e,
        n,
        {
            message_notifications: d.bL.NULL,
            flags: (0, c.YF)(s.ZP.getChannelIdFlags(e, n)),
        },
        _.ZB.PresetDefault,
    );
}
function p(e, n, t) {
    let i = s.ZP.getChannelIdFlags(e, n);
    a.Z.updateChannelOverrideSettings(
        e,
        n,
        { flags: (0, c.pq)(i, t === g.i.ALL_MESSAGES ? u.ic.UNREADS_ALL_MESSAGES : u.ic.UNREADS_ONLY_MENTIONS) },
        _.UE.unreads(t),
    );
}
function E(e, n, t) {
    a.Z.updateChannelOverrideSettings(e, n, { message_notifications: t }, _.UE.notifications(t));
}
