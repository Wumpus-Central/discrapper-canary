n.d(e, { default: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(82659),
    s = n(755721),
    o = n(481060),
    c = n(430824),
    d = n(626135),
    u = n(369994),
    p = n(162157),
    b = n(533244),
    O = n(487419),
    g = n(821312),
    f = n(676770),
    _ = n(981631),
    h = n(388032),
    y = n(796668);
function j(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function x(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function v(t) {
    let { guildId: e, transitionState: n, onClose: v, analyticsData: N } = t,
        m = (0, l.e7)([c.Z], () => c.Z.getGuild(e), [e]),
        E = !!(null == m ? void 0 : m.features.has(_.oNc.INVITES_DISABLED)),
        [S] = i.useState(!1),
        [C, T] = i.useState(f.Fl),
        I = (0, l.e7)([O.Z], () => O.Z.getGuildIncident(e)),
        D = (0, p.BT)(m),
        A = (0, b.SG)(I) || E,
        P = (0, b.sN)(I),
        [w, R] = i.useState(A),
        [M, k] = i.useState(P),
        [G, L] = i.useState(!1),
        Z = w !== A || M !== P || G,
        U = E && !D;
    if (null == m) return v(), null;
    function K() {
        R((t) => !t);
    }
    return (0, r.jsx)(a.Modal, {
        transitionState: n,
        title: h.intl.string(h.t.oCYAc3),
        actions: [
            {
                text: h.intl.string(h.t["ETE/oK"]),
                onClick: v,
                variant: "secondary",
                disabled: S,
            },
            {
                text: h.intl.string(h.t["pwm/z8"]),
                onClick: () => {
                    (A || P) && !w && !M
                        ? ((0, u.n)(m.id, !1, !1),
                          (0, o.ZDy)(() => Promise.resolve((t) => (0, r.jsx)(g.Z, x(j({}, t), { guildId: e })))))
                        : (0, u.n)(m.id, w, M, C);
                    let { source: t, alertType: n, messageId: i } = N;
                    d.default.track(_.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                        guild_id: e,
                        source: t,
                        raid_alert_id: i,
                        raid_alert_type: n,
                        intervention_type_enabled: (0, b.sO)(w, M),
                        intervention_type_disabled: (0, b.lk)(w, M),
                        duration: 60 * C,
                    }),
                        v();
                },
                loading: S,
                disabled: !Z,
            },
        ],
        onClose: v,
        children: (0, r.jsxs)("div", {
            className: y.mainContainer,
            children: [
                (0, r.jsx)(o.PhF, {
                    placeholder: h.intl.string(h.t.vKYZzc),
                    options: (0, f.c1)(),
                    select: (t) => {
                        T(t), L(!0);
                    },
                    isSelected: (t) => t === C,
                    serialize: (t) => String(t),
                }),
                (0, r.jsxs)("div", {
                    className: y.pauseContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.pauseText,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: h.intl.string(h.t.Uwsjn5),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: h.intl.string(h.t.qPJkZm),
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.ua7, {
                            text: h.intl.string(h.t["9GPbsb"]),
                            shouldShow: E,
                            children: (t) =>
                                (0, r.jsx)(
                                    "div",
                                    x(j({}, t), {
                                        children: (0, r.jsx)(s.T2, {
                                            className: y.toggle,
                                            onChange: K,
                                            checked: w,
                                            disabled: U,
                                        }),
                                    }),
                                ),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: y.pauseContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.pauseText,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: h.intl.string(h.t.wrDmAw),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: h.intl.string(h.t.UQbJW1),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.T2, {
                            className: y.toggle,
                            onChange: function () {
                                k((t) => !t);
                            },
                            checked: M,
                        }),
                    ],
                }),
            ],
        }),
    });
}
