(i.d(t, { default: () => T }), i(388685));
var n = i(255367),
    a = i(73800),
    s = i(755721),
    l = i(481060),
    r = i(355467),
    o = i(100527),
    d = i(906732),
    c = i(313201),
    _ = i(740492),
    C = i(626135),
    u = i(171246),
    N = i(225715),
    m = i(635840),
    x = i(981631),
    S = i(388032),
    I = i(650764);
let h = (e) => {
    let [t, i] = a.useState(!1),
        [n, s] = a.useState(null);
    return {
        cancelSubscription: async (t) => {
            try {
                return (i(!0), await r.EO(t, e), !0);
            } catch (e) {
                s(e);
            } finally {
                i(!1);
            }
        },
        error: n,
        submitting: t
    };
};
function T(e) {
    let { transitionState: t, application: i, storeListing: r, subscription: T, guild: A, onClose: E } = e,
        p = (0, c.Dt)(),
        { analyticsLocations: O } = (0, d.ZP)(o.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        { cancelSubscription: g, error: j, submitting: P } = h(O),
        [L, f] = a.useState(0),
        R = async () => {
            (await g(T.id)) && (_.ZP.disableApplicationSubscriptionCancellationSurvey ? E() : f(1));
        };
    a.useEffect(() => {
        C.default.track(x.rMx.CANCELLATION_FLOW_STARTED, { location_stack: O });
    }, [O]);
    let b = (0, u.KW)(r.skuFlags);
    return (0, n.jsx)(l.Y0X, {
        transitionState: t,
        className: I.modal,
        'aria-labelledby': p,
        parentComponent: 'CancelSubscriptionModal',
        children: (0, n.jsxs)(l.MyZ, {
            activeSlide: L,
            width: 440,
            children: [
                (0, n.jsx)(l.Mi4, {
                    id: 0,
                    children: (0, n.jsxs)('div', {
                        className: I.slideContainer,
                        children: [
                            null != j ? (0, n.jsx)(l.kzN, { children: j.message }) : null,
                            (0, n.jsxs)(l.hzk, {
                                className: I.content,
                                children: [
                                    (0, n.jsx)(l.LZC, { size: 16 }),
                                    (0, n.jsxs)(N.q$, {
                                        children: [
                                            (0, n.jsx)(N.CW, { application: i }),
                                            (0, n.jsx)(N.r0, {
                                                id: p,
                                                children: S.intl.format(S.t.irka9v, { tier: r.summary })
                                            }),
                                            (0, n.jsx)(N.s$, {}),
                                            (0, n.jsx)(N.K9, {
                                                title: S.intl.string(S.t.LZunzc),
                                                description: b
                                                    ? S.intl.formatToPlainString(S.t['+HdfBw'], { timestamp: T.currentPeriodEnd.getTime() })
                                                    : S.intl.formatToPlainString(S.t.qxiBnZ, {
                                                          timestamp: T.currentPeriodEnd.getTime(),
                                                          guildName: null == A ? void 0 : A.name
                                                      })
                                            }),
                                            (0, n.jsx)(N.G9, {
                                                applicationId: r.applicationId,
                                                storeListingBenefits: r.benefits
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsxs)(l.mzw, {
                                className: I.footer,
                                children: [
                                    (0, n.jsx)(l.zxk, {
                                        variant: 'critical-primary',
                                        text: S.intl.string(S.t.KSqyfX),
                                        onClick: R,
                                        loading: P
                                    }),
                                    (0, n.jsx)(s.zx, {
                                        look: s.zx.Looks.LINK,
                                        color: s.zx.Colors.PRIMARY,
                                        className: I.goBackButton,
                                        onClick: E,
                                        children: S.intl.string(S.t['05jDxs'])
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, n.jsx)(l.Mi4, {
                    id: 1,
                    children: (0, n.jsx)('div', {
                        className: I.slideContainer,
                        children: (0, n.jsx)(m.Z, {
                            application: i,
                            subscriptionId: T.id,
                            onClose: E
                        })
                    })
                })
            ]
        })
    });
}
