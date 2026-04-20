"use strict";
n.d(t, { f: () => u });
var r = n(627968),
    i = n(64700),
    s = n(546605),
    a = n(364995),
    o = n(900730),
    l = n(156312);
function u() {
    let e = (0, s.vg)("StatefulCheckoutStoreRelocationNotice"),
        { paymentSourceId: t } = (0, l.P5)(),
        { paymentSourceRecords: n } = (0, a.Fy)(),
        {
            relocationCountry: u,
            relocationCurrencyCode: c,
            willForfeitGiftCardBalance: d,
        } = i.useMemo(() => {
            let e = null != t ? n.find((e) => e.id === t) : null;
            return {
                relocationCountry: e?.relocationCountry ?? null,
                relocationCurrencyCode: e?.relocationCurrencyCode ?? null,
                willForfeitGiftCardBalance: e?.willForfeitGiftCardBalance ?? !1,
            };
        }, [n, t]);
    return i.useMemo(
        () =>
            e && null != u && null != c
                ? {
                      directContent: (0, r.jsx)(o.c, {
                          relocationCountry: u,
                          relocationCurrencyCode: c,
                          willForfeitGiftCardBalance: d,
                      }),
                      key: "store-relocation-notice",
                  }
                : null,
        [e, u, c, d],
    );
}
