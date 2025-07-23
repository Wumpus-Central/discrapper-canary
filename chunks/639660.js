(n.d(t, { Z: () => j }), n(539854), n(388685));
var r = n(255367),
    o = n(793030),
    i = n(442837),
    l = n(704215),
    s = n(243778),
    a = n(430824),
    c = n(232062),
    u = n(618460),
    d = n(105529),
    m = n(800869),
    p = n(309945),
    f = n(234368),
    _ = n(981631),
    x = n(93841),
    v = n(388032),
    g = n(106180);
function b() {
    return (0, r.jsx)('div', {
        className: g.staffContainer,
        children: (0, r.jsx)(o.xv, {
            variant: 'text-sm/medium',
            children: v.intl.string(x.default.l9n4QU)
        })
    });
}
function j(e) {
    let { guildId: t } = e,
        n = (0, i.e7)([a.Z], () => {
            var e;
            return (null == (e = a.Z.getGuild(t)) ? void 0 : e.features.has(_.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        j = (0, c.W)(t, 'GuildPowerupNotificationContainer'),
        E = [];
    (E.push(l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK), j && E.push(l.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL));
    let h = (0, u.Z)(t),
        [C, I] = (0, s.US)(E),
        N =
            h.length > 0
                ? (0, r.jsx)(p.Z, {
                      guildId: t,
                      powerups: h
                  })
                : C === l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK
                  ? (0, r.jsx)(m.Z, { markAsDismissed: I })
                  : C === l.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL
                    ? (0, r.jsx)(d.Z, {
                          guildId: t,
                          perk: f.rm.ENHANCED_ROLE_COLORS,
                          markAsDismissed: I
                      })
                    : void 0;
    return null != N || n
        ? (0, r.jsxs)('div', {
              className: g.container,
              children: [
                  (0, r.jsx)(o.xv, {
                      variant: 'eyebrow',
                      color: 'text-secondary',
                      children: v.intl.string(x.default['3FRira'])
                  }),
                  n && (0, r.jsx)(b, {}),
                  N
              ]
          })
        : null;
}
