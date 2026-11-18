var l = n(477900),
    i = n(582128),
    o = n(643909),
    r = n(855986),
    a = n(783327),
    u = n(166532),
    s = n(287809),
    c = n(129230),
    d = n(240248),
    C = n(558740),
    h = n(116673),
    p = n(942340),
    m = n(648335),
    f = n(652215),
    E = n(818348),
    _ = n(400400);
let g = { type: "tabs" },
    A = i.memo(function (e) {
        let {
                paymentMethodOrder: t,
                wallets: n = [],
                layout: a = g,
                customPaymentMethodIdsToSourceTypes: d,
                analyticsContext: C,
                options: h,
                onChange: p,
                step: _,
                ...A
            } = e,
            y = (0, r.bG)([s.default], () => {
                let e = s.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            S = (0, r.bG)([s.default], () => {
                let e = s.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            T = i.useCallback(
                (e) => {
                    if (_ !== u.pn.PAYMENT_ELEMENT) return;
                    let t = (0, m.Wn)(e.value.type, d);
                    if ((null != p && p(e, t), null != C)) {
                        let { contextMetadata: n, activitySessionId: l, analyticsData: i } = C,
                            o = null != t && t !== E.he.PAYMENT_REQUEST ? m.mr[t] : e.value.type;
                        c.default.track(f.HAw.PAYMENT_ELEMENT_CHANGED, {
                            load_id: n.loadId,
                            activity_session_id: l,
                            payment_element_selected_method: o,
                            payment_source_type: t,
                            complete: e.complete,
                            empty: e.empty,
                            ...("string" == typeof i.location ? { location: i.location } : void 0),
                        });
                    }
                },
                [p, C, _, d],
            ),
            k = i.useMemo(
                () => ({
                    applePay: n.includes("applePay") ? "auto" : "never",
                    googlePay: n.includes("googlePay") ? "auto" : "never",
                    link: n.includes("link") ? "auto" : "never",
                }),
                [n],
            ),
            N = i.useMemo(
                () => ({ billingDetails: { ...(null != y && { email: y }), ...(null != S && { name: S }) } }),
                [y, S],
            ),
            x = i.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: a, wallets: k, defaultValues: N, paymentMethodOrder: t, ...h },
                    onChange: T,
                    ...A,
                }),
                [a, k, N, h, A, T, t],
            );
        return (0, l.jsx)(o.PaymentElement, { ...x });
    });
function y(e) {
    let { children: t } = e,
        n = (0, a.S)(),
        { elementsAppearance: i } = (0, p.E)(),
        r = (0, C.PU)();
    return (0, l.jsx)(o.Elements, {
        stripe: n,
        options: { appearance: i, locale: r, mode: "setup", currency: "usd" },
        children: t,
    });
}
function S(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let T = i.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: r,
            billingAddressInfo: a,
            internalKey: u,
            ...s
        } = e,
        c = (0, h.z)(),
        p = null != c && c.length > 0 ? c[0] : (0, d.uJ)(a.country) ? "" : a.country,
        m = i.useMemo(() => {
            let { name: e, address: t } = (0, C._Z)({ ...a, country: p });
            return null != t && S(t)
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
                    ? { address: { country: p } }
                    : void 0;
        }, [a, r, p]),
        f = i.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        E = i.useMemo(
            () =>
                (0, l.jsx)(
                    o.AddressElement,
                    { options: { mode: "billing", defaultValues: m, allowedCountries: f, ...t }, ...s },
                    u,
                ),
            [m, f, t, s, u],
        );
    return n
        ? (0, l.jsxs)(y, {
              children: [
                  (0, l.jsx)("div", {
                      className: _.R,
                      children: (0, l.jsx)(o.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  E,
              ],
          })
        : E;
});
n.d(t, {}, { KS: T, Wf: A, ZB: S });
