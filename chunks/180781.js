n.d(i, { Z: () => p });
var t = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    a = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(709586),
    g = n(981631),
    f = n(30513),
    _ = n(388032),
    b = n(273233);
function p(e) {
    let { analyticsSection: i, analyticsPage: n, isGIF: p, banner: N } = e,
        m = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        h = (0, o.e7)([s.Z], () => s.Z.getGuild(m)),
        { analyticsLocations: T } = (0, a.ZP)();
    return null == h || h.hasFeature(g.oNc.ANIMATED_BANNER) || (!p && h.hasFeature(g.oNc.BANNER))
        ? null
        : (0, t.jsxs)('div', {
              className: b.container,
              children: [
                  (0, t.jsx)(u.Z, { className: b.guildBoostingIcon }),
                  (0, t.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: _.NW.string(_.t['56M7xc'])
                  }),
                  (0, t.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      color: r.zxk.Colors.LINK,
                      className: b.subscribeButton,
                      onClick: () => {
                          if (null == h) return;
                          let e = {
                              section: i,
                              page: n,
                              object: g.qAy.UPSELL_HEADER
                          };
                          null != N
                              ? (0, l.c)({
                                    analyticsLocations: T,
                                    analyticsLocation: e,
                                    guild: h,
                                    isGIF: p,
                                    banner: N
                                })
                              : (0, c.Z)({
                                    analyticsLocations: T,
                                    analyticsSourceLocation: e,
                                    guild: h,
                                    perks: p ? (0, f.zC)() : (0, f.XO)()
                                });
                      },
                      children: _.NW.string(_.t.WUHdZW)
                  })
              ]
          });
}
