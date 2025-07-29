(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(782568),
    s = n(31336),
    c = n(906467),
    u = n(63063),
    d = n(665149),
    p = n(388032);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let f = () =>
    (0, a.ZDy)(async () => {
        let { default: e } = await n.e('83051').then(n.bind(n, 115072));
        return (t) => (0, r.jsx)(e, h({}, t));
    });
function g(e) {
    let { className: t, focusSectionProps: n } = e,
        g = (0, l.e7)([c.Z], () => c.Z.isDeveloper),
        [m, b] = i.useState(!1),
        [_, O] = i.useState(0),
        E = i.useRef(null),
        y = (e) => {
            (clearTimeout(_),
                O(
                    setTimeout(() => {
                        b(e);
                    }, 100)
                ));
        };
    return (0, r.jsx)('div', {
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1),
        children: (0, r.jsx)(a.yRy, {
            targetElementRef: E,
            shouldShow: m,
            animation: a.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            onRequestOpen: () => b(!0),
            onRequestClose: () => b(!1),
            renderPopout: () =>
                (function (e) {
                    let { onClose: t, isDiscordDeveloper: n } = e;
                    return (0, r.jsx)(a.v2r, {
                        onSelect: () => {},
                        navId: 'staff-help-popout',
                        variant: 'fixed',
                        onClose: t,
                        'aria-label': p.intl.string(p.t.HpQykZ),
                        children: (0, r.jsxs)(a.kSQ, {
                            children: [
                                (0, r.jsx)(a.sNh, {
                                    id: 'staff-help-bug-reporter',
                                    label: p.intl.string(p.t['5Lqopa']),
                                    icon: a.nnZ,
                                    action: f
                                }),
                                n &&
                                    (0, r.jsx)(a.sNh, {
                                        id: 'staff-devtools',
                                        label: 'Toggle DevTools',
                                        icon: a.Ymb,
                                        action: () => (0, s.SO)()
                                    }),
                                (0, r.jsx)(a.sNh, {
                                    id: 'staff-help-center',
                                    label: 'Go to Help Center',
                                    icon: a.rgF,
                                    action: () => (0, o.Z)(u.w)
                                })
                            ]
                        })
                    });
                })({
                    onClose: () => b(!1),
                    isDiscordDeveloper: g
                }),
            children: (e, i) => {
                let { isShown: l } = i;
                return (0, r.jsx)(
                    d.JO,
                    h(
                        {
                            ref: E,
                            onClick: f,
                            icon: a.nnZ,
                            'aria-label': p.intl.string(p.t.cqEoj4),
                            selected: l,
                            className: t
                        },
                        n
                    )
                );
            }
        })
    });
}
