n.d(t, { Z: () => g });
var r = n(200651),
    l = n(192379),
    o = n(498607),
    a = n.n(o),
    i = n(399606),
    s = n(481060),
    c = n(203893),
    u = n(910693),
    d = n(893966),
    C = n(527379),
    m = n(981631),
    b = n(388032),
    p = n(771221);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { guildId: t, onClose: n } = e,
        o = (0, i.e7)([d.Z], () => d.Z.getSearchStateByGuildId(t), [t], a()),
        g = (0, u.dW)(t),
        j = l.useCallback(() => {
            o.requireUnusualDmActivity || g(u.aY.UNUSUAL_DM_ACTIVITY), (0, C.Dr)(t, h(f({}, o), { requireUnusualDmActivity: !o.requireUnusualDmActivity }));
        }, [t, o, g]),
        x = l.useCallback(() => {
            o.requireCommunicationDisabled || g(u.aY.COMMUNICATION_DISABLED), (0, C.Dr)(t, h(f({}, o), { requireCommunicationDisabled: !o.requireCommunicationDisabled }));
        }, [t, o, g]),
        O = l.useCallback(() => {
            o.requireUnusualAccountActivity || g(u.aY.UNUSUAL_ACCOUNT_ACTIVITY), (0, C.Dr)(t, h(f({}, o), { requireUnusualAccountActivity: !o.requireUnusualAccountActivity }));
        }, [t, o, g]),
        y = l.useCallback(() => {
            o.requireUsernameQuarantined || g(u.aY.USERNAME_QUARANTINED), (0, C.Dr)(t, h(f({}, o), { requireUsernameQuarantined: !o.requireUsernameQuarantined }));
        }, [t, o, g]);
    return (0, r.jsx)(s.v2r, {
        navId: 'member-safety-flags',
        onClose: n,
        'aria-label': b.NW.string(b.t.k9m8Rk),
        onSelect: m.dG4,
        children: (0, r.jsxs)(s.kSQ, {
            children: [
                (0, r.jsx)(s.S89, {
                    id: 'toggle-require-unusual-dm-activity',
                    label: (0, r.jsxs)('div', {
                        className: p.checkboxLabel,
                        children: [
                            (0, r.jsx)(s.b6m, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: p.unusualDMLabelIcon
                            }),
                            b.NW.string(b.t.ZRnONz)
                        ]
                    }),
                    action: j,
                    checked: o.requireUnusualDmActivity
                }),
                (0, r.jsx)(s.S89, {
                    id: 'toggle-require-communication-disabled',
                    label: (0, r.jsxs)('div', {
                        className: p.checkboxLabel,
                        children: [
                            (0, r.jsx)(s.YlB, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: p.timeoutLabelIcon
                            }),
                            b.NW.string(b.t.z3wbj4)
                        ]
                    }),
                    action: x,
                    checked: o.requireCommunicationDisabled
                }),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.S89, {
                            id: 'toggle-require-unusual-account-activity',
                            label: (0, r.jsxs)('div', {
                                className: p.checkboxLabel,
                                children: [
                                    (0, r.jsx)(c.Z, {
                                        width: 16,
                                        height: 16,
                                        className: p.unusualAccountActivityLabelIcon
                                    }),
                                    b.NW.string(b.t.DIQsDw)
                                ]
                            }),
                            action: O,
                            checked: o.requireUnusualAccountActivity
                        }),
                        (0, r.jsx)(s.S89, {
                            id: 'toggle-require-username-quarantined',
                            label: (0, r.jsxs)('div', {
                                className: p.checkboxLabel,
                                children: [
                                    (0, r.jsx)(s.ics, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 16,
                                        height: 16,
                                        className: p.quarantinedLabelIcon
                                    }),
                                    b.NW.string(b.t.Jloklp)
                                ]
                            }),
                            action: y,
                            checked: o.requireUsernameQuarantined
                        })
                    ]
                })
            ]
        })
    });
}
