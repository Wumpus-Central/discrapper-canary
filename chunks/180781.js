n.d(e, { Z: () => f });
var i = n(255367);
n(73800);
var o = n(442837),
    a = n(755721),
    r = n(481060),
    l = n(906732),
    s = n(48217),
    d = n(26323),
    c = n(430824),
    u = n(914010),
    _ = n(981631),
    h = n(30513),
    g = n(388032),
    m = n(273233);
function f(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: f, banner: x } = t,
        p = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        N = (0, o.e7)([c.Z], () => c.Z.getGuild(p)),
        { analyticsLocations: v } = (0, l.ZP)();
    return null == N || N.features.has(_.oNc.ANIMATED_BANNER) || (!f && N.features.has(_.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(r.$Eu, {
                      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: m.guildBoostingIcon
                  }),
                  (0, i.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: g.intl.string(g.t['56M7xc'])
                  }),
                  (0, i.jsx)(a.zx, {
                      look: a.zx.Looks.LINK,
                      color: a.zx.Colors.LINK,
                      className: m.subscribeButton,
                      onClick: () => {
                          if (null == N) return;
                          let t = {
                              section: e,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != x
                              ? (0, s.c)({
                                    analyticsLocations: v,
                                    analyticsLocation: t,
                                    guild: N,
                                    isGIF: f,
                                    banner: x
                                })
                              : (0, d.Z)({
                                    analyticsLocations: v,
                                    analyticsSourceLocation: t,
                                    guild: N,
                                    perks: f ? (0, h.zC)() : (0, h.XO)()
                                });
                      },
                      children: g.intl.string(g.t.WUHdZW)
                  })
              ]
          });
}
