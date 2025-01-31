l.d(t, { Z: () => g });
var n = l(200651),
    a = l(192379),
    i = l(498607),
    o = l.n(i),
    s = l(399606),
    r = l(481060),
    c = l(203893),
    C = l(910693),
    d = l(893966),
    u = l(527379),
    m = l(981631),
    h = l(388032),
    x = l(389173);
function g(e) {
    let { guildId: t, onClose: l } = e,
        i = (0, s.e7)([d.Z], () => d.Z.getSearchStateByGuildId(t), [t], o()),
        g = (0, C.dW)(t),
        H = a.useCallback(() => {
            i.requireUnusualDmActivity || g(C.aY.UNUSUAL_DM_ACTIVITY),
                (0, u.Dr)(t, {
                    ...i,
                    requireUnusualDmActivity: !i.requireUnusualDmActivity
                });
        }, [t, i, g]),
        b = a.useCallback(() => {
            i.requireCommunicationDisabled || g(C.aY.COMMUNICATION_DISABLED),
                (0, u.Dr)(t, {
                    ...i,
                    requireCommunicationDisabled: !i.requireCommunicationDisabled
                });
        }, [t, i, g]),
        p = a.useCallback(() => {
            i.requireUnusualAccountActivity || g(C.aY.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, u.Dr)(t, {
                    ...i,
                    requireUnusualAccountActivity: !i.requireUnusualAccountActivity
                });
        }, [t, i, g]),
        _ = a.useCallback(() => {
            i.requireUsernameQuarantined || g(C.aY.USERNAME_QUARANTINED),
                (0, u.Dr)(t, {
                    ...i,
                    requireUsernameQuarantined: !i.requireUsernameQuarantined
                });
        }, [t, i, g]);
    return (0, n.jsx)(r.v2r, {
        navId: 'member-safety-flags',
        onClose: l,
        'aria-label': h.intl.string(h.t.k9m8Rk),
        onSelect: m.dG4,
        children: (0, n.jsxs)(r.kSQ, {
            children: [
                (0, n.jsx)(r.S89, {
                    id: 'toggle-require-unusual-dm-activity',
                    label: (0, n.jsxs)('div', {
                        className: x.checkboxLabel,
                        children: [
                            (0, n.jsx)(r.b6m, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: x.unusualDMLabelIcon
                            }),
                            h.intl.string(h.t.ZRnONz)
                        ]
                    }),
                    action: H,
                    checked: i.requireUnusualDmActivity
                }),
                (0, n.jsx)(r.S89, {
                    id: 'toggle-require-communication-disabled',
                    label: (0, n.jsxs)('div', {
                        className: x.checkboxLabel,
                        children: [
                            (0, n.jsx)(r.YlB, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: x.timeoutLabelIcon
                            }),
                            h.intl.string(h.t.z3wbj4)
                        ]
                    }),
                    action: b,
                    checked: i.requireCommunicationDisabled
                }),
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(r.S89, {
                            id: 'toggle-require-unusual-account-activity',
                            label: (0, n.jsxs)('div', {
                                className: x.checkboxLabel,
                                children: [
                                    (0, n.jsx)(c.Z, {
                                        width: 16,
                                        height: 16,
                                        className: x.unusualAccountActivityLabelIcon
                                    }),
                                    h.intl.string(h.t.DIQsDw)
                                ]
                            }),
                            action: p,
                            checked: i.requireUnusualAccountActivity
                        }),
                        (0, n.jsx)(r.S89, {
                            id: 'toggle-require-username-quarantined',
                            label: (0, n.jsxs)('div', {
                                className: x.checkboxLabel,
                                children: [
                                    (0, n.jsx)(r.ics, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 16,
                                        height: 16,
                                        className: x.quarantinedLabelIcon
                                    }),
                                    h.intl.string(h.t.Jloklp)
                                ]
                            }),
                            action: _,
                            checked: i.requireUsernameQuarantined
                        })
                    ]
                })
            ]
        })
    });
}
