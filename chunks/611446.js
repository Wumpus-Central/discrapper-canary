(n.d(e, {
    O: () => x,
    default: () => b
}),
    n(388685));
var i,
    r = n(255367),
    s = n(73800),
    l = n(481060),
    a = n(600164),
    o = n(367408),
    c = n(473092),
    u = n(419672),
    d = n(858597),
    T = n(486213),
    S = n(388032),
    _ = n(692056),
    x = (((i = {}).ACTIONS = 'ACTIONS'), (i.SAFETY_TIPS = 'SAFETY_TIPS'), (i.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS'), i);
let b = (t) => {
    let { onClose: e, channelId: n, warningId: i, warningType: x, otherUserId: b, transitionState: p } = t,
        O = null != (0, o.M)(n),
        [h, E] = s.useState('ACTIONS'),
        m = s.useCallback(
            (t) => {
                (0, c.qc)({
                    channelId: n,
                    warningId: i,
                    warningType: x,
                    senderId: b,
                    cta: t,
                    isNudgeWarning: O
                });
            },
            [n, i, x, b, O]
        ),
        A = s.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, r.jsx)(l.Avr, {
                onClick: n,
                text: e,
                variant: 'secondary',
                textVariant: 'text-sm/normal'
            });
        }, []),
        f = s.useCallback(() => {
            switch (h) {
                case 'SAFETY_TIPS':
                case 'ABOUT_SAFETY_ALERTS':
                    return (0, r.jsx)(A, {
                        text: S.intl.string(S.t['13/7kZ']),
                        onClick: () => E('ACTIONS')
                    });
                default:
                    return null;
            }
        }, [h, A]),
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
        j = s.useCallback(
            (t) => {
                E(t);
            },
            [E]
        );
    return (0, r.jsxs)(l.Y0X, {
        transitionState: p,
        'aria-label': S.intl.string(S.t.eXlt09),
        size: l.CgR.SMALL,
        parentComponent: 'SafetyToolsModal',
        children: [
            (0, r.jsx)(l.xBx, {
                separator: !1,
                className: _.modalHeader,
                justify: a.Z.Justify.CENTER,
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
                                otherUserId: b,
                                channelId: n,
                                warningId: i,
                                warningType: x,
                                transitionToSlide: j
                            })
                        }),
                        (0, r.jsx)(l.Mi4, {
                            id: 'ABOUT_SAFETY_ALERTS',
                            children: (0, r.jsx)(u.Z, {
                                channelId: n,
                                onClose: () => {
                                    (e(), m(c.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS));
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
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(A, {
                        text: S.intl.string(S.t.cpT0Cg),
                        onClick: () => {
                            (e(), m(c.NM.USER_SAFETY_TOOLS_DISMISS));
                        }
                    }),
                    f()
                ]
            })
        ]
    });
};
