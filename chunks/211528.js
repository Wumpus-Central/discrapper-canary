l.d(n, { KS: () => j, Wf: () => g, ZB: () => C });
var t = l(477900),
    r = l(582128),
    i = l(643909),
    a = l(17928),
    s = l(783327),
    u = l(166532),
    c = l(287809),
    o = l(174459),
    d = l(240248),
    m = l(71532),
    h = l(116673),
    f = l(942340),
    E = l(648335),
    A = l(652215),
    N = l(818348),
    p = l(400400);
let g = r.memo(function (e) {
    let {
            paymentMethodOrder: n,
            wallets: l = [],
            customPaymentMethodIdsToSourceTypes: s,
            analyticsContext: d,
            options: m,
            onChange: h,
            step: f,
            ...p
        } = e,
        g = (0, a.bG)([c.default], () => {
            let e = c.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        x = (0, a.bG)([c.default], () => {
            let e = c.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        C = r.useCallback(
            (e) => {
                if (f !== u.pn.PAYMENT_ELEMENT) return;
                let n = (0, E.Wn)(e.value.type, s);
                if ((null != h && h(e, n), null != d)) {
                    let { contextMetadata: l, activitySessionId: t, analyticsData: r } = d,
                        i = null != n && n !== N.he.PAYMENT_REQUEST ? E.mr[n] : e.value.type;
                    o.default.track(A.HAw.PAYMENT_ELEMENT_CHANGED, {
                        load_id: l.loadId,
                        activity_session_id: t,
                        payment_element_selected_method: i,
                        payment_source_type: n,
                        complete: e.complete,
                        empty: e.empty,
                        ...("string" == typeof r.location ? { location: r.location } : void 0),
                    });
                }
            },
            [h, d, f, s],
        ),
        j = r.useMemo(
            () => ({
                applePay: l.includes("applePay") ? "auto" : "never",
                googlePay: l.includes("googlePay") ? "auto" : "never",
                link: l.includes("link") ? "auto" : "never",
            }),
            [l],
        ),
        v = r.useMemo(
            () => ({ billingDetails: { ...(null != g && { email: g }), ...(null != x && { name: x }) } }),
            [g, x],
        ),
        _ = r.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: j, defaultValues: v, paymentMethodOrder: n, ...m },
                onChange: C,
                ...p,
            }),
            [j, v, m, p, C, n],
        );
    return (0, t.jsx)(i.PaymentElement, { ..._ });
});
function x(e) {
    let { children: n } = e,
        l = (0, s.S)(),
        { elementsAppearance: r } = (0, f.E)(),
        a = (0, m.PU)();
    return (0, t.jsx)(i.Elements, {
        stripe: l,
        options: { appearance: r, locale: a, mode: "setup", currency: "usd" },
        children: n,
    });
}
function C(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let j = r.memo(function (e) {
    let {
            options: n,
            renderAsStandaloneElement: l,
            addressElementOnChangeFired: a,
            billingAddressInfo: s,
            internalKey: u,
            ...c
        } = e,
        o = (0, h.z)(),
        f = null != o && o.length > 0 ? o[0] : (0, d.uJ)(s.country) ? "" : s.country,
        E = r.useMemo(() => {
            let { name: e, address: n } = (0, m._Z)({ ...s, country: f });
            return null != n && C(n)
                ? {
                      ...(null != e && "" !== e && { name: e }),
                      address: Object.fromEntries(
                          Object.entries(n).filter((e) => {
                              let [n, l] = e;
                              return void 0 !== l;
                          }),
                      ),
                  }
                : null != e && "" !== e
                  ? { name: e }
                  : null != n && null != n.country && a
                    ? { address: { country: f } }
                    : void 0;
        }, [s, a, f]),
        A = r.useMemo(() => (null != o && o.length > 0 ? o : void 0), [o]),
        N = r.useMemo(
            () =>
                (0, t.jsx)(
                    i.AddressElement,
                    { options: { mode: "billing", defaultValues: E, allowedCountries: A, ...n }, ...c },
                    u,
                ),
            [E, A, n, c, u],
        );
    return l
        ? (0, t.jsxs)(x, {
              children: [
                  (0, t.jsx)("div", {
                      className: p.R,
                      children: (0, t.jsx)(i.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  N,
              ],
          })
        : N;
});
