n.d(e, { Z: () => h });
var o = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    u = n(914010),
    d = n(709586),
    _ = n(981631),
    g = n(30513),
    m = n(388032),
    f = n(273233);
function h(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: h, banner: p } = t,
        N = (0, i.e7)([u.Z], () => u.Z.getGuildId()),
        b = (0, i.e7)([s.Z], () => s.Z.getGuild(N)),
        { analyticsLocations: x } = (0, a.ZP)();
    return null == b || b.hasFeature(_.oNc.ANIMATED_BANNER) || (!h && b.hasFeature(_.oNc.BANNER))
        ? null
        : (0, o.jsxs)('div', {
              className: f.container,
              children: [
                  (0, o.jsx)(d.Z, { className: f.guildBoostingIcon }),
                  (0, o.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: m.NW.string(m.t['56M7xc'])
                  }),
                  (0, o.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      color: r.zxk.Colors.LINK,
                      className: f.subscribeButton,
                      onClick: () => {
                          if (null == b) return;
                          let t = {
                              section: e,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, l.c)({
                                    analyticsLocations: x,
                                    analyticsLocation: t,
                                    guild: b,
                                    isGIF: h,
                                    banner: p
                                })
                              : (0, c.Z)({
                                    analyticsLocations: x,
                                    analyticsSourceLocation: t,
                                    guild: b,
                                    perks: h ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: m.NW.string(m.t.WUHdZW)
                  })
              ]
          });
}
