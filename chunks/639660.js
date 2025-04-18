t.d(n, { Z: () => f }), t(388685);
var r = t(200651),
    o = t(793030),
    i = t(442837),
    s = t(704215),
    a = t(243778),
    l = t(430824),
    c = t(618460),
    d = t(800869),
    u = t(309945),
    p = t(981631),
    m = t(696672),
    x = t(388032),
    _ = t(484038);
function v() {
    return (0, r.jsx)('div', {
        className: _.staffContainer,
        children: (0, r.jsx)(o.xv, {
            variant: 'text-sm/medium',
            children: x.NW.string(m.Z.l9n4QU)
        })
    });
}
function f(e) {
    let { guildId: n } = e,
        t = (0, i.e7)([l.Z], () => {
            var e;
            return (null == (e = l.Z.getGuild(n)) ? void 0 : e.hasFeature(p.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        [f, g] = (0, a.US)([s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK], void 0, !1),
        j = (0, c.Z)(n),
        h = null != f && f === s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        b =
            j.length > 0
                ? (0, r.jsx)(u.Z, {
                      guildId: n,
                      powerups: j
                  })
                : h
                  ? (0, r.jsx)(d.Z, { markAsDismissed: g })
                  : void 0;
    return null != b || t
        ? (0, r.jsxs)('div', {
              className: _.container,
              children: [
                  (0, r.jsx)(o.xv, {
                      variant: 'eyebrow',
                      children: x.NW.string(m.Z['3FRira'])
                  }),
                  t && (0, r.jsx)(v, {}),
                  b
              ]
          })
        : null;
}
