i.d(e, { default: () => p });
var a = i(627968),
    n = i(64700),
    s = i(158954),
    l = i(397927),
    r = i(384904),
    c = i(793574),
    _ = i(688810),
    o = i(964404),
    C = i(954571),
    A = i(163437),
    u = i(910804),
    I = i(574475),
    N = i(652215),
    d = i(985018),
    S = i(508025);
function p(t) {
    let { transitionState: e, application: i, storeListing: p, subscription: E, guild: O, onClose: T } = t,
        { analyticsLocations: P } = (0, _.Ay)(c.A.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: m,
            error: L,
            submitting: g,
        } = ((t) => {
            let [e, i] = n.useState(!1),
                [a, s] = n.useState(null);
            return {
                cancelSubscription: async (e) => {
                    try {
                        return i(!0), await r.M2(e, t), !0;
                    } catch (t) {
                        s(t);
                    } finally {
                        i(!1);
                    }
                },
                error: a,
                submitting: e,
            };
        })(P),
        R = async () => {
            (await m(E.id)) &&
                (o.Ay.disableApplicationSubscriptionCancellationSurvey
                    ? T()
                    : (0, l.mMO)(
                          async () => (
                              await T(), (t) => (0, a.jsx)(I.A, { application: i, subscriptionId: E.id, ...t })
                          ),
                      ));
        };
    n.useEffect(() => {
        C.default.track(N.HAw.CANCELLATION_FLOW_STARTED, { location_stack: P });
    }, [P]);
    let U = (0, A.bg)(p.skuFlags);
    return (0, a.jsx)(s.ExpressiveModal, {
        actions: [{ loading: g, onClick: R, text: d.intl.string(d.t.KSqyfW), variant: "critical-primary" }],
        graphic: {
            type: "dynamic",
            component: l.Z86.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: { application: i, className: S.Sb },
        },
        title: d.intl.string(d.t.CeCHk1),
        subtitle: U
            ? d.intl.format(d.t.fZP9QD, { applicationName: i.name, timestamp: E.currentPeriodEnd.getTime() })
            : d.intl.format(d.t["3LeWBF"], {
                  guild: O?.name,
                  applicationName: i.name,
                  timestamp: E.currentPeriodEnd.getTime(),
              }),
        transitionState: e,
        onClose: T,
        children: (0, a.jsxs)("div", {
            className: S.oV,
            children: [
                null != L ? (0, a.jsx)(s.wx6, { type: "critical", children: L.message }) : null,
                (0, a.jsx)(u.iH, { applicationId: i.id, storeListingBenefits: p.benefits, className: S.iq }),
            ],
        }),
    });
}
