n.d(e, { Z: () => b });
var o = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    a = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    u = n(914010),
    _ = n(709586),
    d = n(981631),
    f = n(30513),
    m = n(388032),
    p = n(273233);
function b(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: b, banner: g } = t,
        C = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
        N = (0, r.e7)([s.Z], () => s.Z.getGuild(C)),
        { analyticsLocations: v } = (0, a.ZP)();
    return null == N || N.hasFeature(d.oNc.ANIMATED_BANNER) || (!b && N.hasFeature(d.oNc.BANNER))
        ? null
        : (0, o.jsxs)('div', {
              className: p.container,
              children: [
                  (0, o.jsx)(_.Z, { className: p.guildBoostingIcon }),
                  (0, o.jsx)(i.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: m.NW.string(m.t['56M7xc'])
                  }),
                  (0, o.jsx)(i.zxk, {
                      look: i.zxk.Looks.LINK,
                      color: i.zxk.Colors.LINK,
                      className: p.subscribeButton,
                      onClick: () => {
                          if (null == N) return;
                          let t = {
                              section: e,
                              page: n,
                              object: d.qAy.UPSELL_HEADER
                          };
                          null != g
                              ? (0, l.c)({
                                    analyticsLocations: v,
                                    analyticsLocation: t,
                                    guild: N,
                                    isGIF: b,
                                    banner: g
                                })
                              : (0, c.Z)({
                                    analyticsLocations: v,
                                    analyticsSourceLocation: t,
                                    guild: N,
                                    perks: b ? (0, f.zC)() : (0, f.XO)()
                                });
                      },
                      children: m.NW.string(m.t.WUHdZW)
                  })
              ]
          });
}
