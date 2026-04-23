i.d(t, { A: () => N });
var n = i(627968);
i(64700);
var a = i(311907),
    r = i(104510),
    l = i(827734),
    s = i(834730),
    o = i(123292),
    c = i(688810),
    d = i(503566),
    u = i(631305),
    _ = i(71393),
    A = i(967198),
    h = i(652215),
    g = i(874864),
    m = i(985018),
    x = i(724709);
function N(e) {
    let { analyticsSection: t, analyticsPage: i, isGIF: N, banner: f } = e,
        v = (0, a.bG)([A.A], () => A.A.getGuildId()),
        E = (0, a.bG)([_.A], () => _.A.getGuild(v)),
        { analyticsLocations: T } = (0, c.Ay)();
    return null == E ||
        E.features.has(h.GuildFeatures.ANIMATED_BANNER) ||
        (!N && E.features.has(h.GuildFeatures.BANNER))
        ? null
        : (0, n.jsxs)("div", {
              className: x.kL,
              children: [
                  (0, n.jsx)(r._, { color: l.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: x.qC }),
                  (0, n.jsx)(s.E, {
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: m.intl.string(m.t["56M7xe"]),
                  }),
                  (0, n.jsx)("div", {
                      className: x.xF,
                      children: (0, n.jsx)(o.Q, {
                          text: m.intl.string(m.t.WUHdZV),
                          onClick: () => {
                              if (null == E) return;
                              let e = { section: t, page: i, object: h.ZSU.UPSELL_HEADER };
                              null != f
                                  ? (0, d._)({
                                        analyticsLocations: T,
                                        analyticsLocation: e,
                                        guild: E,
                                        isGIF: N,
                                        banner: f,
                                    })
                                  : (0, u.A)({
                                        analyticsLocations: T,
                                        analyticsSourceLocation: e,
                                        guild: E,
                                        perks: N ? (0, g.Pf)() : (0, g.QR)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
