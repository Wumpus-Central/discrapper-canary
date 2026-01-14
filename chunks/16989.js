a.d(t, { G: () => w }), a(388685);
var r = a(54381),
    n = a(473749),
    o = a(793030),
    i = a(442837),
    c = a(481060),
    l = a(366939),
    d = a(845220),
    s = a(706454),
    b = a(580130),
    p = a(626135),
    f = a(74538),
    u = a(937615),
    m = a(323321),
    C = a(540310),
    S = a(474936),
    h = a(981631),
    v = a(388032),
    P = a(7449);
let w = (e) => {
    let {
            analyticsLocations: t,
            onClose: a,
            transitionState: w,
            premiumSubscription: y,
            currentInvoicePreview: x,
            renewalInvoicePreview: g,
            fractionalPremiumInfo: O,
            setStep: _,
        } = e,
        j = (0, i.e7)([s.default], () => s.default.locale),
        T = new Date(g.subscriptionPeriodStart);
    y.isBoostOnly || (T = f.ZP.extendDateWithUnconsumedFractionalPremium(T, O.unactivatedUnits));
    let R = (0, i.e7)([b.Z], () => b.Z.getForApplication(S.CL)),
        I = (0, u.T4)(x.total, x.currency),
        [k, M] = (0, n.useState)(!1),
        [E, B] = (0, n.useState)(!1),
        A = T.toLocaleDateString(j, {
            month: "long",
            day: "numeric",
            year: "numeric",
        }),
        F = n.useMemo(() => (0, d.b)(), []);
    n.useEffect(() => {
        p.default.track(
            h.rMx.PREMIUM_RESUBSCRIBE_FLOW_STARTED,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(a);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = a[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    location_stack: t,
                    load_id: F,
                },
                (0, m.v)(y),
            ),
        );
    }, [t, y, F]);
    let U = async () => {
            M(!0), B(!1);
            try {
                await l.O5(y, t), _(C.R.SUCCESS);
            } catch (e) {
                B(!0), M(!1);
            }
        },
        N = [
            {
                text: v.intl.string(v.t["cY+Oob"]),
                onClick: () => U(),
                variant: "primary",
                loading: k,
                disabled: k,
            },
        ],
        D = v.intl.format(v.t.dbGGui, {
            price: I,
            date: A,
        }),
        G = y.premiumPlanIdFromItems;
    if (f.ZP.hasUnconsumedGiftForSubscriptionPlan(R, G)) {
        let e = (0, u.T4)(g.total, g.currency),
            t = f.ZP.getIntervalForInvoice(g),
            a = {
                discountedPrice: e,
                regularPrice: I,
                date: A,
                billingPeriod: f.ZP.getIntervalStringAsNoun(t.intervalType),
            };
        D = g.taxInclusive ? v.intl.format(v.t.G8IxyE, a) : v.intl.format(v.t.kXtIIn, a);
    }
    return (0, r.jsxs)(o.ExpressiveModal, {
        graphic: {
            type: "image",
            src: P.Z,
        },
        gradientColor: "nitro-pink",
        transitionState: w,
        title: v.intl.string(v.t.fYEWlq),
        actions: N,
        onClose: async () => a(),
        children: [
            (0, r.jsxs)(c.Text, {
                variant: "text-md/normal",
                style: { textAlign: "center" },
                children: [(0, r.jsx)("p", { children: D }), (0, r.jsx)("p", { children: v.intl.string(v.t.UQolSy) })],
            }),
            E
                ? (0, r.jsx)(o.M14, {
                      type: "critical",
                      children: v.intl.string(v.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
