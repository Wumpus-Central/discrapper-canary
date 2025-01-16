n.r(e),
    n.d(e, {
        SafetyToolsSlides: function () {
            return i;
        }
    }),
    n(47120);
var i,
    s,
    o = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(600164),
    c = n(367408),
    d = n(473092),
    u = n(419672),
    T = n(858597),
    S = n(486213),
    _ = n(388032),
    x = n(744948);
((s = i || (i = {})).ACTIONS = 'ACTIONS'), (s.SAFETY_TIPS = 'SAFETY_TIPS'), (s.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS');
e.default = (t) => {
    let { onClose: e, channelId: n, warningId: i, warningType: s, otherUserId: b, transitionState: p } = t,
        A = null != (0, c.M)(n),
        [h, C] = l.useState('ACTIONS'),
        E = l.useCallback(
            (t) => {
                (0, d.qc)({
                    channelId: n,
                    warningId: i,
                    warningType: s,
                    senderId: b,
                    cta: t,
                    isNudgeWarning: A
                });
            },
            [n, i, s, b, A]
        ),
        R = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, o.jsx)(r.Button, {
                look: r.Button.Looks.LINK,
                size: r.Button.Sizes.MIN,
                onClick: n,
                color: r.Button.Colors.CUSTOM,
                className: x.footerLink,
                children: e
            });
        }, []),
        N = l.useCallback(() => {
            switch (h) {
                case 'SAFETY_TIPS':
                case 'ABOUT_SAFETY_ALERTS':
                    return (0, o.jsx)(R, {
                        text: _.intl.string(_.t['13/7kZ']),
                        onClick: () => C('ACTIONS')
                    });
                default:
                    return null;
            }
        }, [h, R]),
        L = l.useCallback(() => {
            switch (h) {
                case 'SAFETY_TIPS':
                    return _.intl.string(_.t.EtNxi4);
                case 'ABOUT_SAFETY_ALERTS':
                    return _.intl.string(_.t.qI14KC);
                default:
                    return _.intl.string(_.t.MAhAp6);
            }
        }, [h]),
        g = l.useCallback(
            (t) => {
                C(t);
            },
            [C]
        );
    return (0, o.jsxs)(r.ModalRoot, {
        transitionState: p,
        'aria-label': _.intl.string(_.t.eXlt09),
        size: r.ModalSize.SMALL,
        children: [
            (0, o.jsx)(r.ModalHeader, {
                separator: !1,
                className: x.modalHeader,
                justify: a.Z.Justify.CENTER,
                children: (0, o.jsx)(r.Heading, {
                    variant: 'heading-xl/semibold',
                    children: L()
                })
            }),
            (0, o.jsx)(r.Scroller, {
                children: (0, o.jsxs)(r.Slides, {
                    activeSlide: h,
                    width: 440,
                    children: [
                        (0, o.jsx)(r.Slide, {
                            id: 'ACTIONS',
                            children: (0, o.jsx)(T.Z, {
                                otherUserId: b,
                                channelId: n,
                                warningId: i,
                                warningType: s,
                                transitionToSlide: g
                            })
                        }),
                        (0, o.jsx)(r.Slide, {
                            id: 'ABOUT_SAFETY_ALERTS',
                            children: (0, o.jsx)(u.Z, {
                                channelId: n,
                                onClose: () => {
                                    e(), E(d.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                }
                            })
                        }),
                        (0, o.jsx)(r.Slide, {
                            id: 'SAFETY_TIPS',
                            children: (0, o.jsx)(S.Z, {})
                        })
                    ]
                })
            }),
            (0, o.jsxs)(r.ModalFooter, {
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, o.jsx)(R, {
                        text: _.intl.string(_.t.cpT0Cg),
                        onClick: () => {
                            e(), E(d.NM.USER_SAFETY_TOOLS_DISMISS);
                        }
                    }),
                    N()
                ]
            })
        ]
    });
};
