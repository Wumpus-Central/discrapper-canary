n.d(e, {
    O: () => x,
    default: () => b
}),
    n(47120);
var i,
    s = n(200651),
    l = n(192379),
    r = n(481060),
    o = n(600164),
    a = n(367408),
    c = n(473092),
    d = n(419672),
    u = n(858597),
    T = n(486213),
    _ = n(388032),
    S = n(484627),
    x = (((i = {}).ACTIONS = 'ACTIONS'), (i.SAFETY_TIPS = 'SAFETY_TIPS'), (i.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS'), i);
let b = (t) => {
    let { onClose: e, channelId: n, warningId: i, warningType: x, otherUserId: b, transitionState: p } = t,
        A = null != (0, a.M)(n),
        [h, E] = l.useState('ACTIONS'),
        N = l.useCallback(
            (t) => {
                (0, c.qc)({
                    channelId: n,
                    warningId: i,
                    warningType: x,
                    senderId: b,
                    cta: t,
                    isNudgeWarning: A
                });
            },
            [n, i, x, b, A]
        ),
        R = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, s.jsx)(r.zxk, {
                look: r.zxk.Looks.LINK,
                size: r.zxk.Sizes.MIN,
                onClick: n,
                color: r.zxk.Colors.CUSTOM,
                className: S.footerLink,
                children: e
            });
        }, []),
        C = l.useCallback(() => {
            switch (h) {
                case 'SAFETY_TIPS':
                case 'ABOUT_SAFETY_ALERTS':
                    return (0, s.jsx)(R, {
                        text: _.intl.string(_.t['13/7kZ']),
                        onClick: () => E('ACTIONS')
                    });
                default:
                    return null;
            }
        }, [h, R]),
        O = l.useCallback(() => {
            switch (h) {
                case 'SAFETY_TIPS':
                    return _.intl.string(_.t.EtNxi4);
                case 'ABOUT_SAFETY_ALERTS':
                    return _.intl.string(_.t.qI14KC);
                default:
                    return _.intl.string(_.t.MAhAp6);
            }
        }, [h]),
        L = l.useCallback(
            (t) => {
                E(t);
            },
            [E]
        );
    return (0, s.jsxs)(r.Y0X, {
        transitionState: p,
        'aria-label': _.intl.string(_.t.eXlt09),
        size: r.CgR.SMALL,
        children: [
            (0, s.jsx)(r.xBx, {
                separator: !1,
                className: S.modalHeader,
                justify: o.Z.Justify.CENTER,
                children: (0, s.jsx)(r.X6q, {
                    variant: 'heading-xl/semibold',
                    children: O()
                })
            }),
            (0, s.jsx)(r.Ttm, {
                children: (0, s.jsxs)(r.MyZ, {
                    activeSlide: h,
                    width: 440,
                    children: [
                        (0, s.jsx)(r.Mi4, {
                            id: 'ACTIONS',
                            children: (0, s.jsx)(u.Z, {
                                otherUserId: b,
                                channelId: n,
                                warningId: i,
                                warningType: x,
                                transitionToSlide: L
                            })
                        }),
                        (0, s.jsx)(r.Mi4, {
                            id: 'ABOUT_SAFETY_ALERTS',
                            children: (0, s.jsx)(d.Z, {
                                channelId: n,
                                onClose: () => {
                                    e(), N(c.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                }
                            })
                        }),
                        (0, s.jsx)(r.Mi4, {
                            id: 'SAFETY_TIPS',
                            children: (0, s.jsx)(T.Z, {})
                        })
                    ]
                })
            }),
            (0, s.jsxs)(r.mzw, {
                justify: o.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(R, {
                        text: _.intl.string(_.t.cpT0Cg),
                        onClick: () => {
                            e(), N(c.NM.USER_SAFETY_TOOLS_DISMISS);
                        }
                    }),
                    C()
                ]
            })
        ]
    });
};
