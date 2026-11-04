var n = i(477900),
    s = i(582128),
    l = i(855986),
    d = i(189213),
    a = i(192308),
    r = i(691885),
    o = i(834730),
    c = i(683063),
    u = i(143129),
    h = i(71393),
    m = i(129230),
    x = i(859706),
    b = i(974103),
    g = i(903093),
    v = i(610136),
    j = i(336496),
    _ = i(218113),
    p = i(652215),
    E = i(792996),
    f = i(679152);
i.d(
    e,
    {},
    {
        default: function (t) {
            let { guildId: e, transitionState: i, onClose: C, analyticsData: N } = t,
                y = (0, l.bG)([h.A], () => h.A.getGuild(e), [e]),
                A = !!y?.features.has(p.GuildFeatures.INVITES_DISABLED),
                [I] = s.useState(!1),
                S = (0, l.bG)([v.A], () => v.A.getGuildIncident(e)),
                [k, w] = s.useState(() => (0, g.Z7)(S)),
                G = (0, b.w)(y),
                T = (0, g.r2)(S) || A,
                D = (0, g.di)(S),
                [L, Z] = s.useState(T),
                [z, P] = s.useState(D),
                [Q, R] = s.useState(!1),
                U = L !== T || z !== D || Q,
                V = A && !G;
            return null == y
                ? (C(), null)
                : (0, n.jsx)(d.a, {
                      transitionState: i,
                      title: E.intl.string(E.t.oCYAc7),
                      actions: [
                          { text: E.intl.string(E.t["ETE/oC"]), onClick: C, variant: "secondary", disabled: I },
                          {
                              text: E.intl.string(E.t["pwm/z0"]),
                              onClick: function () {
                                  if (null == y) return;
                                  (T || D) && !L && !z
                                      ? ((0, x.tr)(y.id, !1, !1),
                                        (0, a.mM)(() =>
                                            Promise.resolve((t) => (0, n.jsx)(j.default, { ...t, guildId: e })),
                                        ))
                                      : (0, x.tr)(y.id, L, z, k);
                                  let { source: t, alertType: i, messageId: s } = N;
                                  (m.default.track(p.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                      guild_id: e,
                                      source: t,
                                      raid_alert_id: s,
                                      raid_alert_type: i,
                                      intervention_type_enabled: (0, g.mR)(L, z),
                                      intervention_type_disabled: (0, g.fi)(L, z),
                                      duration: 60 * k,
                                  }),
                                      C());
                              },
                              loading: I,
                              disabled: !U,
                          },
                      ],
                      onClose: C,
                      children: (0, n.jsxs)("div", {
                          className: f.rs,
                          children: [
                              (0, n.jsx)(r.l, {
                                  label: E.intl.string(E.t.vKYZzc),
                                  hideLabel: !0,
                                  placeholder: E.intl.string(E.t.vKYZzc),
                                  options: (0, _.aE)(),
                                  onSelectionChange: function (t) {
                                      (w(t), R(!0));
                                  },
                                  value: k,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                              (0, n.jsxs)("div", {
                                  className: f.Qb,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: f.Iy,
                                          children: [
                                              (0, n.jsx)(o.E, {
                                                  variant: "body-md/semibold",
                                                  color: "text-strong",
                                                  children: E.intl.string(E.t.Uwsjn6),
                                              }),
                                              (0, n.jsx)(o.E, {
                                                  variant: "body-sm/normal",
                                                  color: "text-muted",
                                                  children: E.intl.string(E.t.qPJkZh),
                                              }),
                                          ],
                                      }),
                                      (0, n.jsx)(c.u, {
                                          body: E.intl.string(E.t["9GPbsV"]),
                                          shouldShow: A,
                                          asContainer: !0,
                                          element: "div",
                                          children: (0, n.jsx)("div", {
                                              className: f.L$,
                                              children: (0, n.jsx)(u.d, {
                                                  onChange: function () {
                                                      Z((t) => !t);
                                                  },
                                                  checked: L,
                                                  disabled: V,
                                              }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, n.jsxs)("div", {
                                  className: f.Qb,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: f.Iy,
                                          children: [
                                              (0, n.jsx)(o.E, {
                                                  variant: "body-md/semibold",
                                                  color: "text-strong",
                                                  children: E.intl.string(E.t["wrDmA/"]),
                                              }),
                                              (0, n.jsx)(o.E, {
                                                  variant: "body-sm/normal",
                                                  color: "text-muted",
                                                  children: E.intl.string(E.t.UQbJW7),
                                              }),
                                          ],
                                      }),
                                      (0, n.jsx)("div", {
                                          className: f.L$,
                                          children: (0, n.jsx)(u.d, {
                                              onChange: function () {
                                                  P((t) => !t);
                                              },
                                              checked: z,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  });
        },
    },
);
