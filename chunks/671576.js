n.d(t, { default: () => f });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(311907),
    r = n(435371),
    o = n(397927),
    d = n(71393),
    c = n(954571),
    u = n(554113),
    m = n(974103),
    g = n(903093),
    x = n(610136),
    h = n(336496),
    p = n(218113),
    A = n(652215),
    b = n(985018),
    _ = n(651846);
function f(e) {
    let { guildId: t, transitionState: n, onClose: f, analyticsData: N } = e,
        j = (0, a.bG)([d.A], () => d.A.getGuild(t), [t]),
        T = !!j?.features.has(A.GuildFeatures.INVITES_DISABLED),
        [C] = l.useState(!1),
        [v, E] = l.useState(p.f7),
        I = (0, a.bG)([x.A], () => x.A.getGuildIncident(t)),
        S = (0, m.w)(j),
        y = (0, g.r2)(I) || T,
        O = (0, g.di)(I),
        [w, R] = l.useState(y),
        [k, L] = l.useState(O),
        [M, G] = l.useState(!1),
        U = w !== y || k !== O || M,
        D = T && !S;
    return null == j
        ? (f(), null)
        : (0, i.jsx)(s.Modal, {
              transitionState: n,
              title: b.intl.string(b.t.oCYAc7),
              actions: [
                  { text: b.intl.string(b.t["ETE/oC"]), onClick: f, variant: "secondary", disabled: C },
                  {
                      text: b.intl.string(b.t["pwm/z0"]),
                      onClick: () => {
                          (y || O) && !w && !k
                              ? ((0, u.tr)(j.id, !1, !1),
                                (0, o.mMO)(() => Promise.resolve((e) => (0, i.jsx)(h.default, { ...e, guildId: t }))))
                              : (0, u.tr)(j.id, w, k, v);
                          let { source: e, alertType: n, messageId: l } = N;
                          c.default.track(A.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                              guild_id: t,
                              source: e,
                              raid_alert_id: l,
                              raid_alert_type: n,
                              intervention_type_enabled: (0, g.mR)(w, k),
                              intervention_type_disabled: (0, g.fi)(w, k),
                              duration: 60 * v,
                          }),
                              f();
                      },
                      loading: C,
                      disabled: !U,
                  },
              ],
              onClose: f,
              children: (0, i.jsxs)("div", {
                  className: _.rs,
                  children: [
                      (0, i.jsx)(o.l6P, {
                          label: b.intl.string(b.t.vKYZzc),
                          hideLabel: !0,
                          placeholder: b.intl.string(b.t.vKYZzc),
                          options: (0, p.aE)(),
                          onSelectionChange: function (e) {
                              E(e), G(!0);
                          },
                          value: v,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
                      (0, i.jsxs)("div", {
                          className: _.Qb,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: _.Iy,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: b.intl.string(b.t.Uwsjn6),
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: b.intl.string(b.t.qPJkZh),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(r.un, {
                                  body: b.intl.string(b.t["9GPbsV"]),
                                  shouldShow: T,
                                  asContainer: !0,
                                  element: "div",
                                  children: (0, i.jsx)("div", {
                                      className: _.L$,
                                      children: (0, i.jsx)(o.dOG, {
                                          onChange: function () {
                                              R((e) => !e);
                                          },
                                          checked: w,
                                          disabled: D,
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: _.Qb,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: _.Iy,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: b.intl.string(b.t["wrDmA/"]),
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: b.intl.string(b.t.UQbJW7),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: _.L$,
                                  children: (0, i.jsx)(o.dOG, {
                                      onChange: function () {
                                          L((e) => !e);
                                      },
                                      checked: k,
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
