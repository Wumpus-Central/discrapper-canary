t.d(n, {
    IG: () => p,
    JK: () => N,
    ZA: () => u,
    _m: () => b,
    ft: () => L,
    yN: () => S
}),
    t(47120);
var i = t(399606),
    a = t(87051),
    o = t(592125),
    d = t(9156),
    c = t(621600),
    s = t(423589),
    r = t(113449),
    _ = t(686660),
    l = t(981631),
    g = t(490897),
    h = t(526761);
function u(e) {
    let n = (0, i.e7)([d.ZP], () => d.ZP.resolveUnreadSetting(e)),
        t = (0, i.e7)([d.ZP], () => d.ZP.resolvedMessageNotifications(e));
    return {
        unread: n,
        notification: t,
        preset: (0, _.gs)(n, t)
    };
}
function S(e) {
    let n = (0, i.Wu)([d.ZP], () =>
            (0, s.OD)(d.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [t, a] = (0, i.Wu)(
            [d.ZP, o.Z],
            () => {
                let t = o.Z.getChannel(e.parent_id);
                return null != t && n.includes(t.id) ? ['parent', (0, _.p1)((0, _.gs)(d.ZP.resolveUnreadSetting(t), d.ZP.resolvedMessageNotifications(t)))] : ['guild', (0, _.p1)((0, _.gs)(d.ZP.getGuildUnreadSetting(e.guild_id), d.ZP.getMessageNotifications(e.guild_id)))];
            },
            [e.guild_id, e.parent_id, n]
        );
    return {
        inherited: !n.includes(e.id),
        inheritedFrom: t,
        inheritedPreset: a
    };
}
function b(e, n, t) {
    let i = d.ZP.getChannelIdFlags(e, n);
    t === _.s8.ALL_MESSAGES
        ? a.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                  message_notifications: l.bL.ALL_MESSAGES,
                  flags: (0, r.pq)(i, h.ic.UNREADS_ALL_MESSAGES)
              },
              c.ZB.PresetAll
          )
        : t === _.s8.MENTIONS
          ? a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: l.bL.ONLY_MENTIONS,
                    flags: (0, r.pq)(i, h.ic.UNREADS_ONLY_MENTIONS)
                },
                c.ZB.PresetMentions
            )
          : t === _.s8.NOTHING &&
            a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: l.bL.NO_MESSAGES,
                    flags: (0, r.pq)(i, h.ic.UNREADS_ONLY_MENTIONS)
                },
                c.ZB.PresetNothing
            );
}
function N(e, n) {
    a.Z.updateChannelOverrideSettings(
        e,
        n,
        {
            message_notifications: l.bL.NULL,
            flags: (0, r.YF)(d.ZP.getChannelIdFlags(e, n))
        },
        c.ZB.PresetDefault
    );
}
function p(e, n, t) {
    let i = d.ZP.getChannelIdFlags(e, n);
    a.Z.updateChannelOverrideSettings(e, n, { flags: (0, r.pq)(i, t === g.i.ALL_MESSAGES ? h.ic.UNREADS_ALL_MESSAGES : h.ic.UNREADS_ONLY_MENTIONS) }, c.UE.unreads(t));
}
function L(e, n, t) {
    a.Z.updateChannelOverrideSettings(e, n, { message_notifications: t }, c.UE.notifications(t));
}
