n.r(t),
    n.d(t, {
        HubEmailConnectionModalView: function () {
            return g;
        },
        default: function () {
            return h;
        }
    });
var i = n(200651),
    s = n(192379),
    l = n(990547),
    a = n(481060),
    r = n(390885),
    o = n(495784),
    c = n(950012),
    d = n(161836),
    u = n(630724),
    m = n(388032),
    x = n(798508);
function h(e) {
    let { transitionState: t, onClose: n, isNUXFlow: h } = e;
    return (
        s.useEffect(() => {
            o.Z.hideHubUpsell(), h && r.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION);
        }, [h]),
        (0, i.jsx)(a.ModalRoot, {
            className: x.modalRoot,
            transitionState: t,
            'aria-label': m.intl.string(m.t['3khS8P']),
            impression: { impressionName: l.ImpressionNames.HUB_EMAIL_SIGNUP },
            children: (0, i.jsx)(a.ModalContent, {
                style: {
                    overflow: 'hidden',
                    paddingRight: '0px'
                },
                paddingFix: !1,
                className: x.modalContent,
                children: (0, i.jsxs)('div', {
                    className: x.container,
                    children: [
                        (0, i.jsx)('div', {
                            className: x.sidebarContainer,
                            children: (0, i.jsx)(d.Z, {})
                        }),
                        (0, i.jsxs)('div', {
                            className: x.contentContainer,
                            children: [
                                (0, i.jsx)(a.ModalCloseButton, {
                                    onClick: n,
                                    className: x.closeButton
                                }),
                                (0, i.jsx)(c.Z, {
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
let g = (e) => {
    let { invite: t } = e;
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)('div', {
                className: x.sidebarContainer,
                children: (0, i.jsx)(d.Z, {})
            }),
            (0, i.jsx)('div', {
                className: x.contentContainer,
                children: (0, i.jsx)(c.Z, { invite: t })
            })
        ]
    });
};
