n.d(t, { A: () => A });
var a = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    c = n(688810),
    l = n(503566),
    s = n(631305),
    o = n(71393),
    d = n(967198),
    u = n(652215),
    b = n(874864),
    f = n(985018),
    h = n(234518);
function A(e) {
    let { analyticsSection: t, analyticsPage: n, isGIF: A, banner: m } = e,
        _ = (0, r.bG)([d.A], () => d.A.getGuildId()),
        g = (0, r.bG)([o.A], () => o.A.getGuild(_)),
        { analyticsLocations: x } = (0, c.Ay)();
    return null == g ||
        g.features.has(u.GuildFeatures.ANIMATED_BANNER) ||
        (!A && g.features.has(u.GuildFeatures.BANNER))
        ? null
        : (0, a.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, a.jsx)(i._Jp, {
                      color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      className: h.qC,
                  }),
                  (0, a.jsx)(i.Text, {
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: f.intl.string(f.t["56M7xe"]),
                  }),
                  (0, a.jsx)("div", {
                      className: h.xF,
                      children: (0, a.jsx)(i.QWc, {
                          text: f.intl.string(f.t.WUHdZV),
                          onClick: () => {
                              if (null == g) return;
                              let e = {
                                  section: t,
                                  page: n,
                                  object: u.ZSU.UPSELL_HEADER,
                              };
                              null != m
                                  ? (0, l._)({
                                        analyticsLocations: x,
                                        analyticsLocation: e,
                                        guild: g,
                                        isGIF: A,
                                        banner: m,
                                    })
                                  : (0, s.A)({
                                        analyticsLocations: x,
                                        analyticsSourceLocation: e,
                                        guild: g,
                                        perks: A ? (0, b.Pf)() : (0, b.QR)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
