n.d(t, { KS: () => N, Wf: () => y, ZB: () => g });
var l = n(477900),
    o = n(582128),
    r = n(643909),
    i = n(17928),
    a = n(783327),
    u = n(166532),
    s = n(287809),
    c = n(174459),
    d = n(240248),
    C = n(71532),
    h = n(116673),
    p = n(942340),
    m = n(648335),
    E = n(652215),
    _ = n(818348),
    f = n(400400);
let y = o.memo(function (e) {
    let {
            paymentMethodOrder: t,
            wallets: n = [],
            customPaymentMethodIdsToSourceTypes: a,
            analyticsContext: d,
            options: C,
            onChange: h,
            step: p,
            ...f
        } = e,
        y = (0, i.bG)([s.default], () => {
            let e = s.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        A = (0, i.bG)([s.default], () => {
            let e = s.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        g = o.useCallback(
            (e) => {
                if (p !== u.pn.PAYMENT_ELEMENT) return;
                let t = (0, m.Wn)(e.value.type, a);
                if ((null != h && h(e, t), null != d)) {
                    let { contextMetadata: n, activitySessionId: l, analyticsData: o } = d,
                        r = null != t && t !== _.he.PAYMENT_REQUEST ? m.mr[t] : e.value.type;
                    c.default.track(E.HAw.PAYMENT_ELEMENT_CHANGED, {
                        load_id: n.loadId,
                        activity_session_id: l,
                        payment_element_selected_method: r,
                        payment_source_type: t,
                        complete: e.complete,
                        empty: e.empty,
                        ...("string" == typeof o.location ? { location: o.location } : void 0),
                    });
                }
            },
            [h, d, p, a],
        ),
        N = o.useMemo(
            () => ({
                applePay: n.includes("applePay") ? "auto" : "never",
                googlePay: n.includes("googlePay") ? "auto" : "never",
                link: n.includes("link") ? "auto" : "never",
            }),
            [n],
        ),
        S = o.useMemo(
            () => ({ billingDetails: { ...(null != y && { email: y }), ...(null != A && { name: A }) } }),
            [y, A],
        ),
        T = o.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: N, defaultValues: S, paymentMethodOrder: t, ...C },
                onChange: g,
                ...f,
            }),
            [N, S, C, f, g, t],
        );
    return (0, l.jsx)(r.PaymentElement, { ...T });
});
function A(e) {
    let { children: t } = e,
        n = (0, a.S)(),
        { elementsAppearance: o } = (0, p.E)(),
        i = (0, C.PU)();
    return (0, l.jsx)(r.Elements, {
        stripe: n,
        options: { appearance: o, locale: i, mode: "setup", currency: "usd" },
        children: t,
    });
}
function g(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let N = o.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: i,
            billingAddressInfo: a,
            internalKey: u,
            ...s
        } = e,
        c = (0, h.z)(),
        p = null != c && c.length > 0 ? c[0] : (0, d.uJ)(a.country) ? "" : a.country,
        m = o.useMemo(() => {
            let { name: e, address: t } = (0, C._Z)({ ...a, country: p });
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
        E = o.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        _ = o.useMemo(
            () =>
                (0, l.jsx)(
                    r.AddressElement,
                    { options: { mode: "billing", defaultValues: m, allowedCountries: E, ...t }, ...s },
                    u,
                ),
            [m, E, t, s, u],
        );
    return n
        ? (0, l.jsxs)(A, {
              children: [
                  (0, l.jsx)("div", {
                      className: f.R,
                      children: (0, l.jsx)(r.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  _,
              ],
          })
        : _;
});
