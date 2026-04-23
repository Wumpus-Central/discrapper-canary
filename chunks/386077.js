a.d(e, { default: () => O });
var i = a(627968),
    n = a(64700),
    l = a(772707),
    s = a(683071),
    r = a(192308),
    c = a(116833),
    o = a(793574),
    _ = a(688810),
    C = a(323082),
    A = a(964404),
    u = a(954571),
    d = a(163437),
    N = a(910804),
    I = a(574475),
    p = a(652215),
    S = a(985018),
    E = a(416072);
function O(t) {
    let { transitionState: e, application: a, storeListing: O, subscription: m, guild: T, onClose: P } = t,
        { analyticsLocations: L } = (0, _.Ay)(o.A.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: g,
            error: R,
            submitting: f,
        } = ((t) => {
            let [e, a] = n.useState(!1),
                [i, l] = n.useState(null);
            return {
                cancelSubscription: async (e) => {
                    try {
                        return a(!0), await C.M2(e, t), !0;
                    } catch (t) {
                        l(t);
                    } finally {
                        a(!1);
                    }
                },
                error: i,
                submitting: e,
            };
        })(L),
        U = async () => {
            if (await g(m.id)) {
                try {
                    await C.hP();
                } catch {}
                A.Ay.disableApplicationSubscriptionCancellationSurvey
                    ? P()
                    : (0, r.openModalLazy)(
                          async () => (
                              await P(), (t) => (0, i.jsx)(I.A, { application: a, subscriptionId: m.id, ...t })
                          ),
                      );
            }
        };
    n.useEffect(() => {
        u.default.track(p.HAw.CANCELLATION_FLOW_STARTED, { location_stack: L });
    }, [L]);
    let h = (0, d.bg)(O.skuFlags);
    return (0, i.jsx)(l.k, {
        actions: [{ loading: f, onClick: U, text: S.intl.string(S.t.KSqyfW), variant: "critical-primary" }],
        graphic: {
            type: "dynamic",
            component: c.DynamicGraphicComponent.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: { application: a, className: E.Sb },
        },
        title: S.intl.string(S.t.CeCHk1),
        subtitle: h
            ? S.intl.format(S.t.fZP9QD, { applicationName: a.name, timestamp: m.currentPeriodEnd.getTime() })
            : T?.name !== void 0
              ? S.intl.format(S.t["3LeWBF"], {
                    guild: T.name,
                    applicationName: a.name,
                    timestamp: m.currentPeriodEnd.getTime(),
                })
              : S.intl.format(S.t["8vum6M"], { applicationName: a.name, timestamp: m.currentPeriodEnd.getTime() }),
        transitionState: e,
        onClose: P,
        children: (0, i.jsxs)("div", {
            className: E.oV,
            children: [
                null != R ? (0, i.jsx)(s.w, { type: "critical", children: R.message }) : null,
                (0, i.jsx)(N.iH, { applicationId: a.id, storeListingBenefits: O.benefits, className: E.iq }),
            ],
        }),
    });
}
