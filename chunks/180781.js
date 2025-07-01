n.d(t, { Z: () => m });
var i = n(255367);
n(73800);
var a = n(442837),
    o = n(481060),
    r = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(709586),
    f = n(981631),
    g = n(30513),
    p = n(388032),
    _ = n(273233);
function m(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: m, banner: N } = e,
        x = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
        h = (0, a.e7)([s.Z], () => s.Z.getGuild(x)),
        { analyticsLocations: A } = (0, r.ZP)();
    return null == h || h.hasFeature(f.oNc.ANIMATED_BANNER) || (!m && h.hasFeature(f.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: _.container,
              children: [
                  (0, i.jsx)(u.Z, { className: _.guildBoostingIcon }),
                  (0, i.jsx)(o.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: p.intl.string(p.t['56M7xc'])
                  }),
                  (0, i.jsx)(o.zxk, {
                      look: o.zxk.Looks.LINK,
                      color: o.zxk.Colors.LINK,
                      className: _.subscribeButton,
                      onClick: () => {
                          if (null == h) return;
                          let e = {
                              section: t,
                              page: n,
                              object: f.qAy.UPSELL_HEADER
                          };
                          null != N
                              ? (0, l.c)({
                                    analyticsLocations: A,
                                    analyticsLocation: e,
                                    guild: h,
                                    isGIF: m,
                                    banner: N
                                })
                              : (0, c.Z)({
                                    analyticsLocations: A,
                                    analyticsSourceLocation: e,
                                    guild: h,
                                    perks: m ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: p.intl.string(p.t.WUHdZW)
                  })
              ]
          });
}
