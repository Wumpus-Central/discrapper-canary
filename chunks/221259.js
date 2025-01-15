n.d(e, {
    IG: function () {
        return N;
    },
    JK: function () {
        return E;
    },
    ZA: function () {
        return S;
    },
    _m: function () {
        return h;
    },
    ft: function () {
        return M;
    },
    yN: function () {
        return L;
    }
}),
    n(47120);
var i = n(399606),
    s = n(87051),
    r = n(592125),
    l = n(9156),
    a = n(621600),
    d = n(423589),
    o = n(113449),
    u = n(686660),
    c = n(981631),
    g = n(490897),
    _ = n(526761);
function S(t) {
    let e = (0, i.e7)([l.ZP], () => l.ZP.resolveUnreadSetting(t)),
        n = (0, i.e7)([l.ZP], () => l.ZP.resolvedMessageNotifications(t));
    return {
        unread: e,
        notification: n,
        preset: (0, u.gs)(e, n)
    };
}
function L(t) {
    let e = (0, i.Wu)([l.ZP], () =>
            (0, d.OD)(l.ZP.getChannelOverrides(t.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [n, s] = (0, i.Wu)(
            [l.ZP, r.Z],
            () => {
                let n = r.Z.getChannel(t.parent_id);
                return null != n && e.includes(n.id) ? ['parent', (0, u.p1)((0, u.gs)(l.ZP.resolveUnreadSetting(n), l.ZP.resolvedMessageNotifications(n)))] : ['guild', (0, u.p1)((0, u.gs)(l.ZP.getGuildUnreadSetting(t.guild_id), l.ZP.getMessageNotifications(t.guild_id)))];
            },
            [t.guild_id, t.parent_id, e]
        );
    return {
        inherited: !e.includes(t.id),
        inheritedFrom: n,
        inheritedPreset: s
    };
}
function h(t, e, n) {
    let i = l.ZP.getChannelIdFlags(t, e);
    n === u.s8.ALL_MESSAGES
        ? s.Z.updateChannelOverrideSettings(
              t,
              e,
              {
                  message_notifications: c.bL.ALL_MESSAGES,
                  flags: (0, o.pq)(i, _.ic.UNREADS_ALL_MESSAGES)
              },
              a.ZB.PresetAll
          )
        : n === u.s8.MENTIONS
          ? s.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: c.bL.ONLY_MENTIONS,
                    flags: (0, o.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
                },
                a.ZB.PresetMentions
            )
          : n === u.s8.NOTHING &&
            s.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: c.bL.NO_MESSAGES,
                    flags: (0, o.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
                },
                a.ZB.PresetNothing
            );
}
function E(t, e) {
    s.Z.updateChannelOverrideSettings(
        t,
        e,
        {
            message_notifications: c.bL.NULL,
            flags: (0, o.YF)(l.ZP.getChannelIdFlags(t, e))
        },
        a.ZB.PresetDefault
    );
}
function N(t, e, n) {
    let i = l.ZP.getChannelIdFlags(t, e);
    s.Z.updateChannelOverrideSettings(t, e, { flags: (0, o.pq)(i, n === g.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS) }, a.UE.unreads(n));
}
function M(t, e, n) {
    s.Z.updateChannelOverrideSettings(t, e, { message_notifications: n }, a.UE.notifications(n));
}
