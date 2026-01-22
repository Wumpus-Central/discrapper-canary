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
    d = n(504049),
    u = n(266047),
    C = n(221950),
    f = n(652215),
    b = n(985018),
    m = n(328151);

function p(e) {
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
        i = (0, a.bG)([u.A], () => u.A.getSearchStateByGuildId(t), [t], o()),
        g = (0, d.Tj)(t),
        h = l.useCallback(() => {
            i.requireUnusualDmActivity || g(d.Zp.UNUSUAL_DM_ACTIVITY),
                (0, C.Ld)(
                    t,
                    j(p({}, i), {
                        requireUnusualDmActivity: !i.requireUnusualDmActivity,
                    }),
                );
        }, [t, i, g]),
        x = l.useCallback(() => {
            i.requireCommunicationDisabled || g(d.Zp.COMMUNICATION_DISABLED),
                (0, C.Ld)(
                    t,
                    j(p({}, i), {
                        requireCommunicationDisabled: !i.requireCommunicationDisabled,
                    }),
                );
        }, [t, i, g]),
        y = l.useCallback(() => {
            i.requireUnusualAccountActivity || g(d.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, C.Ld)(
                    t,
                    j(p({}, i), {
                        requireUnusualAccountActivity: !i.requireUnusualAccountActivity,
                    }),
                );
        }, [t, i, g]),
        O = l.useCallback(() => {
            i.requireUsernameQuarantined || g(d.Zp.USERNAME_QUARANTINED),
                (0, C.Ld)(
                    t,
                    j(p({}, i), {
                        requireUsernameQuarantined: !i.requireUsernameQuarantined,
                    }),
                );
        }, [t, i, g]);
    return (0, r.jsx)(s.W1t, {
        navId: "member-safety-flags",
        onClose: n,
        "aria-label": b.intl.string(b.t.k9m8Rg),
        onSelect: f.tEg,
        children: (0, r.jsxs)(s.rXV, {
            children: [
                (0, r.jsx)(s.sLh, {
                    id: "toggle-require-unusual-dm-activity",
                    label: (0, r.jsxs)("div", {
                        className: m.mH,
                        children: [
                            (0, r.jsx)(s.EF8, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: m.iD,
                            }),
                            b.intl.string(b.t.ZRnON3),
                        ],
                    }),
                    action: h,
                    checked: i.requireUnusualDmActivity,
                }),
                (0, r.jsx)(s.sLh, {
                    id: "toggle-require-communication-disabled",
                    label: (0, r.jsxs)("div", {
                        className: m.mH,
                        children: [
                            (0, r.jsx)(s.gQi, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: m.Xu,
                            }),
                            b.intl.string(b.t.z3wbj8),
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
                                className: m.mH,
                                children: [
                                    (0, r.jsx)(c.A, {
                                        width: 16,
                                        height: 16,
                                        className: m.hG,
                                    }),
                                    b.intl.string(b.t.DIQsD9),
                                ],
                            }),
                            action: y,
                            checked: i.requireUnusualAccountActivity,
                        }),
                        (0, r.jsx)(s.sLh, {
                            id: "toggle-require-username-quarantined",
                            label: (0, r.jsxs)("div", {
                                className: m.mH,
                                children: [
                                    (0, r.jsx)(s._mZ, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 16,
                                        height: 16,
                                        className: m.k8,
                                    }),
                                    b.intl.string(b.t.Jloklk),
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
