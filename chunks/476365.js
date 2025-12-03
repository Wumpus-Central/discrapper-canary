n.d(t, {
    M: () => m,
    S: () => h,
}),
    n(388685);
var r = n(473749),
    i = n(481060),
    a = n(493773),
    o = n(710845),
    s = n(351402),
    l = n(122289),
    c = n(947673),
    u = n(720452),
    d = n(637286);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = new o.Z("useStripePaymentElementOptions"),
    m = function () {
        var e, t, n, a, o;
        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            l = (0, i.dQu)(i.TVs.colors.MODAL_BACKGROUND),
            c = (0, i.dQu)(i.TVs.colors.TEXT_STRONG),
            u = (0, i.dQu)(i.TVs.colors.INPUT_BACKGROUND),
            d = null != (e = s.theme) ? e : "flat",
            f = null != (t = s.colorText) ? t : c.hex(),
            p = null != (n = s.colorBackground) ? n : l.hex(),
            _ = null != (a = s.inputBackgroundColor) ? a : u.hex(),
            m = null != (o = s.tabBackgroundColor) ? o : u.hex();
        return {
            elementsAppearance: r.useMemo(
                () => ({
                    theme: d,
                    variables: {
                        colorText: f,
                        colorBackground: p,
                    },
                    rules: {
                        ".Input": { backgroundColor: _ },
                        ".Tab": { backgroundColor: m },
                    },
                }),
                [d, f, p, _, m],
            ),
            elementsAppearanceOptions: {
                theme: d,
                colorText: f,
                colorBackground: p,
                inputBackgroundColor: _,
                tabBackgroundColor: m,
            },
        };
    },
    h = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, o] = r.useState(void 0),
            [f, h] = r.useState(null),
            [g, E] = r.useState(!0),
            [b, y] = r.useState([]),
            [O, v] = r.useState({}),
            S = r.useCallback(async () => {
                var e;
                let n = (0, u.Q)({
                    ipCountryCode: null != (e = s.Z.ipCountryCode) ? e : "ALL",
                    location: "stripe_payment_element_options",
                }).countryPaymentMethods;
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, c.V)(n),
                        r = (0, d.Po)(t),
                        i = t.reduce((e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e), {});
                    y(r), v(i), o(e);
                } catch (e) {
                    h(e),
                        null != t && t(e),
                        _.error("there was an error on setup for Payment Elements: ", e),
                        (0, l.q2)(e, { tags: { source: "payment_elements" } });
                }
                E(!1);
            }, [t]);
        (0, a.ZP)(() => {
            S();
        });
        let { elementsAppearance: I, elementsAppearanceOptions: T } = m(n);
        return {
            setupError: f,
            elementsOptions: r.useMemo(
                () =>
                    g
                        ? null
                        : p(
                              { clientSecret: i },
                              {
                                  appearance: I,
                                  customPaymentMethods: b,
                                  paymentMethodCreation: "manual",
                              },
                          ),
                [I, i, b, g],
            ),
            setupIntentSecret: i,
            customPaymentMethods: b,
            customPaymentMethodIdsToSourceTypes: O,
            isLoading: g,
            elementsAppearanceOptions: T,
        };
    };
