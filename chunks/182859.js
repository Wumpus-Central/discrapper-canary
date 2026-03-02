n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(732955),
    o = n(397927),
    d = n(688810),
    u = n(893598),
    c = n(652215),
    m = n(333354),
    p = n(985018),
    _ = n(575651),
    x = n(519636);
function A(e) {
    let { guildId: t, variant: l = "admin", onDismiss: A } = e,
        { analyticsLocations: f } = (0, d.Ay)(),
        g = i.useCallback(() => {
            (0, o.mMO)(async () => {
                let { default: e } = await n.e("64251").then(n.bind(n, 430326));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        guildId: t,
                        analyticsLocation: {
                            page: c.liQ.GUILD_POWERUPS_OVERVIEW,
                            section: c.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                            object: c.ZSU.CARD,
                        },
                        videoPlacement: "sidebar",
                        sourceAnalyticsLocations: f,
                    });
            });
        }, [f, t]);
    return "member" === l
        ? (0, r.jsxs)(o.DUT, {
              className: _.iR,
              onClick: g,
              "aria-label": p.intl.string(m.default["103aY+"]),
              children: [
                  (0, r.jsx)("img", { alt: "", className: _.xn, src: x.A }),
                  (0, r.jsx)("div", { className: _.b1 }),
                  (0, r.jsx)("div", {
                      className: _.i5,
                      children: (0, r.jsx)(o.Text, {
                          variant: "text-xs/semibold",
                          color: "always-white",
                          children: p.intl.string(m.default.diMhWc),
                      }),
                  }),
                  (0, r.jsx)(u.A, { className: _.Rr, inactive: !0, renderLinkComponent: () => null }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: _.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: s()(_.X8, "theme-dark"),
                      children: (0, r.jsx)(a.K0, {
                          variant: "icon-only",
                          size: "md",
                          "aria-label": p.intl.string(p.t.WAI6xu),
                          onClick: A,
                          icon: o.PGe,
                      }),
                  }),
                  (0, r.jsxs)(o.DUT, {
                      className: _.iT,
                      onClick: g,
                      "aria-label": p.intl.string(m.default["103aY+"]),
                      children: [
                          (0, r.jsx)("img", { alt: "", className: _.xn, src: x.A }),
                          (0, r.jsx)("div", { className: _.TQ }),
                          (0, r.jsx)(u.A, { className: _.Rr, inactive: !0, renderLinkComponent: () => null }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: _.FS,
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: p.intl.string(m.default.diMhWc),
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: p.intl.string(m.default.pycxTr),
                          }),
                      ],
                  }),
              ],
          });
}
