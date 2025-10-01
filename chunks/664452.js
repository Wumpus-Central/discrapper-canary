n.d(e, { default: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(793030),
    a = n(442837),
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
    h = n(981631),
    _ = n(388032),
    j = n(796668);
function x(t) {
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
function y(t, e) {
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
        m = (0, a.e7)([c.Z], () => c.Z.getGuild(e), [e]),
        E = !!(null == m ? void 0 : m.features.has(h.oNc.INVITES_DISABLED)),
        [S] = i.useState(!1),
        [C, T] = i.useState(f.Fl),
        I = (0, a.e7)([O.Z], () => O.Z.getGuildIncident(e)),
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
    return (0, r.jsx)(l.Modal, {
        transitionState: n,
        title: _.intl.string(_.t.oCYAc3),
        actions: [
            {
                text: _.intl.string(_.t["ETE/oK"]),
                onClick: v,
                variant: "secondary",
                disabled: S,
            },
            {
                text: _.intl.string(_.t["pwm/z8"]),
                onClick: () => {
                    (A || P) && !w && !M
                        ? ((0, u.n)(m.id, !1, !1),
                          (0, o.ZDy)(() => Promise.resolve((t) => (0, r.jsx)(g.Z, y(x({}, t), { guildId: e })))))
                        : (0, u.n)(m.id, w, M, C);
                    let { source: t, alertType: n, messageId: i } = N;
                    d.default.track(h.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
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
            className: j.mainContainer,
            children: [
                (0, r.jsx)(o.PhF, {
                    placeholder: _.intl.string(_.t.vKYZzc),
                    options: (0, f.c1)(),
                    select: (t) => {
                        T(t), L(!0);
                    },
                    isSelected: (t) => t === C,
                    serialize: (t) => String(t),
                }),
                (0, r.jsxs)("div", {
                    className: j.pauseContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.pauseText,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: _.intl.string(_.t.Uwsjn5),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: _.intl.string(_.t.qPJkZm),
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.ua7, {
                            text: _.intl.string(_.t["9GPbsb"]),
                            shouldShow: E,
                            children: (t) =>
                                (0, r.jsx)(
                                    "div",
                                    y(x({}, t), {
                                        className: j.toggle,
                                        children: (0, r.jsx)(s.T2, {
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
                    className: j.pauseContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.pauseText,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: _.intl.string(_.t.wrDmAw),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: _.intl.string(_.t.UQbJW1),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: j.toggle,
                            children: (0, r.jsx)(s.T2, {
                                onChange: function () {
                                    k((t) => !t);
                                },
                                checked: M,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
