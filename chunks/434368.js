n.d(t, {
    Z: function () {
        return b;
    }
});
var l = n(200651),
    o = n(192379),
    i = n(498607),
    a = n.n(i),
    r = n(399606),
    s = n(481060),
    c = n(203893),
    C = n(910693),
    d = n(893966),
    u = n(527379),
    m = n(981631),
    h = n(388032),
    x = n(389173);
function b(e) {
    let { guildId: t, onClose: n } = e,
        i = (0, r.e7)([d.Z], () => d.Z.getSearchStateByGuildId(t), [t], a()),
        b = (0, C.dW)(t),
        f = o.useCallback(() => {
            !i.requireUnusualDmActivity && b(C.aY.UNUSUAL_DM_ACTIVITY),
                (0, u.Dr)(t, {
                    ...i,
                    requireUnusualDmActivity: !i.requireUnusualDmActivity
                });
        }, [t, i, b]),
        g = o.useCallback(() => {
            !i.requireCommunicationDisabled && b(C.aY.COMMUNICATION_DISABLED),
                (0, u.Dr)(t, {
                    ...i,
                    requireCommunicationDisabled: !i.requireCommunicationDisabled
                });
        }, [t, i, b]),
        p = o.useCallback(() => {
            !i.requireUnusualAccountActivity && b(C.aY.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, u.Dr)(t, {
                    ...i,
                    requireUnusualAccountActivity: !i.requireUnusualAccountActivity
                });
        }, [t, i, b]),
        H = o.useCallback(() => {
            !i.requireUsernameQuarantined && b(C.aY.USERNAME_QUARANTINED),
                (0, u.Dr)(t, {
                    ...i,
                    requireUsernameQuarantined: !i.requireUsernameQuarantined
                });
        }, [t, i, b]);
    return (0, l.jsx)(s.Menu, {
        navId: 'member-safety-flags',
        onClose: n,
        'aria-label': h.intl.string(h.t.k9m8Rk),
        onSelect: m.dG4,
        children: (0, l.jsxs)(s.MenuGroup, {
            children: [
                (0, l.jsx)(s.MenuCheckboxItem, {
                    id: 'toggle-require-unusual-dm-activity',
                    label: (0, l.jsxs)('div', {
                        className: x.checkboxLabel,
                        children: [
                            (0, l.jsx)(s.ChatWarningIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: x.unusualDMLabelIcon
                            }),
                            h.intl.string(h.t.ZRnONz)
                        ]
                    }),
                    action: f,
                    checked: i.requireUnusualDmActivity
                }),
                (0, l.jsx)(s.MenuCheckboxItem, {
                    id: 'toggle-require-communication-disabled',
                    label: (0, l.jsxs)('div', {
                        className: x.checkboxLabel,
                        children: [
                            (0, l.jsx)(s.ClockWarningIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: x.timeoutLabelIcon
                            }),
                            h.intl.string(h.t.z3wbj4)
                        ]
                    }),
                    action: g,
                    checked: i.requireCommunicationDisabled
                }),
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(s.MenuCheckboxItem, {
                            id: 'toggle-require-unusual-account-activity',
                            label: (0, l.jsxs)('div', {
                                className: x.checkboxLabel,
                                children: [
                                    (0, l.jsx)(c.Z, {
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
                        (0, l.jsx)(s.MenuCheckboxItem, {
                            id: 'toggle-require-username-quarantined',
                            label: (0, l.jsxs)('div', {
                                className: x.checkboxLabel,
                                children: [
                                    (0, l.jsx)(s.ChatXIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 16,
                                        height: 16,
                                        className: x.quarantinedLabelIcon
                                    }),
                                    h.intl.string(h.t.Jloklp)
                                ]
                            }),
                            action: H,
                            checked: i.requireUsernameQuarantined
                        })
                    ]
                })
            ]
        })
    });
}
