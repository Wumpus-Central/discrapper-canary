n.r(t),
    n.d(t, {
        default: function () {
            return v;
        }
    }),
    n(47120);
var i = n(200651),
    o = n(192379),
    s = n(831209),
    r = n(442837),
    a = n(481060),
    l = n(688465),
    d = n(430824),
    c = n(626135),
    x = n(369994),
    u = n(162157),
    h = n(533244),
    C = n(487419),
    m = n(821312),
    p = n(676770),
    _ = n(981631),
    j = n(388032),
    g = n(343854);
function v(e) {
    let { guildId: t, transitionState: n, onClose: v, analyticsData: T } = e,
        N = (0, r.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        k = !!(null == N ? void 0 : N.hasFeature(_.oNc.INVITES_DISABLED)),
        [S] = o.useState(!1),
        [I, E] = o.useState(p.Fl),
        M = (0, r.e7)([C.Z], () => C.Z.getGuildIncident(t)),
        b = (0, u.BT)(N),
        A = (0, h.SG)(M) || k,
        R = (0, h.sN)(M),
        [L, f] = o.useState(A),
        [D, w] = o.useState(R),
        [B, y] = o.useState(!1),
        O = L !== A || D !== R || B,
        z = k && !b;
    if (null == N) return v(), null;
    function G() {
        f((e) => !e);
    }
    return (0, i.jsxs)(a.ModalRoot, {
        transitionState: n,
        size: a.ModalSize.MEDIUM,
        children: [
            (0, i.jsx)(a.ModalHeader, {
                separator: !0,
                children: (0, i.jsxs)('div', {
                    className: g.headerContainer,
                    children: [
                        (0, i.jsx)(a.LockIcon, {
                            size: 'xs',
                            color: s.Z.INTERACTIVE_NORMAL
                        }),
                        (0, i.jsx)(a.Heading, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: j.intl.string(j.t.oCYAc3)
                        }),
                        (0, i.jsx)(l.Z, {})
                    ]
                })
            }),
            (0, i.jsx)(a.ModalContent, {
                children: (0, i.jsxs)('div', {
                    className: g.mainContainer,
                    children: [
                        (0, i.jsx)(a.Select, {
                            placeholder: j.intl.string(j.t.vKYZzc),
                            options: (0, p.c1)(),
                            select: (e) => {
                                E(e), y(!0);
                            },
                            isSelected: (e) => e === I,
                            serialize: (e) => String(e)
                        }),
                        (0, i.jsxs)('div', {
                            className: g.pauseContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: g.pauseText,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: j.intl.string(j.t.Uwsjn5)
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: j.intl.string(j.t.qPJkZm)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(a.Tooltip, {
                                    text: j.intl.string(j.t['9GPbsb']),
                                    shouldShow: k,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(a.Switch, {
                                                className: g.toggle,
                                                onChange: G,
                                                checked: L,
                                                disabled: z
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: g.pauseContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: g.pauseText,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: j.intl.string(j.t.wrDmAw)
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: j.intl.string(j.t.UQbJW1)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(a.Switch, {
                                    className: g.toggle,
                                    onChange: function () {
                                        w((e) => !e);
                                    },
                                    checked: D
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsxs)(a.ModalFooter, {
                children: [
                    (0, i.jsx)(a.Button, {
                        onClick: () => {
                            (A || R) && !L && !D
                                ? ((0, x.n)(N.id, !1, !1),
                                  (0, a.openModalLazy)(() =>
                                      Promise.resolve((e) =>
                                          (0, i.jsx)(m.Z, {
                                              ...e,
                                              guildId: t
                                          })
                                      )
                                  ))
                                : (0, x.n)(N.id, L, D, I);
                            let { source: e, alertType: n, messageId: o } = T;
                            c.default.track(_.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                guild_id: t,
                                source: e,
                                raid_alert_id: o,
                                raid_alert_type: n,
                                intervention_type_enabled: (0, h.sO)(L, D),
                                intervention_type_disabled: (0, h.lk)(L, D),
                                duration: 60 * I
                            }),
                                v();
                        },
                        color: a.Button.Colors.BRAND,
                        look: a.Button.Looks.FILLED,
                        submitting: S,
                        disabled: !O,
                        children: j.intl.string(j.t['pwm/z8'])
                    }),
                    (0, i.jsx)(a.Button, {
                        onClick: v,
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        disabled: S,
                        children: j.intl.string(j.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
