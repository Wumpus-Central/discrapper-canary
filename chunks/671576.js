i.d(e, { default: () => N });
var n = i(627968),
    s = i(64700),
    l = i(189213),
    d = i(17928),
    a = i(459192),
    r = i(192308),
    o = i(691885),
    c = i(834730),
    u = i(243721),
    h = i(71393),
    x = i(174459),
    m = i(462116),
    g = i(974103),
    v = i(903093),
    b = i(610136),
    j = i(336496),
    _ = i(218113),
    p = i(652215),
    E = i(375708),
    C = i(226143);
function N(t) {
    let { guildId: e, transitionState: i, onClose: N, analyticsData: A } = t,
        I = (0, d.bG)([h.A], () => h.A.getGuild(e), [e]),
        S = !!I?.features.has(p.GuildFeatures.INVITES_DISABLED),
        [f] = s.useState(!1),
        k = (0, d.bG)([b.A], () => b.A.getGuildIncident(e)),
        [w, y] = s.useState(() => (0, v.Z7)(k)),
        G = (0, g.w)(I),
        L = (0, v.r2)(k) || S,
        T = (0, v.di)(k),
        [D, z] = s.useState(L),
        [Z, M] = s.useState(T),
        [P, Q] = s.useState(!1),
        R = D !== L || Z !== T || P,
        U = S && !G;
    return null == I
        ? (N(), null)
        : (0, n.jsx)(l.Modal, {
              transitionState: i,
              title: E.intl.string(E.t.oCYAc7),
              actions: [
                  { text: E.intl.string(E.t["ETE/oC"]), onClick: N, variant: "secondary", disabled: f },
                  {
                      text: E.intl.string(E.t["pwm/z0"]),
                      onClick: () => {
                          (L || T) && !D && !Z
                              ? ((0, m.tr)(I.id, !1, !1),
                                (0, r.openModalLazy)(() =>
                                    Promise.resolve((t) => (0, n.jsx)(j.default, { ...t, guildId: e })),
                                ))
                              : (0, m.tr)(I.id, D, Z, w);
                          let { source: t, alertType: i, messageId: s } = A;
                          x.default.track(p.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                              guild_id: e,
                              source: t,
                              raid_alert_id: s,
                              raid_alert_type: i,
                              intervention_type_enabled: (0, v.mR)(D, Z),
                              intervention_type_disabled: (0, v.fi)(D, Z),
                              duration: 60 * w,
                          }),
                              N();
                      },
                      loading: f,
                      disabled: !R,
                  },
              ],
              onClose: N,
              children: (0, n.jsxs)("div", {
                  className: C.rs,
                  children: [
                      (0, n.jsx)(o.l, {
                          label: E.intl.string(E.t.vKYZzc),
                          hideLabel: !0,
                          placeholder: E.intl.string(E.t.vKYZzc),
                          options: (0, _.aE)(),
                          onSelectionChange: function (t) {
                              y(t), Q(!0);
                          },
                          value: w,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
                      (0, n.jsxs)("div", {
                          className: C.Qb,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: C.Iy,
                                  children: [
                                      (0, n.jsx)(c.E, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: E.intl.string(E.t.Uwsjn6),
                                      }),
                                      (0, n.jsx)(c.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: E.intl.string(E.t.qPJkZh),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(a.u, {
                                  body: E.intl.string(E.t["9GPbsV"]),
                                  shouldShow: S,
                                  asContainer: !0,
                                  element: "div",
                                  children: (0, n.jsx)("div", {
                                      className: C.L$,
                                      children: (0, n.jsx)(u.d, {
                                          onChange: function () {
                                              z((t) => !t);
                                          },
                                          checked: D,
                                          disabled: U,
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)("div", {
                          className: C.Qb,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: C.Iy,
                                  children: [
                                      (0, n.jsx)(c.E, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: E.intl.string(E.t["wrDmA/"]),
                                      }),
                                      (0, n.jsx)(c.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: E.intl.string(E.t.UQbJW7),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: C.L$,
                                  children: (0, n.jsx)(u.d, {
                                      onChange: function () {
                                          M((t) => !t);
                                      },
                                      checked: Z,
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
