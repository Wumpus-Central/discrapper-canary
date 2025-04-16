n.d(e, { Z: () => x });
var i = n(200651);
n(192379);
var o = n(442837),
    a = n(481060),
    r = n(906732),
    l = n(48217),
    s = n(26323),
    c = n(430824),
    d = n(914010),
    u = n(709586),
    _ = n(981631),
    g = n(30513),
    h = n(388032),
    m = n(273233);
function x(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: x, banner: N } = t,
        f = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        p = (0, o.e7)([c.Z], () => c.Z.getGuild(f)),
        { analyticsLocations: b } = (0, r.ZP)();
    return null == p || p.hasFeature(_.oNc.ANIMATED_BANNER) || (!x && p.hasFeature(_.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(u.Z, { className: m.guildBoostingIcon }),
                  (0, i.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: h.NW.string(h.t['56M7xc'])
                  }),
                  (0, i.jsx)(a.zxk, {
                      look: a.zxk.Looks.LINK,
                      color: a.zxk.Colors.LINK,
                      className: m.subscribeButton,
                      onClick: () => {
                          if (null == p) return;
                          let t = {
                              section: e,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != N
                              ? (0, l.c)({
                                    analyticsLocations: b,
                                    analyticsLocation: t,
                                    guild: p,
                                    isGIF: x,
                                    banner: N
                                })
                              : (0, s.Z)({
                                    analyticsLocations: b,
                                    analyticsSourceLocation: t,
                                    guild: p,
                                    perks: x ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: h.NW.string(h.t.WUHdZW)
                  })
              ]
          });
}
