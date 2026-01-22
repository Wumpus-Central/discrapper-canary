r.d(t, {
    m: () => S,
}),
    r(896048);
var a = r(627968),
    n = r(64700),
    c = r(158954),
    i = r(311907),
    o = r(397927),
    f = r(158032),
    s = r(925847),
    d = r(773669),
    l = r(469778),
    b = r(954571),
    u = r(927578),
    p = r(580630),
    _ = r(501957),
    m = r(232392),
    y = r(788868),
    g = r(652215),
    x = r(985018),
    O = r(938822);
let S = (e) => {
    let {
            analyticsLocations: t,
            onClose: r,
            transitionState: S,
            premiumSubscription: j,
            currentInvoicePreview: C,
            renewalInvoicePreview: h,
            fractionalPremiumInfo: v,
            setStep: P,
        } = e,
        E = (0, i.bG)([d.default], () => d.default.locale),
        I = new Date(h.subscriptionPeriodStart);
    j.isBoostOnly || (I = u.Ay.extendDateWithUnconsumedFractionalPremium(I, v.unactivatedUnits));
    let A = (0, i.bG)([l.A], () => l.A.getForApplication(y.tv)),
        w = (0, p.$g)(C.total, C.currency),
        [M, T] = (0, n.useState)(!1),
        [k, D] = (0, n.useState)(!1),
        R = I.toLocaleDateString(E, {
            month: "long",
            day: "numeric",
            year: "numeric",
        }),
        F = n.useMemo(() => (0, s.A)(), []);
    n.useEffect(() => {
        b.default.track(
            g.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        a.forEach(function (t) {
                            var a;
                            (a = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = a);
                        });
                }
                return e;
            })(
                {
                    location_stack: t,
                    load_id: F,
                },
                (0, _.j)(j),
            ),
        );
    }, [t, j, F]);
    let N = async () => {
            T(!0), D(!1);
            try {
                await f.Ir(j, t), P(m.g.SUCCESS);
            } catch (e) {
                D(!0), T(!1);
            }
        },
        U = [
            {
                text: x.intl.string(x.t["cY+Oob"]),
                onClick: () => N(),
                variant: "primary",
                loading: M,
                disabled: M,
            },
        ],
        L = x.intl.format(x.t.dbGGui, {
            price: w,
            date: R,
        }),
        W = j.premiumPlanIdFromItems;
    if (u.Ay.hasUnconsumedGiftForSubscriptionPlan(A, W)) {
        let e = (0, p.$g)(h.total, h.currency),
            t = u.Ay.getIntervalForInvoice(h),
            r = {
                discountedPrice: e,
                regularPrice: w,
                date: R,
                billingPeriod: u.Ay.getIntervalStringAsNoun(t.intervalType),
            };
        L = h.taxInclusive ? x.intl.format(x.t.G8IxyE, r) : x.intl.format(x.t.kXtIIn, r);
    }
    return (0, a.jsxs)(c.ExpressiveModal, {
        graphic: {
            type: "image",
            src: O.A,
        },
        gradientColor: "nitro-pink",
        transitionState: S,
        title: x.intl.string(x.t.fYEWlq),
        actions: U,
        onClose: async () => r(),
        children: [
            (0, a.jsxs)(o.Text, {
                variant: "text-md/normal",
                style: {
                    textAlign: "center",
                },
                children: [
                    (0, a.jsx)("p", {
                        children: L,
                    }),
                    (0, a.jsx)("p", {
                        children: x.intl.string(x.t.UQolSy),
                    }),
                ],
            }),
            k
                ? (0, a.jsx)(c.wx6, {
                      type: "critical",
                      children: x.intl.string(x.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
