n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(782568),
    s = n(31336),
    c = n(906467),
    u = n(63063),
    d = n(665149),
    p = n(388032);
let m = () =>
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e('83051').then(n.bind(n, 115072));
        return (t) =>
            (0, r.jsx)(
                e,
                (function (e) {
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
                })({}, t)
            );
    });
function f(e) {
    let { className: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.isDeveloper),
        [f, h] = i.useState(!1),
        [g, _] = i.useState(0),
        b = (e) => {
            clearTimeout(g),
                _(
                    setTimeout(() => {
                        h(e);
                    }, 100)
                );
        };
    return (0, r.jsx)('div', {
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: (0, r.jsx)(l.yRy, {
            shouldShow: f,
            animation: l.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            onRequestOpen: () => h(!0),
            onRequestClose: () => h(!1),
            renderPopout: () =>
                (function (e) {
                    let { onClose: t, isDiscordDeveloper: n } = e;
                    return (0, r.jsx)(l.v2r, {
                        onSelect: () => {},
                        navId: 'staff-help-popout',
                        variant: 'fixed',
                        onClose: t,
                        'aria-label': p.NW.string(p.t.HpQykZ),
                        children: (0, r.jsxs)(l.kSQ, {
                            children: [
                                (0, r.jsx)(l.sNh, {
                                    id: 'staff-help-bug-reporter',
                                    label: p.NW.string(p.t['5Lqopa']),
                                    icon: l.nnZ,
                                    action: m
                                }),
                                n &&
                                    (0, r.jsx)(l.sNh, {
                                        id: 'staff-devtools',
                                        label: 'Toggle DevTools',
                                        icon: l.Ymb,
                                        action: () => (0, s.SO)()
                                    }),
                                (0, r.jsx)(l.sNh, {
                                    id: 'staff-help-center',
                                    label: 'Go to Help Center',
                                    icon: l.rgF,
                                    action: () => (0, o.Z)(u.w)
                                })
                            ]
                        })
                    });
                })({
                    onClose: () => h(!1),
                    isDiscordDeveloper: n
                }),
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, r.jsx)(d.JO, {
                    onClick: m,
                    icon: l.nnZ,
                    'aria-label': p.NW.string(p.t.cqEoj4),
                    selected: i,
                    className: t
                });
            }
        })
    });
}
