n.d(t, { Z: () => N });
var i = n(255367);
n(73800);
var a = n(442837),
    o = n(755721),
    r = n(481060),
    l = n(906732),
    c = n(48217),
    s = n(26323),
    d = n(430824),
    u = n(914010),
    f = n(709586),
    g = n(981631),
    p = n(30513),
    _ = n(388032),
    m = n(273233);
function N(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: N, banner: x } = e,
        h = (0, a.e7)([u.Z], () => u.Z.getGuildId()),
        A = (0, a.e7)([d.Z], () => d.Z.getGuild(h)),
        { analyticsLocations: P } = (0, l.ZP)();
    return null == A || A.features.has(g.oNc.ANIMATED_BANNER) || (!N && A.features.has(g.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(f.Z, { className: m.guildBoostingIcon }),
                  (0, i.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: _.intl.string(_.t['56M7xc'])
                  }),
                  (0, i.jsx)(o.zx, {
                      look: o.zx.Looks.LINK,
                      color: o.zx.Colors.LINK,
                      className: m.subscribeButton,
                      onClick: () => {
                          if (null == A) return;
                          let e = {
                              section: t,
                              page: n,
                              object: g.qAy.UPSELL_HEADER
                          };
                          null != x
                              ? (0, c.c)({
                                    analyticsLocations: P,
                                    analyticsLocation: e,
                                    guild: A,
                                    isGIF: N,
                                    banner: x
                                })
                              : (0, s.Z)({
                                    analyticsLocations: P,
                                    analyticsSourceLocation: e,
                                    guild: A,
                                    perks: N ? (0, p.zC)() : (0, p.XO)()
                                });
                      },
                      children: _.intl.string(_.t.WUHdZW)
                  })
              ]
          });
}
