n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(417597),
    r = n(862482),
    o = n(834730),
    d = n(104510),
    u = n(827734),
    c = n(821609),
    g = n(263063),
    m = n(509536),
    _ = n(721923),
    A = n(864310),
    h = n(71393),
    p = n(473145),
    x = n(779733),
    E = n(652215),
    T = n(985018),
    S = n(690256);
let f = function (e) {
    let { className: t, guildId: n, boostingVariant: s } = e,
        f = (0, a.bG)([h.A], () => h.A.getGuild(n), [n]),
        b = (0, A.A)(f?.id).total;
    return null == f
        ? (0, i.jsx)("div", {
              className: l()(t, S.bo),
              children: (0, i.jsx)("div", {
                  className: S.$g,
                  children: (0, i.jsx)(o.E, { variant: "text-lg/bold", children: T.intl.string(T.t["6Kwwuo"]) }),
              }),
          })
        : (0, i.jsxs)("div", {
              className: l()(t, S.bo),
              children: [
                  (0, i.jsx)(g.Ay, { className: S.__invalid_guildIcon, guild: f, size: g.Ay.Sizes.LARGER }),
                  (0, i.jsxs)("div", {
                      className: S.$g,
                      children: [
                          (0, i.jsx)(o.E, { variant: "text-lg/bold", children: f.name }),
                          (0, i.jsxs)("div", {
                              className: S.TZ,
                              children: [
                                  (0, i.jsx)(d._, { color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: S.Me }),
                                  (0, i.jsx)(o.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: T.intl.format(T.t["pob/cL"], { subscriptions: b }),
                                  }),
                                  (0, i.jsx)("div", { className: S.me }),
                                  (0, i.jsx)(o.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, p.gb)(f.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  s
                      ? (0, i.jsx)(_.A, {
                            guild: f,
                            analyticsLocation: {
                                page: E.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: E.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: E.ZSU.BUTTON_CTA,
                                objectType: E.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: r.$n.Sizes.MEDIUM,
                            color: r.$n.Colors.PRIMARY,
                            buttonText: T.intl.string(T.t.aBHecF),
                        })
                      : (0, i.jsx)(c.$, {
                            variant: "secondary",
                            text: T.intl.string(T.t.KLOhbO),
                            onClick: () => {
                                (0, x.default)(),
                                    (0, m.K4)({
                                        guildId: f.id,
                                        location: { section: E.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
