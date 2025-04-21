n.d(t, { Z: () => N });
var i = n(200651);
n(192379);
var a = n(442837),
    o = n(481060),
    l = n(906732),
    r = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(709586),
    f = n(981631),
    _ = n(30513),
    g = n(388032),
    p = n(273233);
function N(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: N, banner: m } = e,
        x = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, a.e7)([s.Z], () => s.Z.getGuild(x)),
        { analyticsLocations: h } = (0, l.ZP)();
    return null == A || A.hasFeature(f.oNc.ANIMATED_BANNER) || (!N && A.hasFeature(f.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: p.container,
              children: [
                  (0, i.jsx)(u.Z, { className: p.guildBoostingIcon }),
                  (0, i.jsx)(o.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: g.intl.string(g.t['56M7xc'])
                  }),
                  (0, i.jsx)(o.zxk, {
                      look: o.zxk.Looks.LINK,
                      color: o.zxk.Colors.LINK,
                      className: p.subscribeButton,
                      onClick: () => {
                          if (null == A) return;
                          let e = {
                              section: t,
                              page: n,
                              object: f.qAy.UPSELL_HEADER
                          };
                          null != m
                              ? (0, r.c)({
                                    analyticsLocations: h,
                                    analyticsLocation: e,
                                    guild: A,
                                    isGIF: N,
                                    banner: m
                                })
                              : (0, c.Z)({
                                    analyticsLocations: h,
                                    analyticsSourceLocation: e,
                                    guild: A,
                                    perks: N ? (0, _.zC)() : (0, _.XO)()
                                });
                      },
                      children: g.intl.string(g.t.WUHdZW)
                  })
              ]
          });
}
