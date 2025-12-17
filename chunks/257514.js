n.d(e, { default: () => A }), n(388685);
var a = n(54381),
    i = n(473749),
    l = n(793030),
    r = n(481060),
    s = n(355467),
    c = n(100527),
    o = n(906732),
    u = n(740492),
    C = n(626135),
    d = n(171246),
    _ = n(225715),
    p = n(553334),
    I = n(981631),
    N = n(388032),
    O = n(492925);
function A(t) {
    let { transitionState: e, application: n, storeListing: A, subscription: E, guild: S, onClose: f } = t,
        { analyticsLocations: P } = (0, o.ZP)(c.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: T,
            error: g,
            submitting: m,
        } = ((t) => {
            let [e, n] = i.useState(!1),
                [a, l] = i.useState(null);
            return {
                cancelSubscription: async (e) => {
                    try {
                        return n(!0), await s.EO(e, t), !0;
                    } catch (t) {
                        l(t);
                    } finally {
                        n(!1);
                    }
                },
                error: a,
                submitting: e,
            };
        })(P),
        b = async () => {
            (await T(E.id)) &&
                (u.ZP.disableApplicationSubscriptionCancellationSurvey
                    ? f()
                    : (0, r.ZDy)(
                          async () => (
                              await f(),
                              (t) =>
                                  (0, a.jsx)(
                                      p.Z,
                                      (function (t) {
                                          for (var e = 1; e < arguments.length; e++) {
                                              var n = null != arguments[e] ? arguments[e] : {},
                                                  a = Object.keys(n);
                                              "function" == typeof Object.getOwnPropertySymbols &&
                                                  (a = a.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (t) {
                                                          return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                      }),
                                                  )),
                                                  a.forEach(function (e) {
                                                      var a;
                                                      (a = n[e]),
                                                          e in t
                                                              ? Object.defineProperty(t, e, {
                                                                    value: a,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0,
                                                                })
                                                              : (t[e] = a);
                                                  });
                                          }
                                          return t;
                                      })(
                                          {
                                              application: n,
                                              subscriptionId: E.id,
                                          },
                                          t,
                                      ),
                                  )
                          ),
                      ));
        };
    i.useEffect(() => {
        C.default.track(I.rMx.CANCELLATION_FLOW_STARTED, { location_stack: P });
    }, [P]);
    let L = (0, d.KW)(A.skuFlags);
    return (0, a.jsx)(l.ExpressiveModal, {
        actions: [
            {
                loading: m,
                onClick: b,
                text: N.intl.string(N.t.KSqyfW),
                variant: "critical-primary",
            },
        ],
        graphic: {
            type: "dynamic",
            component: r.P3w.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: {
                application: n,
                className: O.largeAppIcon,
            },
        },
        title: N.intl.string(N.t.CeCHk1),
        subtitle: L
            ? N.intl.format(N.t.fZP9QD, {
                  applicationName: n.name,
                  timestamp: E.currentPeriodEnd.getTime(),
              })
            : N.intl.format(N.t["3LeWBF"], {
                  guild: null == S ? void 0 : S.name,
                  applicationName: n.name,
                  timestamp: E.currentPeriodEnd.getTime(),
              }),
        transitionState: e,
        onClose: f,
        children: (0, a.jsxs)("div", {
            className: O.cancelModalBody,
            children: [
                null != g
                    ? (0, a.jsx)(l.M14, {
                          type: "critical",
                          children: g.message,
                      })
                    : null,
                (0, a.jsx)(_.G9, {
                    applicationId: n.id,
                    storeListingBenefits: A.benefits,
                    className: O.benefitsContainer,
                }),
            ],
        }),
    });
}
