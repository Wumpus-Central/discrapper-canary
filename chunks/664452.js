n.d(t, { default: () => _ }), n(47120);
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
    f = n(981631),
    b = n(388032),
    v = n(941030);
function _(e) {
    let { guildId: t, transitionState: n, onClose: _, analyticsData: N } = e,
        j = (0, r.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        C = !!(null == j ? void 0 : j.hasFeature(f.oNc.INVITES_DISABLED)),
        [I] = l.useState(!1),
        [Z, T] = l.useState(p.Fl),
        E = (0, r.e7)([x.Z], () => x.Z.getGuildIncident(t)),
        S = (0, m.BT)(j),
        y = (0, h.SG)(E) || C,
        A = (0, h.sN)(E),
        [k, R] = l.useState(y),
        [L, O] = l.useState(A),
        [w, P] = l.useState(!1),
        D = k !== y || L !== A || w,
        M = C && !S;
    if (null == j) return _(), null;
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
                    className: v.headerContainer,
                    children: [
                        (0, i.jsx)(s.mBM, {
                            size: 'xs',
                            color: a.Z.INTERACTIVE_NORMAL
                        }),
                        (0, i.jsx)(s.X6q, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: b.intl.string(b.t.oCYAc3)
                        }),
                        (0, i.jsx)(o.Z, {})
                    ]
                })
            }),
            (0, i.jsx)(s.hzk, {
                children: (0, i.jsxs)('div', {
                    className: v.mainContainer,
                    children: [
                        (0, i.jsx)(s.PhF, {
                            placeholder: b.intl.string(b.t.vKYZzc),
                            options: (0, p.c1)(),
                            select: (e) => {
                                T(e), P(!0);
                            },
                            isSelected: (e) => e === Z,
                            serialize: (e) => String(e)
                        }),
                        (0, i.jsxs)('div', {
                            className: v.pauseContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v.pauseText,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: b.intl.string(b.t.Uwsjn5)
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: b.intl.string(b.t.qPJkZm)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(s.ua7, {
                                    text: b.intl.string(b.t['9GPbsb']),
                                    shouldShow: C,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(s.rsf, {
                                                className: v.toggle,
                                                onChange: B,
                                                checked: k,
                                                disabled: M
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: v.pauseContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v.pauseText,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: b.intl.string(b.t.wrDmAw)
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: b.intl.string(b.t.UQbJW1)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(s.rsf, {
                                    className: v.toggle,
                                    onChange: function () {
                                        O((e) => !e);
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
                            let { source: e, alertType: n, messageId: l } = N;
                            c.default.track(f.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                guild_id: t,
                                source: e,
                                raid_alert_id: l,
                                raid_alert_type: n,
                                intervention_type_enabled: (0, h.sO)(k, L),
                                intervention_type_disabled: (0, h.lk)(k, L),
                                duration: 60 * Z
                            }),
                                _();
                        },
                        color: s.zxk.Colors.BRAND,
                        look: s.zxk.Looks.FILLED,
                        submitting: I,
                        disabled: !D,
                        children: b.intl.string(b.t['pwm/z8'])
                    }),
                    (0, i.jsx)(s.zxk, {
                        onClick: _,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.LINK,
                        disabled: I,
                        children: b.intl.string(b.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
