n.d(t, { default: () => y }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(442837),
    o = n(199849),
    s = n(481060),
    c = n(430824),
    d = n(626135),
    u = n(369994),
    p = n(162157),
    m = n(533244),
    b = n(487419),
    g = n(821312),
    f = n(676770),
    h = n(981631),
    x = n(388032),
    j = n(796668);
function v(e) {
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
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { guildId: t, transitionState: n, onClose: y, analyticsData: _ } = e,
        C = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        N = !!(null == C ? void 0 : C.features.has(h.GuildFeatures.INVITES_DISABLED)),
        [S] = r.useState(!1),
        [I, E] = r.useState(f.Fl),
        w = (0, a.e7)([b.Z], () => b.Z.getGuildIncident(t)),
        P = (0, p.BT)(C),
        T = (0, m.SG)(w) || N,
        Z = (0, m.sN)(w),
        [k, A] = r.useState(T),
        [D, R] = r.useState(Z),
        [L, M] = r.useState(!1),
        U = k !== T || D !== Z || L,
        B = N && !P;
    if (null == C) return y(), null;
    function W() {
        A((e) => !e);
    }
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        title: x.intl.string(x.t.oCYAc7),
        actions: [
            {
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: y,
                variant: "secondary",
                disabled: S,
            },
            {
                text: x.intl.string(x.t["pwm/z0"]),
                onClick: () => {
                    (T || Z) && !k && !D
                        ? ((0, u.n)(C.id, !1, !1),
                          (0, s.ZDy)(() => Promise.resolve((e) => (0, i.jsx)(g.default, O(v({}, e), { guildId: t })))))
                        : (0, u.n)(C.id, k, D, I);
                    let { source: e, alertType: n, messageId: r } = _;
                    d.default.track(h.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                        guild_id: t,
                        source: e,
                        raid_alert_id: r,
                        raid_alert_type: n,
                        intervention_type_enabled: (0, m.sO)(k, D),
                        intervention_type_disabled: (0, m.lk)(k, D),
                        duration: 60 * I,
                    }),
                        y();
                },
                loading: S,
                disabled: !U,
            },
        ],
        onClose: y,
        children: (0, i.jsxs)("div", {
            className: j.mainContainer,
            children: [
                (0, i.jsx)(o.B6, {
                    placeholder: x.intl.string(x.t.vKYZzc),
                    options: (0, f.c1)(),
                    select: (e) => {
                        E(e), M(!0);
                    },
                    isSelected: (e) => e === I,
                    serialize: (e) => String(e),
                }),
                (0, i.jsxs)("div", {
                    className: j.pauseContainer,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.pauseText,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: x.intl.string(x.t.Uwsjn6),
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: x.intl.string(x.t.qPJkZh),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.aML, {
                            "data-migration-pending": !0,
                            text: x.intl.string(x.t["9GPbsV"]),
                            shouldShow: N,
                            children: (e) =>
                                (0, i.jsx)(
                                    "div",
                                    O(v({}, e), {
                                        className: j.toggle,
                                        children: (0, i.jsx)(s.rsf, {
                                            onChange: W,
                                            checked: k,
                                            disabled: B,
                                        }),
                                    }),
                                ),
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
                                    color: "header-primary",
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
                                    R((e) => !e);
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
