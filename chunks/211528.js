n.d(t, { KS: () => I, Wf: () => y, ZB: () => P });
var l = n(477900),
    i = n(582128),
    r = n(643909),
    a = n(17928),
    s = n(783327),
    o = n(166532),
    u = n(287809),
    c = n(174459),
    d = n(240248),
    p = n(71532),
    m = n(116673),
    h = n(942340),
    C = n(648335),
    f = n(652215),
    E = n(818348),
    S = n(426125);
let y = i.memo(function (e) {
    let {
            paymentMethodOrder: t,
            wallets: n = [],
            customPaymentMethodIdsToSourceTypes: s,
            analyticsContext: d,
            options: p,
            onChange: m,
            step: h,
            ...S
        } = e,
        y = (0, a.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        A = (0, a.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        P = i.useCallback(
            (e) => {
                if (h !== o.pn.PAYMENT_ELEMENT) return;
                let t = (0, C.Wn)(e.value.type, s);
                if ((null != m && m(e, t), null != d)) {
                    let { contextMetadata: n, activitySessionId: l, analyticsData: i } = d,
                        r = null != t && t !== E.he.PAYMENT_REQUEST ? C.mr[t] : e.value.type;
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
            [m, d, h, s],
        ),
        I = i.useMemo(
            () => ({
                applePay: n.includes("applePay") ? "auto" : "never",
                googlePay: n.includes("googlePay") ? "auto" : "never",
                link: n.includes("link") ? "auto" : "never",
            }),
            [n],
        ),
        g = i.useMemo(
            () => ({ billingDetails: { ...(null != y && { email: y }), ...(null != A && { name: A }) } }),
            [y, A],
        ),
        v = i.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: I, defaultValues: g, paymentMethodOrder: t, ...p },
                onChange: P,
                ...S,
            }),
            [I, g, p, S, P, t],
        );
    return (0, l.jsx)(r.PaymentElement, { ...v });
});
function A(e) {
    let { children: t } = e,
        n = (0, s.S)(),
        { elementsAppearance: i } = (0, h.E)(),
        a = (0, p.PU)();
    return (0, l.jsx)(r.Elements, {
        stripe: n,
        options: { appearance: i, locale: a, mode: "setup", currency: "usd" },
        children: t,
    });
}
function P(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let I = i.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: a,
            billingAddressInfo: s,
            internalKey: o,
            ...u
        } = e,
        c = (0, m.z)(),
        h = null != c && c.length > 0 ? c[0] : (0, d.uJ)(s.country) ? "" : s.country,
        C = i.useMemo(() => {
            let { name: e, address: t } = (0, p._Z)({ ...s, country: h });
            return null != t && P(t)
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
                    ? { address: { country: h } }
                    : void 0;
        }, [s, a, h]),
        f = i.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        E = i.useMemo(
            () =>
                (0, l.jsx)(
                    r.AddressElement,
                    { options: { mode: "billing", defaultValues: C, allowedCountries: f, ...t }, ...u },
                    o,
                ),
            [C, f, t, u, o],
        );
    return n
        ? (0, l.jsxs)(A, {
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
