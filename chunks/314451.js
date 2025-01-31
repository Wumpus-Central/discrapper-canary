n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(782568),
    o = n(31336),
    c = n(906467),
    d = n(63063),
    u = n(665149),
    m = n(388032);
function h(e) {
    let { className: t } = e,
        h = (0, a.e7)([c.Z], () => c.Z.isDeveloper),
        [_, p] = l.useState(!1),
        [g, f] = l.useState(0),
        x = (e) => {
            clearTimeout(g),
                f(
                    setTimeout(() => {
                        p(e);
                    }, 100)
                );
        };
    return (0, i.jsx)('div', {
        onMouseEnter: () => x(!0),
        onMouseLeave: () => x(!1),
        children: (0, i.jsx)(r.yRy, {
            shouldShow: _,
            animation: r.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            onRequestOpen: () => p(!0),
            onRequestClose: () => p(!1),
            renderPopout: () =>
                (function (e) {
                    let { onClose: t, isDiscordDeveloper: l } = e;
                    return (0, i.jsx)(r.v2r, {
                        onSelect: () => {},
                        navId: 'staff-help-popout',
                        variant: 'fixed',
                        onClose: t,
                        'aria-label': m.intl.string(m.t.HpQykZ),
                        children: (0, i.jsxs)(r.kSQ, {
                            children: [
                                (0, i.jsx)(r.sNh, {
                                    id: 'staff-help-bug-reporter',
                                    label: m.intl.string(m.t['5Lqopa']),
                                    icon: r.nnZ,
                                    action: () =>
                                        (0, r.ZDy)(async () => {
                                            let { default: e } = await n.e('83051').then(n.bind(n, 115072));
                                            return (t) => (0, i.jsx)(e, { ...t });
                                        })
                                }),
                                l &&
                                    (0, i.jsx)(r.sNh, {
                                        id: 'staff-devtools',
                                        label: 'Toggle DevTools',
                                        icon: r.Ymb,
                                        action: () => (0, o.SO)()
                                    }),
                                (0, i.jsx)(r.sNh, {
                                    id: 'staff-help-center',
                                    label: 'Go to Help Center',
                                    icon: r.rgF,
                                    action: () => (0, s.Z)(d.w)
                                })
                            ]
                        })
                    });
                })({
                    onClose: () => p(!1),
                    isDiscordDeveloper: h
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(u.JO, {
                    ...e,
                    icon: r.nnZ,
                    'aria-label': m.intl.string(m.t.cqEoj4),
                    selected: l,
                    className: t
                });
            }
        })
    });
}
