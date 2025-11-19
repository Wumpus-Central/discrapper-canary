i.d(e, { Z: () => m });
var n = i(54381);
i(473749);
var a = i(442837),
    r = i(481060),
    o = i(906732),
    l = i(48217),
    s = i(26323),
    d = i(430824),
    c = i(914010),
    u = i(981631),
    _ = i(30513),
    h = i(388032),
    g = i(393276);
function m(t) {
    let { analyticsSection: e, analyticsPage: i, isGIF: m, banner: x } = t,
        f = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
        p = (0, a.e7)([d.Z], () => d.Z.getGuild(f)),
        { analyticsLocations: v } = (0, o.ZP)();
    return null == p ||
        p.features.has(u.GuildFeatures.ANIMATED_BANNER) ||
        (!m && p.features.has(u.GuildFeatures.BANNER))
        ? null
        : (0, n.jsxs)("div", {
              className: g.container,
              children: [
                  (0, n.jsx)(r.Ucv, {
                      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: g.guildBoostingIcon,
                  }),
                  (0, n.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      children: h.intl.string(h.t["56M7xe"]),
                  }),
                  (0, n.jsx)("div", {
                      className: g.subscribeButton,
                      children: (0, n.jsx)(r.Avr, {
                          text: h.intl.string(h.t.WUHdZV),
                          onClick: () => {
                              if (null == p) return;
                              let t = {
                                  section: e,
                                  page: i,
                                  object: u.qAy.UPSELL_HEADER,
                              };
                              null != x
                                  ? (0, l.c)({
                                        analyticsLocations: v,
                                        analyticsLocation: t,
                                        guild: p,
                                        isGIF: m,
                                        banner: x,
                                    })
                                  : (0, s.Z)({
                                        analyticsLocations: v,
                                        analyticsSourceLocation: t,
                                        guild: p,
                                        perks: m ? (0, _.zC)() : (0, _.XO)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
