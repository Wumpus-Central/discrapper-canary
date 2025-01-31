n.d(t, { l: () => r }), n(724458);
var i = n(301766);
function r(e) {
    return null == e
        ? {}
        : Object.keys(e).reduce((t, n) => {
              if (null == e) return t;
              let r = e[n];
              return (
                  (t[n] = {
                      countryPrices: {
                          countryCode: r.country_prices.country_code,
                          prices: r.country_prices.prices.map((e) => (0, i.kH)(e, !0))
                      },
                      paymentSourcePrices: {}
                  }),
                  t
              );
          }, {});
}
