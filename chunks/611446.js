n.d(e, {
    O: () => b,
    default: () => N
}),
    n(47120);
var r,
    s = n(200651),
    i = n(192379),
    o = n(481060),
    l = n(600164),
    a = n(367408),
    c = n(473092),
    u = n(419672),
    d = n(858597),
    T = n(486213),
    S = n(388032),
    _ = n(692056),
    b = (((r = {}).ACTIONS = 'ACTIONS'), (r.SAFETY_TIPS = 'SAFETY_TIPS'), (r.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS'), r);
let N = (t) => {
    let { onClose: e, channelId: n, warningId: r, warningType: b, otherUserId: N, transitionState: x } = t,
        p = null != (0, a.M)(n),
        [O, h] = i.useState('ACTIONS'),
        A = i.useCallback(
            (t) => {
                (0, c.qc)({
                    channelId: n,
                    warningId: r,
                    warningType: b,
                    senderId: N,
                    cta: t,
                    isNudgeWarning: p
                });
            },
            [n, r, b, N, p]
        ),
        E = i.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, s.jsx)(o.zxk, {
                look: o.zxk.Looks.LINK,
                size: o.zxk.Sizes.MIN,
                onClick: n,
                color: o.zxk.Colors.CUSTOM,
                className: _.footerLink,
                children: e
            });
        }, []),
        f = i.useCallback(() => {
            switch (O) {
                case 'SAFETY_TIPS':
                case 'ABOUT_SAFETY_ALERTS':
                    return (0, s.jsx)(E, {
                        text: S.NW.string(S.t['13/7kZ']),
                        onClick: () => h('ACTIONS')
                    });
                default:
                    return null;
            }
        }, [O, E]),
        g = i.useCallback(() => {
            switch (O) {
                case 'SAFETY_TIPS':
                    return S.NW.string(S.t.EtNxi4);
                case 'ABOUT_SAFETY_ALERTS':
                    return S.NW.string(S.t.qI14KC);
                default:
                    return S.NW.string(S.t.MAhAp6);
            }
        }, [O]),
        R = i.useCallback(
            (t) => {
                h(t);
            },
            [h]
        );
    return (0, s.jsxs)(o.Y0X, {
        transitionState: x,
        'aria-label': S.NW.string(S.t.eXlt09),
        size: o.CgR.SMALL,
        children: [
            (0, s.jsx)(o.xBx, {
                separator: !1,
                className: _.modalHeader,
                justify: l.Z.Justify.CENTER,
                children: (0, s.jsx)(o.X6q, {
                    variant: 'heading-xl/semibold',
                    children: g()
                })
            }),
            (0, s.jsx)(o.Ttm, {
                children: (0, s.jsxs)(o.MyZ, {
                    activeSlide: O,
                    width: 440,
                    children: [
                        (0, s.jsx)(o.Mi4, {
                            id: 'ACTIONS',
                            children: (0, s.jsx)(d.Z, {
                                otherUserId: N,
                                channelId: n,
                                warningId: r,
                                warningType: b,
                                transitionToSlide: R
                            })
                        }),
                        (0, s.jsx)(o.Mi4, {
                            id: 'ABOUT_SAFETY_ALERTS',
                            children: (0, s.jsx)(u.Z, {
                                channelId: n,
                                onClose: () => {
                                    e(), A(c.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                }
                            })
                        }),
                        (0, s.jsx)(o.Mi4, {
                            id: 'SAFETY_TIPS',
                            children: (0, s.jsx)(T.Z, {})
                        })
                    ]
                })
            }),
            (0, s.jsxs)(o.mzw, {
                justify: l.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(E, {
                        text: S.NW.string(S.t.cpT0Cg),
                        onClick: () => {
                            e(), A(c.NM.USER_SAFETY_TOOLS_DISMISS);
                        }
                    }),
                    f()
                ]
            })
        ]
    });
};
