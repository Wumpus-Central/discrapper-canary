a.d(t, { A: () => x });
var n = a(627968);
a(64700);
var i = a(311907),
    o = a(397927),
    r = a(688810),
    s = a(503566),
    l = a(631305),
    _ = a(71393),
    c = a(967198),
    d = a(652215),
    u = a(874864),
    A = a(985018),
    m = a(234518);
function x(e) {
    let { analyticsSection: t, analyticsPage: a, isGIF: x, banner: p } = e,
        f = (0, i.bG)([c.A], () => c.A.getGuildId()),
        g = (0, i.bG)([_.A], () => _.A.getGuild(f)),
        { analyticsLocations: v } = (0, r.Ay)();
    return null == g ||
        g.features.has(d.GuildFeatures.ANIMATED_BANNER) ||
        (!x && g.features.has(d.GuildFeatures.BANNER))
        ? null
        : (0, n.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, n.jsx)(o._Jp, { color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK, className: m.qC }),
                  (0, n.jsx)(o.Text, {
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: A.intl.string(A.t["56M7xe"]),
                  }),
                  (0, n.jsx)("div", {
                      className: m.xF,
                      children: (0, n.jsx)(o.QWc, {
                          text: A.intl.string(A.t.WUHdZV),
                          onClick: () => {
                              if (null == g) return;
                              let e = { section: t, page: a, object: d.ZSU.UPSELL_HEADER };
                              null != p
                                  ? (0, s._)({
                                        analyticsLocations: v,
                                        analyticsLocation: e,
                                        guild: g,
                                        isGIF: x,
                                        banner: p,
                                    })
                                  : (0, l.A)({
                                        analyticsLocations: v,
                                        analyticsSourceLocation: e,
                                        guild: g,
                                        perks: x ? (0, u.Pf)() : (0, u.QR)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
