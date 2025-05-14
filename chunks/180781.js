n.d(e, { Z: () => f });
var i = n(255367);
n(73800);
var o = n(442837),
    r = n(481060),
    a = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    u = n(914010),
    d = n(709586),
    _ = n(981631),
    g = n(30513),
    h = n(388032),
    m = n(273233);
function f(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: f, banner: p } = t,
        x = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        b = (0, o.e7)([s.Z], () => s.Z.getGuild(x)),
        { analyticsLocations: y } = (0, a.ZP)();
    return null == b || b.hasFeature(_.oNc.ANIMATED_BANNER) || (!f && b.hasFeature(_.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(d.Z, { className: m.guildBoostingIcon }),
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
                          if (null == b) return;
                          let t = {
                              section: e,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, l.c)({
                                    analyticsLocations: y,
                                    analyticsLocation: t,
                                    guild: b,
                                    isGIF: f,
                                    banner: p
                                })
                              : (0, c.Z)({
                                    analyticsLocations: y,
                                    analyticsSourceLocation: t,
                                    guild: b,
                                    perks: f ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: h.intl.string(h.t.WUHdZW)
                  })
              ]
          });
}
