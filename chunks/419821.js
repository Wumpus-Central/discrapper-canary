n.d(t, { u: () => x });
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(933970),
    u = n(340453),
    m = n(292352),
    g = n(388032),
    h = n(586372);
function x(e) {
    let { user: t } = e,
        r = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        x = s.useCallback(() => {
            l()(void 0 !== r, 'User must be logged in to accept a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('50872').then(n.bind(n, 442673));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: r,
                            otherUser: t
                        });
                });
        }, [r, t]);
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)('div', {
                className: h.details,
                children: (0, i.jsx)(u.Z, {
                    otherUser: t,
                    status: m.ne.ACTIVE
                })
            }),
            (0, i.jsx)('div', {
                className: h.actions,
                children: (0, i.jsx)(d.Z, {
                    icon: o.Dio,
                    tooltip: g.intl.string(g.t.l20ZZm),
                    onClick: x
                })
            })
        ]
    });
}
