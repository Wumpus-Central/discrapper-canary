n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(417597),
    o = n(421380),
    l = n(397927),
    c = n(263063),
    u = n(509536),
    d = n(721923),
    f = n(864310),
    p = n(71393),
    _ = n(473145),
    h = n(652215),
    m = n(985018),
    g = n(246930);
let E = function (e) {
    let { className: t, guildId: n, boostingVariant: i } = e,
        E = (0, s.bG)([p.A], () => p.A.getGuild(n), [n]),
        b = (0, f.A)(null == E ? void 0 : E.id).total;
    return null == E
        ? (0, r.jsx)("div", {
              className: a()(t, g.bo),
              children: (0, r.jsx)("div", {
                  className: g.$g,
                  children: (0, r.jsx)(l.Text, {
                      variant: "text-lg/bold",
                      children: m.intl.string(m.t["6Kwwuo"]),
                  }),
              }),
          })
        : (0, r.jsxs)("div", {
              className: a()(t, g.bo),
              children: [
                  (0, r.jsx)(c.A, {
                      className: g.__invalid_guildIcon,
                      guild: E,
                      size: c.A.Sizes.LARGER,
                  }),
                  (0, r.jsxs)("div", {
                      className: g.$g,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: "text-lg/bold",
                              children: E.name,
                          }),
                          (0, r.jsxs)("div", {
                              className: g.TZ,
                              children: [
                                  (0, r.jsx)(l._Jp, {
                                      color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: g.Me,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: m.intl.format(m.t["pob/cL"], {
                                          subscriptions: b,
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: g.me,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, _.gb)(E.premiumTier, {
                                          useLevels: !1,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  i
                      ? (0, r.jsx)(d.A, {
                            guild: E,
                            analyticsLocation: {
                                page: h.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: h.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: h.ZSU.BUTTON_CTA,
                                objectType: h.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: o.$n.Sizes.MEDIUM,
                            color: o.$n.Colors.PRIMARY,
                            buttonText: m.intl.string(m.t.aBHecF),
                        })
                      : (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            text: m.intl.string(m.t.KLOhbO),
                            onClick: () => {
                                (0, u.K)({
                                    guildId: E.id,
                                    location: {
                                        section: h.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                    },
                                });
                            },
                        }),
              ],
          });
};
