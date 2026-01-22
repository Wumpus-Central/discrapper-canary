n.d(t, { default: () => O }), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(435371),
    o = n(397927),
    c = n(71393),
    d = n(954571),
    u = n(554113),
    b = n(974103),
    f = n(903093),
    p = n(610136),
    m = n(336496),
    g = n(218113),
    h = n(652215),
    x = n(985018),
    j = n(651846);
function O(e) {
    let { guildId: t, transitionState: n, onClose: O, analyticsData: y } = e,
        A = (0, a.bG)([c.A], () => c.A.getGuild(t), [t]),
        v = !!(null == A ? void 0 : A.features.has(h.GuildFeatures.INVITES_DISABLED)),
        [N] = r.useState(!1),
        [E, T] = r.useState(g.f7),
        w = (0, a.bG)([p.A], () => p.A.getGuildIncident(t)),
        C = (0, b.w)(A),
        S = (0, f.r2)(w) || v,
        _ = (0, f.di)(w),
        [I, P] = r.useState(S),
        [k, R] = r.useState(_),
        [L, M] = r.useState(!1),
        D = I !== S || k !== _ || L,
        G = v && !C;
    return null == A
        ? (O(), null)
        : (0, i.jsx)(l.Modal, {
              transitionState: n,
              title: x.intl.string(x.t.oCYAc7),
              actions: [
                  {
                      text: x.intl.string(x.t["ETE/oC"]),
                      onClick: O,
                      variant: "secondary",
                      disabled: N,
                  },
                  {
                      text: x.intl.string(x.t["pwm/z0"]),
                      onClick: () => {
                          (S || _) && !I && !k
                              ? ((0, u.tr)(A.id, !1, !1),
                                (0, o.mMO)(() =>
                                    Promise.resolve((e) => {
                                        var n, r;
                                        return (0, i.jsx)(
                                            m.default,
                                            ((n = (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        i = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (i = i.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            }),
                                                        )),
                                                        i.forEach(function (t) {
                                                            var i;
                                                            (i = n[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: i,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (e[t] = i);
                                                        });
                                                }
                                                return e;
                                            })({}, e)),
                                            (r = r = { guildId: t }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var i = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, i);
                                                      }
                                                      return n;
                                                  })(Object(r)).forEach(function (e) {
                                                      Object.defineProperty(
                                                          n,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(r, e),
                                                      );
                                                  }),
                                            n),
                                        );
                                    }),
                                ))
                              : (0, u.tr)(A.id, I, k, E);
                          let { source: e, alertType: n, messageId: r } = y;
                          d.default.track(h.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                              guild_id: t,
                              source: e,
                              raid_alert_id: r,
                              raid_alert_type: n,
                              intervention_type_enabled: (0, f.mR)(I, k),
                              intervention_type_disabled: (0, f.fi)(I, k),
                              duration: 60 * E,
                          }),
                              O();
                      },
                      loading: N,
                      disabled: !D,
                  },
              ],
              onClose: O,
              children: (0, i.jsxs)("div", {
                  className: j.rs,
                  children: [
                      (0, i.jsx)(o.l6P, {
                          label: x.intl.string(x.t.vKYZzc),
                          hideLabel: !0,
                          placeholder: x.intl.string(x.t.vKYZzc),
                          options: (0, g.aE)(),
                          onSelectionChange: function (e) {
                              T(e), M(!0);
                          },
                          value: E,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
                      (0, i.jsxs)("div", {
                          className: j.Qb,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: j.Iy,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: x.intl.string(x.t.Uwsjn6),
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: x.intl.string(x.t.qPJkZh),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(s.un, {
                                  body: x.intl.string(x.t["9GPbsV"]),
                                  shouldShow: v,
                                  asContainer: !0,
                                  element: "div",
                                  children: (0, i.jsx)("div", {
                                      className: j.L$,
                                      children: (0, i.jsx)(o.dOG, {
                                          onChange: function () {
                                              P((e) => !e);
                                          },
                                          checked: I,
                                          disabled: G,
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: j.Qb,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: j.Iy,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: x.intl.string(x.t["wrDmA/"]),
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: x.intl.string(x.t.UQbJW7),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: j.L$,
                                  children: (0, i.jsx)(o.dOG, {
                                      onChange: function () {
                                          R((e) => !e);
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
