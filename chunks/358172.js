n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(417597),
    l = n(421380),
    o = n(397927),
    c = n(263063),
    d = n(509536),
    u = n(721923),
    _ = n(864310),
    m = n(71393),
    A = n(473145),
    g = n(652215),
    E = n(985018),
    h = n(246930);
let p = function (e) {
    let { className: t, guildId: n, boostingVariant: s } = e,
        p = (0, a.bG)([m.A], () => m.A.getGuild(n), [n]),
        C = (0, _.A)(p?.id).total;
    return null == p
        ? (0, i.jsx)("div", {
              className: r()(t, h.bo),
              children: (0, i.jsx)("div", {
                  className: h.$g,
                  children: (0, i.jsx)(o.Text, { variant: "text-lg/bold", children: E.intl.string(E.t["6Kwwuo"]) }),
              }),
          })
        : (0, i.jsxs)("div", {
              className: r()(t, h.bo),
              children: [
                  (0, i.jsx)(c.A, { className: h.__invalid_guildIcon, guild: p, size: c.A.Sizes.LARGER }),
                  (0, i.jsxs)("div", {
                      className: h.$g,
                      children: [
                          (0, i.jsx)(o.Text, { variant: "text-lg/bold", children: p.name }),
                          (0, i.jsxs)("div", {
                              className: h.TZ,
                              children: [
                                  (0, i.jsx)(o._Jp, {
                                      color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: h.Me,
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: E.intl.format(E.t["pob/cL"], { subscriptions: C }),
                                  }),
                                  (0, i.jsx)("div", { className: h.me }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, A.gb)(p.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  s
                      ? (0, i.jsx)(u.A, {
                            guild: p,
                            analyticsLocation: {
                                page: g.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: g.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: g.ZSU.BUTTON_CTA,
                                objectType: g.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: l.$n.Sizes.MEDIUM,
                            color: l.$n.Colors.PRIMARY,
                            buttonText: E.intl.string(E.t.aBHecF),
                        })
                      : (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            text: E.intl.string(E.t.KLOhbO),
                            onClick: () => {
                                (0, d.K)({
                                    guildId: p.id,
                                    location: { section: g.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                });
                            },
                        }),
              ],
          });
};
