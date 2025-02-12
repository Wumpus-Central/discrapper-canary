n.d(t, { default: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(831209),
    r = n(442837),
    s = n(481060),
    o = n(688465),
    d = n(430824),
    c = n(626135),
    u = n(369994),
    m = n(162157),
    h = n(533244),
    x = n(487419),
    g = n(821312),
    p = n(676770),
    b = n(981631),
    _ = n(388032),
    f = n(941030);
function v(e) {
    let { guildId: t, transitionState: n, onClose: v, analyticsData: C } = e,
        j = (0, r.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        N = !!(null == j ? void 0 : j.hasFeature(b.oNc.INVITES_DISABLED)),
        [I] = l.useState(!1),
        [Z, T] = l.useState(p.Fl),
        E = (0, r.e7)([x.Z], () => x.Z.getGuildIncident(t)),
        S = (0, m.BT)(j),
        y = (0, h.SG)(E) || N,
        A = (0, h.sN)(E),
        [k, R] = l.useState(y),
        [L, w] = l.useState(A),
        [O, P] = l.useState(!1),
        D = k !== y || L !== A || O,
        M = N && !S;
    if (null == j) return v(), null;
    function B() {
        R((e) => !e);
    }
    return (0, i.jsxs)(s.Y0X, {
        transitionState: n,
        size: s.CgR.MEDIUM,
        children: [
            (0, i.jsx)(s.xBx, {
                separator: !0,
                children: (0, i.jsxs)('div', {
                    className: f.headerContainer,
                    children: [
                        (0, i.jsx)(s.mBM, {
                            size: 'xs',
                            color: a.Z.INTERACTIVE_NORMAL
                        }),
                        (0, i.jsx)(s.X6q, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: _.intl.string(_.t.oCYAc3)
                        }),
                        (0, i.jsx)(o.Z, {})
                    ]
                })
            }),
            (0, i.jsx)(s.hzk, {
                children: (0, i.jsxs)('div', {
                    className: f.mainContainer,
                    children: [
                        (0, i.jsx)(s.PhF, {
                            placeholder: _.intl.string(_.t.vKYZzc),
                            options: (0, p.c1)(),
                            select: (e) => {
                                T(e), P(!0);
                            },
                            isSelected: (e) => e === Z,
                            serialize: (e) => String(e)
                        }),
                        (0, i.jsxs)('div', {
                            className: f.pauseContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: f.pauseText,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: _.intl.string(_.t.Uwsjn5)
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: _.intl.string(_.t.qPJkZm)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(s.ua7, {
                                    text: _.intl.string(_.t['9GPbsb']),
                                    shouldShow: N,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(s.rsf, {
                                                className: f.toggle,
                                                onChange: B,
                                                checked: k,
                                                disabled: M
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: f.pauseContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: f.pauseText,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: _.intl.string(_.t.wrDmAw)
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: _.intl.string(_.t.UQbJW1)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(s.rsf, {
                                    className: f.toggle,
                                    onChange: function () {
                                        w((e) => !e);
                                    },
                                    checked: L
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsxs)(s.mzw, {
                children: [
                    (0, i.jsx)(s.zxk, {
                        onClick: () => {
                            (y || A) && !k && !L
                                ? ((0, u.n)(j.id, !1, !1),
                                  (0, s.ZDy)(() =>
                                      Promise.resolve((e) =>
                                          (0, i.jsx)(g.Z, {
                                              ...e,
                                              guildId: t
                                          })
                                      )
                                  ))
                                : (0, u.n)(j.id, k, L, Z);
                            let { source: e, alertType: n, messageId: l } = C;
                            c.default.track(b.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                guild_id: t,
                                source: e,
                                raid_alert_id: l,
                                raid_alert_type: n,
                                intervention_type_enabled: (0, h.sO)(k, L),
                                intervention_type_disabled: (0, h.lk)(k, L),
                                duration: 60 * Z
                            }),
                                v();
                        },
                        color: s.zxk.Colors.BRAND,
                        look: s.zxk.Looks.FILLED,
                        submitting: I,
                        disabled: !D,
                        children: _.intl.string(_.t['pwm/z8'])
                    }),
                    (0, i.jsx)(s.zxk, {
                        onClick: v,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.LINK,
                        disabled: I,
                        children: _.intl.string(_.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
