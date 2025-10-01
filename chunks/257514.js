e.d(i, { default: () => A }), e(388685);
var n = e(951288),
    a = e(647438),
    s = e(793030),
    l = e(481060),
    r = e(355467),
    c = e(100527),
    d = e(906732),
    o = e(313201),
    C = e(740492),
    _ = e(626135),
    u = e(171246),
    N = e(225715),
    I = e(635840),
    S = e(981631),
    x = e(388032),
    E = e(304495);
function A(t) {
    let { transitionState: i, application: e, storeListing: A, subscription: O, guild: T, onClose: p } = t,
        h = (0, o.Dt)(),
        { analyticsLocations: m } = (0, d.ZP)(c.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: P,
            error: g,
            submitting: j,
        } = ((t) => {
            let [i, e] = a.useState(!1),
                [n, s] = a.useState(null);
            return {
                cancelSubscription: async (i) => {
                    try {
                        return e(!0), await r.EO(i, t), !0;
                    } catch (t) {
                        s(t);
                    } finally {
                        e(!1);
                    }
                },
                error: n,
                submitting: i,
            };
        })(m),
        [L, f] = a.useState(0),
        v = async () => {
            (await P(O.id)) && (C.ZP.disableApplicationSubscriptionCancellationSurvey ? p() : f(1));
        };
    a.useEffect(() => {
        _.default.track(S.rMx.CANCELLATION_FLOW_STARTED, { location_stack: m });
    }, [m]);
    let R = (0, u.KW)(A.skuFlags);
    return (0, n.jsx)(s.IX, {
        onClose: p,
        transitionState: i,
        "aria-labelledby": h,
        children: (0, n.jsxs)(l.MyZ, {
            activeSlide: L,
            width: 480,
            children: [
                (0, n.jsx)(l.Mi4, {
                    id: 0,
                    children: (0, n.jsxs)("div", {
                        className: E.slideContainer,
                        children: [
                            null != g ? (0, n.jsx)(l.kzN, { children: g.message }) : null,
                            (0, n.jsxs)(s.fef, {
                                children: [
                                    (0, n.jsx)(l.LZC, { size: 16 }),
                                    (0, n.jsxs)(N.q$, {
                                        children: [
                                            (0, n.jsx)(N.CW, { application: e }),
                                            (0, n.jsx)(N.r0, {
                                                id: h,
                                                children: x.intl.format(x.t.irka9v, { tier: A.summary }),
                                            }),
                                            (0, n.jsx)(N.s$, {}),
                                            (0, n.jsx)(N.K9, {
                                                title: x.intl.string(x.t.LZunzc),
                                                description: R
                                                    ? x.intl.formatToPlainString(x.t["+HdfBw"], {
                                                          timestamp: O.currentPeriodEnd.getTime(),
                                                      })
                                                    : x.intl.formatToPlainString(x.t.qxiBnZ, {
                                                          timestamp: O.currentPeriodEnd.getTime(),
                                                          guildName: null == T ? void 0 : T.name,
                                                      }),
                                            }),
                                            (0, n.jsx)(N.G9, {
                                                applicationId: A.applicationId,
                                                storeListingBenefits: A.benefits,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsx)(s.mzw, {
                                children: (0, n.jsx)(s.Go$, {
                                    actions: [
                                        {
                                            loading: j,
                                            onClick: v,
                                            text: x.intl.string(x.t.KSqyfX),
                                            variant: "critical-primary",
                                        },
                                        {
                                            onClick: p,
                                            text: x.intl.string(x.t["05jDxs"]),
                                            variant: "icon-only",
                                        },
                                    ],
                                    actionsFullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)(l.Mi4, {
                    id: 1,
                    children: (0, n.jsx)("div", {
                        className: E.slideContainer,
                        children: (0, n.jsx)(I.Z, {
                            application: e,
                            subscriptionId: O.id,
                            onClose: p,
                        }),
                    }),
                }),
            ],
        }),
    });
}
