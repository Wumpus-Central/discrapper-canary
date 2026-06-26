"use strict";
n.d(t, { KS: () => S, Wf: () => A, ZB: () => T });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(17928),
    o = n(783327),
    l = n(166532),
    u = n(287809),
    c = n(174459),
    d = n(240248),
    _ = n(71532),
    h = n(116673),
    f = n(942340),
    p = n(648335),
    E = n(652215),
    m = n(818348),
    g = n(492453);
let A = r.memo(function (e) {
    let {
            paymentMethodOrder: t,
            wallets: n = [],
            customPaymentMethodIdsToSourceTypes: o,
            analyticsContext: d,
            options: _,
            onChange: h,
            step: f,
            ...g
        } = e,
        A = (0, a.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.email : null;
        }),
        I = (0, a.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return null != e ? e.globalName : null;
        }),
        T = r.useCallback(
            (e) => {
                if (f !== l.pn.PAYMENT_ELEMENT) return;
                let t = (0, p.Wn)(e.value.type, o);
                if ((null != h && h(e, t), null != d)) {
                    let { contextMetadata: n, activitySessionId: i, analyticsData: r } = d,
                        s = null != t && t !== m.he.PAYMENT_REQUEST ? p.mr[t] : e.value.type;
                    c.default.track(E.HAw.PAYMENT_ELEMENT_CHANGED, {
                        load_id: n.loadId,
                        activity_session_id: i,
                        payment_element_selected_method: s,
                        payment_source_type: t,
                        complete: e.complete,
                        empty: e.empty,
                        ...("string" == typeof r.location ? { location: r.location } : void 0),
                    });
                }
            },
            [h, d, f, o],
        ),
        S = r.useMemo(
            () => ({
                applePay: n.includes("applePay") ? "auto" : "never",
                googlePay: n.includes("googlePay") ? "auto" : "never",
                link: n.includes("link") ? "auto" : "never",
            }),
            [n],
        ),
        y = r.useMemo(
            () => ({ billingDetails: { ...(null != A && { email: A }), ...(null != I && { name: I }) } }),
            [A, I],
        ),
        C = r.useMemo(
            () => ({
                id: "stripe-payment-element",
                options: { layout: { type: "tabs" }, wallets: S, defaultValues: y, paymentMethodOrder: t, ..._ },
                onChange: T,
                ...g,
            }),
            [S, y, _, g, T, t],
        );
    return (0, i.jsx)(s.PaymentElement, { ...C });
});
function I(e) {
    let { children: t } = e,
        n = (0, o.S)(),
        { elementsAppearance: r } = (0, f.E)(),
        a = (0, _.PU)();
    return (0, i.jsx)(s.Elements, {
        stripe: n,
        options: { appearance: r, locale: a, mode: "setup", currency: "usd" },
        children: t,
    });
}
function T(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
}
let S = r.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: a,
            billingAddressInfo: o,
            internalKey: l,
            ...u
        } = e,
        c = (0, h.z)(),
        f = null != c && c.length > 0 ? c[0] : (0, d.uJ)(o.country) ? "" : o.country,
        p = r.useMemo(() => {
            let { name: e, address: t } = (0, _._Z)({ ...o, country: f });
            return null != t && T(t)
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
                    ? { address: { country: f } }
                    : void 0;
        }, [o, a, f]),
        E = r.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        m = r.useMemo(
            () =>
                (0, i.jsx)(
                    s.AddressElement,
                    { options: { mode: "billing", defaultValues: p, allowedCountries: E, ...t }, ...u },
                    l,
                ),
            [p, E, t, u, l],
        );
    return n
        ? (0, i.jsxs)(I, {
              children: [
                  (0, i.jsx)("div", {
                      className: g.R,
                      children: (0, i.jsx)(s.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  m,
              ],
          })
        : m;
});
