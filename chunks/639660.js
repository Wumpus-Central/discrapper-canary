(n.d(t, { Z: () => E }), n(539854), n(388685));
var r = n(255367),
    o = n(793030),
    i = n(442837),
    l = n(704215),
    s = n(243778),
    a = n(430824),
    c = n(232062),
    u = n(618460),
    d = n(105529),
    p = n(800869),
    m = n(366751),
    f = n(309945),
    _ = n(385902),
    x = n(234368),
    g = n(981631),
    v = n(93841),
    b = n(388032),
    j = n(106180);
function h() {
    return (0, r.jsx)('div', {
        className: j.staffContainer,
        children: (0, r.jsx)(o.xv, {
            variant: 'text-sm/medium',
            children: b.intl.string(v.default.l9n4QU)
        })
    });
}
function E(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([a.Z], () => {
            var e;
            return (null == (e = a.Z.getGuild(t)) ? void 0 : e.features.has(g.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        E = (0, u.Z)(t),
        C = E.length > 0,
        { shouldShow: I, notificationConfig: N } = (0, _._)(t, 'GuildPowerupNotificationContainer'),
        O = [];
    I && O.push(l.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [Z, w] = (0, s.ZT)(O, t),
        P = null != Z && null != N,
        S = (0, c.W)(t, 'GuildPowerupNotificationContainer'),
        y = [];
    P || C || (y.push(l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK), S && y.push(l.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL));
    let [T, A] = (0, s.US)(y),
        R = ((e) => {
            let n = [];
            return (
                C &&
                    n.push(
                        (0, r.jsx)(
                            f.Z,
                            {
                                guildId: t,
                                powerups: E
                            },
                            'expiring-powerups'
                        )
                    ),
                P &&
                    n.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                notificationConfig: N,
                                markAsDismissed: (e) => {
                                    w(e);
                                }
                            },
                            'rollback-notification'
                        )
                    ),
                null != e &&
                    (e === l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK
                        ? n.push((0, r.jsx)(p.Z, { markAsDismissed: A }, 'info-card'))
                        : e === l.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL &&
                          n.push(
                              (0, r.jsx)(
                                  d.Z,
                                  {
                                      guildId: t,
                                      perk: x.rm.ENHANCED_ROLE_COLORS,
                                      markAsDismissed: A
                                  },
                                  'enhanced-role-colors-upsell'
                              )
                          )),
                n
            );
        })(T);
    return 0 !== R.length || n
        ? (0, r.jsxs)('div', {
              className: j.container,
              children: [
                  (0, r.jsx)(o.xv, {
                      variant: 'eyebrow',
                      color: 'text-secondary',
                      children: b.intl.string(v.default['3FRira'])
                  }),
                  n && (0, r.jsx)(h, {}),
                  R.map((e) => e)
              ]
          })
        : null;
}
