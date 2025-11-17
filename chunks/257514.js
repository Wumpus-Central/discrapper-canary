n.d(e, { default: () => A }), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(793030),
    r = n(481060),
    s = n(355467),
    c = n(100527),
    o = n(906732),
    u = n(740492),
    C = n(626135),
    _ = n(171246),
    d = n(225715),
    p = n(553334),
    I = n(981631),
    N = n(388032),
    O = n(304495);
function A(t) {
    let { transitionState: e, application: n, storeListing: A, subscription: E, guild: S, onClose: P } = t,
        { analyticsLocations: T } = (0, o.ZP)(c.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: f,
            error: g,
            submitting: m,
        } = ((t) => {
            let [e, n] = a.useState(!1),
                [i, l] = a.useState(null);
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
                error: i,
                submitting: e,
            };
        })(T),
        b = async () => {
            (await f(E.id)) &&
                (u.ZP.disableApplicationSubscriptionCancellationSurvey
                    ? P()
                    : (0, r.ZDy)(
                          async () => (
                              await P(),
                              (t) =>
                                  (0, i.jsx)(
                                      p.Z,
                                      (function (t) {
                                          for (var e = 1; e < arguments.length; e++) {
                                              var n = null != arguments[e] ? arguments[e] : {},
                                                  i = Object.keys(n);
                                              "function" == typeof Object.getOwnPropertySymbols &&
                                                  (i = i.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (t) {
                                                          return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                      }),
                                                  )),
                                                  i.forEach(function (e) {
                                                      var i;
                                                      (i = n[e]),
                                                          e in t
                                                              ? Object.defineProperty(t, e, {
                                                                    value: i,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0,
                                                                })
                                                              : (t[e] = i);
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
    a.useEffect(() => {
        C.default.track(I.rMx.CANCELLATION_FLOW_STARTED, { location_stack: T });
    }, [T]);
    let L = (0, _.KW)(A.skuFlags);
    return (0, i.jsx)(l.ExpressiveModal, {
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
        onClose: P,
        children: (0, i.jsxs)("div", {
            className: O.cancelModalBody,
            children: [
                null != g
                    ? (0, i.jsx)(l.M14, {
                          type: "critical",
                          children: g.message,
                      })
                    : null,
                (0, i.jsx)(d.G9, {
                    applicationId: n.id,
                    storeListingBenefits: A.benefits,
                    className: O.benefitsContainer,
                }),
            ],
        }),
    });
}
