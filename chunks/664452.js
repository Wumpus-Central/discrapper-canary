n.d(t, { default: () => O }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(442837),
    o = n(199849),
    s = n(681715),
    c = n(481060),
    d = n(430824),
    u = n(626135),
    b = n(369994),
    p = n(162157),
    m = n(533244),
    f = n(487419),
    g = n(821312),
    h = n(676770),
    x = n(981631),
    j = n(388032),
    v = n(192928);
function O(e) {
    let { guildId: t, transitionState: n, onClose: O, analyticsData: y } = e,
        C = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        N = !!(null == C ? void 0 : C.features.has(x.GuildFeatures.INVITES_DISABLED)),
        [S] = r.useState(!1),
        [I, w] = r.useState(h.Fl),
        E = (0, a.e7)([f.Z], () => f.Z.getGuildIncident(t)),
        P = (0, p.BT)(C),
        T = (0, m.SG)(E) || N,
        Z = (0, m.sN)(E),
        [_, k] = r.useState(T),
        [A, D] = r.useState(Z),
        [R, L] = r.useState(!1),
        M = _ !== T || A !== Z || R,
        U = N && !P;
    return null == C
        ? (O(), null)
        : (0, i.jsx)(l.Modal, {
              transitionState: n,
              title: j.intl.string(j.t.oCYAc7),
              actions: [
                  {
                      text: j.intl.string(j.t["ETE/oC"]),
                      onClick: O,
                      variant: "secondary",
                      disabled: S,
                  },
                  {
                      text: j.intl.string(j.t["pwm/z0"]),
                      onClick: () => {
                          (T || Z) && !_ && !A
                              ? ((0, b.n)(C.id, !1, !1),
                                (0, c.ZDy)(() =>
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
                              : (0, b.n)(C.id, _, A, I);
                          let { source: e, alertType: n, messageId: r } = y;
                          u.default.track(x.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                              guild_id: t,
                              source: e,
                              raid_alert_id: r,
                              raid_alert_type: n,
                              intervention_type_enabled: (0, m.sO)(_, A),
                              intervention_type_disabled: (0, m.lk)(_, A),
                              duration: 60 * I,
                          }),
                              O();
                      },
                      loading: S,
                      disabled: !M,
                  },
              ],
              onClose: O,
              children: (0, i.jsxs)("div", {
                  className: v.mainContainer,
                  children: [
                      (0, i.jsx)(o.B6, {
                          placeholder: j.intl.string(j.t.vKYZzc),
                          options: (0, h.c1)(),
                          select: (e) => {
                              w(e), L(!0);
                          },
                          isSelected: (e) => e === I,
                          serialize: (e) => String(e),
                      }),
                      (0, i.jsxs)("div", {
                          className: v.pauseContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: v.pauseText,
                                  children: [
                                      (0, i.jsx)(c.Text, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: j.intl.string(j.t.Uwsjn6),
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: j.intl.string(j.t.qPJkZh),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(s.i_, {
                                  body: j.intl.string(j.t["9GPbsV"]),
                                  shouldShow: N,
                                  asContainer: !0,
                                  element: "div",
                                  children: (0, i.jsx)("div", {
                                      className: v.toggle,
                                      children: (0, i.jsx)(c.rsf, {
                                          onChange: function () {
                                              k((e) => !e);
                                          },
                                          checked: _,
                                          disabled: U,
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: v.pauseContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: v.pauseText,
                                  children: [
                                      (0, i.jsx)(c.Text, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: j.intl.string(j.t["wrDmA/"]),
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: j.intl.string(j.t.UQbJW7),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: v.toggle,
                                  children: (0, i.jsx)(c.rsf, {
                                      onChange: function () {
                                          D((e) => !e);
                                      },
                                      checked: A,
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
