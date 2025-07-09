(n.d(e, {
    O: () => x,
    default: () => p
}),
    n(388685));
var i,
    r = n(255367),
    s = n(73800),
    l = n(755721),
    o = n(481060),
    a = n(600164),
    c = n(367408),
    u = n(473092),
    d = n(419672),
    T = n(858597),
    S = n(486213),
    _ = n(388032),
    b = n(692056),
    x = (((i = {}).ACTIONS = 'ACTIONS'), (i.SAFETY_TIPS = 'SAFETY_TIPS'), (i.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS'), i);
let p = (t) => {
    let { onClose: e, channelId: n, warningId: i, warningType: x, otherUserId: p, transitionState: O } = t,
        h = null != (0, c.M)(n),
        [A, E] = s.useState('ACTIONS'),
        f = s.useCallback(
            (t) => {
                (0, u.qc)({
                    channelId: n,
                    warningId: i,
                    warningType: x,
                    senderId: p,
                    cta: t,
                    isNudgeWarning: h
                });
            },
            [n, i, x, p, h]
        ),
        N = s.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, r.jsx)(l.zx, {
                look: l.zx.Looks.LINK,
                size: l.zx.Sizes.MIN,
                onClick: n,
                color: l.zx.Colors.CUSTOM,
                className: b.footerLink,
                children: e
            });
        }, []),
        g = s.useCallback(() => {
            switch (A) {
                case 'SAFETY_TIPS':
                case 'ABOUT_SAFETY_ALERTS':
                    return (0, r.jsx)(N, {
                        text: _.intl.string(_.t['13/7kZ']),
                        onClick: () => E('ACTIONS')
                    });
                default:
                    return null;
            }
        }, [A, N]),
        R = s.useCallback(() => {
            switch (A) {
                case 'SAFETY_TIPS':
                    return _.intl.string(_.t.EtNxi4);
                case 'ABOUT_SAFETY_ALERTS':
                    return _.intl.string(_.t.qI14KC);
                default:
                    return _.intl.string(_.t.MAhAp6);
            }
        }, [A]),
        m = s.useCallback(
            (t) => {
                E(t);
            },
            [E]
        );
    return (0, r.jsxs)(o.Y0X, {
        transitionState: O,
        'aria-label': _.intl.string(_.t.eXlt09),
        size: o.CgR.SMALL,
        parentComponent: 'SafetyToolsModal',
        children: [
            (0, r.jsx)(o.xBx, {
                separator: !1,
                className: b.modalHeader,
                justify: a.Z.Justify.CENTER,
                children: (0, r.jsx)(o.X6q, {
                    variant: 'heading-xl/semibold',
                    children: R()
                })
            }),
            (0, r.jsx)(o.Ttm, {
                children: (0, r.jsxs)(o.MyZ, {
                    activeSlide: A,
                    width: 440,
                    children: [
                        (0, r.jsx)(o.Mi4, {
                            id: 'ACTIONS',
                            children: (0, r.jsx)(T.Z, {
                                otherUserId: p,
                                channelId: n,
                                warningId: i,
                                warningType: x,
                                transitionToSlide: m
                            })
                        }),
                        (0, r.jsx)(o.Mi4, {
                            id: 'ABOUT_SAFETY_ALERTS',
                            children: (0, r.jsx)(d.Z, {
                                channelId: n,
                                onClose: () => {
                                    (e(), f(u.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS));
                                }
                            })
                        }),
                        (0, r.jsx)(o.Mi4, {
                            id: 'SAFETY_TIPS',
                            children: (0, r.jsx)(S.Z, {})
                        })
                    ]
                })
            }),
            (0, r.jsxs)(o.mzw, {
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(N, {
                        text: _.intl.string(_.t.cpT0Cg),
                        onClick: () => {
                            (e(), f(u.NM.USER_SAFETY_TOOLS_DISMISS));
                        }
                    }),
                    g()
                ]
            })
        ]
    });
};
