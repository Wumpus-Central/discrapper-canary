var l = t(477900),
    n = t(582128),
    r = t(643909),
    s = t(855986),
    i = t(783327),
    u = t(166532),
    o = t(287809),
    c = t(129230),
    h = t(240248),
    d = t(558740),
    m = t(116673),
    p = t(942340),
    A = t(648335),
    E = t(652215),
    y = t(818348),
    C = t(400400);
let P = { type: "tabs" },
    g = n.memo(function (e) {
        let {
                paymentMethodOrder: a,
                wallets: t = [],
                layout: i = P,
                customPaymentMethodIdsToSourceTypes: h,
                analyticsContext: d,
                options: m,
                onChange: p,
                step: C,
                ...g
            } = e,
            x = (0, s.bG)([o.default], () => {
                let e = o.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            f = (0, s.bG)([o.default], () => {
                let e = o.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            T = n.useCallback(
                (e) => {
                    if (C !== u.pn.PAYMENT_ELEMENT) return;
                    let a = (0, A.Wn)(e.value.type, h);
                    if ((null != p && p(e, a), null != d)) {
                        let { contextMetadata: t, activitySessionId: l, analyticsData: n } = d,
                            r = null != a && a !== y.he.PAYMENT_REQUEST ? A.mr[a] : e.value.type;
                        c.default.track(E.HAw.PAYMENT_ELEMENT_CHANGED, {
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
                [p, d, C, h],
            ),
            _ = n.useMemo(
                () => ({
                    applePay: t.includes("applePay") ? "auto" : "never",
                    googlePay: t.includes("googlePay") ? "auto" : "never",
                    link: t.includes("link") ? "auto" : "never",
                }),
                [t],
            ),
            M = n.useMemo(
                () => ({ billingDetails: { ...(null != x && { email: x }), ...(null != f && { name: f }) } }),
                [x, f],
            ),
            v = n.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: i, wallets: _, defaultValues: M, paymentMethodOrder: a, ...m },
                    onChange: T,
                    ...g,
                }),
                [i, _, M, m, g, T, a],
            );
        return (0, l.jsx)(r.PaymentElement, { ...v });
    });
function x(e) {
    let { children: a } = e,
        t = (0, i.S)(),
        { elementsAppearance: n } = (0, p.E)(),
        s = (0, d.PU)();
    return (0, l.jsx)(r.Elements, {
        stripe: t,
        options: { appearance: n, locale: s, mode: "setup", currency: "usd" },
        children: a,
    });
}
function f(e) {
    return null != e && null != e && (!(0, h.uJ)(e.line1) || !(0, h.uJ)(e.city));
}
let T = n.memo(function (e) {
    let {
            options: a,
            renderAsStandaloneElement: t,
            addressElementOnChangeFired: s,
            billingAddressInfo: i,
            internalKey: u,
            ...o
        } = e,
        c = (0, m.z)(),
        p = null != c && c.length > 0 ? c[0] : (0, h.uJ)(i.country) ? "" : i.country,
        A = n.useMemo(() => {
            let { name: e, address: a } = (0, d._Z)({ ...i, country: p });
            return null != a && f(a)
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
                  : null != a && null != a.country && s
                    ? { address: { country: p } }
                    : void 0;
        }, [i, s, p]),
        E = n.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        y = n.useMemo(
            () =>
                (0, l.jsx)(
                    r.AddressElement,
                    { options: { mode: "billing", defaultValues: A, allowedCountries: E, ...a }, ...o },
                    u,
                ),
            [A, E, a, o, u],
        );
    return t
        ? (0, l.jsxs)(x, {
              children: [
                  (0, l.jsx)("div", {
                      className: C.R,
                      children: (0, l.jsx)(r.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  y,
              ],
          })
        : y;
});
t.d(a, {}, { KS: T, Wf: g, ZB: f });
