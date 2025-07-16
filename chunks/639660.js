(n.d(t, { Z: () => h }), n(539854), n(388685));
var r = n(255367),
    i = n(793030),
    o = n(442837),
    a = n(704215),
    s = n(243778),
    l = n(430824),
    c = n(232062),
    d = n(618460),
    u = n(105529),
    p = n(800869),
    m = n(309945),
    _ = n(234368),
    f = n(981631),
    x = n(93841),
    b = n(388032),
    v = n(106180);
function g() {
    return (0, r.jsx)('div', {
        className: v.staffContainer,
        children: (0, r.jsx)(i.xv, {
            variant: 'text-sm/medium',
            children: b.intl.string(x.default.l9n4QU)
        })
    });
}
function h(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([l.Z], () => {
            var e;
            return (null == (e = l.Z.getGuild(t)) ? void 0 : e.features.has(f.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        h = (0, c.W)(t, 'GuildPowerupNotificationContainer'),
        j = [];
    (j.push(a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK), h && j.push(a.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL));
    let E = (0, d.Z)(t),
        [C, N] = (0, s.US)(j),
        I =
            E.length > 0
                ? (0, r.jsx)(m.Z, {
                      guildId: t,
                      powerups: E
                  })
                : C === a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK
                  ? (0, r.jsx)(p.Z, { markAsDismissed: N })
                  : C === a.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL
                    ? (0, r.jsx)(u.Z, {
                          guildId: t,
                          perk: _.r.ENHANCED_ROLE_COLORS,
                          markAsDismissed: N
                      })
                    : void 0;
    return null != I || n
        ? (0, r.jsxs)('div', {
              className: v.container,
              children: [
                  (0, r.jsx)(i.xv, {
                      variant: 'eyebrow',
                      color: 'text-secondary',
                      children: b.intl.string(x.default['3FRira'])
                  }),
                  n && (0, r.jsx)(g, {}),
                  I
              ]
          })
        : null;
}
