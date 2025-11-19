n.d(t, { Z: () => p });
var i = n(54381);
n(473749);
var a = n(442837),
    r = n(481060),
    o = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(981631),
    f = n(30513),
    _ = n(388032),
    g = n(393276);
function p(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: p, banner: x } = e,
        m = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
        N = (0, a.e7)([s.Z], () => s.Z.getGuild(m)),
        { analyticsLocations: h } = (0, o.ZP)();
    return null == N ||
        N.features.has(u.GuildFeatures.ANIMATED_BANNER) ||
        (!p && N.features.has(u.GuildFeatures.BANNER))
        ? null
        : (0, i.jsxs)("div", {
              className: g.container,
              children: [
                  (0, i.jsx)(r.Ucv, {
                      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: g.guildBoostingIcon,
                  }),
                  (0, i.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      children: _.intl.string(_.t["56M7xe"]),
                  }),
                  (0, i.jsx)("div", {
                      className: g.subscribeButton,
                      children: (0, i.jsx)(r.Avr, {
                          text: _.intl.string(_.t.WUHdZV),
                          onClick: () => {
                              if (null == N) return;
                              let e = {
                                  section: t,
                                  page: n,
                                  object: u.qAy.UPSELL_HEADER,
                              };
                              null != x
                                  ? (0, l.c)({
                                        analyticsLocations: h,
                                        analyticsLocation: e,
                                        guild: N,
                                        isGIF: p,
                                        banner: x,
                                    })
                                  : (0, c.Z)({
                                        analyticsLocations: h,
                                        analyticsSourceLocation: e,
                                        guild: N,
                                        perks: p ? (0, f.zC)() : (0, f.XO)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
