n.d(t, { u: () => _ });
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
    h = n(388032),
    g = n(659506);
function _(e) {
    let { user: t } = e,
        r = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        _ = s.useCallback(() => {
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
        className: g.container,
        children: [
            (0, i.jsx)('div', {
                className: g.details,
                children: (0, i.jsx)(u.Z, {
                    otherUser: t,
                    status: m.ne.ACTIVE
                })
            }),
            (0, i.jsx)('div', {
                className: g.actions,
                children: (0, i.jsx)(d.Z, {
                    icon: o.Dio,
                    tooltip: h.intl.string(h.t.l20ZZm),
                    onClick: _
                })
            })
        ]
    });
}
