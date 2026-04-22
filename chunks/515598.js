i.d(t, { A: () => A });
var r = i(627968);
i(64700);
var n = i(311907),
    s = i(104510),
    o = i(827734),
    l = i(834730),
    a = i(123292),
    c = i(688810),
    d = i(503566),
    _ = i(631305),
    u = i(71393),
    h = i(967198),
    p = i(652215),
    g = i(874864),
    m = i(985018),
    f = i(724709);
function A(e) {
    let { analyticsSection: t, analyticsPage: i, isGIF: A, banner: E } = e,
        v = (0, n.bG)([h.A], () => h.A.getGuildId()),
        b = (0, n.bG)([u.A], () => u.A.getGuild(v)),
        { analyticsLocations: x } = (0, c.Ay)();
    return null == b ||
        b.features.has(p.GuildFeatures.ANIMATED_BANNER) ||
        (!A && b.features.has(p.GuildFeatures.BANNER))
        ? null
        : (0, r.jsxs)("div", {
              className: f.kL,
              children: [
                  (0, r.jsx)(s._, { color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: f.qC }),
                  (0, r.jsx)(l.E, {
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: m.intl.string(m.t["56M7xe"]),
                  }),
                  (0, r.jsx)("div", {
                      className: f.xF,
                      children: (0, r.jsx)(a.Q, {
                          text: m.intl.string(m.t.WUHdZV),
                          onClick: () => {
                              if (null == b) return;
                              let e = { section: t, page: i, object: p.ZSU.UPSELL_HEADER };
                              null != E
                                  ? (0, d._)({
                                        analyticsLocations: x,
                                        analyticsLocation: e,
                                        guild: b,
                                        isGIF: A,
                                        banner: E,
                                    })
                                  : (0, _.A)({
                                        analyticsLocations: x,
                                        analyticsSourceLocation: e,
                                        guild: b,
                                        perks: A ? (0, g.Pf)() : (0, g.QR)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
