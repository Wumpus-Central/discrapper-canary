e.d(i, { default: () => h }), e(388685);
var n = e(951288),
    s = e(647438),
    a = e(257465),
    l = e(369585),
    r = e(103866),
    c = e(213734),
    d = e(481060),
    o = e(355467),
    C = e(100527),
    _ = e(906732),
    u = e(313201),
    N = e(740492),
    I = e(626135),
    S = e(171246),
    E = e(225715),
    x = e(635840),
    A = e(981631),
    O = e(388032),
    T = e(304495);
function h(t) {
    let { transitionState: i, application: e, storeListing: h, subscription: p, guild: m, onClose: P } = t,
        g = (0, u.Dt)(),
        { analyticsLocations: j } = (0, _.ZP)(C.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: L,
            error: f,
            submitting: v,
        } = ((t) => {
            let [i, e] = s.useState(!1),
                [n, a] = s.useState(null);
            return {
                cancelSubscription: async (i) => {
                    try {
                        return e(!0), await o.EO(i, t), !0;
                    } catch (t) {
                        a(t);
                    } finally {
                        e(!1);
                    }
                },
                error: n,
                submitting: i,
            };
        })(j),
        [R, U] = s.useState(0),
        b = async () => {
            (await L(p.id)) && (N.ZP.disableApplicationSubscriptionCancellationSurvey ? P() : U(1));
        };
    s.useEffect(() => {
        I.default.track(A.rMx.CANCELLATION_FLOW_STARTED, { location_stack: j });
    }, [j]);
    let k = (0, S.KW)(h.skuFlags);
    return (0, n.jsx)(a.IX, {
        onClose: P,
        transitionState: i,
        "aria-labelledby": g,
        children: (0, n.jsxs)(d.MyZ, {
            activeSlide: R,
            width: 480,
            children: [
                (0, n.jsx)(d.Mi4, {
                    id: 0,
                    children: (0, n.jsxs)("div", {
                        className: T.slideContainer,
                        children: [
                            null != f ? (0, n.jsx)(d.kzN, { children: f.message }) : null,
                            (0, n.jsxs)(r.f, {
                                children: [
                                    (0, n.jsx)(d.LZC, { size: 16 }),
                                    (0, n.jsxs)(E.q$, {
                                        children: [
                                            (0, n.jsx)(E.CW, { application: e }),
                                            (0, n.jsx)(E.r0, {
                                                id: g,
                                                children: O.intl.format(O.t.irka9v, { tier: h.summary }),
                                            }),
                                            (0, n.jsx)(E.s$, {}),
                                            (0, n.jsx)(E.K9, {
                                                title: O.intl.string(O.t.LZunzc),
                                                description: k
                                                    ? O.intl.formatToPlainString(O.t["+HdfBw"], {
                                                          timestamp: p.currentPeriodEnd.getTime(),
                                                      })
                                                    : O.intl.formatToPlainString(O.t.qxiBnZ, {
                                                          timestamp: p.currentPeriodEnd.getTime(),
                                                          guildName: null == m ? void 0 : m.name,
                                                      }),
                                            }),
                                            (0, n.jsx)(E.G9, {
                                                applicationId: h.applicationId,
                                                storeListingBenefits: h.benefits,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsx)(c.m, {
                                children: (0, n.jsx)(l.G, {
                                    actions: [
                                        {
                                            loading: v,
                                            onClick: b,
                                            text: O.intl.string(O.t.KSqyfX),
                                            variant: "critical-primary",
                                        },
                                        {
                                            onClick: P,
                                            text: O.intl.string(O.t["05jDxs"]),
                                            variant: "icon-only",
                                        },
                                    ],
                                    actionsFullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)(d.Mi4, {
                    id: 1,
                    children: (0, n.jsx)("div", {
                        className: T.slideContainer,
                        children: (0, n.jsx)(x.Z, {
                            application: e,
                            subscriptionId: p.id,
                            onClose: P,
                        }),
                    }),
                }),
            ],
        }),
    });
}
