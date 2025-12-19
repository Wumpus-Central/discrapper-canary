a.d(t, { G: () => v }), a(388685);
var r = a(54381),
    n = a(473749),
    o = a(793030),
    i = a(442837),
    c = a(481060),
    l = a(366939),
    d = a(845220),
    s = a(706454),
    b = a(626135),
    p = a(74538),
    f = a(937615),
    u = a(323321),
    m = a(540310),
    C = a(981631),
    h = a(388032),
    S = a(7449);
let v = (e) => {
    let {
            analyticsLocations: t,
            onClose: a,
            transitionState: v,
            premiumSubscription: w,
            renewalInvoicePreview: y,
            fractionalPremiumInfo: P,
            setStep: x,
        } = e,
        O = (0, i.e7)([s.default], () => s.default.locale),
        _ = new Date(y.subscriptionPeriodStart);
    w.isBoostOnly || (_ = p.ZP.extendDateWithUnconsumedFractionalPremium(_, P.unactivatedUnits));
    let g = (0, f.T4)(y.total, y.currency),
        [j, R] = (0, n.useState)(!1),
        [T, k] = (0, n.useState)(!1),
        M = _.toLocaleDateString(O, {
            month: "long",
            day: "numeric",
            year: "numeric",
        }),
        I = n.useMemo(() => (0, d.b)(), []);
    n.useEffect(() => {
        b.default.track(
            C.rMx.PREMIUM_RESUBSCRIBE_FLOW_STARTED,
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
                    load_id: I,
                },
                (0, u.v)(w),
            ),
        );
    }, [t, w, I]);
    let E = async () => {
            R(!0), k(!1);
            try {
                await l.O5(w, t), x(m.R.SUCCESS);
            } catch (e) {
                k(!0), R(!1);
            }
        },
        B = [
            {
                text: h.intl.string(h.t["cY+Oob"]),
                onClick: () => E(),
                variant: "primary",
                loading: j,
                disabled: j,
            },
        ];
    return (0, r.jsxs)(o.ExpressiveModal, {
        graphic: {
            type: "image",
            src: S.Z,
        },
        gradientColor: "nitro-pink",
        transitionState: v,
        title: h.intl.string(h.t.fYEWlq),
        actions: B,
        onClose: async () => a(),
        children: [
            (0, r.jsxs)(c.Text, {
                variant: "text-md/normal",
                style: { textAlign: "center" },
                children: [
                    (0, r.jsx)("p", {
                        children: h.intl.format(h.t.dbGGui, {
                            price: g,
                            date: M,
                        }),
                    }),
                    (0, r.jsx)("p", { children: h.intl.string(h.t.UQolSy) }),
                ],
            }),
            T
                ? (0, r.jsx)(o.M14, {
                      type: "critical",
                      children: h.intl.string(h.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
