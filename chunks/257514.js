i.d(t, { default: () => S }), i(47120);
var n = i(200651),
    a = i(192379),
    s = i(481060),
    l = i(355467),
    r = i(100527),
    o = i(906732),
    d = i(313201),
    c = i(740492),
    _ = i(626135),
    C = i(171246),
    u = i(225715),
    N = i(635840),
    x = i(981631),
    m = i(388032),
    h = i(48008);
let I = (e) => {
    let [t, i] = a.useState(!1),
        [n, s] = a.useState(null);
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
        error: n,
        submitting: t
    };
};
function S(e) {
    let { transitionState: t, application: i, storeListing: l, subscription: S, guild: T, onClose: A } = e,
        E = (0, d.Dt)(),
        { analyticsLocations: O } = (0, o.ZP)(r.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        { cancelSubscription: p, error: g, submitting: j } = I(O),
        [P, L] = a.useState(0),
        f = async () => {
            (await p(S.id)) && (c.ZP.disableApplicationSubscriptionCancellationSurvey ? A() : L(1));
        };
    a.useEffect(() => {
        _.default.track(x.rMx.CANCELLATION_FLOW_STARTED, { location_stack: O });
    }, [O]);
    let k = (0, C.KW)(l.skuFlags);
    return (0, n.jsx)(s.Y0X, {
        transitionState: t,
        className: h.modal,
        'aria-labelledby': E,
        children: (0, n.jsxs)(s.MyZ, {
            activeSlide: P,
            width: 440,
            children: [
                (0, n.jsx)(s.Mi4, {
                    id: 0,
                    children: (0, n.jsxs)('div', {
                        className: h.slideContainer,
                        children: [
                            null != g ? (0, n.jsx)(s.kzN, { children: g.message }) : null,
                            (0, n.jsxs)(s.hzk, {
                                className: h.content,
                                children: [
                                    (0, n.jsx)(s.LZC, { size: 16 }),
                                    (0, n.jsxs)(u.q$, {
                                        children: [
                                            (0, n.jsx)(u.CW, { application: i }),
                                            (0, n.jsx)(u.r0, {
                                                id: E,
                                                children: m.intl.format(m.t.irka9v, { tier: l.summary })
                                            }),
                                            (0, n.jsx)(u.s$, {}),
                                            (0, n.jsx)(u.K9, {
                                                title: m.intl.string(m.t.LZunzc),
                                                description: k
                                                    ? m.intl.formatToPlainString(m.t['+HdfBw'], { timestamp: S.currentPeriodEnd.getTime() })
                                                    : m.intl.formatToPlainString(m.t.qxiBnZ, {
                                                          timestamp: S.currentPeriodEnd.getTime(),
                                                          guildName: null == T ? void 0 : T.name
                                                      })
                                            }),
                                            (0, n.jsx)(u.G9, {
                                                applicationId: l.applicationId,
                                                storeListingBenefits: l.benefits
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsxs)(s.mzw, {
                                className: h.footer,
                                children: [
                                    (0, n.jsx)(s.zxk, {
                                        color: s.zxk.Colors.RED,
                                        onClick: f,
                                        submitting: j,
                                        children: m.intl.string(m.t.KSqyfX)
                                    }),
                                    (0, n.jsx)(s.zxk, {
                                        look: s.zxk.Looks.LINK,
                                        color: s.zxk.Colors.PRIMARY,
                                        className: h.goBackButton,
                                        onClick: A,
                                        children: m.intl.string(m.t['05jDxs'])
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, n.jsx)(s.Mi4, {
                    id: 1,
                    children: (0, n.jsx)('div', {
                        className: h.slideContainer,
                        children: (0, n.jsx)(N.Z, {
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
