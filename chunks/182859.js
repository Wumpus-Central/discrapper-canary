n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    l = n(732955),
    s = n(397927),
    a = n(688810),
    o = n(893598),
    d = n(652215),
    u = n(333354),
    c = n(985018),
    m = n(575651),
    p = n(519636);
function _(e) {
    let { guildId: t, variant: _ = "admin", onDismiss: x } = e,
        { analyticsLocations: A } = (0, a.Ay)(),
        f = i.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("64251").then(n.bind(n, 430326));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        guildId: t,
                        analyticsLocation: {
                            page: d.liQ.GUILD_POWERUPS_OVERVIEW,
                            section: d.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                            object: d.ZSU.CARD,
                        },
                        videoPlacement: "sidebar",
                        sourceAnalyticsLocations: A,
                    });
            });
        }, [A, t]);
    return "member" === _
        ? (0, r.jsxs)(s.DUT, {
              className: m.iR,
              onClick: f,
              "aria-label": c.intl.string(u.default["103aY+"]),
              children: [
                  (0, r.jsx)("img", { alt: "", className: m.xn, src: p.A }),
                  (0, r.jsx)("div", { className: m.b1 }),
                  (0, r.jsx)("div", {
                      className: m.i5,
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-xs/semibold",
                          color: "always-white",
                          children: c.intl.string(u.default.diMhWc),
                      }),
                  }),
                  (0, r.jsx)(o.A, { className: m.Rr, inactive: !0, renderLinkComponent: () => null }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: m.X8,
                      children: (0, r.jsx)(l.K0, {
                          variant: "icon-only",
                          size: "md",
                          "aria-label": c.intl.string(c.t.WAI6xu),
                          onClick: x,
                          icon: s.PGe,
                      }),
                  }),
                  (0, r.jsxs)(s.DUT, {
                      className: m.iT,
                      onClick: f,
                      "aria-label": c.intl.string(u.default["103aY+"]),
                      children: [
                          (0, r.jsx)("img", { alt: "", className: m.xn, src: p.A }),
                          (0, r.jsx)("div", { className: m.TQ }),
                          (0, r.jsx)(o.A, { className: m.Rr, inactive: !0, renderLinkComponent: () => null }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: m.FS,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: c.intl.string(u.default.diMhWc),
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: c.intl.string(u.default.pycxTr),
                          }),
                      ],
                  }),
              ],
          });
}
