n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var a = n(442837),
    o = n(481060),
    r = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(709586),
    f = n(981631),
    _ = n(30513),
    g = n(388032),
    N = n(273233);
function p(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: p, banner: m } = e,
        x = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, a.e7)([s.Z], () => s.Z.getGuild(x)),
        { analyticsLocations: h } = (0, r.ZP)();
    return null == A || A.hasFeature(f.oNc.ANIMATED_BANNER) || (!p && A.hasFeature(f.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: N.container,
              children: [
                  (0, i.jsx)(u.Z, { className: N.guildBoostingIcon }),
                  (0, i.jsx)(o.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: g.NW.string(g.t['56M7xc'])
                  }),
                  (0, i.jsx)(o.zxk, {
                      look: o.zxk.Looks.LINK,
                      color: o.zxk.Colors.LINK,
                      className: N.subscribeButton,
                      onClick: () => {
                          if (null == A) return;
                          let e = {
                              section: t,
                              page: n,
                              object: f.qAy.UPSELL_HEADER
                          };
                          null != m
                              ? (0, l.c)({
                                    analyticsLocations: h,
                                    analyticsLocation: e,
                                    guild: A,
                                    isGIF: p,
                                    banner: m
                                })
                              : (0, c.Z)({
                                    analyticsLocations: h,
                                    analyticsSourceLocation: e,
                                    guild: A,
                                    perks: p ? (0, _.zC)() : (0, _.XO)()
                                });
                      },
                      children: g.NW.string(g.t.WUHdZW)
                  })
              ]
          });
}
