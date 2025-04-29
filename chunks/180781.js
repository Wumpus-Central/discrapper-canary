n.d(e, { Z: () => h });
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
    m = n(388032),
    f = n(273233);
function h(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: h, banner: p } = t,
        b = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        x = (0, o.e7)([s.Z], () => s.Z.getGuild(b)),
        { analyticsLocations: y } = (0, a.ZP)();
    return null == x || x.hasFeature(_.oNc.ANIMATED_BANNER) || (!h && x.hasFeature(_.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: f.container,
              children: [
                  (0, i.jsx)(d.Z, { className: f.guildBoostingIcon }),
                  (0, i.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: m.intl.string(m.t['56M7xc'])
                  }),
                  (0, i.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      color: r.zxk.Colors.LINK,
                      className: f.subscribeButton,
                      onClick: () => {
                          if (null == x) return;
                          let t = {
                              section: e,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, l.c)({
                                    analyticsLocations: y,
                                    analyticsLocation: t,
                                    guild: x,
                                    isGIF: h,
                                    banner: p
                                })
                              : (0, c.Z)({
                                    analyticsLocations: y,
                                    analyticsSourceLocation: t,
                                    guild: x,
                                    perks: h ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: m.intl.string(m.t.WUHdZW)
                  })
              ]
          });
}
