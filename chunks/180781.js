n.d(e, { Z: () => x });
var i = n(255367);
n(73800);
var o = n(442837),
    a = n(755721),
    r = n(481060),
    l = n(906732),
    s = n(48217),
    d = n(26323),
    c = n(430824),
    u = n(914010),
    _ = n(709586),
    h = n(981631),
    g = n(30513),
    m = n(388032),
    f = n(273233);
function x(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: x, banner: p } = t,
        N = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        v = (0, o.e7)([c.Z], () => c.Z.getGuild(N)),
        { analyticsLocations: y } = (0, l.ZP)();
    return null == v || v.features.has(h.oNc.ANIMATED_BANNER) || (!x && v.features.has(h.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: f.container,
              children: [
                  (0, i.jsx)(_.Z, { className: f.guildBoostingIcon }),
                  (0, i.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: m.intl.string(m.t['56M7xc'])
                  }),
                  (0, i.jsx)(a.zx, {
                      look: a.zx.Looks.LINK,
                      color: a.zx.Colors.LINK,
                      className: f.subscribeButton,
                      onClick: () => {
                          if (null == v) return;
                          let t = {
                              section: e,
                              page: n,
                              object: h.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, s.c)({
                                    analyticsLocations: y,
                                    analyticsLocation: t,
                                    guild: v,
                                    isGIF: x,
                                    banner: p
                                })
                              : (0, d.Z)({
                                    analyticsLocations: y,
                                    analyticsSourceLocation: t,
                                    guild: v,
                                    perks: x ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: m.intl.string(m.t.WUHdZW)
                  })
              ]
          });
}
