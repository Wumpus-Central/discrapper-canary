n.d(t, { Z: () => p });
var i = n(951288);
n(647438);
var a = n(442837),
    o = n(481060),
    r = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(981631),
    f = n(30513),
    _ = n(388032),
    g = n(413955);
function p(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: p, banner: m } = e,
        N = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
        x = (0, a.e7)([s.Z], () => s.Z.getGuild(N)),
        { analyticsLocations: h } = (0, r.ZP)();
    return null == x || x.features.has(u.oNc.ANIMATED_BANNER) || (!p && x.features.has(u.oNc.BANNER))
        ? null
        : (0, i.jsxs)("div", {
              className: g.container,
              children: [
                  (0, i.jsx)(o.Ucv, {
                      color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: g.guildBoostingIcon,
                  }),
                  (0, i.jsx)(o.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      children: _.intl.string(_.t["56M7xc"]),
                  }),
                  (0, i.jsx)("div", {
                      className: g.subscribeButton,
                      children: (0, i.jsx)(o.Avr, {
                          text: _.intl.string(_.t.WUHdZW),
                          onClick: () => {
                              if (null == x) return;
                              let e = {
                                  section: t,
                                  page: n,
                                  object: u.qAy.UPSELL_HEADER,
                              };
                              null != m
                                  ? (0, l.c)({
                                        analyticsLocations: h,
                                        analyticsLocation: e,
                                        guild: x,
                                        isGIF: p,
                                        banner: m,
                                    })
                                  : (0, c.Z)({
                                        analyticsLocations: h,
                                        analyticsSourceLocation: e,
                                        guild: x,
                                        perks: p ? (0, f.zC)() : (0, f.XO)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
