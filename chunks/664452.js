(n.d(e, { default: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(82659),
    a = n(481060),
    o = n(430824),
    c = n(626135),
    d = n(369994),
    u = n(162157),
    p = n(533244),
    b = n(487419),
    f = n(821312),
    O = n(676770),
    g = n(981631),
    _ = n(388032),
    h = n(613915);
function y(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                ((r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r));
            }));
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
function j(t) {
    let { guildId: e, transitionState: n, onClose: j, analyticsData: v } = t,
        N = (0, l.e7)([o.Z], () => o.Z.getGuild(e), [e]),
        m = !!(null == N ? void 0 : N.features.has(g.oNc.INVITES_DISABLED)),
        [S] = i.useState(!1),
        [E, C] = i.useState(O.Fl),
        T = (0, l.e7)([b.Z], () => b.Z.getGuildIncident(e)),
        I = (0, u.BT)(N),
        D = (0, p.SG)(T) || m,
        A = (0, p.sN)(T),
        [w, P] = i.useState(D),
        [R, k] = i.useState(A),
        [M, G] = i.useState(!1),
        L = w !== D || R !== A || M,
        Z = m && !I;
    if (null == N) return (j(), null);
    function U() {
        P((t) => !t);
    }
    return (0, r.jsx)(s.Modal, {
        transitionState: n,
        title: _.intl.string(_.t.oCYAc3),
        actions: [
            {
                text: _.intl.string(_.t['ETE/oK']),
                onClick: j,
                variant: 'secondary',
                disabled: S
            },
            {
                text: _.intl.string(_.t['pwm/z8']),
                onClick: () => {
                    (D || A) && !w && !R ? ((0, d.n)(N.id, !1, !1), (0, a.ZDy)(() => Promise.resolve((t) => (0, r.jsx)(f.Z, x(y({}, t), { guildId: e }))))) : (0, d.n)(N.id, w, R, E);
                    let { source: t, alertType: n, messageId: i } = v;
                    (c.default.track(g.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                        guild_id: e,
                        source: t,
                        raid_alert_id: i,
                        raid_alert_type: n,
                        intervention_type_enabled: (0, p.sO)(w, R),
                        intervention_type_disabled: (0, p.lk)(w, R),
                        duration: 60 * E
                    }),
                        j());
                },
                loading: S,
                disabled: !L
            }
        ],
        onClose: j,
        children: (0, r.jsxs)('div', {
            className: h.mainContainer,
            children: [
                (0, r.jsx)(a.PhF, {
                    placeholder: _.intl.string(_.t.vKYZzc),
                    options: (0, O.c1)(),
                    select: (t) => {
                        (C(t), G(!0));
                    },
                    isSelected: (t) => t === E,
                    serialize: (t) => String(t)
                }),
                (0, r.jsxs)('div', {
                    className: h.pauseContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.pauseText,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: _.intl.string(_.t.Uwsjn5)
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: _.intl.string(_.t.qPJkZm)
                                })
                            ]
                        }),
                        (0, r.jsx)(a.ua7, {
                            text: _.intl.string(_.t['9GPbsb']),
                            shouldShow: m,
                            children: (t) =>
                                (0, r.jsx)(
                                    'div',
                                    x(y({}, t), {
                                        children: (0, r.jsx)(a.rsf, {
                                            className: h.toggle,
                                            onChange: U,
                                            checked: w,
                                            disabled: Z
                                        })
                                    })
                                )
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: h.pauseContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.pauseText,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: _.intl.string(_.t.wrDmAw)
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: _.intl.string(_.t.UQbJW1)
                                })
                            ]
                        }),
                        (0, r.jsx)(a.rsf, {
                            className: h.toggle,
                            onChange: function () {
                                k((t) => !t);
                            },
                            checked: R
                        })
                    ]
                })
            ]
        })
    });
}
