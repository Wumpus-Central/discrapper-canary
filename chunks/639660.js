t.d(n, { Z: () => b }), t(388685);
var r = t(255367),
    i = t(793030),
    o = t(442837),
    a = t(704215),
    s = t(243778),
    l = t(430824),
    c = t(618460),
    d = t(800869),
    u = t(309945),
    p = t(981631),
    m = t(93841),
    _ = t(388032),
    f = t(106180);
function x() {
    return (0, r.jsx)('div', {
        className: f.staffContainer,
        children: (0, r.jsx)(i.xv, {
            variant: 'text-sm/medium',
            children: _.intl.string(m.default.l9n4QU)
        })
    });
}
function b(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([l.Z], () => {
            var e;
            return (null == (e = l.Z.getGuild(n)) ? void 0 : e.hasFeature(p.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        [b, v] = (0, s.US)([a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK], void 0, !1),
        g = (0, c.Z)(n),
        h = null != b && b === a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        j =
            g.length > 0
                ? (0, r.jsx)(u.Z, {
                      guildId: n,
                      powerups: g
                  })
                : h
                  ? (0, r.jsx)(d.Z, { markAsDismissed: v })
                  : void 0;
    return null != j || t
        ? (0, r.jsxs)('div', {
              className: f.container,
              children: [
                  (0, r.jsx)(i.xv, {
                      variant: 'eyebrow',
                      children: _.intl.string(m.default['3FRira'])
                  }),
                  t && (0, r.jsx)(x, {}),
                  j
              ]
          })
        : null;
}
