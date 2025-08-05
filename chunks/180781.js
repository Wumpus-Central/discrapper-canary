n.d(e, { Z: () => b });
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(755721),
    a = n(481060),
    l = n(906732),
    c = n(48217),
    s = n(26323),
    u = n(430824),
    _ = n(914010),
    d = n(981631),
    f = n(30513),
    m = n(388032),
    p = n(273233);
function b(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: b, banner: g } = t,
        v = (0, r.e7)([_.Z], () => _.Z.getGuildId()),
        C = (0, r.e7)([u.Z], () => u.Z.getGuild(v)),
        { analyticsLocations: x } = (0, l.ZP)();
    return null == C || C.features.has(d.oNc.ANIMATED_BANNER) || (!b && C.features.has(d.oNc.BANNER))
        ? null
        : (0, o.jsxs)('div', {
              className: p.container,
              children: [
                  (0, o.jsx)(a.$Eu, {
                      color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: p.guildBoostingIcon
                  }),
                  (0, o.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: m.intl.string(m.t['56M7xc'])
                  }),
                  (0, o.jsx)(i.zx, {
                      look: i.zx.Looks.LINK,
                      color: i.zx.Colors.LINK,
                      className: p.subscribeButton,
                      onClick: () => {
                          if (null == C) return;
                          let t = {
                              section: e,
                              page: n,
                              object: d.qAy.UPSELL_HEADER
                          };
                          null != g
                              ? (0, c.c)({
                                    analyticsLocations: x,
                                    analyticsLocation: t,
                                    guild: C,
                                    isGIF: b,
                                    banner: g
                                })
                              : (0, s.Z)({
                                    analyticsLocations: x,
                                    analyticsSourceLocation: t,
                                    guild: C,
                                    perks: b ? (0, f.zC)() : (0, f.XO)()
                                });
                      },
                      children: m.intl.string(m.t.WUHdZW)
                  })
              ]
          });
}
