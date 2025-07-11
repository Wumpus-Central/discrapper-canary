n.d(e, { Z: () => g });
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(755721),
    a = n(481060),
    l = n(906732),
    c = n(48217),
    s = n(26323),
    u = n(430824),
    _ = n(914010),
    d = n(709586),
    m = n(981631),
    f = n(30513),
    p = n(388032),
    b = n(273233);
function g(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: g, banner: v } = t,
        x = (0, r.e7)([_.Z], () => _.Z.getGuildId()),
        y = (0, r.e7)([u.Z], () => u.Z.getGuild(x)),
        { analyticsLocations: C } = (0, l.ZP)();
    return null == y || y.features.has(m.oNc.ANIMATED_BANNER) || (!g && y.features.has(m.oNc.BANNER))
        ? null
        : (0, o.jsxs)('div', {
              className: b.container,
              children: [
                  (0, o.jsx)(d.Z, { className: b.guildBoostingIcon }),
                  (0, o.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: p.intl.string(p.t['56M7xc'])
                  }),
                  (0, o.jsx)(i.zx, {
                      look: i.zx.Looks.LINK,
                      color: i.zx.Colors.LINK,
                      className: b.subscribeButton,
                      onClick: () => {
                          if (null == y) return;
                          let t = {
                              section: e,
                              page: n,
                              object: m.qAy.UPSELL_HEADER
                          };
                          null != v
                              ? (0, c.c)({
                                    analyticsLocations: C,
                                    analyticsLocation: t,
                                    guild: y,
                                    isGIF: g,
                                    banner: v
                                })
                              : (0, s.Z)({
                                    analyticsLocations: C,
                                    analyticsSourceLocation: t,
                                    guild: y,
                                    perks: g ? (0, f.zC)() : (0, f.XO)()
                                });
                      },
                      children: p.intl.string(p.t.WUHdZW)
                  })
              ]
          });
}
