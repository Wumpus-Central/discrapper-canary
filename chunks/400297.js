n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(417597),
    r = n(421380),
    o = n(397927),
    d = n(263063),
    c = n(509536),
    u = n(721923),
    m = n(864310),
    g = n(71393),
    _ = n(473145),
    x = n(652215),
    A = n(985018),
    h = n(576);
let p = function (e) {
    let { className: t, guildId: n, boostingVariant: s } = e,
        p = (0, a.bG)([g.A], () => g.A.getGuild(n), [n]),
        T = (0, m.A)(p?.id).total;
    return null == p
        ? (0, i.jsx)("div", {
              className: l()(t, h.bo),
              children: (0, i.jsx)("div", {
                  className: h.$g,
                  children: (0, i.jsx)(o.Text, { variant: "text-lg/bold", children: A.intl.string(A.t["6Kwwuo"]) }),
              }),
          })
        : (0, i.jsxs)("div", {
              className: l()(t, h.bo),
              children: [
                  (0, i.jsx)(d.Ay, { className: h.__invalid_guildIcon, guild: p, size: d.Ay.Sizes.LARGER }),
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
                                      children: A.intl.format(A.t["pob/cL"], { subscriptions: T }),
                                  }),
                                  (0, i.jsx)("div", { className: h.me }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, _.gb)(p.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  s
                      ? (0, i.jsx)(u.A, {
                            guild: p,
                            analyticsLocation: {
                                page: x.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: x.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: x.ZSU.BUTTON_CTA,
                                objectType: x.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: r.$n.Sizes.MEDIUM,
                            color: r.$n.Colors.PRIMARY,
                            buttonText: A.intl.string(A.t.aBHecF),
                        })
                      : (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            text: A.intl.string(A.t.KLOhbO),
                            onClick: () => {
                                (0, c.K4)({
                                    guildId: p.id,
                                    location: { section: x.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                });
                            },
                        }),
              ],
          });
};
