i.d(n, {
    IG: () => E,
    JK: () => N,
    ZA: () => S,
    _m: () => b,
    ft: () => L,
    yN: () => u,
}),
    i(388685);
var t = i(399606),
    a = i(87051),
    s = i(592125),
    r = i(9156),
    _ = i(621600),
    o = i(423589),
    d = i(113449),
    c = i(686660),
    l = i(981631),
    g = i(490897),
    h = i(526761);
function S(e) {
    let n = (0, t.e7)([r.ZP], () => r.ZP.resolveUnreadSetting(e)),
        i = (0, t.e7)([r.ZP], () => r.ZP.resolvedMessageNotifications(e));
    return {
        unread: n,
        notification: i,
        preset: (0, c.gs)(n, i),
    };
}
function u(e) {
    let n = (0, t.Wu)([r.ZP], () =>
            (0, o.OD)(r.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [i, a] = (0, t.Wu)([r.ZP, s.Z], () => {
            let i = s.Z.getChannel(e.parent_id);
            return null != i && n.includes(i.id)
                ? ["parent", (0, c.p1)((0, c.gs)(r.ZP.resolveUnreadSetting(i), r.ZP.resolvedMessageNotifications(i)))]
                : [
                      "guild",
                      (0, c.p1)(
                          (0, c.gs)(r.ZP.getGuildUnreadSetting(e.guild_id), r.ZP.getMessageNotifications(e.guild_id)),
                      ),
                  ];
        }, [e.guild_id, e.parent_id, n]);
    return {
        inherited: !n.includes(e.id),
        inheritedFrom: i,
        inheritedPreset: a,
    };
}
function b(e, n, i) {
    let t = r.ZP.getChannelIdFlags(e, n);
    i === c.s8.ALL_MESSAGES
        ? a.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                  message_notifications: l.bL.ALL_MESSAGES,
                  flags: (0, d.pq)(t, h.ic.UNREADS_ALL_MESSAGES),
              },
              _.ZB.PresetAll,
          )
        : i === c.s8.MENTIONS
          ? a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: l.bL.ONLY_MENTIONS,
                    flags: (0, d.pq)(t, h.ic.UNREADS_ONLY_MENTIONS),
                },
                _.ZB.PresetMentions,
            )
          : i === c.s8.NOTHING &&
            a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: l.bL.NO_MESSAGES,
                    flags: (0, d.pq)(t, h.ic.UNREADS_ONLY_MENTIONS),
                },
                _.ZB.PresetNothing,
            );
}
function N(e, n) {
    a.Z.updateChannelOverrideSettings(
        e,
        n,
        {
            message_notifications: l.bL.NULL,
            flags: (0, d.YF)(r.ZP.getChannelIdFlags(e, n)),
        },
        _.ZB.PresetDefault,
    );
}
function E(e, n, i) {
    let t = r.ZP.getChannelIdFlags(e, n);
    a.Z.updateChannelOverrideSettings(
        e,
        n,
        { flags: (0, d.pq)(t, i === g.i.ALL_MESSAGES ? h.ic.UNREADS_ALL_MESSAGES : h.ic.UNREADS_ONLY_MENTIONS) },
        _.UE.unreads(i),
    );
}
function L(e, n, i) {
    a.Z.updateChannelOverrideSettings(e, n, { message_notifications: i }, _.UE.notifications(i));
}
