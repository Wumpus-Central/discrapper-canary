n.d(t, { default: () => v }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(442837),
    o = n(681715),
    s = n(481060),
    c = n(430824),
    d = n(626135),
    u = n(369994),
    m = n(162157),
    b = n(533244),
    p = n(487419),
    g = n(821312),
    f = n(676770),
    h = n(981631),
    x = n(388032),
    j = n(192928);
function v(e) {
    let { guildId: t, transitionState: n, onClose: v, analyticsData: O } = e,
        y = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        C = !!(null == y ? void 0 : y.features.has(h.GuildFeatures.INVITES_DISABLED)),
        [N] = r.useState(!1),
        [S, I] = r.useState(f.Fl),
        T = (0, a.e7)([p.Z], () => p.Z.getGuildIncident(t)),
        E = (0, m.BT)(y),
        Z = (0, b.SG)(T) || C,
        w = (0, b.sN)(T),
        [P, _] = r.useState(Z),
        [k, A] = r.useState(w),
        [D, R] = r.useState(!1),
        L = P !== Z || k !== w || D,
        M = C && !E;
    return null == y
        ? (v(), null)
        : (0, i.jsx)(l.Modal, {
              transitionState: n,
              title: x.intl.string(x.t.oCYAc7),
              actions: [
                  {
                      text: x.intl.string(x.t["ETE/oC"]),
                      onClick: v,
                      variant: "secondary",
                      disabled: N,
                  },
                  {
                      text: x.intl.string(x.t["pwm/z0"]),
                      onClick: () => {
                          (Z || w) && !P && !k
                              ? ((0, u.n)(y.id, !1, !1),
                                (0, s.ZDy)(() =>
                                    Promise.resolve((e) => {
                                        var n, r;
                                        return (0, i.jsx)(
                                            g.default,
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
                              : (0, u.n)(y.id, P, k, S);
                          let { source: e, alertType: n, messageId: r } = O;
                          d.default.track(h.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                              guild_id: t,
                              source: e,
                              raid_alert_id: r,
                              raid_alert_type: n,
                              intervention_type_enabled: (0, b.sO)(P, k),
                              intervention_type_disabled: (0, b.lk)(P, k),
                              duration: 60 * S,
                          }),
                              v();
                      },
                      loading: N,
                      disabled: !L,
                  },
              ],
              onClose: v,
              children: (0, i.jsxs)("div", {
                  className: j.mainContainer,
                  children: [
                      (0, i.jsx)(s.PhF, {
                          label: x.intl.string(x.t.vKYZzc),
                          hideLabel: !0,
                          placeholder: x.intl.string(x.t.vKYZzc),
                          options: (0, f.c1)(),
                          onSelectionChange: function (e) {
                              I(e), R(!0);
                          },
                          value: S,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
                      (0, i.jsxs)("div", {
                          className: j.pauseContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: j.pauseText,
                                  children: [
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: x.intl.string(x.t.Uwsjn6),
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: x.intl.string(x.t.qPJkZh),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(o.i_, {
                                  body: x.intl.string(x.t["9GPbsV"]),
                                  shouldShow: C,
                                  asContainer: !0,
                                  element: "div",
                                  children: (0, i.jsx)("div", {
                                      className: j.toggle,
                                      children: (0, i.jsx)(s.rsf, {
                                          onChange: function () {
                                              _((e) => !e);
                                          },
                                          checked: P,
                                          disabled: M,
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: j.pauseContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: j.pauseText,
                                  children: [
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: x.intl.string(x.t["wrDmA/"]),
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: x.intl.string(x.t.UQbJW7),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: j.toggle,
                                  children: (0, i.jsx)(s.rsf, {
                                      onChange: function () {
                                          A((e) => !e);
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
