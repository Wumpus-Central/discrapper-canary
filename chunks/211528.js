n.d(t, { KS: () => A, Wf: () => y, ZB: () => g });
var l = n(477900),
    i = n(582128),
    r = n(643909),
    a = n(17928),
    s = n(783327),
    o = n(166532),
    u = n(287809),
    c = n(174459),
    d = n(240248),
    m = n(71532),
    p = n(116673),
    C = n(942340),
    h = n(648335),
    f = n(652215),
    E = n(818348),
    S = n(400400);
let y = i.memo(function (e) {
    let {
            paymentMethodOrder: t,
            wallets: n = [],
            customPaymentMethodIdsToSourceTypes: s,
            analyticsContext: d,
            options: m,
            onChange: p,
            step: C,
            ...S
        } = e,
        y = (0, a.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        I = (0, a.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        g = i.useCallback(
            (e) => {
                if (C !== o.pn.PAYMENT_ELEMENT) return;
                let t = (0, h.Wn)(e.value.type, s);
                if ((null != p && p(e, t), null != d)) {
                    let { contextMetadata: n, activitySessionId: l, analyticsData: i } = d,
                        r = null != t && t !== E.he.PAYMENT_REQUEST ? h.mr[t] : e.value.type;
                    c.default.track(f.HAw.PAYMENT_ELEMENT_CHANGED, {
                        load_id: n.loadId,
                        activity_session_id: l,
                        payment_element_selected_method: r,
                        payment_source_type: t,
                        complete: e.complete,
                        empty: e.empty,
                        ...("string" == typeof i.location ? { location: i.location } : void 0),
                    });
                }
            },
            [p, d, C, s],
        ),
        A = i.useMemo(
            () => ({
                applePay: n.includes("applePay") ? "auto" : "never",
                googlePay: n.includes("googlePay") ? "auto" : "never",
                link: n.includes("link") ? "auto" : "never",
            }),
            [n],
        ),
        P = i.useMemo(
            () => ({ billingDetails: { ...(null != y && { email: y }), ...(null != I && { name: I }) } }),
            [y, I],
        ),
        v = i.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: A, defaultValues: P, paymentMethodOrder: t, ...m },
                onChange: g,
                ...S,
            }),
            [A, P, m, S, g, t],
        );
    return (0, l.jsx)(r.PaymentElement, { ...v });
});
function I(e) {
    let { children: t } = e,
        n = (0, s.S)(),
        { elementsAppearance: i } = (0, C.E)(),
        a = (0, m.PU)();
    return (0, l.jsx)(r.Elements, {
        stripe: n,
        options: { appearance: i, locale: a, mode: "setup", currency: "usd" },
        children: t,
    });
}
function g(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let A = i.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: a,
            billingAddressInfo: s,
            internalKey: o,
            ...u
        } = e,
        c = (0, p.z)(),
        C = null != c && c.length > 0 ? c[0] : (0, d.uJ)(s.country) ? "" : s.country,
        h = i.useMemo(() => {
            let { name: e, address: t } = (0, m._Z)({ ...s, country: C });
            return null != t && g(t)
                ? {
                      ...(null != e && "" !== e && { name: e }),
                      address: Object.fromEntries(
                          Object.entries(t).filter((e) => {
                              let [t, n] = e;
                              return void 0 !== n;
                          }),
                      ),
                  }
                : null != e && "" !== e
                  ? { name: e }
                  : null != t && null != t.country && a
                    ? { address: { country: C } }
                    : void 0;
        }, [s, a, C]),
        f = i.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        E = i.useMemo(
            () =>
                (0, l.jsx)(
                    r.AddressElement,
                    { options: { mode: "billing", defaultValues: h, allowedCountries: f, ...t }, ...u },
                    o,
                ),
            [h, f, t, u, o],
        );
    return n
        ? (0, l.jsxs)(I, {
              children: [
                  (0, l.jsx)("div", {
                      className: S.R,
                      children: (0, l.jsx)(r.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  E,
              ],
          })
        : E;
});
