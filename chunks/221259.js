i.d(n, {
    IG: () => E,
    JK: () => N,
    ZA: () => b,
    _m: () => u,
    ft: () => L,
    yN: () => S,
}),
    i(388685);
var t = i(399606),
    a = i(87051),
    d = i(592125),
    s = i(9156),
    o = i(621600),
    r = i(423589),
    c = i(113449),
    l = i(686660),
    _ = i(981631),
    g = i(490897),
    h = i(526761);
function b(e) {
    let n = (0, t.e7)([s.ZP], () => s.ZP.resolveUnreadSetting(e)),
        i = (0, t.e7)([s.ZP], () => s.ZP.resolvedMessageNotifications(e));
    return {
        unread: n,
        notification: i,
        preset: (0, l.gs)(n, i),
    };
}
function S(e) {
    let n = (0, t.Wu)([s.ZP], () =>
            (0, r.OD)(s.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [i, a] = (0, t.Wu)([s.ZP, d.Z], () => {
            let i = d.Z.getChannel(e.parent_id);
            return null != i && n.includes(i.id)
                ? ["parent", (0, l.p1)((0, l.gs)(s.ZP.resolveUnreadSetting(i), s.ZP.resolvedMessageNotifications(i)))]
                : [
                      "guild",
                      (0, l.p1)(
                          (0, l.gs)(s.ZP.getGuildUnreadSetting(e.guild_id), s.ZP.getMessageNotifications(e.guild_id)),
                      ),
                  ];
        }, [e.guild_id, e.parent_id, n]);
    return {
        inherited: !n.includes(e.id),
        inheritedFrom: i,
        inheritedPreset: a,
    };
}
function u(e, n, i) {
    let t = s.ZP.getChannelIdFlags(e, n);
    i === l.s8.ALL_MESSAGES
        ? a.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                  message_notifications: _.bL.ALL_MESSAGES,
                  flags: (0, c.pq)(t, h.ic.UNREADS_ALL_MESSAGES),
              },
              o.ZB.PresetAll,
          )
        : i === l.s8.MENTIONS
          ? a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: _.bL.ONLY_MENTIONS,
                    flags: (0, c.pq)(t, h.ic.UNREADS_ONLY_MENTIONS),
                },
                o.ZB.PresetMentions,
            )
          : i === l.s8.NOTHING &&
            a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: _.bL.NO_MESSAGES,
                    flags: (0, c.pq)(t, h.ic.UNREADS_ONLY_MENTIONS),
                },
                o.ZB.PresetNothing,
            );
}
function N(e, n) {
    a.Z.updateChannelOverrideSettings(
        e,
        n,
        {
            message_notifications: _.bL.NULL,
            flags: (0, c.YF)(s.ZP.getChannelIdFlags(e, n)),
        },
        o.ZB.PresetDefault,
    );
}
function E(e, n, i) {
    let t = s.ZP.getChannelIdFlags(e, n);
    a.Z.updateChannelOverrideSettings(
        e,
        n,
        { flags: (0, c.pq)(t, i === g.i.ALL_MESSAGES ? h.ic.UNREADS_ALL_MESSAGES : h.ic.UNREADS_ONLY_MENTIONS) },
        o.UE.unreads(i),
    );
}
function L(e, n, i) {
    a.Z.updateChannelOverrideSettings(e, n, { message_notifications: i }, o.UE.notifications(i));
}
