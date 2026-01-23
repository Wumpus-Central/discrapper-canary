n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(33851),
    o = n.n(i),
    a = n(417597),
    s = n(397927),
    c = n(530347),
    u = n(504049),
    d = n(266047),
    C = n(221950),
    m = n(652215),
    p = n(985018),
    b = n(328151);

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

function j(e, t) {
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
        i = (0, a.bG)([d.A], () => d.A.getSearchStateByGuildId(t), [t], o()),
        g = (0, u.Tj)(t),
        h = l.useCallback(() => {
            i.requireUnusualDmActivity || g(u.Zp.UNUSUAL_DM_ACTIVITY),
                (0, C.Ld)(
                    t,
                    j(f({}, i), {
                        requireUnusualDmActivity: !i.requireUnusualDmActivity,
                    }),
                );
        }, [t, i, g]),
        x = l.useCallback(() => {
            i.requireCommunicationDisabled || g(u.Zp.COMMUNICATION_DISABLED),
                (0, C.Ld)(
                    t,
                    j(f({}, i), {
                        requireCommunicationDisabled: !i.requireCommunicationDisabled,
                    }),
                );
        }, [t, i, g]),
        y = l.useCallback(() => {
            i.requireUnusualAccountActivity || g(u.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, C.Ld)(
                    t,
                    j(f({}, i), {
                        requireUnusualAccountActivity: !i.requireUnusualAccountActivity,
                    }),
                );
        }, [t, i, g]),
        O = l.useCallback(() => {
            i.requireUsernameQuarantined || g(u.Zp.USERNAME_QUARANTINED),
                (0, C.Ld)(
                    t,
                    j(f({}, i), {
                        requireUsernameQuarantined: !i.requireUsernameQuarantined,
                    }),
                );
        }, [t, i, g]);
    return (0, r.jsx)(s.W1t, {
        "data-menu-migration-ready": !0,
        navId: "member-safety-flags",
        onClose: n,
        "aria-label": p.intl.string(p.t.k9m8Rg),
        onSelect: m.tEg,
        children: (0, r.jsxs)(s.rXV, {
            children: [
                (0, r.jsx)(s.sLh, {
                    id: "toggle-require-unusual-dm-activity",
                    label: (0, r.jsxs)("div", {
                        className: b.mH,
                        children: [
                            (0, r.jsx)(s.EF8, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: b.iD,
                            }),
                            p.intl.string(p.t.ZRnON3),
                        ],
                    }),
                    action: h,
                    checked: i.requireUnusualDmActivity,
                }),
                (0, r.jsx)(s.sLh, {
                    id: "toggle-require-communication-disabled",
                    label: (0, r.jsxs)("div", {
                        className: b.mH,
                        children: [
                            (0, r.jsx)(s.gQi, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: b.Xu,
                            }),
                            p.intl.string(p.t.z3wbj8),
                        ],
                    }),
                    action: x,
                    checked: i.requireCommunicationDisabled,
                }),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.sLh, {
                            id: "toggle-require-unusual-account-activity",
                            label: (0, r.jsxs)("div", {
                                className: b.mH,
                                children: [
                                    (0, r.jsx)(c.A, {
                                        width: 16,
                                        height: 16,
                                        className: b.hG,
                                    }),
                                    p.intl.string(p.t.DIQsD9),
                                ],
                            }),
                            action: y,
                            checked: i.requireUnusualAccountActivity,
                        }),
                        (0, r.jsx)(s.sLh, {
                            id: "toggle-require-username-quarantined",
                            label: (0, r.jsxs)("div", {
                                className: b.mH,
                                children: [
                                    (0, r.jsx)(s._mZ, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 16,
                                        height: 16,
                                        className: b.k8,
                                    }),
                                    p.intl.string(p.t.Jloklk),
                                ],
                            }),
                            action: O,
                            checked: i.requireUsernameQuarantined,
                        }),
                    ],
                }),
            ],
        }),
    });
}
