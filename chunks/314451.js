n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(782568),
    s = n(540059),
    c = n(31336),
    d = n(906467),
    u = n(594174),
    p = n(63063),
    m = n(665149),
    f = n(388032);
function h(e) {
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
function g(e) {
    let { className: t } = e,
        g = (0, a.e7)([d.Z], () => d.Z.isDeveloper),
        [_, b] = i.useState(!1),
        [v, y] = i.useState(0),
        x = (0, a.e7)([u.default], () => {
            var e, t, n;
            return null !== (n = null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : null === (e = t.isStaff) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n && n;
        }),
        E = (0, s.Q3)('StaffHelpButton'),
        O = (e) => {
            clearTimeout(v),
                y(
                    setTimeout(() => {
                        b(e);
                    }, 100)
                );
        };
    return (0, r.jsx)('div', {
        onMouseEnter: () => O(!0),
        onMouseLeave: () => O(!1),
        children: (0, r.jsx)(o.yRy, {
            shouldShow: _,
            animation: o.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            onRequestOpen: () => b(!0),
            onRequestClose: () => b(!1),
            renderPopout: () =>
                (function (e) {
                    let { onClose: t, isDiscordDeveloper: i, isStaff: a, isRefreshEnabled: s } = e;
                    return (0, r.jsx)(o.v2r, {
                        onSelect: () => {},
                        navId: 'staff-help-popout',
                        variant: 'fixed',
                        onClose: t,
                        'aria-label': f.NW.string(f.t.HpQykZ),
                        children: (0, r.jsxs)(o.kSQ, {
                            children: [
                                (0, r.jsx)(o.sNh, {
                                    id: 'staff-help-bug-reporter',
                                    label: f.NW.string(f.t['5Lqopa']),
                                    icon: o.nnZ,
                                    action: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await n.e('83051').then(n.bind(n, 115072));
                                            return (t) => (0, r.jsx)(e, h({}, t));
                                        })
                                }),
                                i &&
                                    (0, r.jsx)(o.sNh, {
                                        id: 'staff-devtools',
                                        label: 'Toggle DevTools',
                                        icon: o.Ymb,
                                        action: () => (0, c.SO)()
                                    }),
                                s &&
                                    a &&
                                    (0, r.jsx)(o.sNh, {
                                        id: 'show-refresh-onboarding',
                                        label: 'Show Refresh Onboarding',
                                        icon: o.DuK,
                                        action: () =>
                                            void (0, o.ZDy)(
                                                async () => {
                                                    let { DesktopRefreshOnboardingModal: e } = await n.e('49910').then(n.bind(n, 239191));
                                                    return (t) => (0, r.jsx)(e, h({}, t));
                                                },
                                                { backdropStyle: o.fCB.TOP_RADIAL }
                                            )
                                    }),
                                (0, r.jsx)(o.sNh, {
                                    id: 'staff-help-center',
                                    label: 'Go to Help Center',
                                    icon: o.rgF,
                                    action: () => (0, l.Z)(p.w)
                                })
                            ]
                        })
                    });
                })({
                    onClose: () => b(!1),
                    isDiscordDeveloper: g,
                    isStaff: x,
                    isRefreshEnabled: E
                }),
            children: (e, n) => {
                var i, a;
                let { isShown: l } = n;
                return (0, r.jsx)(
                    m.JO,
                    ((i = h({}, e)),
                    (a = a =
                        {
                            icon: o.nnZ,
                            'aria-label': f.NW.string(f.t.cqEoj4),
                            selected: l,
                            className: t
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    i)
                );
            }
        })
    });
}
