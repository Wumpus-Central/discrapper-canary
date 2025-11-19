n.d(t, { default: () => O }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(442837),
    o = n(481060),
    s = n(430824),
    c = n(626135),
    d = n(369994),
    u = n(162157),
    p = n(533244),
    m = n(487419),
    b = n(821312),
    g = n(676770),
    f = n(981631),
    h = n(388032),
    x = n(655330);
function j(e) {
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
function v(e, t) {
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
function O(e) {
    let { guildId: t, transitionState: n, onClose: O, analyticsData: y } = e,
        _ = (0, a.e7)([s.Z], () => s.Z.getGuild(t), [t]),
        C = !!(null == _ ? void 0 : _.features.has(f.GuildFeatures.INVITES_DISABLED)),
        [N] = r.useState(!1),
        [S, E] = r.useState(g.Fl),
        I = (0, a.e7)([m.Z], () => m.Z.getGuildIncident(t)),
        P = (0, u.BT)(_),
        w = (0, p.SG)(I) || C,
        T = (0, p.sN)(I),
        [Z, k] = r.useState(w),
        [A, D] = r.useState(T),
        [R, L] = r.useState(!1),
        M = Z !== w || A !== T || R,
        U = C && !P;
    if (null == _) return O(), null;
    function B() {
        k((e) => !e);
    }
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        title: h.intl.string(h.t.oCYAc7),
        actions: [
            {
                text: h.intl.string(h.t["ETE/oC"]),
                onClick: O,
                variant: "secondary",
                disabled: N,
            },
            {
                text: h.intl.string(h.t["pwm/z0"]),
                onClick: () => {
                    (w || T) && !Z && !A
                        ? ((0, d.n)(_.id, !1, !1),
                          (0, o.ZDy)(() => Promise.resolve((e) => (0, i.jsx)(b.default, v(j({}, e), { guildId: t })))))
                        : (0, d.n)(_.id, Z, A, S);
                    let { source: e, alertType: n, messageId: r } = y;
                    c.default.track(f.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                        guild_id: t,
                        source: e,
                        raid_alert_id: r,
                        raid_alert_type: n,
                        intervention_type_enabled: (0, p.sO)(Z, A),
                        intervention_type_disabled: (0, p.lk)(Z, A),
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
            className: x.mainContainer,
            children: [
                (0, i.jsx)(o.PhF, {
                    placeholder: h.intl.string(h.t.vKYZzc),
                    options: (0, g.c1)(),
                    select: (e) => {
                        E(e), L(!0);
                    },
                    isSelected: (e) => e === S,
                    serialize: (e) => String(e),
                }),
                (0, i.jsxs)("div", {
                    className: x.pauseContainer,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.pauseText,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: h.intl.string(h.t.Uwsjn6),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: h.intl.string(h.t.qPJkZh),
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.aML, {
                            "data-migration-pending": !0,
                            text: h.intl.string(h.t["9GPbsV"]),
                            shouldShow: C,
                            children: (e) =>
                                (0, i.jsx)(
                                    "div",
                                    v(j({}, e), {
                                        className: x.toggle,
                                        children: (0, i.jsx)(o.rsf, {
                                            onChange: B,
                                            checked: Z,
                                            disabled: U,
                                        }),
                                    }),
                                ),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: x.pauseContainer,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.pauseText,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: h.intl.string(h.t["wrDmA/"]),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: h.intl.string(h.t.UQbJW7),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: x.toggle,
                            children: (0, i.jsx)(o.rsf, {
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
