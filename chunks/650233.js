n.d(t, {
    H: () => _,
    default: () => h
});
var l = n(200651),
    i = n(192379),
    r = n(990547),
    s = n(481060),
    a = n(390885),
    o = n(495784),
    c = n(950012),
    d = n(161836),
    u = n(630724),
    m = n(388032),
    x = n(778360);
function h(e) {
    let { transitionState: t, onClose: n, isNUXFlow: h } = e;
    return (
        i.useEffect(() => {
            o.Z.hideHubUpsell(), h && a.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION);
        }, [h]),
        (0, l.jsx)(s.Y0X, {
            className: x.modalRoot,
            transitionState: t,
            'aria-label': m.intl.string(m.t['3khS8P']),
            impression: { impressionName: r.ImpressionNames.HUB_EMAIL_SIGNUP },
            children: (0, l.jsx)(s.hzk, {
                style: {
                    overflow: 'hidden',
                    paddingRight: '0px'
                },
                paddingFix: !1,
                className: x.modalContent,
                children: (0, l.jsxs)('div', {
                    className: x.container,
                    children: [
                        (0, l.jsx)('div', {
                            className: x.sidebarContainer,
                            children: (0, l.jsx)(d.Z, {})
                        }),
                        (0, l.jsxs)('div', {
                            className: x.contentContainer,
                            children: [
                                (0, l.jsx)(s.olH, {
                                    onClick: n,
                                    className: x.closeButton
                                }),
                                (0, l.jsx)(c.Z, {
                                    isNUXFlow: h,
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
        className: x.container,
        children: [
            (0, l.jsx)('div', {
                className: x.sidebarContainer,
                children: (0, l.jsx)(d.Z, {})
            }),
            (0, l.jsx)('div', {
                className: x.contentContainer,
                children: (0, l.jsx)(c.Z, { invite: t })
            })
        ]
    });
};
