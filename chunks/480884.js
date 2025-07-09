(t.d(n, { default: () => h }), t(953529));
var a = t(255367),
    s = t(73800),
    o = t(286379),
    c = t(399606),
    i = t(755721),
    l = t(481060),
    r = t(797614),
    d = t(819557),
    u = t(138201),
    _ = t(359119),
    x = t(473092),
    m = t(636749),
    b = t(981631),
    g = t(388032),
    v = t(661306);
function h(e) {
    let { transitionState: n, onClose: t, channelId: h, warningId: N, senderId: f, description: k, safetyTipRows: T, actionRows: p, learnMore: j } = e,
        B = (0, c.e7)([_.ZP], () => _.ZP.getChannelSafetyWarning(h, N));
    return (
        s.useEffect(() => {
            ((0, x.MC)(b.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: h,
                warningId: N,
                senderId: f,
                warningType: null == B ? void 0 : B.type
            }),
                r.Z.increment({ name: o.V.SAFETY_WARNING_MODAL_VIEW }));
        }, [h, N, f, B]),
        (0, a.jsx)(l.Y0X, {
            transitionState: n,
            parentComponent: 'MoreTipsModal',
            children: (0, a.jsxs)(l.Ttm, {
                style: { overflow: 'hidden auto' },
                children: [
                    (0, a.jsxs)(l.xBx, {
                        className: v.modalHeader,
                        children: [
                            (0, a.jsxs)('div', {
                                className: v.modalHeaderText,
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        variant: 'eyebrow',
                                        color: 'status-positive-text',
                                        children: g.intl.string(g.t.lyt43N)
                                    }),
                                    (0, a.jsx)(l.X6q, {
                                        variant: 'heading-xl/bold',
                                        color: 'status-positive-text',
                                        children: k
                                    })
                                ]
                            }),
                            (0, a.jsx)(i.zx, {
                                'aria-label': g.intl.string(g.t.cpT0Cg),
                                look: i.zx.Looks.BLANK,
                                size: i.zx.Sizes.NONE,
                                onClick: t,
                                innerClassName: v.closeButtonInner,
                                className: v.closeButton,
                                children: (0, a.jsx)(l.Dio, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: v.closeIcon
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)(l.hzk, {
                        className: v.modalContent,
                        children: [
                            (0, a.jsxs)('div', {
                                className: v.mainSection,
                                children: [(0, a.jsx)(d.z, { children: T }), null != j ? j : null]
                            }),
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        className: v.moreHeading,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: g.intl.string(g.t.K5FKtb)
                                    }),
                                    (0, a.jsx)(u.rT, { children: p })
                                ]
                            }),
                            (0, a.jsx)(m.Z, {
                                channelId: h,
                                warningId: N,
                                senderId: f,
                                safetyWarning: B
                            })
                        ]
                    })
                ]
            })
        })
    );
}
