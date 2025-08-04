n.d(e, { Z: () => f });
var i = n(255367);
n(73800);
var o = n(442837),
    r = n(755721),
    a = n(481060),
    l = n(906732),
    c = n(48217),
    s = n(26323),
    u = n(430824),
    d = n(914010),
    _ = n(981631),
    g = n(30513),
    m = n(388032),
    h = n(273233);
function f(t) {
    let { analyticsSection: e, analyticsPage: n, isGIF: f, banner: p } = t,
        x = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        b = (0, o.e7)([u.Z], () => u.Z.getGuild(x)),
        { analyticsLocations: y } = (0, l.ZP)();
    return null == b || b.features.has(_.oNc.ANIMATED_BANNER) || (!f && b.features.has(_.oNc.BANNER))
        ? null
        : (0, i.jsxs)('div', {
              className: h.container,
              children: [
                  (0, i.jsx)(a.$Eu, {
                      color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: h.guildBoostingIcon
                  }),
                  (0, i.jsx)(a.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/semibold',
                      children: m.intl.string(m.t['56M7xc'])
                  }),
                  (0, i.jsx)(r.zx, {
                      look: r.zx.Looks.LINK,
                      color: r.zx.Colors.LINK,
                      className: h.subscribeButton,
                      onClick: () => {
                          if (null == b) return;
                          let t = {
                              section: e,
                              page: n,
                              object: _.qAy.UPSELL_HEADER
                          };
                          null != p
                              ? (0, c.c)({
                                    analyticsLocations: y,
                                    analyticsLocation: t,
                                    guild: b,
                                    isGIF: f,
                                    banner: p
                                })
                              : (0, s.Z)({
                                    analyticsLocations: y,
                                    analyticsSourceLocation: t,
                                    guild: b,
                                    perks: f ? (0, g.zC)() : (0, g.XO)()
                                });
                      },
                      children: m.intl.string(m.t.WUHdZW)
                  })
              ]
          });
}
