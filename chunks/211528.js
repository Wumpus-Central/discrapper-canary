var l = n(477900),
    o = n(582128),
    i = n(643909),
    r = n(855986),
    u = n(783327),
    a = n(166532),
    s = n(287809),
    c = n(129230),
    d = n(240248),
    C = n(558740),
    p = n(116673),
    h = n(942340),
    m = n(648335),
    f = n(652215),
    E = n(818348),
    _ = n(400400);
let A = o.memo(function (e) {
    let {
            paymentMethodOrder: t,
            wallets: n = [],
            customPaymentMethodIdsToSourceTypes: u,
            analyticsContext: d,
            options: C,
            onChange: p,
            step: h,
            ..._
        } = e,
        A = (0, r.bG)([s.default], () => {
            let e = s.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        g = (0, r.bG)([s.default], () => {
            let e = s.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        y = o.useCallback(
            (e) => {
                if (h !== a.pn.PAYMENT_ELEMENT) return;
                let t = (0, m.Wn)(e.value.type, u);
                if ((null != p && p(e, t), null != d)) {
                    let { contextMetadata: n, activitySessionId: l, analyticsData: o } = d,
                        i = null != t && t !== E.he.PAYMENT_REQUEST ? m.mr[t] : e.value.type;
                    c.default.track(f.HAw.PAYMENT_ELEMENT_CHANGED, {
                        load_id: n.loadId,
                        activity_session_id: l,
                        payment_element_selected_method: i,
                        payment_source_type: t,
                        complete: e.complete,
                        empty: e.empty,
                        ...("string" == typeof o.location ? { location: o.location } : void 0),
                    });
                }
            },
            [p, d, h, u],
        ),
        T = o.useMemo(
            () => ({
                applePay: n.includes("applePay") ? "auto" : "never",
                googlePay: n.includes("googlePay") ? "auto" : "never",
                link: n.includes("link") ? "auto" : "never",
            }),
            [n],
        ),
        S = o.useMemo(
            () => ({ billingDetails: { ...(null != A && { email: A }), ...(null != g && { name: g }) } }),
            [A, g],
        ),
        N = o.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: T, defaultValues: S, paymentMethodOrder: t, ...C },
                onChange: y,
                ..._,
            }),
            [T, S, C, _, y, t],
        );
    return (0, l.jsx)(i.PaymentElement, { ...N });
});
function g(e) {
    let { children: t } = e,
        n = (0, u.S)(),
        { elementsAppearance: o } = (0, h.E)(),
        r = (0, C.PU)();
    return (0, l.jsx)(i.Elements, {
        stripe: n,
        options: { appearance: o, locale: r, mode: "setup", currency: "usd" },
        children: t,
    });
}
function y(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let T = o.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: r,
            billingAddressInfo: u,
            internalKey: a,
            ...s
        } = e,
        c = (0, p.z)(),
        h = null != c && c.length > 0 ? c[0] : (0, d.uJ)(u.country) ? "" : u.country,
        m = o.useMemo(() => {
            let { name: e, address: t } = (0, C._Z)({ ...u, country: h });
            return null != t && y(t)
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
                  : null != t && null != t.country && r
                    ? { address: { country: h } }
                    : void 0;
        }, [u, r, h]),
        f = o.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        E = o.useMemo(
            () =>
                (0, l.jsx)(
                    i.AddressElement,
                    { options: { mode: "billing", defaultValues: m, allowedCountries: f, ...t }, ...s },
                    a,
                ),
            [m, f, t, s, a],
        );
    return n
        ? (0, l.jsxs)(g, {
              children: [
                  (0, l.jsx)("div", {
                      className: _.R,
                      children: (0, l.jsx)(i.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  E,
              ],
          })
        : E;
});
n.d(t, {}, { KS: T, Wf: A, ZB: y });
