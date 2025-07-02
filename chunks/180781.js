n.d(e, { Z: () => b });
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    a = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    u = n(914010),
    _ = n(709586),
    d = n(981631),
    m = n(30513),
    f = n(388032),
    p = n(273233);
function b(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: b, banner: g } = t,
        v = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
        x = (0, r.e7)([s.Z], () => s.Z.getGuild(v)),
        { analyticsLocations: y } = (0, a.ZP)();
    return null == x || x.hasFeature(d.oNc.ANIMATED_BANNER) || (!b && x.hasFeature(d.oNc.BANNER))
        ? null
        : (0, o.jsxs)('div', {
              className: p.container,
              children: [
                  (0, o.jsx)(_.Z, { className: p.guildBoostingIcon }),
                  (0, o.jsx)(i.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: f.intl.string(f.t['56M7xc'])
                  }),
                  (0, o.jsx)(i.zxk, {
                      look: i.zxk.Looks.LINK,
                      color: i.zxk.Colors.LINK,
                      className: p.subscribeButton,
                      onClick: () => {
                          if (null == x) return;
                          let t = {
                              section: e,
                              page: n,
                              object: d.qAy.UPSELL_HEADER
                          };
                          null != g
                              ? (0, l.c)({
                                    analyticsLocations: y,
                                    analyticsLocation: t,
                                    guild: x,
                                    isGIF: b,
                                    banner: g
                                })
                              : (0, c.Z)({
                                    analyticsLocations: y,
                                    analyticsSourceLocation: t,
                                    guild: x,
                                    perks: b ? (0, m.zC)() : (0, m.XO)()
                                });
                      },
                      children: f.intl.string(f.t.WUHdZW)
                  })
              ]
          });
}
