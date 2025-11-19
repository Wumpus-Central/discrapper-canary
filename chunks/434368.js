n.d(t, { Z: () => g });
var r = n(54381),
    l = n(473749),
    i = n(498607),
    o = n.n(i),
    a = n(399606),
    s = n(481060),
    c = n(203893),
    u = n(910693),
    d = n(893966),
    C = n(527379),
    m = n(981631),
    b = n(388032),
    p = n(195689);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        i = (0, a.e7)([d.Z], () => d.Z.getSearchStateByGuildId(t), [t], o()),
        g = (0, u.dW)(t),
        j = l.useCallback(() => {
            i.requireUnusualDmActivity || g(u.aY.UNUSUAL_DM_ACTIVITY),
                (0, C.Dr)(t, h(f({}, i), { requireUnusualDmActivity: !i.requireUnusualDmActivity }));
        }, [t, i, g]),
        x = l.useCallback(() => {
            i.requireCommunicationDisabled || g(u.aY.COMMUNICATION_DISABLED),
                (0, C.Dr)(t, h(f({}, i), { requireCommunicationDisabled: !i.requireCommunicationDisabled }));
        }, [t, i, g]),
        v = l.useCallback(() => {
            i.requireUnusualAccountActivity || g(u.aY.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, C.Dr)(t, h(f({}, i), { requireUnusualAccountActivity: !i.requireUnusualAccountActivity }));
        }, [t, i, g]),
        y = l.useCallback(() => {
            i.requireUsernameQuarantined || g(u.aY.USERNAME_QUARANTINED),
                (0, C.Dr)(t, h(f({}, i), { requireUsernameQuarantined: !i.requireUsernameQuarantined }));
        }, [t, i, g]);
    return (0, r.jsx)(s.v2r, {
        navId: "member-safety-flags",
        onClose: n,
        "aria-label": b.intl.string(b.t.k9m8Rg),
        onSelect: m.dG4,
        children: (0, r.jsxs)(s.kSQ, {
            children: [
                (0, r.jsx)(s.S89, {
                    id: "toggle-require-unusual-dm-activity",
                    label: (0, r.jsxs)("div", {
                        className: p.checkboxLabel,
                        children: [
                            (0, r.jsx)(s.b6m, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: p.unusualDMLabelIcon,
                            }),
                            b.intl.string(b.t.ZRnON3),
                        ],
                    }),
                    action: j,
                    checked: i.requireUnusualDmActivity,
                }),
                (0, r.jsx)(s.S89, {
                    id: "toggle-require-communication-disabled",
                    label: (0, r.jsxs)("div", {
                        className: p.checkboxLabel,
                        children: [
                            (0, r.jsx)(s.YlB, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: p.timeoutLabelIcon,
                            }),
                            b.intl.string(b.t.z3wbj8),
                        ],
                    }),
                    action: x,
                    checked: i.requireCommunicationDisabled,
                }),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.S89, {
                            id: "toggle-require-unusual-account-activity",
                            label: (0, r.jsxs)("div", {
                                className: p.checkboxLabel,
                                children: [
                                    (0, r.jsx)(c.Z, {
                                        width: 16,
                                        height: 16,
                                        className: p.unusualAccountActivityLabelIcon,
                                    }),
                                    b.intl.string(b.t.DIQsD9),
                                ],
                            }),
                            action: v,
                            checked: i.requireUnusualAccountActivity,
                        }),
                        (0, r.jsx)(s.S89, {
                            id: "toggle-require-username-quarantined",
                            label: (0, r.jsxs)("div", {
                                className: p.checkboxLabel,
                                children: [
                                    (0, r.jsx)(s.ics, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 16,
                                        height: 16,
                                        className: p.quarantinedLabelIcon,
                                    }),
                                    b.intl.string(b.t.Jloklk),
                                ],
                            }),
                            action: y,
                            checked: i.requireUsernameQuarantined,
                        }),
                    ],
                }),
            ],
        }),
    });
}
