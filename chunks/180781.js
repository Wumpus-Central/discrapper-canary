n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    a = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    u = n(914010),
    d = n(709586),
    _ = n(981631),
    g = n(30513),
    f = n(388032),
    b = n(273233);
function m(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: m, banner: p } = e,
        h = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        N = (0, o.e7)([s.Z], () => s.Z.getGuild(h)),
        { analyticsLocations: T } = (0, a.ZP)();
    return null == N || N.hasFeature(_.oNc.ANIMATED_BANNER) || (!m && N.hasFeature(_.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: b.container,
              children: [
                  (0, i.jsx)(d.Z, { className: b.guildBoostingIcon }),
                  (0, i.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: f.NW.string(f.t['56M7xc'])
                  }),
                  (0, i.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      color: r.zxk.Colors.LINK,
                      className: b.subscribeButton,
                      onClick: () => {
                          if (null == N) return;
                          let e = {
                              section: t,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, l.c)({
                                    analyticsLocations: T,
                                    analyticsLocation: e,
                                    guild: N,
                                    isGIF: m,
                                    banner: p
                                })
                              : (0, c.Z)({
                                    analyticsLocations: T,
                                    analyticsSourceLocation: e,
                                    guild: N,
                                    perks: m ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: f.NW.string(f.t.WUHdZW)
                  })
              ]
          });
}
