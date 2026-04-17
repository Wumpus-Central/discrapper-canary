a.d(e, { default: () => S });
var i = a(627968),
    n = a(64700),
    s = a(158954),
    l = a(397927),
    r = a(793574),
    c = a(688810),
    o = a(323082),
    _ = a(964404),
    C = a(954571),
    A = a(163437),
    u = a(910804),
    d = a(574475),
    N = a(652215),
    I = a(985018),
    p = a(416072);
function S(t) {
    let { transitionState: e, application: a, storeListing: S, subscription: E, guild: O, onClose: m } = t,
        { analyticsLocations: T } = (0, c.Ay)(r.A.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: P,
            error: L,
            submitting: g,
        } = ((t) => {
            let [e, a] = n.useState(!1),
                [i, s] = n.useState(null);
            return {
                cancelSubscription: async (e) => {
                    try {
                        return a(!0), await o.M2(e, t), !0;
                    } catch (t) {
                        s(t);
                    } finally {
                        a(!1);
                    }
                },
                error: i,
                submitting: e,
            };
        })(T),
        R = async () => {
            if (await P(E.id)) {
                try {
                    await o.hP();
                } catch {}
                _.Ay.disableApplicationSubscriptionCancellationSurvey
                    ? m()
                    : (0, l.mMO)(
                          async () => (
                              await m(), (t) => (0, i.jsx)(d.A, { application: a, subscriptionId: E.id, ...t })
                          ),
                      );
            }
        };
    n.useEffect(() => {
        C.default.track(N.HAw.CANCELLATION_FLOW_STARTED, { location_stack: T });
    }, [T]);
    let f = (0, A.bg)(S.skuFlags);
    return (0, i.jsx)(s.ExpressiveModal, {
        actions: [{ loading: g, onClick: R, text: I.intl.string(I.t.KSqyfW), variant: "critical-primary" }],
        graphic: {
            type: "dynamic",
            component: l.Z86.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: { application: a, className: p.Sb },
        },
        title: I.intl.string(I.t.CeCHk1),
        subtitle: f
            ? I.intl.format(I.t.fZP9QD, { applicationName: a.name, timestamp: E.currentPeriodEnd.getTime() })
            : O?.name !== void 0
              ? I.intl.format(I.t["3LeWBF"], {
                    guild: O.name,
                    applicationName: a.name,
                    timestamp: E.currentPeriodEnd.getTime(),
                })
              : I.intl.format(I.t["8vum6M"], { applicationName: a.name, timestamp: E.currentPeriodEnd.getTime() }),
        transitionState: e,
        onClose: m,
        children: (0, i.jsxs)("div", {
            className: p.oV,
            children: [
                null != L ? (0, i.jsx)(s.wx6, { type: "critical", children: L.message }) : null,
                (0, i.jsx)(u.iH, { applicationId: a.id, storeListingBenefits: S.benefits, className: p.iq }),
            ],
        }),
    });
}
