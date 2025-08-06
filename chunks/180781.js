n.d(t, { Z: () => m });
var i = n(255367);
n(73800);
var a = n(442837),
    o = n(755721),
    r = n(481060),
    l = n(906732),
    c = n(48217),
    s = n(26323),
    d = n(430824),
    u = n(914010),
    f = n(981631),
    _ = n(30513),
    g = n(388032),
    p = n(273233);
function m(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: m, banner: N } = e,
        x = (0, a.e7)([u.Z], () => u.Z.getGuildId()),
        h = (0, a.e7)([d.Z], () => d.Z.getGuild(x)),
        { analyticsLocations: A } = (0, l.ZP)();
    return null == h || h.features.has(f.oNc.ANIMATED_BANNER) || (!m && h.features.has(f.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: p.container,
              children: [
                  (0, i.jsx)(r.$Eu, {
                      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: p.guildBoostingIcon
                  }),
                  (0, i.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: g.intl.string(g.t['56M7xc'])
                  }),
                  (0, i.jsx)(o.zx, {
                      look: o.zx.Looks.LINK,
                      color: o.zx.Colors.LINK,
                      className: p.subscribeButton,
                      onClick: () => {
                          if (null == h) return;
                          let e = {
                              section: t,
                              page: n,
                              object: f.qAy.UPSELL_HEADER
                          };
                          null != N
                              ? (0, c.c)({
                                    analyticsLocations: A,
                                    analyticsLocation: e,
                                    guild: h,
                                    isGIF: m,
                                    banner: N
                                })
                              : (0, s.Z)({
                                    analyticsLocations: A,
                                    analyticsSourceLocation: e,
                                    guild: h,
                                    perks: m ? (0, _.zC)() : (0, _.XO)()
                                });
                      },
                      children: g.intl.string(g.t.WUHdZW)
                  })
              ]
          });
}
