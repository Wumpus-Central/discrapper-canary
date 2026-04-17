"use strict";
n.d(t, { f: () => c });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(546605),
    o = n(900730),
    l = n(156312),
    u = n(305114);
function c() {
    let e = (0, a.vg)("StatefulCheckoutStoreRelocationNotice"),
        { paymentSourceId: t } = (0, l.P5)(),
        {
            relocationCountry: n,
            relocationCurrencyCode: c,
            willForfeitGiftCardBalance: d,
        } = (0, s.cf)([u.A], () => {
            let e =
                null != t
                    ? (u.A.getPaymentSourceRecords().find((e) => e.id === t) ??
                      u.A.getSubscriptionPreviewPaymentSourceRecords().find((e) => e.id === t))
                    : null;
            return {
                relocationCountry: e?.relocationCountry ?? null,
                relocationCurrencyCode: e?.relocationCurrencyCode ?? null,
                willForfeitGiftCardBalance: e?.willForfeitGiftCardBalance ?? !1,
            };
        }, [t]);
    return i.useMemo(
        () =>
            e && null != n && null != c
                ? {
                      directContent: (0, r.jsx)(o.c, {
                          relocationCountry: n,
                          relocationCurrencyCode: c,
                          willForfeitGiftCardBalance: d,
                      }),
                      key: "store-relocation-notice",
                  }
                : null,
        [e, n, c, d],
    );
}
