n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(688810),
    r = n(13875),
    a = n(515727),
    o = n(84540),
    d = n(919395),
    c = n(128450),
    u = n(212168),
    m = n(985018),
    g = n(238780);
function _(e) {
    let { user: t, guild: n, sectionTitle: _ } = e,
        { analyticsLocations: x } = (0, l.Ay)(),
        h = (0, r.A)("ProfileFrameSection"),
        A = (0, d.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: p, errors: T } = (0, d.Tu)(n?.id);
    return h
        ? (0, i.jsx)(c.A, {
              borderType: u.i.PREMIUM,
              hasBackground: !0,
              title: _,
              errors: T,
              children: (0, i.jsxs)("div", {
                  className: g.N,
                  children: [
                      (0, i.jsx)(s.Button, {
                          variant: "primary",
                          size: "sm",
                          text: m.intl.string(m.t["9/hmle"]),
                          onClick: () => {
                              (0, a.w)({ analyticsLocations: x, guild: n });
                          },
                      }),
                      (void 0 === p ? null != A : null != p) &&
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: g.D,
                              children: (0, i.jsx)(s.Button, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != n ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.nQBruk),
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
