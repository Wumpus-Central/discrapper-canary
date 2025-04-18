n.d(t, {
    H: () => h,
    default: () => x
});
var l = n(200651),
    r = n(192379),
    i = n(990547),
    s = n(481060),
    a = n(390885),
    o = n(495784),
    c = n(950012),
    d = n(161836),
    u = n(630724),
    m = n(388032),
    N = n(778360);
function x(e) {
    let { transitionState: t, onClose: n, isNUXFlow: x } = e;
    return (
        r.useEffect(() => {
            o.Z.hideHubUpsell(), x && a.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION);
        }, [x]),
        (0, l.jsx)(s.Y0X, {
            className: N.modalRoot,
            transitionState: t,
            'aria-label': m.NW.string(m.t['3khS8P']),
            impression: { impressionName: i.ImpressionNames.HUB_EMAIL_SIGNUP },
            children: (0, l.jsx)(s.hzk, {
                style: {
                    overflow: 'hidden',
                    paddingRight: '0px'
                },
                paddingFix: !1,
                className: N.modalContent,
                children: (0, l.jsxs)('div', {
                    className: N.container,
                    children: [
                        (0, l.jsx)('div', {
                            className: N.sidebarContainer,
                            children: (0, l.jsx)(d.Z, {})
                        }),
                        (0, l.jsxs)('div', {
                            className: N.contentContainer,
                            children: [
                                (0, l.jsx)(s.olH, {
                                    onClick: n,
                                    className: N.closeButton
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
let h = (e) => {
    let { invite: t } = e;
    return (0, l.jsxs)('div', {
        className: N.container,
        children: [
            (0, l.jsx)('div', {
                className: N.sidebarContainer,
                children: (0, l.jsx)(d.Z, {})
            }),
            (0, l.jsx)('div', {
                className: N.contentContainer,
                children: (0, l.jsx)(c.Z, { invite: t })
            })
        ]
    });
};
