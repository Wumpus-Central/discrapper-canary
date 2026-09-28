n.d(t, { KS: () => _, Wf: () => f, ZB: () => g });
var r = n(477900),
    l = n(582128),
    o = n(643909),
    i = n(17928),
    a = n(783327),
    s = n(166532),
    u = n(287809),
    c = n(174459),
    d = n(240248),
    h = n(71532),
    C = n(116673),
    p = n(942340),
    m = n(648335),
    E = n(652215),
    A = n(818348),
    y = n(400400);
let f = l.memo(function (e) {
    let {
            paymentMethodOrder: t,
            wallets: n = [],
            customPaymentMethodIdsToSourceTypes: a,
            analyticsContext: d,
            options: h,
            onChange: C,
            step: p,
            ...y
        } = e,
        f = (0, i.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        S = (0, i.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        g = l.useCallback(
            (e) => {
                if (p !== s.pn.PAYMENT_ELEMENT) return;
                let t = (0, m.Wn)(e.value.type, a);
                if ((null != C && C(e, t), null != d)) {
                    let { contextMetadata: n, activitySessionId: r, analyticsData: l } = d,
                        o = null != t && t !== A.he.PAYMENT_REQUEST ? m.mr[t] : e.value.type;
                    c.default.track(E.HAw.PAYMENT_ELEMENT_CHANGED, {
                        load_id: n.loadId,
                        activity_session_id: r,
                        payment_element_selected_method: o,
                        payment_source_type: t,
                        complete: e.complete,
                        empty: e.empty,
                        ...("string" == typeof l.location ? { location: l.location } : void 0),
                    });
                }
            },
            [C, d, p, a],
        ),
        _ = l.useMemo(
            () => ({
                applePay: n.includes("applePay") ? "auto" : "never",
                googlePay: n.includes("googlePay") ? "auto" : "never",
                link: n.includes("link") ? "auto" : "never",
            }),
            [n],
        ),
        T = l.useMemo(
            () => ({ billingDetails: { ...(null != f && { email: f }), ...(null != S && { name: S }) } }),
            [f, S],
        ),
        P = l.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: _, defaultValues: T, paymentMethodOrder: t, ...h },
                onChange: g,
                ...y,
            }),
            [_, T, h, y, g, t],
        );
    return (0, r.jsx)(o.PaymentElement, { ...P });
});
function S(e) {
    let { children: t } = e,
        n = (0, a.S)(),
        { elementsAppearance: l } = (0, p.E)(),
        i = (0, h.PU)();
    return (0, r.jsx)(o.Elements, {
        stripe: n,
        options: { appearance: l, locale: i, mode: "setup", currency: "usd" },
        children: t,
    });
}
function g(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let _ = l.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: i,
            billingAddressInfo: a,
            internalKey: s,
            ...u
        } = e,
        c = (0, C.z)(),
        p = null != c && c.length > 0 ? c[0] : (0, d.uJ)(a.country) ? "" : a.country,
        m = l.useMemo(() => {
            let { name: e, address: t } = (0, h._Z)({ ...a, country: p });
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
                  : null != t && null != t.country && i
                    ? { address: { country: p } }
                    : void 0;
        }, [a, i, p]),
        E = l.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        A = l.useMemo(
            () =>
                (0, r.jsx)(
                    o.AddressElement,
                    { options: { mode: "billing", defaultValues: m, allowedCountries: E, ...t }, ...u },
                    s,
                ),
            [m, E, t, u, s],
        );
    return n
        ? (0, r.jsxs)(S, {
              children: [
                  (0, r.jsx)("div", {
                      className: y.R,
                      children: (0, r.jsx)(o.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  A,
              ],
          })
        : A;
});
