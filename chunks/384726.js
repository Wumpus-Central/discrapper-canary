"use strict";
n.d(t, { A: () => i });
var r = n(832946);
function i(e) {
    return null == e
        ? {}
        : Object.entries(e).reduce((e, t) => {
              let [n, i] = t;
              return (
                  (e[n] = {
                      countryPrices: {
                          countryCode: i.country_prices.country_code,
                          prices: i.country_prices.prices.map((e) => (0, r.n_)(e, !0)),
                      },
                      paymentSourcePrices: {},
                  }),
                  e
              );
          }, {});
}
