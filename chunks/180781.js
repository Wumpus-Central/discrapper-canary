n.d(e, { Z: () => x });
var i = n(200651);
n(192379);
var o = n(442837),
    a = n(481060),
    r = n(906732),
    c = n(48217),
    l = n(26323),
    s = n(430824),
    _ = n(914010),
    d = n(709586),
    u = n(981631),
    g = n(30513),
    f = n(388032),
    m = n(808583);
function x(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: x, banner: p } = t,
        b = (0, o.e7)([_.Z], () => _.Z.getGuildId()),
        h = (0, o.e7)([s.Z], () => s.Z.getGuild(b)),
        { analyticsLocations: C } = (0, r.ZP)();
    return null == h || h.hasFeature(u.oNc.ANIMATED_BANNER) || (!x && h.hasFeature(u.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(d.Z, { className: m.guildBoostingIcon }),
                  (0, i.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: f.intl.string(f.t['56M7xc'])
                  }),
                  (0, i.jsx)(a.zxk, {
                      look: a.zxk.Looks.LINK,
                      color: a.zxk.Colors.LINK,
                      className: m.subscribeButton,
                      onClick: () => {
                          if (null == h) return;
                          let t = {
                              section: e,
                              page: n,
                              object: u.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, c.c)({
                                    analyticsLocations: C,
                                    analyticsLocation: t,
                                    guild: h,
                                    isGIF: x,
                                    banner: p
                                })
                              : (0, l.Z)({
                                    analyticsLocations: C,
                                    analyticsSourceLocation: t,
                                    guild: h,
                                    perks: x ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: f.intl.string(f.t.WUHdZW)
                  })
              ]
          });
}
