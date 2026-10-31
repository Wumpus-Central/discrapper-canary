n.d(t, { KS: () => T, Wf: () => y, ZB: () => A });
var l = n(477900),
    o = n(582128),
    i = n(643909),
    r = n(17928),
    a = n(783327),
    s = n(166532),
    u = n(287809),
    c = n(174459),
    d = n(240248),
    C = n(71532),
    p = n(116673),
    h = n(942340),
    m = n(648335),
    f = n(652215),
    E = n(818348),
    _ = n(400400);
let y = o.memo(function (e) {
    let {
            paymentMethodOrder: t,
            wallets: n = [],
            customPaymentMethodIdsToSourceTypes: a,
            analyticsContext: d,
            options: C,
            onChange: p,
            step: h,
            ..._
        } = e,
        y = (0, r.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        g = (0, r.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        A = o.useCallback(
            (e) => {
                if (h !== s.pn.PAYMENT_ELEMENT) return;
                let t = (0, m.Wn)(e.value.type, a);
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
            [p, d, h, a],
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
            () => ({ billingDetails: { ...(null != y && { email: y }), ...(null != g && { name: g }) } }),
            [y, g],
        ),
        N = o.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: T, defaultValues: S, paymentMethodOrder: t, ...C },
                onChange: A,
                ..._,
            }),
            [T, S, C, _, A, t],
        );
    return (0, l.jsx)(i.PaymentElement, { ...N });
});
function g(e) {
    let { children: t } = e,
        n = (0, a.S)(),
        { elementsAppearance: o } = (0, h.E)(),
        r = (0, C.PU)();
    return (0, l.jsx)(i.Elements, {
        stripe: n,
        options: { appearance: o, locale: r, mode: "setup", currency: "usd" },
        children: t,
    });
}
function A(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let T = o.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: r,
            billingAddressInfo: a,
            internalKey: s,
            ...u
        } = e,
        c = (0, p.z)(),
        h = null != c && c.length > 0 ? c[0] : (0, d.uJ)(a.country) ? "" : a.country,
        m = o.useMemo(() => {
            let { name: e, address: t } = (0, C._Z)({ ...a, country: h });
            return null != t && A(t)
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
        }, [a, r, h]),
        f = o.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        E = o.useMemo(
            () =>
                (0, l.jsx)(
                    i.AddressElement,
                    { options: { mode: "billing", defaultValues: m, allowedCountries: f, ...t }, ...u },
                    s,
                ),
            [m, f, t, u, s],
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
