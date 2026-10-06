l.d(n, { KS: () => j, Wf: () => g, ZB: () => _ });
var t = l(477900),
    r = l(582128),
    i = l(643909),
    u = l(17928),
    s = l(783327),
    a = l(166532),
    o = l(287809),
    c = l(174459),
    d = l(240248),
    m = l(71532),
    E = l(116673),
    h = l(942340),
    f = l(870716),
    A = l(652215),
    N = l(818348),
    C = l(400400);
let g = r.memo(function (e) {
    let {
            paymentMethodOrder: n,
            wallets: l = [],
            customPaymentMethodIdsToSourceTypes: s,
            analyticsContext: d,
            options: m,
            onChange: E,
            step: h,
            ...C
        } = e,
        g = (0, u.bG)([o.default], () => {
            let e = o.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        p = (0, u.bG)([o.default], () => {
            let e = o.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        _ = r.useCallback(
            (e) => {
                if (h !== a.pn.PAYMENT_ELEMENT) return;
                let n = (0, f.Wn)(e.value.type, s);
                if ((null != E && E(e, n), null != d)) {
                    let { contextMetadata: l, activitySessionId: t, analyticsData: r } = d,
                        i = null != n && n !== N.he.PAYMENT_REQUEST ? f.mr[n] : e.value.type;
                    c.default.track(A.HAw.PAYMENT_ELEMENT_CHANGED, {
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
            [E, d, h, s],
        ),
        j = r.useMemo(
            () => ({
                applePay: l.includes("applePay") ? "auto" : "never",
                googlePay: l.includes("googlePay") ? "auto" : "never",
                link: l.includes("link") ? "auto" : "never",
            }),
            [l],
        ),
        x = r.useMemo(
            () => ({ billingDetails: { ...(null != g && { email: g }), ...(null != p && { name: p }) } }),
            [g, p],
        ),
        y = r.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: j, defaultValues: x, paymentMethodOrder: n, ...m },
                onChange: _,
                ...C,
            }),
            [j, x, m, C, _, n],
        );
    return (0, t.jsx)(i.PaymentElement, { ...y });
});
function p(e) {
    let { children: n } = e,
        l = (0, s.S)(),
        { elementsAppearance: r } = (0, h.E)(),
        u = (0, m.PU)();
    return (0, t.jsx)(i.Elements, {
        stripe: l,
        options: { appearance: r, locale: u, mode: "setup", currency: "usd" },
        children: n,
    });
}
function _(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let j = r.memo(function (e) {
    let {
            options: n,
            renderAsStandaloneElement: l,
            addressElementOnChangeFired: u,
            billingAddressInfo: s,
            internalKey: a,
            ...o
        } = e,
        c = (0, E.z)(),
        h = null != c && c.length > 0 ? c[0] : (0, d.uJ)(s.country) ? "" : s.country,
        f = r.useMemo(() => {
            let { name: e, address: n } = (0, m._Z)({ ...s, country: h });
            return null != n && _(n)
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
                  : null != n && null != n.country && u
                    ? { address: { country: h } }
                    : void 0;
        }, [s, u, h]),
        A = r.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        N = r.useMemo(
            () =>
                (0, t.jsx)(
                    i.AddressElement,
                    { options: { mode: "billing", defaultValues: f, allowedCountries: A, ...n }, ...o },
                    a,
                ),
            [f, A, n, o, a],
        );
    return l
        ? (0, t.jsxs)(p, {
              children: [
                  (0, t.jsx)("div", {
                      className: C.R,
                      children: (0, t.jsx)(i.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  N,
              ],
          })
        : N;
});
