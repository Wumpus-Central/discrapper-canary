n.d(i, { Z: () => f });
var o = n(200651);
n(192379);
var t = n(442837),
    a = n(481060),
    l = n(906732),
    r = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(709586),
    _ = n(981631),
    g = n(30513),
    N = n(388032),
    T = n(782894);
function f(e) {
    let { analyticsSection: i, analyticsPage: n, isGIF: f, banner: m } = e,
        p = (0, t.e7)([d.Z], () => d.Z.getGuildId()),
        x = (0, t.e7)([s.Z], () => s.Z.getGuild(p)),
        { analyticsLocations: E } = (0, l.ZP)();
    return null == x || x.hasFeature(_.oNc.ANIMATED_BANNER) || (!f && x.hasFeature(_.oNc.BANNER))
        ? null
        : (0, o.jsxs)('div', {
              className: T.container,
              children: [
                  (0, o.jsx)(u.Z, { className: T.guildBoostingIcon }),
                  (0, o.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: N.intl.string(N.t['56M7xc'])
                  }),
                  (0, o.jsx)(a.zxk, {
                      look: a.zxk.Looks.LINK,
                      color: a.zxk.Colors.LINK,
                      className: T.subscribeButton,
                      onClick: () => {
                          if (null == x) return;
                          let e = {
                              section: i,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != m
                              ? (0, r.c)({
                                    analyticsLocations: E,
                                    analyticsLocation: e,
                                    guild: x,
                                    isGIF: f,
                                    banner: m
                                })
                              : (0, c.Z)({
                                    analyticsLocations: E,
                                    analyticsSourceLocation: e,
                                    guild: x,
                                    perks: f ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: N.intl.string(N.t.WUHdZW)
                  })
              ]
          });
}
