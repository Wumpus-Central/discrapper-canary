i.d(t, { default: () => I }), i(388685);
var n = i(951288),
    a = i(647438),
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
    x = i(635840),
    m = i(981631),
    S = i(388032),
    h = i(304495);
function I(e) {
    let { transitionState: t, application: i, storeListing: I, subscription: T, guild: A, onClose: E } = e,
        p = (0, c.Dt)(),
        { analyticsLocations: O } = (0, d.ZP)(o.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: j,
            error: g,
            submitting: P,
        } = ((e) => {
            let [t, i] = a.useState(!1),
                [n, s] = a.useState(null);
            return {
                cancelSubscription: async (t) => {
                    try {
                        return i(!0), await r.EO(t, e), !0;
                    } catch (e) {
                        s(e);
                    } finally {
                        i(!1);
                    }
                },
                error: n,
                submitting: t,
            };
        })(O),
        [L, f] = a.useState(0),
        R = async () => {
            (await j(T.id)) && (_.ZP.disableApplicationSubscriptionCancellationSurvey ? E() : f(1));
        };
    a.useEffect(() => {
        C.default.track(m.rMx.CANCELLATION_FLOW_STARTED, { location_stack: O });
    }, [O]);
    let v = (0, u.KW)(I.skuFlags);
    return (0, n.jsx)(l.Y0X, {
        transitionState: t,
        className: h.modal,
        "aria-labelledby": p,
        parentComponent: "CancelSubscriptionModal",
        children: (0, n.jsxs)(l.MyZ, {
            activeSlide: L,
            width: 440,
            children: [
                (0, n.jsx)(l.Mi4, {
                    id: 0,
                    children: (0, n.jsxs)("div", {
                        className: h.slideContainer,
                        children: [
                            null != g ? (0, n.jsx)(l.kzN, { children: g.message }) : null,
                            (0, n.jsxs)(l.hzk, {
                                className: h.content,
                                children: [
                                    (0, n.jsx)(l.LZC, { size: 16 }),
                                    (0, n.jsxs)(N.q$, {
                                        children: [
                                            (0, n.jsx)(N.CW, { application: i }),
                                            (0, n.jsx)(N.r0, {
                                                id: p,
                                                children: S.intl.format(S.t.irka9v, { tier: I.summary }),
                                            }),
                                            (0, n.jsx)(N.s$, {}),
                                            (0, n.jsx)(N.K9, {
                                                title: S.intl.string(S.t.LZunzc),
                                                description: v
                                                    ? S.intl.formatToPlainString(S.t["+HdfBw"], {
                                                          timestamp: T.currentPeriodEnd.getTime(),
                                                      })
                                                    : S.intl.formatToPlainString(S.t.qxiBnZ, {
                                                          timestamp: T.currentPeriodEnd.getTime(),
                                                          guildName: null == A ? void 0 : A.name,
                                                      }),
                                            }),
                                            (0, n.jsx)(N.G9, {
                                                applicationId: I.applicationId,
                                                storeListingBenefits: I.benefits,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(l.mzw, {
                                className: h.footer,
                                children: [
                                    (0, n.jsx)(l.zxk, {
                                        variant: "critical-primary",
                                        text: S.intl.string(S.t.KSqyfX),
                                        onClick: R,
                                        loading: P,
                                    }),
                                    (0, n.jsx)(s.zx, {
                                        look: s.zx.Looks.LINK,
                                        color: s.zx.Colors.PRIMARY,
                                        className: h.goBackButton,
                                        onClick: E,
                                        children: S.intl.string(S.t["05jDxs"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)(l.Mi4, {
                    id: 1,
                    children: (0, n.jsx)("div", {
                        className: h.slideContainer,
                        children: (0, n.jsx)(x.Z, {
                            application: i,
                            subscriptionId: T.id,
                            onClose: E,
                        }),
                    }),
                }),
            ],
        }),
    });
}
