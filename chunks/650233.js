n.d(t, {
    H: () => _,
    default: () => x
});
var l = n(255367),
    i = n(73800),
    r = n(990547),
    a = n(481060),
    s = n(390885),
    o = n(495784),
    c = n(950012),
    d = n(161836),
    u = n(630724),
    m = n(388032),
    h = n(778360);
function x(e) {
    let { transitionState: t, onClose: n, isNUXFlow: x } = e;
    return (
        i.useEffect(() => {
            (o.Z.hideHubUpsell(), x && s.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION));
        }, [x]),
        (0, l.jsx)(a.Y0X, {
            className: h.modalRoot,
            transitionState: t,
            'aria-label': m.intl.string(m.t['3khS8P']),
            impression: { impressionName: r.ImpressionNames.HUB_EMAIL_SIGNUP },
            parentComponent: 'HubEmailConnectionModal',
            children: (0, l.jsx)(a.hzk, {
                style: {
                    overflow: 'hidden',
                    paddingRight: '0px'
                },
                paddingFix: !1,
                className: h.modalContent,
                children: (0, l.jsxs)('div', {
                    className: h.container,
                    children: [
                        (0, l.jsx)('div', {
                            className: h.sidebarContainer,
                            children: (0, l.jsx)(d.Z, {})
                        }),
                        (0, l.jsxs)('div', {
                            className: h.contentContainer,
                            children: [
                                (0, l.jsx)(a.olH, {
                                    onClick: n,
                                    className: h.closeButton
                                }),
                                (0, l.jsx)(c.Z, {
                                    isNUXFlow: x,
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
let _ = (e) => {
    let { invite: t } = e;
    return (0, l.jsxs)('div', {
        className: h.container,
        children: [
            (0, l.jsx)('div', {
                className: h.sidebarContainer,
                children: (0, l.jsx)(d.Z, {})
            }),
            (0, l.jsx)('div', {
                className: h.contentContainer,
                children: (0, l.jsx)(c.Z, { invite: t })
            })
        ]
    });
};
