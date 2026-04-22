n.d(t, { f: () => u });
var l = n(627968),
    i = n(64700),
    a = n(546605),
    r = n(364995),
    s = n(900730),
    o = n(156312);
function u() {
    let e = (0, a.vg)("StatefulCheckoutStoreRelocationNotice"),
        { paymentSourceId: t } = (0, o.P5)(),
        { paymentSourceRecords: n } = (0, r.Fy)(),
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
            e && null != u
                ? {
                      directContent: (0, l.jsx)(s.c, {
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
