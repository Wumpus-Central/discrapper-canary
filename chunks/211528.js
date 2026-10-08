t.d(n, { KS: () => y, Wf: () => g, ZB: () => x });
var l = t(477900),
    r = t(582128),
    i = t(643909),
    a = t(17928),
    s = t(783327),
    u = t(166532),
    c = t(287809),
    o = t(174459),
    d = t(240248),
    m = t(71532),
    h = t(116673),
    E = t(942340),
    f = t(648335),
    A = t(652215),
    p = t(818348),
    N = t(400400);
let g = r.memo(function (e) {
    let {
            paymentMethodOrder: n,
            wallets: t = [],
            customPaymentMethodIdsToSourceTypes: s,
            analyticsContext: d,
            options: m,
            onChange: h,
            step: E,
            ...N
        } = e,
        g = (0, a.bG)([c.default], () => {
            let e = c.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        C = (0, a.bG)([c.default], () => {
            let e = c.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        x = r.useCallback(
            (e) => {
                if (E !== u.pn.PAYMENT_ELEMENT) return;
                let n = (0, f.Wn)(e.value.type, s);
                if ((null != h && h(e, n), null != d)) {
                    let { contextMetadata: t, activitySessionId: l, analyticsData: r } = d,
                        i = null != n && n !== p.he.PAYMENT_REQUEST ? f.mr[n] : e.value.type;
                    o.default.track(A.HAw.PAYMENT_ELEMENT_CHANGED, {
                        load_id: t.loadId,
                        activity_session_id: l,
                        payment_element_selected_method: i,
                        payment_source_type: n,
                        complete: e.complete,
                        empty: e.empty,
                        ...("string" == typeof r.location ? { location: r.location } : void 0),
                    });
                }
            },
            [h, d, E, s],
        ),
        y = r.useMemo(
            () => ({
                applePay: t.includes("applePay") ? "auto" : "never",
                googlePay: t.includes("googlePay") ? "auto" : "never",
                link: t.includes("link") ? "auto" : "never",
            }),
            [t],
        ),
        j = r.useMemo(
            () => ({ billingDetails: { ...(null != g && { email: g }), ...(null != C && { name: C }) } }),
            [g, C],
        ),
        v = r.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: y, defaultValues: j, paymentMethodOrder: n, ...m },
                onChange: x,
                ...N,
            }),
            [y, j, m, N, x, n],
        );
    return (0, l.jsx)(i.PaymentElement, { ...v });
});
function C(e) {
    let { children: n } = e,
        t = (0, s.S)(),
        { elementsAppearance: r } = (0, E.E)(),
        a = (0, m.PU)();
    return (0, l.jsx)(i.Elements, {
        stripe: t,
        options: { appearance: r, locale: a, mode: "setup", currency: "usd" },
        children: n,
    });
}
function x(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let y = r.memo(function (e) {
    let {
            options: n,
            renderAsStandaloneElement: t,
            addressElementOnChangeFired: a,
            billingAddressInfo: s,
            internalKey: u,
            ...c
        } = e,
        o = (0, h.z)(),
        E = null != o && o.length > 0 ? o[0] : (0, d.uJ)(s.country) ? "" : s.country,
        f = r.useMemo(() => {
            let { name: e, address: n } = (0, m._Z)({ ...s, country: E });
            return null != n && x(n)
                ? {
                      ...(null != e && "" !== e && { name: e }),
                      address: Object.fromEntries(
                          Object.entries(n).filter((e) => {
                              let [n, t] = e;
                              return void 0 !== t;
                          }),
                      ),
                  }
                : null != e && "" !== e
                  ? { name: e }
                  : null != n && null != n.country && a
                    ? { address: { country: E } }
                    : void 0;
        }, [s, a, E]),
        A = r.useMemo(() => (null != o && o.length > 0 ? o : void 0), [o]),
        p = r.useMemo(
            () =>
                (0, l.jsx)(
                    i.AddressElement,
                    { options: { mode: "billing", defaultValues: f, allowedCountries: A, ...n }, ...c },
                    u,
                ),
            [f, A, n, c, u],
        );
    return t
        ? (0, l.jsxs)(C, {
              children: [
                  (0, l.jsx)("div", {
                      className: N.R,
                      children: (0, l.jsx)(i.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  p,
              ],
          })
        : p;
});
