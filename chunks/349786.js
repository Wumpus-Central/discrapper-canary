n.d(t, { f: () => c, k: () => d });
var l = n(627968),
    a = n(64700),
    i = n(546605),
    r = n(426398),
    s = n(900730),
    o = n(94420),
    u = n(209143);
function c() {
    let e = (0, i.vg)("StatefulCheckoutStoreRelocationNotice"),
        t = (0, o.t4)((e) => e.paymentSourceId),
        n = (0, r.kc)(),
        {
            relocationCountry: u,
            relocationCurrencyCode: c,
            willForfeitGiftCardBalance: d,
        } = a.useMemo(() => {
            let e = null != t ? n.find((e) => e.id === t) : null;
            return {
                relocationCountry: e?.relocationCountry ?? null,
                relocationCurrencyCode: e?.relocationCurrencyCode ?? null,
                willForfeitGiftCardBalance: e?.willForfeitGiftCardBalance ?? !1,
            };
        }, [n, t]);
    return a.useMemo(
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
function d(e) {
    let { location: t, paymentSourceId: n } = e,
        a = (0, i.vg)(t),
        o = (0, r.kc)(),
        c = a ? (o.find((e) => e.id === n) ?? null) : null;
    return c?.relocationCountry == null
        ? null
        : (0, l.jsx)("div", {
              className: u.l,
              children: (0, l.jsx)(s.c, {
                  relocationCountry: c.relocationCountry,
                  relocationCurrencyCode: c.relocationCurrencyCode,
                  willForfeitGiftCardBalance: c.willForfeitGiftCardBalance,
              }),
          });
}
