n.d(t, { Z: () => p });
var o = n(54381);
n(473749);
var i = n(442837),
    r = n(481060),
    a = n(906732),
    l = n(48217),
    s = n(26323),
    c = n(430824),
    u = n(914010),
    b = n(981631),
    d = n(30513),
    f = n(388032),
    m = n(861203);
function p(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: p, banner: g } = e,
        v = (0, i.e7)([u.Z], () => u.Z.getGuildId()),
        _ = (0, i.e7)([c.Z], () => c.Z.getGuild(v)),
        { analyticsLocations: x } = (0, a.ZP)();
    return null == _ ||
        _.features.has(b.GuildFeatures.ANIMATED_BANNER) ||
        (!p && _.features.has(b.GuildFeatures.BANNER))
        ? null
        : (0, o.jsxs)("div", {
              className: m.container,
              children: [
                  (0, o.jsx)(r.Ucv, {
                      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: m.guildBoostingIcon,
                  }),
                  (0, o.jsx)(r.Text, {
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: f.intl.string(f.t["56M7xe"]),
                  }),
                  (0, o.jsx)("div", {
                      className: m.subscribeButton,
                      children: (0, o.jsx)(r.Avr, {
                          text: f.intl.string(f.t.WUHdZV),
                          onClick: () => {
                              if (null == _) return;
                              let e = {
                                  section: t,
                                  page: n,
                                  object: b.qAy.UPSELL_HEADER,
                              };
                              null != g
                                  ? (0, l.c)({
                                        analyticsLocations: x,
                                        analyticsLocation: e,
                                        guild: _,
                                        isGIF: p,
                                        banner: g,
                                    })
                                  : (0, s.Z)({
                                        analyticsLocations: x,
                                        analyticsSourceLocation: e,
                                        guild: _,
                                        perks: p ? (0, d.zC)() : (0, d.XO)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
