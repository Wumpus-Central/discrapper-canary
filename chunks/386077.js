n.d(e, {
    default: () => p,
}),
    n(896048);
var i = n(627968),
    a = n(64700),
    l = n(158954),
    s = n(397927),
    r = n(384904),
    c = n(793574),
    o = n(688810),
    u = n(964404),
    _ = n(954571),
    C = n(163437),
    A = n(910804),
    d = n(574475),
    N = n(652215),
    O = n(985018),
    I = n(508025);

function p(t) {
    let { transitionState: e, application: n, storeListing: p, subscription: S, guild: E, onClose: b } = t,
        { analyticsLocations: T } = (0, o.Ay)(c.A.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: P,
            error: m,
            submitting: f,
        } = ((t) => {
            let [e, n] = a.useState(!1),
                [i, l] = a.useState(null);
            return {
                cancelSubscription: async (e) => {
                    try {
                        return n(!0), await r.M2(e, t), !0;
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
        g = async () => {
            (await P(S.id)) &&
                (u.Ay.disableApplicationSubscriptionCancellationSurvey
                    ? b()
                    : (0, s.mMO)(
                          async () => (
                              await b(),
                              (t) =>
                                  (0, i.jsx)(
                                      d.A,
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
                                              subscriptionId: S.id,
                                          },
                                          t,
                                      ),
                                  )
                          ),
                      ));
        };
    a.useEffect(() => {
        _.default.track(N.HAw.CANCELLATION_FLOW_STARTED, {
            location_stack: T,
        });
    }, [T]);
    let L = (0, C.bg)(p.skuFlags);
    return (0, i.jsx)(l.ExpressiveModal, {
        actions: [
            {
                loading: f,
                onClick: g,
                text: O.intl.string(O.t.KSqyfW),
                variant: "critical-primary",
            },
        ],
        graphic: {
            type: "dynamic",
            component: s.Z86.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: {
                application: n,
                className: I.Sb,
            },
        },
        title: O.intl.string(O.t.CeCHk1),
        subtitle: L
            ? O.intl.format(O.t.fZP9QD, {
                  applicationName: n.name,
                  timestamp: S.currentPeriodEnd.getTime(),
              })
            : O.intl.format(O.t["3LeWBF"], {
                  guild: null == E ? void 0 : E.name,
                  applicationName: n.name,
                  timestamp: S.currentPeriodEnd.getTime(),
              }),
        transitionState: e,
        onClose: b,
        children: (0, i.jsxs)("div", {
            className: I.oV,
            children: [
                null != m
                    ? (0, i.jsx)(l.wx6, {
                          type: "critical",
                          children: m.message,
                      })
                    : null,
                (0, i.jsx)(A.iH, {
                    applicationId: n.id,
                    storeListingBenefits: p.benefits,
                    className: I.iq,
                }),
            ],
        }),
    });
}
