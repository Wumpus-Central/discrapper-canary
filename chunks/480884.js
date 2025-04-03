t.d(n, { default: () => g }), t(266796);
var a = t(200651),
    s = t(192379),
    o = t(286379),
    c = t(399606),
    i = t(481060),
    r = t(797614),
    l = t(819557),
    d = t(138201),
    u = t(359119),
    _ = t(473092),
    x = t(636749),
    m = t(981631),
    b = t(388032),
    N = t(661306);
function g(e) {
    let { transitionState: n, onClose: t, channelId: g, warningId: v, senderId: h, description: k, safetyTipRows: f, actionRows: T, learnMore: j } = e,
        p = (0, c.e7)([u.ZP], () => u.ZP.getChannelSafetyWarning(g, v));
    return (
        s.useEffect(() => {
            (0, _.MC)(m.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: g,
                warningId: v,
                senderId: h,
                warningType: null == p ? void 0 : p.type
            }),
                r.Z.increment({ name: o.V.SAFETY_WARNING_MODAL_VIEW });
        }, [g, v, h, p]),
        (0, a.jsx)(i.Y0X, {
            transitionState: n,
            children: (0, a.jsxs)(i.Ttm, {
                style: { overflow: 'hidden auto' },
                children: [
                    (0, a.jsxs)(i.xBx, {
                        className: N.modalHeader,
                        children: [
                            (0, a.jsxs)('div', {
                                className: N.modalHeaderText,
                                children: [
                                    (0, a.jsx)(i.Text, {
                                        variant: 'eyebrow',
                                        color: 'status-positive-text',
                                        children: b.NW.string(b.t.lyt43N)
                                    }),
                                    (0, a.jsx)(i.X6q, {
                                        variant: 'heading-xl/bold',
                                        color: 'status-positive-text',
                                        children: k
                                    })
                                ]
                            }),
                            (0, a.jsx)(i.zxk, {
                                'aria-label': b.NW.string(b.t.cpT0Cg),
                                look: i.zxk.Looks.BLANK,
                                size: i.zxk.Sizes.NONE,
                                onClick: t,
                                innerClassName: N.closeButtonInner,
                                className: N.closeButton,
                                children: (0, a.jsx)(i.Dio, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: N.closeIcon
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)(i.hzk, {
                        className: N.modalContent,
                        children: [
                            (0, a.jsxs)('div', {
                                className: N.mainSection,
                                children: [(0, a.jsx)(l.z, { children: f }), null != j ? j : null]
                            }),
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(i.Text, {
                                        className: N.moreHeading,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: b.NW.string(b.t.K5FKtb)
                                    }),
                                    (0, a.jsx)(d.rT, { children: T })
                                ]
                            }),
                            (0, a.jsx)(x.Z, {
                                channelId: g,
                                warningId: v,
                                senderId: h,
                                safetyWarning: p
                            })
                        ]
                    })
                ]
            })
        })
    );
}
