n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(821609),
    l = n(688810),
    a = n(13875),
    r = n(515727),
    o = n(84540),
    d = n(919395),
    u = n(128450),
    c = n(212168),
    g = n(985018),
    m = n(238780);
function _(e) {
    let { user: t, guild: n, sectionTitle: _ } = e,
        { analyticsLocations: A } = (0, l.Ay)(),
        h = (0, a.sk)("ProfileFrameSection"),
        p = (0, d.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: x, errors: E } = (0, d.Tu)(n?.id);
    return h
        ? (0, i.jsx)(u.A, {
              borderType: c.i.PREMIUM,
              hasBackground: !0,
              title: _,
              errors: E,
              children: (0, i.jsxs)("div", {
                  className: m.N,
                  children: [
                      (0, i.jsx)(s.$, {
                          variant: "primary",
                          size: "sm",
                          text: g.intl.string(g.t["9/hmle"]),
                          onClick: () => {
                              (0, r.w)({ analyticsLocations: A, guild: n });
                          },
                      }),
                      (void 0 === x ? null != p : null != x) &&
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: m.D,
                              children: (0, i.jsx)(s.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != n ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.nQBruk),
                                  onClick: () => {
                                      (0, o.p)({ guildId: n?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
