n.d(i, {
    Z: function () {
        return h;
    }
});
var t = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    l = n(906732),
    a = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(709586),
    g = n(981631),
    f = n(30513),
    p = n(388032),
    _ = n(808583);
function h(e) {
    let { analyticsSection: i, analyticsPage: n, isGIF: h, banner: N } = e,
        T = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        m = (0, o.e7)([s.Z], () => s.Z.getGuild(T)),
        { analyticsLocations: x } = (0, l.ZP)();
    return null == m || m.hasFeature(g.oNc.ANIMATED_BANNER) || (!h && m.hasFeature(g.oNc.BANNER))
        ? null
        : (0, t.jsxs)('div', {
              className: _.container,
              children: [
                  (0, t.jsx)(u.Z, { className: _.guildBoostingIcon }),
                  (0, t.jsx)(r.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: p.intl.string(p.t['56M7xc'])
                  }),
                  (0, t.jsx)(r.Button, {
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.LINK,
                      className: _.subscribeButton,
                      onClick: () => {
                          if (null == m) return;
                          let e = {
                              section: i,
                              page: n,
                              object: g.qAy.UPSELL_HEADER
                          };
                          null != N
                              ? (0, a.c)({
                                    analyticsLocations: x,
                                    analyticsLocation: e,
                                    guild: m,
                                    isGIF: h,
                                    banner: N
                                })
                              : (0, c.Z)({
                                    analyticsLocations: x,
                                    analyticsSourceLocation: e,
                                    guild: m,
                                    perks: h ? (0, f.zC)() : (0, f.XO)()
                                });
                      },
                      children: p.intl.string(p.t.WUHdZW)
                  })
              ]
          });
}
