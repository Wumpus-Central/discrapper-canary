n.d(e, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var o = n(442837),
    a = n(481060),
    r = n(906732),
    s = n(48217),
    l = n(26323),
    c = n(430824),
    u = n(914010),
    d = n(709586),
    b = n(981631),
    _ = n(30513),
    g = n(388032),
    f = n(808583);
function m(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: m, banner: p } = t,
        h = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        C = (0, o.e7)([c.Z], () => c.Z.getGuild(h)),
        { analyticsLocations: N } = (0, r.ZP)();
    return null == C || C.hasFeature(b.oNc.ANIMATED_BANNER) || (!m && C.hasFeature(b.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: f.container,
              children: [
                  (0, i.jsx)(d.Z, { className: f.guildBoostingIcon }),
                  (0, i.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: g.intl.string(g.t['56M7xc'])
                  }),
                  (0, i.jsx)(a.Button, {
                      look: a.Button.Looks.LINK,
                      color: a.Button.Colors.LINK,
                      className: f.subscribeButton,
                      onClick: () => {
                          if (null == C) return;
                          let t = {
                              section: e,
                              page: n,
                              object: b.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, s.c)({
                                    analyticsLocations: N,
                                    analyticsLocation: t,
                                    guild: C,
                                    isGIF: m,
                                    banner: p
                                })
                              : (0, l.Z)({
                                    analyticsLocations: N,
                                    analyticsSourceLocation: t,
                                    guild: C,
                                    perks: m ? (0, _.zC)() : (0, _.XO)()
                                });
                      },
                      children: g.intl.string(g.t.WUHdZW)
                  })
              ]
          });
}
