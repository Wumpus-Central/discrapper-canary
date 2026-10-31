(n.d(t, { u: () => o }), n(321073));
var l = n(582128),
    i = n(901930),
    r = n(477900),
    a = n(900730),
    s = n(281044);
function o() {
    let { errorMessage: e } = (0, i.j)({}),
        t = (function () {
            let { paymentSourceId: e, checkoutPaymentSources: t } = (0, s.t4)((e) => ({
                    paymentSourceId: e.paymentSourceId,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                })),
                {
                    relocationCountry: n,
                    relocationCurrencyCode: i,
                    willForfeitGiftCardBalance: o,
                } = l.useMemo(() => {
                    let n = null != e ? t.find((t) => t.id === e) : null;
                    return {
                        relocationCountry: n?.relocationCountry ?? null,
                        relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                        willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                    };
                }, [t, e]);
            return l.useMemo(
                () =>
                    null == n
                        ? null
                        : {
                              directContent: (0, r.jsx)(a.c, {
                                  relocationCountry: n,
                                  relocationCurrencyCode: i,
                                  willForfeitGiftCardBalance: o,
                                  role: "status",
                              }),
                              key: "store-relocation-notice",
                          },
                [n, i, o],
            );
        })();
    return {
        errorMessage: e,
        richNotices: l.useMemo(() => {
            let e = [];
            return (null != t && e.push(t), e);
        }, [t]),
    };
}
