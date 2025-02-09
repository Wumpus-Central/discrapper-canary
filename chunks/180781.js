n.d(i, { Z: () => T });
var t = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    a = n(906732),
    l = n(48217),
    c = n(26323),
    d = n(430824),
    s = n(914010),
    u = n(709586),
    _ = n(981631),
    g = n(30513),
    h = n(388032),
    m = n(782894);
function T(e) {
    let { analyticsSection: i, analyticsPage: n, isGIF: T, banner: x } = e,
        N = (0, o.e7)([s.Z], () => s.Z.getGuildId()),
        b = (0, o.e7)([d.Z], () => d.Z.getGuild(N)),
        { analyticsLocations: f } = (0, a.ZP)();
    return null == b || b.hasFeature(_.oNc.ANIMATED_BANNER) || (!T && b.hasFeature(_.oNc.BANNER))
        ? null
        : (0, t.jsxs)('div', {
              className: m.container,
              children: [
                  (0, t.jsx)(u.Z, { className: m.guildBoostingIcon }),
                  (0, t.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: h.intl.string(h.t['56M7xc'])
                  }),
                  (0, t.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      color: r.zxk.Colors.LINK,
                      className: m.subscribeButton,
                      onClick: () => {
                          if (null == b) return;
                          let e = {
                              section: i,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != x
                              ? (0, l.c)({
                                    analyticsLocations: f,
                                    analyticsLocation: e,
                                    guild: b,
                                    isGIF: T,
                                    banner: x
                                })
                              : (0, c.Z)({
                                    analyticsLocations: f,
                                    analyticsSourceLocation: e,
                                    guild: b,
                                    perks: T ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: h.intl.string(h.t.WUHdZW)
                  })
              ]
          });
}
