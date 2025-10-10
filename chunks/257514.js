n.d(e, { default: () => O }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(793030),
    r = n(481060),
    s = n(355467),
    o = n(100527),
    c = n(906732),
    u = n(740492),
    C = n(626135),
    _ = n(171246),
    d = n(225715),
    p = n(553334),
    I = n(981631),
    N = n(388032),
    A = n(304495);
function O(t) {
    let { transitionState: e, application: n, storeListing: O, subscription: E, guild: S, onClose: P } = t,
        { analyticsLocations: T } = (0, c.ZP)(o.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: f,
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
        })(T),
        b = async () => {
            (await f(E.id)) &&
                (u.ZP.disableApplicationSubscriptionCancellationSurvey
                    ? P()
                    : (0, r.ZDy)(
                          async () => (
                              await P(),
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
        C.default.track(I.rMx.CANCELLATION_FLOW_STARTED, { location_stack: T });
    }, [T]);
    let L = (0, _.KW)(O.skuFlags);
    return (0, a.jsx)(l.ExpressiveModal, {
        actions: [
            {
                loading: m,
                onClick: b,
                text: N.intl.string(N.t.KSqyfX),
                variant: "critical-primary",
            },
        ],
        graphic: {
            type: "dynamic",
            component: r.P3w.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: {
                application: n,
                className: A.largeAppIcon,
            },
        },
        title: N.intl.string(N.t.CeCHk5),
        subtitle: L
            ? N.intl.format(N.t.fZP9QE, {
                  applicationName: n.name,
                  timestamp: E.currentPeriodEnd.getTime(),
              })
            : N.intl.format(N.t["3LeWBA"], {
                  guild: null == S ? void 0 : S.name,
                  applicationName: n.name,
                  timestamp: E.currentPeriodEnd.getTime(),
              }),
        transitionState: e,
        onClose: P,
        children: (0, a.jsxs)("div", {
            className: A.cancelModalBody,
            children: [
                null != g ? (0, a.jsx)(r.kzN, { children: g.message }) : null,
                (0, a.jsx)(d.G9, {
                    applicationId: n.id,
                    storeListingBenefits: O.benefits,
                    className: A.benefitsContainer,
                }),
            ],
        }),
    });
}
