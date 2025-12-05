r.d(t, { G: () => S }), r(388685);
var a = r(54381),
    n = r(473749),
    o = r(793030),
    i = r(442837),
    l = r(481060),
    c = r(366939),
    s = r(845220),
    d = r(706454),
    p = r(626135),
    u = r(74538),
    b = r(937615),
    m = r(323321),
    _ = r(540310),
    h = r(981631),
    f = r(388032),
    C = r(730949);
let S = (e) => {
    let {
            analyticsLocations: t,
            onClose: r,
            transitionState: S,
            premiumSubscription: v,
            renewalInvoicePreview: w,
            fractionalPremiumInfo: y,
            setStep: P,
        } = e,
        x = (0, i.e7)([d.default], () => d.default.locale),
        O = new Date(w.subscriptionPeriodStart);
    v.isBoostOnly || (O = u.ZP.extendDateWithUnconsumedFractionalPremium(O, y.unactivatedUnits));
    let g = (0, b.T4)(w.total, w.currency),
        [j, R] = (0, n.useState)(!1),
        [T, k] = (0, n.useState)(!1),
        M = O.toLocaleDateString(x, {
            month: "long",
            day: "numeric",
            year: "numeric",
        }),
        I = n.useMemo(() => (0, s.b)(), []);
    n.useEffect(() => {
        p.default.track(
            h.rMx.PREMIUM_RESUBSCRIBE_FLOW_STARTED,
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
                    load_id: I,
                },
                (0, m.v)(v),
            ),
        );
    }, [t, v, I]);
    let E = async () => {
            R(!0), k(!1);
            try {
                await c.O5(v, t), P(_.R.SUCCESS);
            } catch (e) {
                k(!0), R(!1);
            }
        },
        B = [
            {
                text: f.intl.string(f.t["cY+Oob"]),
                onClick: () => E(),
                variant: "primary",
                loading: j,
                disabled: j,
            },
        ];
    return (0, a.jsxs)(o.ExpressiveModal, {
        graphic: {
            type: "image",
            src: C.Z,
        },
        gradientColor: "nitro-pink",
        transitionState: S,
        title: f.intl.string(f.t.fYEWlq),
        actions: B,
        onClose: async () => r(),
        children: [
            (0, a.jsxs)(l.Text, {
                variant: "text-md/normal",
                style: { textAlign: "center" },
                children: [
                    (0, a.jsx)("p", {
                        children: f.intl.format(f.t.dbGGui, {
                            price: g,
                            date: M,
                        }),
                    }),
                    (0, a.jsx)("p", { children: f.intl.string(f.t.UQolSy) }),
                ],
            }),
            T
                ? (0, a.jsx)(o.M14, {
                      type: "critical",
                      children: f.intl.string(f.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
