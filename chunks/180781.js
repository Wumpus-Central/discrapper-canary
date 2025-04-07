i.d(t, { Z: () => f });
var n = i(200651);
i(192379);
var o = i(442837),
    r = i(481060),
    a = i(906732),
    l = i(48217),
    s = i(26323),
    c = i(430824),
    d = i(914010),
    u = i(709586),
    _ = i(981631),
    g = i(30513),
    h = i(388032),
    b = i(273233);
function f(e) {
    let { analyticsSection: t, analyticsPage: i, isGIF: f, banner: m } = e,
        p = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        N = (0, o.e7)([c.Z], () => c.Z.getGuild(p)),
        { analyticsLocations: T } = (0, a.ZP)();
    return null == N || N.hasFeature(_.oNc.ANIMATED_BANNER) || (!f && N.hasFeature(_.oNc.BANNER))
        ? null
        : (0, n.jsxs)('div', {
              className: b.container,
              children: [
                  (0, n.jsx)(u.Z, { className: b.guildBoostingIcon }),
                  (0, n.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: h.NW.string(h.t['56M7xc'])
                  }),
                  (0, n.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      color: r.zxk.Colors.LINK,
                      className: b.subscribeButton,
                      onClick: () => {
                          if (null == N) return;
                          let e = {
                              section: t,
                              page: i,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != m
                              ? (0, l.c)({
                                    analyticsLocations: T,
                                    analyticsLocation: e,
                                    guild: N,
                                    isGIF: f,
                                    banner: m
                                })
                              : (0, s.Z)({
                                    analyticsLocations: T,
                                    analyticsSourceLocation: e,
                                    guild: N,
                                    perks: f ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: h.NW.string(h.t.WUHdZW)
                  })
              ]
          });
}
