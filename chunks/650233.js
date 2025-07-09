n.d(t, {
    H: () => x,
    default: () => f
});
var r = n(255367),
    l = n(73800),
    i = n(990547),
    a = n(481060),
    s = n(390885),
    o = n(495784),
    c = n(950012),
    d = n(161836),
    u = n(630724),
    m = n(388032),
    h = n(778360);
function f(e) {
    let { transitionState: t, onClose: n, isNUXFlow: f } = e;
    return (
        l.useEffect(() => {
            (o.Z.hideHubUpsell(), f && s.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION));
        }, [f]),
        (0, r.jsx)(a.Y0X, {
            className: h.modalRoot,
            transitionState: t,
            'aria-label': m.intl.string(m.t['3khS8P']),
            impression: { impressionName: i.ImpressionNames.HUB_EMAIL_SIGNUP },
            parentComponent: 'HubEmailConnectionModal',
            children: (0, r.jsx)(a.hzk, {
                style: {
                    overflow: 'hidden',
                    paddingRight: '0px'
                },
                paddingFix: !1,
                className: h.modalContent,
                children: (0, r.jsxs)('div', {
                    className: h.container,
                    children: [
                        (0, r.jsx)('div', {
                            className: h.sidebarContainer,
                            children: (0, r.jsx)(d.Z, {})
                        }),
                        (0, r.jsxs)('div', {
                            className: h.contentContainer,
                            children: [
                                (0, r.jsx)(a.olH, {
                                    onClick: n,
                                    className: h.closeButton
                                }),
                                (0, r.jsx)(c.Z, {
                                    isNUXFlow: f,
                                    onClose: n
                                })
                            ]
                        })
                    ]
                })
            })
        })
    );
}
let x = (e) => {
    let { invite: t } = e;
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)('div', {
                className: h.sidebarContainer,
                children: (0, r.jsx)(d.Z, {})
            }),
            (0, r.jsx)('div', {
                className: h.contentContainer,
                children: (0, r.jsx)(c.Z, { invite: t })
            })
        ]
    });
};
