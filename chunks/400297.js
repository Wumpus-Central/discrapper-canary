n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(417597),
    a = n(421380),
    o = n(397927),
    d = n(263063),
    c = n(509536),
    u = n(721923),
    m = n(864310),
    g = n(71393),
    _ = n(473145),
    x = n(779733),
    h = n(652215),
    A = n(985018),
    p = n(44112);
let T = function (e) {
    let { className: t, guildId: n, boostingVariant: s } = e,
        T = (0, r.bG)([g.A], () => g.A.getGuild(n), [n]),
        f = (0, m.A)(T?.id).total;
    return null == T
        ? (0, i.jsx)("div", {
              className: l()(t, p.bo),
              children: (0, i.jsx)("div", {
                  className: p.$g,
                  children: (0, i.jsx)(o.Text, { variant: "text-lg/bold", children: A.intl.string(A.t["6Kwwuo"]) }),
              }),
          })
        : (0, i.jsxs)("div", {
              className: l()(t, p.bo),
              children: [
                  (0, i.jsx)(d.Ay, { className: p.__invalid_guildIcon, guild: T, size: d.Ay.Sizes.LARGER }),
                  (0, i.jsxs)("div", {
                      className: p.$g,
                      children: [
                          (0, i.jsx)(o.Text, { variant: "text-lg/bold", children: T.name }),
                          (0, i.jsxs)("div", {
                              className: p.TZ,
                              children: [
                                  (0, i.jsx)(o._Jp, {
                                      color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: p.Me,
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: A.intl.format(A.t["pob/cL"], { subscriptions: f }),
                                  }),
                                  (0, i.jsx)("div", { className: p.me }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, _.gb)(T.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  s
                      ? (0, i.jsx)(u.A, {
                            guild: T,
                            analyticsLocation: {
                                page: h.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: h.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: h.ZSU.BUTTON_CTA,
                                objectType: h.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: a.$n.Sizes.MEDIUM,
                            color: a.$n.Colors.PRIMARY,
                            buttonText: A.intl.string(A.t.aBHecF),
                        })
                      : (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            text: A.intl.string(A.t.KLOhbO),
                            onClick: () => {
                                (0, x.default)(),
                                    (0, c.K4)({
                                        guildId: T.id,
                                        location: { section: h.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
