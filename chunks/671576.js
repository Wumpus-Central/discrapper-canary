n.d(t, { default: () => v });
var i = n(627968),
    l = n(64700),
    s = n(189213),
    a = n(17928),
    r = n(459192),
    o = n(192308),
    d = n(691885),
    c = n(834730),
    u = n(243721),
    m = n(71393),
    g = n(954571),
    h = n(462116),
    x = n(974103),
    p = n(903093),
    A = n(610136),
    b = n(336496),
    f = n(218113),
    _ = n(652215),
    j = n(985018),
    N = n(226143);
function v(e) {
    let { guildId: t, transitionState: n, onClose: v, analyticsData: E } = e,
        C = (0, a.bG)([m.A], () => m.A.getGuild(t), [t]),
        I = !!C?.features.has(_.GuildFeatures.INVITES_DISABLED),
        [T] = l.useState(!1),
        [S, y] = l.useState(f.f7),
        w = (0, a.bG)([A.A], () => A.A.getGuildIncident(t)),
        O = (0, x.w)(C),
        k = (0, p.r2)(w) || I,
        L = (0, p.di)(w),
        [R, M] = l.useState(k),
        [D, P] = l.useState(L),
        [G, U] = l.useState(!1),
        W = R !== k || D !== L || G,
        B = I && !O;
    return null == C
        ? (v(), null)
        : (0, i.jsx)(s.Modal, {
              transitionState: n,
              title: j.intl.string(j.t.oCYAc7),
              actions: [
                  { text: j.intl.string(j.t["ETE/oC"]), onClick: v, variant: "secondary", disabled: T },
                  {
                      text: j.intl.string(j.t["pwm/z0"]),
                      onClick: () => {
                          (k || L) && !R && !D
                              ? ((0, h.tr)(C.id, !1, !1),
                                (0, o.openModalLazy)(() =>
                                    Promise.resolve((e) => (0, i.jsx)(b.default, { ...e, guildId: t })),
                                ))
                              : (0, h.tr)(C.id, R, D, S);
                          let { source: e, alertType: n, messageId: l } = E;
                          g.default.track(_.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                              guild_id: t,
                              source: e,
                              raid_alert_id: l,
                              raid_alert_type: n,
                              intervention_type_enabled: (0, p.mR)(R, D),
                              intervention_type_disabled: (0, p.fi)(R, D),
                              duration: 60 * S,
                          }),
                              v();
                      },
                      loading: T,
                      disabled: !W,
                  },
              ],
              onClose: v,
              children: (0, i.jsxs)("div", {
                  className: N.rs,
                  children: [
                      (0, i.jsx)(d.l, {
                          label: j.intl.string(j.t.vKYZzc),
                          hideLabel: !0,
                          placeholder: j.intl.string(j.t.vKYZzc),
                          options: (0, f.aE)(),
                          onSelectionChange: function (e) {
                              y(e), U(!0);
                          },
                          value: S,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
                      (0, i.jsxs)("div", {
                          className: N.Qb,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: N.Iy,
                                  children: [
                                      (0, i.jsx)(c.E, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: j.intl.string(j.t.Uwsjn6),
                                      }),
                                      (0, i.jsx)(c.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: j.intl.string(j.t.qPJkZh),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(r.u, {
                                  body: j.intl.string(j.t["9GPbsV"]),
                                  shouldShow: I,
                                  asContainer: !0,
                                  element: "div",
                                  children: (0, i.jsx)("div", {
                                      className: N.L$,
                                      children: (0, i.jsx)(u.d, {
                                          onChange: function () {
                                              M((e) => !e);
                                          },
                                          checked: R,
                                          disabled: B,
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: N.Qb,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: N.Iy,
                                  children: [
                                      (0, i.jsx)(c.E, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: j.intl.string(j.t["wrDmA/"]),
                                      }),
                                      (0, i.jsx)(c.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: j.intl.string(j.t.UQbJW7),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: N.L$,
                                  children: (0, i.jsx)(u.d, {
                                      onChange: function () {
                                          P((e) => !e);
                                      },
                                      checked: D,
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
