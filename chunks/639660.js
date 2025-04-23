t.d(n, { Z: () => v }), t(388685);
var r = t(200651),
    i = t(793030),
    o = t(442837),
    s = t(704215),
    a = t(243778),
    l = t(430824),
    c = t(618460),
    u = t(800869),
    d = t(309945),
    p = t(981631),
    m = t(680278),
    x = t(388032),
    _ = t(106180);
function f() {
    return (0, r.jsx)('div', {
        className: _.staffContainer,
        children: (0, r.jsx)(i.xv, {
            variant: 'text-sm/medium',
            children: x.intl.string(m.default.l9n4QU)
        })
    });
}
function v(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([l.Z], () => {
            var e;
            return (null == (e = l.Z.getGuild(n)) ? void 0 : e.hasFeature(p.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        [v, g] = (0, a.US)([s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK], void 0, !1),
        j = (0, c.Z)(n),
        b = null != v && v === s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        h =
            j.length > 0
                ? (0, r.jsx)(d.Z, {
                      guildId: n,
                      powerups: j
                  })
                : b
                  ? (0, r.jsx)(u.Z, { markAsDismissed: g })
                  : void 0;
    return null != h || t
        ? (0, r.jsxs)('div', {
              className: _.container,
              children: [
                  (0, r.jsx)(i.xv, {
                      variant: 'eyebrow',
                      children: x.intl.string(m.default['3FRira'])
                  }),
                  t && (0, r.jsx)(f, {}),
                  h
              ]
          })
        : null;
}
