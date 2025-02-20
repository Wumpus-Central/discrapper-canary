i.d(n, { Z: () => p });
var t = i(200651);
i(192379);
var o = i(442837),
    r = i(481060),
    a = i(906732),
    l = i(48217),
    c = i(26323),
    s = i(430824),
    d = i(914010),
    u = i(709586),
    g = i(981631),
    _ = i(30513),
    f = i(388032),
    b = i(43375);
function p(e) {
    let { analyticsSection: n, analyticsPage: i, isGIF: p, banner: N } = e,
        m = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        T = (0, o.e7)([s.Z], () => s.Z.getGuild(m)),
        { analyticsLocations: h } = (0, a.ZP)();
    return null == T || T.hasFeature(g.oNc.ANIMATED_BANNER) || (!p && T.hasFeature(g.oNc.BANNER))
        ? null
        : (0, t.jsxs)('div', {
              className: b.container,
              children: [
                  (0, t.jsx)(u.Z, { className: b.guildBoostingIcon }),
                  (0, t.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: f.NW.string(f.t['56M7xc'])
                  }),
                  (0, t.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      color: r.zxk.Colors.LINK,
                      className: b.subscribeButton,
                      onClick: () => {
                          if (null == T) return;
                          let e = {
                              section: n,
                              page: i,
                              object: g.qAy.UPSELL_HEADER
                          };
                          null != N
                              ? (0, l.c)({
                                    analyticsLocations: h,
                                    analyticsLocation: e,
                                    guild: T,
                                    isGIF: p,
                                    banner: N
                                })
                              : (0, c.Z)({
                                    analyticsLocations: h,
                                    analyticsSourceLocation: e,
                                    guild: T,
                                    perks: p ? (0, _.zC)() : (0, _.XO)()
                                });
                      },
                      children: f.NW.string(f.t.WUHdZW)
                  })
              ]
          });
}
