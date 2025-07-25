(n.d(t, { Z: () => h }), n(539854), n(388685));
var r = n(255367),
    o = n(793030),
    i = n(442837),
    s = n(704215),
    l = n(243778),
    a = n(430824),
    c = n(232062),
    u = n(618460),
    d = n(105529),
    p = n(800869),
    m = n(366751),
    f = n(309945),
    _ = n(385902),
    x = n(234368),
    v = n(981631),
    g = n(93841),
    b = n(388032),
    j = n(106180);
function E() {
    return (0, r.jsx)('div', {
        className: j.staffContainer,
        children: (0, r.jsx)(o.xv, {
            variant: 'text-sm/medium',
            children: b.intl.string(g.default.l9n4QU)
        })
    });
}
function h(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([a.Z], () => {
            var e;
            return (null == (e = a.Z.getGuild(t)) ? void 0 : e.features.has(v.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        h = (0, u.Z)(t),
        C = h.length > 0,
        { shouldShow: I, notificationConfig: N } = (0, _._)(t, 'GuildPowerupNotificationContainer'),
        Z = [];
    I && Z.push(s.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
    let [O, P] = (0, l.ZT)(Z, t),
        T = null != O && null != N,
        w = (0, c.W)(t, 'GuildPowerupNotificationContainer'),
        S = [];
    T || C || (S.push(s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK), w && S.push(s.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL));
    let [y, A] = (0, l.US)(S),
        R = ((e) => {
            let n = [];
            return (
                C &&
                    n.push(
                        (0, r.jsx)(
                            f.Z,
                            {
                                guildId: t,
                                powerups: h
                            },
                            'expiring-powerups'
                        )
                    ),
                T &&
                    n.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                notificationConfig: N,
                                markAsDismissed: (e) => {
                                    P(e);
                                }
                            },
                            'rollback-notification'
                        )
                    ),
                null != e &&
                    (e === s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK
                        ? n.push((0, r.jsx)(p.Z, { markAsDismissed: A }, 'info-card'))
                        : e === s.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL &&
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
        })(y);
    return 0 !== R.length || n
        ? (0, r.jsxs)('div', {
              className: j.container,
              children: [
                  (0, r.jsx)(o.xv, {
                      variant: 'eyebrow',
                      color: 'text-secondary',
                      children: b.intl.string(g.default['3FRira'])
                  }),
                  n && (0, r.jsx)(E, {}),
                  R.map((e) => e)
              ]
          })
        : null;
}
