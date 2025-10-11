n.d(e, { default: () => O }), n(388685);
var i = n(951288),
    a = n(647438),
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
    A = n(388032),
    N = n(304495);
function O(t) {
    let { transitionState: e, application: n, storeListing: O, subscription: E, guild: S, onClose: P } = t,
        { analyticsLocations: T } = (0, c.ZP)(o.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
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
    let L = (0, _.KW)(O.skuFlags);
    return (0, i.jsx)(l.ExpressiveModal, {
        actions: [
            {
                loading: m,
                onClick: b,
                text: A.intl.string(A.t.KSqyfX),
                variant: "critical-primary",
            },
        ],
        graphic: {
            type: "dynamic",
            component: r.P3w.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: {
                application: n,
                className: N.largeAppIcon,
            },
        },
        title: A.intl.string(A.t.CeCHk5),
        subtitle: L
            ? A.intl.format(A.t.fZP9QE, {
                  applicationName: n.name,
                  timestamp: E.currentPeriodEnd.getTime(),
              })
            : A.intl.format(A.t["3LeWBA"], {
                  guild: null == S ? void 0 : S.name,
                  applicationName: n.name,
                  timestamp: E.currentPeriodEnd.getTime(),
              }),
        transitionState: e,
        onClose: P,
        children: (0, i.jsxs)("div", {
            className: N.cancelModalBody,
            children: [
                null != g
                    ? (0, i.jsx)(l.M14, {
                          type: "critical",
                          children: g.message,
                      })
                    : null,
                (0, i.jsx)(d.G9, {
                    applicationId: n.id,
                    storeListingBenefits: O.benefits,
                    className: N.benefitsContainer,
                }),
            ],
        }),
    });
}
