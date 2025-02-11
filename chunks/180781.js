o.d(e, { Z: () => f });
var n = o(200651);
o(192379);
var i = o(442837),
    a = o(481060),
    r = o(906732),
    l = o(48217),
    s = o(26323),
    c = o(430824),
    _ = o(914010),
    d = o(709586),
    u = o(981631),
    m = o(30513),
    g = o(388032),
    p = o(782894);
function f(t) {
    let { analyticsSection: e, analyticsPage: o, isGIF: f, banner: x } = t,
        C = (0, i.e7)([_.Z], () => _.Z.getGuildId()),
        v = (0, i.e7)([c.Z], () => c.Z.getGuild(C)),
        { analyticsLocations: b } = (0, r.ZP)();
    return null == v || v.hasFeature(u.oNc.ANIMATED_BANNER) || (!f && v.hasFeature(u.oNc.BANNER))
        ? null
        : (0, n.jsxs)('div', {
              className: p.container,
              children: [
                  (0, n.jsx)(d.Z, { className: p.guildBoostingIcon }),
                  (0, n.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: g.intl.string(g.t['56M7xc'])
                  }),
                  (0, n.jsx)(a.zxk, {
                      look: a.zxk.Looks.LINK,
                      color: a.zxk.Colors.LINK,
                      className: p.subscribeButton,
                      onClick: () => {
                          if (null == v) return;
                          let t = {
                              section: e,
                              page: o,
                              object: u.qAy.UPSELL_HEADER
                          };
                          null != x
                              ? (0, l.c)({
                                    analyticsLocations: b,
                                    analyticsLocation: t,
                                    guild: v,
                                    isGIF: f,
                                    banner: x
                                })
                              : (0, s.Z)({
                                    analyticsLocations: b,
                                    analyticsSourceLocation: t,
                                    guild: v,
                                    perks: f ? (0, m.zC)() : (0, m.XO)()
                                });
                      },
                      children: g.intl.string(g.t.WUHdZW)
                  })
              ]
          });
}
