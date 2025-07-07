(t.d(n, { Z: () => h }), t(539854), t(388685));
var r = t(255367),
    i = t(793030),
    o = t(442837),
    a = t(704215),
    s = t(243778),
    l = t(430824),
    c = t(232062),
    d = t(618460),
    u = t(105529),
    m = t(800869),
    p = t(309945),
    _ = t(234368),
    f = t(981631),
    x = t(93841),
    b = t(388032),
    g = t(106180);
function v() {
    return (0, r.jsx)('div', {
        className: g.staffContainer,
        children: (0, r.jsx)(i.xv, {
            variant: 'text-sm/medium',
            children: b.intl.string(x.default.l9n4QU)
        })
    });
}
function h(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([l.Z], () => {
            var e;
            return (null == (e = l.Z.getGuild(n)) ? void 0 : e.features.has(f.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        h = (0, c.W)(n, 'GuildPowerupNotificationContainer'),
        j = [];
    (j.push(a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK), h && j.push(a.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL));
    let C = (0, d.Z)(n),
        [E, N] = (0, s.US)(j),
        Z =
            C.length > 0
                ? (0, r.jsx)(p.Z, {
                      guildId: n,
                      powerups: C
                  })
                : E === a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK
                  ? (0, r.jsx)(m.Z, { markAsDismissed: N })
                  : E === a.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL
                    ? (0, r.jsx)(u.Z, {
                          guildId: n,
                          perk: _.r.ENHANCED_ROLE_COLORS,
                          markAsDismissed: N
                      })
                    : void 0;
    return null != Z || t
        ? (0, r.jsxs)('div', {
              className: g.container,
              children: [
                  (0, r.jsx)(i.xv, {
                      variant: 'eyebrow',
                      color: 'text-secondary',
                      children: b.intl.string(x.default['3FRira'])
                  }),
                  t && (0, r.jsx)(v, {}),
                  Z
              ]
          })
        : null;
}
