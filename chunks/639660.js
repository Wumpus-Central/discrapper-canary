t.d(n, { Z: () => j }), t(388685);
var r = t(200651),
    o = t(793030),
    s = t(442837),
    i = t(704215),
    a = t(692547),
    l = t(243778),
    c = t(430824),
    d = t(665786),
    u = t(618460),
    p = t(800869),
    m = t(309945),
    x = t(981631),
    _ = t(680278),
    v = t(388032),
    f = t(106180);
function g() {
    return (0, r.jsxs)('div', {
        className: f.staffContainer,
        children: [
            (0, r.jsxs)('div', {
                className: f.staffHeader,
                children: [
                    (0, r.jsx)(d.Z, { color: a.Z.colors.TEXT_BRAND.css }),
                    (0, r.jsx)(o.X6, {
                        variant: 'heading-sm/semibold',
                        children: v.NW.string(_.Z.x0O1Gx)
                    })
                ]
            }),
            (0, r.jsx)(o.xv, {
                variant: 'text-sm/medium',
                children: v.NW.string(_.Z.qRFJ0d)
            })
        ]
    });
}
function j(e) {
    let { guildId: n } = e,
        t = (0, s.e7)([c.Z], () => {
            var e;
            return (null == (e = c.Z.getGuild(n)) ? void 0 : e.hasFeature(x.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0;
        }),
        [a, d] = (0, l.US)([i.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK], void 0, !1),
        j = (0, u.Z)(n),
        h = null != a && a === i.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        b =
            j.length > 0
                ? (0, r.jsx)(m.Z, {
                      guildId: n,
                      powerups: j
                  })
                : h
                  ? (0, r.jsx)(p.Z, { markAsDismissed: d })
                  : void 0;
    return null != b || t
        ? (0, r.jsxs)('div', {
              className: f.container,
              children: [
                  (0, r.jsx)(o.xv, {
                      variant: 'eyebrow',
                      children: v.NW.string(_.Z['3FRira'])
                  }),
                  t && (0, r.jsx)(g, {}),
                  b
              ]
          })
        : null;
}
