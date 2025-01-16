n.r(t),
    n.d(t, {
        default: function () {
            return T;
        }
    }),
    n(47120);
var i,
    a,
    l = n(200651),
    s = n(192379),
    o = n(481060),
    r = n(355467),
    c = n(100527),
    d = n(906732),
    C = n(313201),
    u = n(740492),
    _ = n(626135),
    N = n(171246),
    S = n(225715),
    h = n(635840),
    I = n(981631),
    m = n(388032),
    E = n(138871);
let x = (e) => {
    let [t, n] = s.useState(!1),
        [i, a] = s.useState(null);
    return {
        cancelSubscription: async (t) => {
            try {
                return n(!0), await r.EO(t, e), !0;
            } catch (e) {
                a(e);
            } finally {
                n(!1);
            }
        },
        error: i,
        submitting: t
    };
};
function T(e) {
    let { transitionState: t, application: n, storeListing: i, subscription: a, guild: r, onClose: T } = e,
        A = (0, C.Dt)(),
        { analyticsLocations: O } = (0, d.ZP)(c.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        { cancelSubscription: p, error: g, submitting: j } = x(O),
        [P, R] = s.useState(0),
        f = async () => {
            (await p(a.id)) && (u.ZP.disableApplicationSubscriptionCancellationSurvey ? T() : R(1));
        };
    s.useEffect(() => {
        _.default.track(I.rMx.CANCELLATION_FLOW_STARTED, { location_stack: O });
    }, [O]);
    let L = (0, N.KW)(i.skuFlags);
    return (0, l.jsx)(o.ModalRoot, {
        transitionState: t,
        className: E.modal,
        'aria-labelledby': A,
        children: (0, l.jsxs)(o.Slides, {
            activeSlide: P,
            width: 440,
            children: [
                (0, l.jsx)(o.Slide, {
                    id: 0,
                    children: (0, l.jsxs)('div', {
                        className: E.slideContainer,
                        children: [
                            null != g ? (0, l.jsx)(o.FormErrorBlock, { children: g.message }) : null,
                            (0, l.jsxs)(o.ModalContent, {
                                className: E.content,
                                children: [
                                    (0, l.jsx)(o.Spacer, { size: 16 }),
                                    (0, l.jsxs)(S.q$, {
                                        children: [
                                            (0, l.jsx)(S.CW, { application: n }),
                                            (0, l.jsx)(S.r0, {
                                                id: A,
                                                children: m.intl.format(m.t.irka9v, { tier: i.summary })
                                            }),
                                            (0, l.jsx)(S.s$, {}),
                                            (0, l.jsx)(S.K9, {
                                                title: m.intl.string(m.t.LZunzc),
                                                description: L
                                                    ? m.intl.formatToPlainString(m.t['+HdfBw'], { timestamp: a.currentPeriodEnd.getTime() })
                                                    : m.intl.formatToPlainString(m.t.qxiBnZ, {
                                                          timestamp: a.currentPeriodEnd.getTime(),
                                                          guildName: null == r ? void 0 : r.name
                                                      })
                                            }),
                                            (0, l.jsx)(S.G9, {
                                                applicationId: i.applicationId,
                                                storeListingBenefits: i.benefits
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, l.jsxs)(o.ModalFooter, {
                                className: E.footer,
                                children: [
                                    (0, l.jsx)(o.Button, {
                                        color: o.Button.Colors.RED,
                                        onClick: f,
                                        submitting: j,
                                        children: m.intl.string(m.t.KSqyfX)
                                    }),
                                    (0, l.jsx)(o.Button, {
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        className: E.goBackButton,
                                        onClick: T,
                                        children: m.intl.string(m.t['05jDxs'])
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, l.jsx)(o.Slide, {
                    id: 1,
                    children: (0, l.jsx)('div', {
                        className: E.slideContainer,
                        children: (0, l.jsx)(h.Z, {
                            application: n,
                            subscriptionId: a.id,
                            onClose: T
                        })
                    })
                })
            ]
        })
    });
}
((a = i || (i = {}))[(a.CANCEL = 0)] = 'CANCEL'), (a[(a.SURVEY = 1)] = 'SURVEY');
