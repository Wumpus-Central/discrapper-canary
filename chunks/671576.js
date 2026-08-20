i.d(e, { default: () => C });
var n = i(477900),
    s = i(582128),
    l = i(189213),
    d = i(17928),
    a = i(192308),
    r = i(691885),
    o = i(834730),
    c = i(459192),
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
    f = i(679152);
function C(t) {
    let { guildId: e, transitionState: i, onClose: C, analyticsData: N } = t,
        A = (0, d.bG)([h.A], () => h.A.getGuild(e), [e]),
        I = !!A?.features.has(p.GuildFeatures.INVITES_DISABLED),
        [S] = s.useState(!1),
        k = (0, d.bG)([b.A], () => b.A.getGuildIncident(e)),
        [w, y] = s.useState(() => (0, v.Z7)(k)),
        G = (0, g.w)(A),
        L = (0, v.r2)(k) || I,
        T = (0, v.di)(k),
        [D, z] = s.useState(L),
        [Z, M] = s.useState(T),
        [P, Q] = s.useState(!1),
        R = D !== L || Z !== T || P,
        U = I && !G;
    return null == A
        ? (C(), null)
        : (0, n.jsx)(l.Modal, {
              transitionState: i,
              title: E.intl.string(E.t.oCYAc7),
              actions: [
                  { text: E.intl.string(E.t["ETE/oC"]), onClick: C, variant: "secondary", disabled: S },
                  {
                      text: E.intl.string(E.t["pwm/z0"]),
                      onClick: function () {
                          if (null == A) return;
                          (L || T) && !D && !Z
                              ? ((0, m.tr)(A.id, !1, !1),
                                (0, a.openModalLazy)(() =>
                                    Promise.resolve((t) => (0, n.jsx)(j.default, { ...t, guildId: e })),
                                ))
                              : (0, m.tr)(A.id, D, Z, w);
                          let { source: t, alertType: i, messageId: s } = N;
                          x.default.track(p.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                              guild_id: e,
                              source: t,
                              raid_alert_id: s,
                              raid_alert_type: i,
                              intervention_type_enabled: (0, v.mR)(D, Z),
                              intervention_type_disabled: (0, v.fi)(D, Z),
                              duration: 60 * w,
                          }),
                              C();
                      },
                      loading: S,
                      disabled: !R,
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
                              y(t), Q(!0);
                          },
                          value: w,
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
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: E.intl.string(E.t.Uwsjn6),
                                      }),
                                      (0, n.jsx)(o.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: E.intl.string(E.t.qPJkZh),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(c.u, {
                                  body: E.intl.string(E.t["9GPbsV"]),
                                  shouldShow: I,
                                  asContainer: !0,
                                  element: "div",
                                  children: (0, n.jsx)("div", {
                                      className: f.L$,
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
                          className: f.Qb,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: f.Iy,
                                  children: [
                                      (0, n.jsx)(o.E, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: E.intl.string(E.t["wrDmA/"]),
                                      }),
                                      (0, n.jsx)(o.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: E.intl.string(E.t.UQbJW7),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: f.L$,
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
