i.d(t, { default: () => S }), i(47120);
var a = i(200651),
    n = i(192379),
    s = i(481060),
    l = i(355467),
    r = i(100527),
    o = i(906732),
    d = i(313201),
    c = i(740492),
    _ = i(626135),
    C = i(171246),
    N = i(225715),
    u = i(635840),
    x = i(981631),
    m = i(388032),
    h = i(650764);
let I = (e) => {
    let [t, i] = n.useState(!1),
        [a, s] = n.useState(null);
    return {
        cancelSubscription: async (t) => {
            try {
                return i(!0), await l.EO(t, e), !0;
            } catch (e) {
                s(e);
            } finally {
                i(!1);
            }
        },
        error: a,
        submitting: t
    };
};
function S(e) {
    let { transitionState: t, application: i, storeListing: l, subscription: S, guild: T, onClose: A } = e,
        E = (0, d.Dt)(),
        { analyticsLocations: O } = (0, o.ZP)(r.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        { cancelSubscription: p, error: g, submitting: j } = I(O),
        [P, L] = n.useState(0),
        f = async () => {
            (await p(S.id)) && (c.ZP.disableApplicationSubscriptionCancellationSurvey ? A() : L(1));
        };
    n.useEffect(() => {
        _.default.track(x.rMx.CANCELLATION_FLOW_STARTED, { location_stack: O });
    }, [O]);
    let k = (0, C.KW)(l.skuFlags);
    return (0, a.jsx)(s.Y0X, {
        transitionState: t,
        className: h.modal,
        'aria-labelledby': E,
        children: (0, a.jsxs)(s.MyZ, {
            activeSlide: P,
            width: 440,
            children: [
                (0, a.jsx)(s.Mi4, {
                    id: 0,
                    children: (0, a.jsxs)('div', {
                        className: h.slideContainer,
                        children: [
                            null != g ? (0, a.jsx)(s.kzN, { children: g.message }) : null,
                            (0, a.jsxs)(s.hzk, {
                                className: h.content,
                                children: [
                                    (0, a.jsx)(s.LZC, { size: 16 }),
                                    (0, a.jsxs)(N.q$, {
                                        children: [
                                            (0, a.jsx)(N.CW, { application: i }),
                                            (0, a.jsx)(N.r0, {
                                                id: E,
                                                children: m.NW.format(m.t.irka9v, { tier: l.summary })
                                            }),
                                            (0, a.jsx)(N.s$, {}),
                                            (0, a.jsx)(N.K9, {
                                                title: m.NW.string(m.t.LZunzc),
                                                description: k
                                                    ? m.NW.formatToPlainString(m.t['+HdfBw'], { timestamp: S.currentPeriodEnd.getTime() })
                                                    : m.NW.formatToPlainString(m.t.qxiBnZ, {
                                                          timestamp: S.currentPeriodEnd.getTime(),
                                                          guildName: null == T ? void 0 : T.name
                                                      })
                                            }),
                                            (0, a.jsx)(N.G9, {
                                                applicationId: l.applicationId,
                                                storeListingBenefits: l.benefits
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, a.jsxs)(s.mzw, {
                                className: h.footer,
                                children: [
                                    (0, a.jsx)(s.zxk, {
                                        color: s.zxk.Colors.RED,
                                        onClick: f,
                                        submitting: j,
                                        children: m.NW.string(m.t.KSqyfX)
                                    }),
                                    (0, a.jsx)(s.zxk, {
                                        look: s.zxk.Looks.LINK,
                                        color: s.zxk.Colors.PRIMARY,
                                        className: h.goBackButton,
                                        onClick: A,
                                        children: m.NW.string(m.t['05jDxs'])
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, a.jsx)(s.Mi4, {
                    id: 1,
                    children: (0, a.jsx)('div', {
                        className: h.slideContainer,
                        children: (0, a.jsx)(u.Z, {
                            application: i,
                            subscriptionId: S.id,
                            onClose: A
                        })
                    })
                })
            ]
        })
    });
}
