n.d(e, { Z: () => b });
var o = n(255367);
n(73800);
var i = n(442837),
    r = n(481060),
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
        C = (0, i.e7)([u.Z], () => u.Z.getGuildId()),
        v = (0, i.e7)([s.Z], () => s.Z.getGuild(C)),
        { analyticsLocations: x } = (0, a.ZP)();
    return null == v || v.hasFeature(d.oNc.ANIMATED_BANNER) || (!b && v.hasFeature(d.oNc.BANNER))
        ? null
        : (0, o.jsxs)('div', {
              className: p.container,
              children: [
                  (0, o.jsx)(_.Z, { className: p.guildBoostingIcon }),
                  (0, o.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: m.intl.string(m.t['56M7xc'])
                  }),
                  (0, o.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      color: r.zxk.Colors.LINK,
                      className: p.subscribeButton,
                      onClick: () => {
                          if (null == v) return;
                          let t = {
                              section: e,
                              page: n,
                              object: d.qAy.UPSELL_HEADER
                          };
                          null != g
                              ? (0, l.c)({
                                    analyticsLocations: x,
                                    analyticsLocation: t,
                                    guild: v,
                                    isGIF: b,
                                    banner: g
                                })
                              : (0, c.Z)({
                                    analyticsLocations: x,
                                    analyticsSourceLocation: t,
                                    guild: v,
                                    perks: b ? (0, f.zC)() : (0, f.XO)()
                                });
                      },
                      children: m.intl.string(m.t.WUHdZW)
                  })
              ]
          });
}
