t.r(e),
    t.d(e, {
        default: function () {
            return v;
        }
    });
var a = t(200651),
    o = t(192379),
    s = t(286379),
    c = t(399606),
    l = t(481060),
    i = t(797614),
    r = t(819557),
    d = t(138201),
    u = t(359119),
    m = t(473092),
    x = t(636749),
    b = t(981631),
    _ = t(388032),
    g = t(636370);
function v(n) {
    let { transitionState: e, onClose: t, channelId: v, warningId: h, senderId: k, description: N, safetyTipRows: j, actionRows: B, learnMore: T } = n,
        f = (0, c.e7)([u.ZP], () => u.ZP.getChannelSafetyWarning(v, h));
    return (
        o.useEffect(() => {
            (0, m.MC)(b.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: v,
                warningId: h,
                senderId: k,
                warningType: null == f ? void 0 : f.type
            }),
                i.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
        }, [v, h, k, f]),
        (0, a.jsx)(l.ModalRoot, {
            transitionState: e,
            children: (0, a.jsxs)(l.Scroller, {
                style: { overflow: 'hidden auto' },
                children: [
                    (0, a.jsxs)(l.ModalHeader, {
                        className: g.modalHeader,
                        children: [
                            (0, a.jsxs)('div', {
                                className: g.modalHeaderText,
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        variant: 'eyebrow',
                                        color: 'status-positive-text',
                                        children: _.intl.string(_.t.lyt43N)
                                    }),
                                    (0, a.jsx)(l.Heading, {
                                        variant: 'heading-xl/bold',
                                        color: 'status-positive-text',
                                        children: N
                                    })
                                ]
                            }),
                            (0, a.jsx)(l.Button, {
                                'aria-label': _.intl.string(_.t.cpT0Cg),
                                look: l.Button.Looks.BLANK,
                                size: l.Button.Sizes.NONE,
                                onClick: t,
                                innerClassName: g.closeButtonInner,
                                className: g.closeButton,
                                children: (0, a.jsx)(l.XSmallIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: g.closeIcon
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)(l.ModalContent, {
                        className: g.modalContent,
                        children: [
                            (0, a.jsxs)('div', {
                                className: g.mainSection,
                                children: [(0, a.jsx)(r.z, { children: j }), null != T ? T : null]
                            }),
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        className: g.moreHeading,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: _.intl.string(_.t.K5FKtb)
                                    }),
                                    (0, a.jsx)(d.rT, { children: B })
                                ]
                            }),
                            (0, a.jsx)(x.Z, {
                                channelId: v,
                                warningId: h,
                                senderId: k,
                                safetyWarning: f
                            })
                        ]
                    })
                ]
            })
        })
    );
}
