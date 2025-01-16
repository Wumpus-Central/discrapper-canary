t.r(e),
    t.d(e, {
        default: function () {
            return _;
        }
    });
var a = t(200651),
    o = t(192379),
    s = t(286379),
    i = t(399606),
    c = t(481060),
    l = t(797614),
    r = t(359119),
    d = t(473092),
    u = t(636749),
    m = t(981631),
    x = t(388032),
    b = t(636370);
function _(n) {
    let { transitionState: e, onClose: t, channelId: _, warningId: v, senderId: g, description: N, safetyTips: h, actions: p, learnMore: k } = n,
        j = (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarning(_, v));
    return (
        o.useEffect(() => {
            (0, d.MC)(m.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: _,
                warningId: v,
                senderId: g,
                warningType: null == j ? void 0 : j.type
            }),
                l.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
        }, [_, v, g, j]),
        (0, a.jsx)(c.ModalRoot, {
            transitionState: e,
            children: (0, a.jsxs)(c.Scroller, {
                style: { overflow: 'hidden auto' },
                children: [
                    (0, a.jsxs)(c.ModalHeader, {
                        className: b.modalHeader,
                        children: [
                            (0, a.jsxs)('div', {
                                className: b.modalHeaderText,
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        variant: 'eyebrow',
                                        color: 'status-positive-text',
                                        children: x.intl.string(x.t.lyt43N)
                                    }),
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-xl/bold',
                                        color: 'status-positive-text',
                                        children: N
                                    })
                                ]
                            }),
                            (0, a.jsx)(c.Button, {
                                'aria-label': x.intl.string(x.t.cpT0Cg),
                                look: c.Button.Looks.BLANK,
                                size: c.Button.Sizes.NONE,
                                onClick: t,
                                innerClassName: b.closeButtonInner,
                                className: b.closeButton,
                                children: (0, a.jsx)(c.XSmallIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: b.closeIcon
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)(c.ModalContent, {
                        className: b.modalContent,
                        children: [
                            (0, a.jsxs)('div', {
                                className: b.mainSection,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: b.tipsSection,
                                        children: h.map((n, e) =>
                                            (0, a.jsxs)(
                                                'div',
                                                {
                                                    className: b.tipRow,
                                                    children: [
                                                        (0, a.jsx)(c.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-brand',
                                                            className: b.tipNumber,
                                                            children: e + 1
                                                        }),
                                                        n
                                                    ]
                                                },
                                                e
                                            )
                                        )
                                    }),
                                    null != k ? k : null
                                ]
                            }),
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        className: b.moreHeading,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: x.intl.string(x.t.K5FKtb)
                                    }),
                                    (0, a.jsx)('div', {
                                        className: b.tipsSection,
                                        children: p
                                    })
                                ]
                            }),
                            (0, a.jsx)(u.Z, {
                                channelId: _,
                                warningId: v,
                                senderId: g,
                                safetyWarning: j
                            })
                        ]
                    })
                ]
            })
        })
    );
}
