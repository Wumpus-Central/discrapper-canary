t.d(n, {
    IG: function () {
        return f;
    },
    JK: function () {
        return p;
    },
    ZA: function () {
        return h;
    },
    _m: function () {
        return b;
    },
    ft: function () {
        return m;
    },
    yN: function () {
        return S;
    }
}),
    t(47120);
var i = t(399606),
    a = t(87051),
    c = t(592125),
    o = t(9156),
    r = t(621600),
    s = t(423589),
    d = t(113449),
    l = t(686660),
    _ = t(981631),
    u = t(490897),
    g = t(526761);
function h(e) {
    let n = (0, i.e7)([o.ZP], () => o.ZP.resolveUnreadSetting(e)),
        t = (0, i.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(e));
    return {
        unread: n,
        notification: t,
        preset: (0, l.gs)(n, t)
    };
}
function S(e) {
    let n = (0, i.Wu)([o.ZP], () =>
            (0, s.OD)(o.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [t, a] = (0, i.Wu)(
            [o.ZP, c.Z],
            () => {
                let t = c.Z.getChannel(e.parent_id);
                return null != t && n.includes(t.id) ? ['parent', (0, l.p1)((0, l.gs)(o.ZP.resolveUnreadSetting(t), o.ZP.resolvedMessageNotifications(t)))] : ['guild', (0, l.p1)((0, l.gs)(o.ZP.getGuildUnreadSetting(e.guild_id), o.ZP.getMessageNotifications(e.guild_id)))];
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
    let i = o.ZP.getChannelIdFlags(e, n);
    t === l.s8.ALL_MESSAGES
        ? a.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                  message_notifications: _.bL.ALL_MESSAGES,
                  flags: (0, d.pq)(i, g.ic.UNREADS_ALL_MESSAGES)
              },
              r.ZB.PresetAll
          )
        : t === l.s8.MENTIONS
          ? a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: _.bL.ONLY_MENTIONS,
                    flags: (0, d.pq)(i, g.ic.UNREADS_ONLY_MENTIONS)
                },
                r.ZB.PresetMentions
            )
          : t === l.s8.NOTHING &&
            a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: _.bL.NO_MESSAGES,
                    flags: (0, d.pq)(i, g.ic.UNREADS_ONLY_MENTIONS)
                },
                r.ZB.PresetNothing
            );
}
function p(e, n) {
    a.Z.updateChannelOverrideSettings(
        e,
        n,
        {
            message_notifications: _.bL.NULL,
            flags: (0, d.YF)(o.ZP.getChannelIdFlags(e, n))
        },
        r.ZB.PresetDefault
    );
}
function f(e, n, t) {
    let i = o.ZP.getChannelIdFlags(e, n);
    a.Z.updateChannelOverrideSettings(e, n, { flags: (0, d.pq)(i, t === u.i.ALL_MESSAGES ? g.ic.UNREADS_ALL_MESSAGES : g.ic.UNREADS_ONLY_MENTIONS) }, r.UE.unreads(t));
}
function m(e, n, t) {
    a.Z.updateChannelOverrideSettings(e, n, { message_notifications: t }, r.UE.notifications(t));
}
