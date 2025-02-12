n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    a = n(906732),
    l = n(48217),
    s = n(26323),
    c = n(430824),
    d = n(914010),
    u = n(709586),
    _ = n(981631),
    g = n(30513),
    h = n(388032),
    m = n(160455);
function p(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: p, banner: x } = e,
        f = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        C = (0, o.e7)([c.Z], () => c.Z.getGuild(f)),
        { analyticsLocations: E } = (0, a.ZP)();
    return null == C || C.hasFeature(_.oNc.ANIMATED_BANNER) || (!p && C.hasFeature(_.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(u.Z, { className: m.guildBoostingIcon }),
                  (0, i.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: h.intl.string(h.t['56M7xc'])
                  }),
                  (0, i.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      color: r.zxk.Colors.LINK,
                      className: m.subscribeButton,
                      onClick: () => {
                          if (null == C) return;
                          let e = {
                              section: t,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != x
                              ? (0, l.c)({
                                    analyticsLocations: E,
                                    analyticsLocation: e,
                                    guild: C,
                                    isGIF: p,
                                    banner: x
                                })
                              : (0, s.Z)({
                                    analyticsLocations: E,
                                    analyticsSourceLocation: e,
                                    guild: C,
                                    perks: p ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: h.intl.string(h.t.WUHdZW)
                  })
              ]
          });
}
