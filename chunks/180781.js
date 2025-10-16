n.d(t, { Z: () => p });
var i = n(951288);
n(647438);
var a = n(442837),
    r = n(481060),
    o = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(981631),
    f = n(30513),
    g = n(388032),
    _ = n(413955);
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
              className: _.container,
              children: [
                  (0, i.jsx)(r.Ucv, {
                      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: _.guildBoostingIcon,
                  }),
                  (0, i.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      children: g.intl.string(g.t["56M7xc"]),
                  }),
                  (0, i.jsx)("div", {
                      className: _.subscribeButton,
                      children: (0, i.jsx)(r.Avr, {
                          text: g.intl.string(g.t.WUHdZW),
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
