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
    p = n(369994),
    m = n(162157),
    b = n(533244),
    g = n(487419),
    f = n(821312),
    h = n(676770),
    x = n(981631),
    j = n(388032),
    v = n(796668);
function O(e) {
    let { guildId: t, transitionState: n, onClose: O, analyticsData: y } = e,
        _ = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        C = !!(null == _ ? void 0 : _.features.has(x.GuildFeatures.INVITES_DISABLED)),
        [N] = r.useState(!1),
        [S, I] = r.useState(h.Fl),
        w = (0, a.e7)([g.Z], () => g.Z.getGuildIncident(t)),
        E = (0, m.BT)(_),
        P = (0, b.SG)(w) || C,
        T = (0, b.sN)(w),
        [Z, k] = r.useState(P),
        [A, D] = r.useState(T),
        [R, L] = r.useState(!1),
        M = Z !== P || A !== T || R,
        U = C && !E;
    return null == _
        ? (O(), null)
        : (0, i.jsx)(l.Modal, {
              transitionState: n,
              title: j.intl.string(j.t.oCYAc7),
              actions: [
                  {
                      text: j.intl.string(j.t["ETE/oC"]),
                      onClick: O,
                      variant: "secondary",
                      disabled: N,
                  },
                  {
                      text: j.intl.string(j.t["pwm/z0"]),
                      onClick: () => {
                          (P || T) && !Z && !A
                              ? ((0, p.n)(_.id, !1, !1),
                                (0, c.ZDy)(() =>
                                    Promise.resolve((e) => {
                                        var n, r;
                                        return (0, i.jsx)(
                                            f.default,
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
                              : (0, p.n)(_.id, Z, A, S);
                          let { source: e, alertType: n, messageId: r } = y;
                          u.default.track(x.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                              guild_id: t,
                              source: e,
                              raid_alert_id: r,
                              raid_alert_type: n,
                              intervention_type_enabled: (0, b.sO)(Z, A),
                              intervention_type_disabled: (0, b.lk)(Z, A),
                              duration: 60 * S,
                          }),
                              O();
                      },
                      loading: N,
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
                              I(e), L(!0);
                          },
                          isSelected: (e) => e === S,
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
                                          color: "header-primary",
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
                                  shouldShow: C,
                                  asContainer: !0,
                                  element: "div",
                                  children: (0, i.jsx)("div", {
                                      className: v.toggle,
                                      children: (0, i.jsx)(c.rsf, {
                                          onChange: function () {
                                              k((e) => !e);
                                          },
                                          checked: Z,
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
                                          color: "header-primary",
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
