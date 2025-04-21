n.d(e, {
    O: () => b,
    default: () => x
}),
    n(388685);
var i,
    r = n(200651),
    s = n(192379),
    l = n(481060),
    o = n(600164),
    a = n(367408),
    c = n(473092),
    u = n(419672),
    d = n(858597),
    T = n(486213),
    S = n(388032),
    _ = n(692056),
    b = (((i = {}).ACTIONS = 'ACTIONS'), (i.SAFETY_TIPS = 'SAFETY_TIPS'), (i.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS'), i);
let x = (t) => {
    let { onClose: e, channelId: n, warningId: i, warningType: b, otherUserId: x, transitionState: p } = t,
        O = null != (0, a.M)(n),
        [h, A] = s.useState('ACTIONS'),
        E = s.useCallback(
            (t) => {
                (0, c.qc)({
                    channelId: n,
                    warningId: i,
                    warningType: b,
                    senderId: x,
                    cta: t,
                    isNudgeWarning: O
                });
            },
            [n, i, b, x, O]
        ),
        f = s.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, r.jsx)(l.zxk, {
                look: l.zxk.Looks.LINK,
                size: l.zxk.Sizes.MIN,
                onClick: n,
                color: l.zxk.Colors.CUSTOM,
                className: _.footerLink,
                children: e
            });
        }, []),
        N = s.useCallback(() => {
            switch (h) {
                case 'SAFETY_TIPS':
                case 'ABOUT_SAFETY_ALERTS':
                    return (0, r.jsx)(f, {
                        text: S.intl.string(S.t['13/7kZ']),
                        onClick: () => A('ACTIONS')
                    });
                default:
                    return null;
            }
        }, [h, f]),
        g = s.useCallback(() => {
            switch (h) {
                case 'SAFETY_TIPS':
                    return S.intl.string(S.t.EtNxi4);
                case 'ABOUT_SAFETY_ALERTS':
                    return S.intl.string(S.t.qI14KC);
                default:
                    return S.intl.string(S.t.MAhAp6);
            }
        }, [h]),
        R = s.useCallback(
            (t) => {
                A(t);
            },
            [A]
        );
    return (0, r.jsxs)(l.Y0X, {
        transitionState: p,
        'aria-label': S.intl.string(S.t.eXlt09),
        size: l.CgR.SMALL,
        children: [
            (0, r.jsx)(l.xBx, {
                separator: !1,
                className: _.modalHeader,
                justify: o.Z.Justify.CENTER,
                children: (0, r.jsx)(l.X6q, {
                    variant: 'heading-xl/semibold',
                    children: g()
                })
            }),
            (0, r.jsx)(l.Ttm, {
                children: (0, r.jsxs)(l.MyZ, {
                    activeSlide: h,
                    width: 440,
                    children: [
                        (0, r.jsx)(l.Mi4, {
                            id: 'ACTIONS',
                            children: (0, r.jsx)(d.Z, {
                                otherUserId: x,
                                channelId: n,
                                warningId: i,
                                warningType: b,
                                transitionToSlide: R
                            })
                        }),
                        (0, r.jsx)(l.Mi4, {
                            id: 'ABOUT_SAFETY_ALERTS',
                            children: (0, r.jsx)(u.Z, {
                                channelId: n,
                                onClose: () => {
                                    e(), E(c.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                }
                            })
                        }),
                        (0, r.jsx)(l.Mi4, {
                            id: 'SAFETY_TIPS',
                            children: (0, r.jsx)(T.Z, {})
                        })
                    ]
                })
            }),
            (0, r.jsxs)(l.mzw, {
                justify: o.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(f, {
                        text: S.intl.string(S.t.cpT0Cg),
                        onClick: () => {
                            e(), E(c.NM.USER_SAFETY_TOOLS_DISMISS);
                        }
                    }),
                    N()
                ]
            })
        ]
    });
};
