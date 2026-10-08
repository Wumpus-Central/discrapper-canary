t.d(a, { KS: () => _, Wf: () => y, ZB: () => x });
var l = t(477900),
    n = t(582128),
    r = t(643909),
    i = t(17928),
    s = t(783327),
    u = t(166532),
    o = t(287809),
    c = t(174459),
    h = t(240248),
    d = t(71532),
    m = t(116673),
    A = t(942340),
    E = t(648335),
    p = t(652215),
    C = t(818348),
    g = t(400400);
let y = n.memo(function (e) {
    let {
            paymentMethodOrder: a,
            wallets: t = [],
            customPaymentMethodIdsToSourceTypes: s,
            analyticsContext: h,
            options: d,
            onChange: m,
            step: A,
            ...g
        } = e,
        y = (0, i.bG)([o.default], () => {
            let e = o.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        P = (0, i.bG)([o.default], () => {
            let e = o.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        x = n.useCallback(
            (e) => {
                if (A !== u.pn.PAYMENT_ELEMENT) return;
                let a = (0, E.Wn)(e.value.type, s);
                if ((null != m && m(e, a), null != h)) {
                    let { contextMetadata: t, activitySessionId: l, analyticsData: n } = h,
                        r = null != a && a !== C.he.PAYMENT_REQUEST ? E.mr[a] : e.value.type;
                    c.default.track(p.HAw.PAYMENT_ELEMENT_CHANGED, {
                        load_id: t.loadId,
                        activity_session_id: l,
                        payment_element_selected_method: r,
                        payment_source_type: a,
                        complete: e.complete,
                        empty: e.empty,
                        ...("string" == typeof n.location ? { location: n.location } : void 0),
                    });
                }
            },
            [m, h, A, s],
        ),
        _ = n.useMemo(
            () => ({
                applePay: t.includes("applePay") ? "auto" : "never",
                googlePay: t.includes("googlePay") ? "auto" : "never",
                link: t.includes("link") ? "auto" : "never",
            }),
            [t],
        ),
        f = n.useMemo(
            () => ({ billingDetails: { ...(null != y && { email: y }), ...(null != P && { name: P }) } }),
            [y, P],
        ),
        T = n.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: _, defaultValues: f, paymentMethodOrder: a, ...d },
                onChange: x,
                ...g,
            }),
            [_, f, d, g, x, a],
        );
    return (0, l.jsx)(r.PaymentElement, { ...T });
});
function P(e) {
    let { children: a } = e,
        t = (0, s.S)(),
        { elementsAppearance: n } = (0, A.E)(),
        i = (0, d.PU)();
    return (0, l.jsx)(r.Elements, {
        stripe: t,
        options: { appearance: n, locale: i, mode: "setup", currency: "usd" },
        children: a,
    });
}
function x(e) {
    return null != e && null != e && (!(0, h.uJ)(e.line1) || !(0, h.uJ)(e.city));
}
let _ = n.memo(function (e) {
    let {
            options: a,
            renderAsStandaloneElement: t,
            addressElementOnChangeFired: i,
            billingAddressInfo: s,
            internalKey: u,
            ...o
        } = e,
        c = (0, m.z)(),
        A = null != c && c.length > 0 ? c[0] : (0, h.uJ)(s.country) ? "" : s.country,
        E = n.useMemo(() => {
            let { name: e, address: a } = (0, d._Z)({ ...s, country: A });
            return null != a && x(a)
                ? {
                      ...(null != e && "" !== e && { name: e }),
                      address: Object.fromEntries(
                          Object.entries(a).filter((e) => {
                              let [a, t] = e;
                              return void 0 !== t;
                          }),
                      ),
                  }
                : null != e && "" !== e
                  ? { name: e }
                  : null != a && null != a.country && i
                    ? { address: { country: A } }
                    : void 0;
        }, [s, i, A]),
        p = n.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        C = n.useMemo(
            () =>
                (0, l.jsx)(
                    r.AddressElement,
                    { options: { mode: "billing", defaultValues: E, allowedCountries: p, ...a }, ...o },
                    u,
                ),
            [E, p, a, o, u],
        );
    return t
        ? (0, l.jsxs)(P, {
              children: [
                  (0, l.jsx)("div", {
                      className: g.R,
                      children: (0, l.jsx)(r.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  C,
              ],
          })
        : C;
});
