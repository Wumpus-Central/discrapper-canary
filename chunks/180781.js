n.d(t, { Z: () => p });
var i = n(54381);
n(473749);
var a = n(442837),
    o = n(481060),
    r = n(906732),
    l = n(48217),
    c = n(26323),
    s = n(430824),
    d = n(914010),
    u = n(981631),
    f = n(30513),
    b = n(388032),
    g = n(861203);
function p(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: p, banner: x } = e,
        N = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
        m = (0, a.e7)([s.Z], () => s.Z.getGuild(N)),
        { analyticsLocations: _ } = (0, r.ZP)();
    return null == m ||
        m.features.has(u.GuildFeatures.ANIMATED_BANNER) ||
        (!p && m.features.has(u.GuildFeatures.BANNER))
        ? null
        : (0, i.jsxs)("div", {
              className: g.container,
              children: [
                  (0, i.jsx)(o.Ucv, {
                      color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: g.guildBoostingIcon,
                  }),
                  (0, i.jsx)(o.Text, {
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: b.intl.string(b.t["56M7xe"]),
                  }),
                  (0, i.jsx)("div", {
                      className: g.subscribeButton,
                      children: (0, i.jsx)(o.Avr, {
                          text: b.intl.string(b.t.WUHdZV),
                          onClick: () => {
                              if (null == m) return;
                              let e = {
                                  section: t,
                                  page: n,
                                  object: u.qAy.UPSELL_HEADER,
                              };
                              null != x
                                  ? (0, l.c)({
                                        analyticsLocations: _,
                                        analyticsLocation: e,
                                        guild: m,
                                        isGIF: p,
                                        banner: x,
                                    })
                                  : (0, c.Z)({
                                        analyticsLocations: _,
                                        analyticsSourceLocation: e,
                                        guild: m,
                                        perks: p ? (0, f.zC)() : (0, f.XO)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
