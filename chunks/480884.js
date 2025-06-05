t.d(n, { default: () => v }), t(953529);
var a = t(255367),
    o = t(73800),
    s = t(286379),
    c = t(399606),
    i = t(481060),
    l = t(797614),
    r = t(819557),
    d = t(138201),
    u = t(359119),
    _ = t(473092),
    m = t(636749),
    x = t(981631),
    b = t(388032),
    g = t(661306);
function v(e) {
    let { transitionState: n, onClose: t, channelId: v, warningId: h, senderId: k, description: N, safetyTipRows: T, actionRows: f, learnMore: p } = e,
        j = (0, c.e7)([u.ZP], () => u.ZP.getChannelSafetyWarning(v, h));
    return (
        o.useEffect(() => {
            (0, _.MC)(x.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: v,
                warningId: h,
                senderId: k,
                warningType: null == j ? void 0 : j.type
            }),
                l.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
        }, [v, h, k, j]),
        (0, a.jsx)(i.Y0X, {
            transitionState: n,
            parentComponent: 'MoreTipsModal',
            children: (0, a.jsxs)(i.Ttm, {
                style: { overflow: 'hidden auto' },
                children: [
                    (0, a.jsxs)(i.xBx, {
                        className: g.modalHeader,
                        children: [
                            (0, a.jsxs)('div', {
                                className: g.modalHeaderText,
                                children: [
                                    (0, a.jsx)(i.Text, {
                                        variant: 'eyebrow',
                                        color: 'status-positive-text',
                                        children: b.intl.string(b.t.lyt43N)
                                    }),
                                    (0, a.jsx)(i.X6q, {
                                        variant: 'heading-xl/bold',
                                        color: 'status-positive-text',
                                        children: N
                                    })
                                ]
                            }),
                            (0, a.jsx)(i.zxk, {
                                'aria-label': b.intl.string(b.t.cpT0Cg),
                                look: i.zxk.Looks.BLANK,
                                size: i.zxk.Sizes.NONE,
                                onClick: t,
                                innerClassName: g.closeButtonInner,
                                className: g.closeButton,
                                children: (0, a.jsx)(i.Dio, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: g.closeIcon
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)(i.hzk, {
                        className: g.modalContent,
                        children: [
                            (0, a.jsxs)('div', {
                                className: g.mainSection,
                                children: [(0, a.jsx)(r.z, { children: T }), null != p ? p : null]
                            }),
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(i.Text, {
                                        className: g.moreHeading,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: b.intl.string(b.t.K5FKtb)
                                    }),
                                    (0, a.jsx)(d.rT, { children: f })
                                ]
                            }),
                            (0, a.jsx)(m.Z, {
                                channelId: v,
                                warningId: h,
                                senderId: k,
                                safetyWarning: j
                            })
                        ]
                    })
                ]
            })
        })
    );
}
