"use strict";
n.d(t, { A: () => r });
var i = n(832946);
function r(e) {
    return null == e
        ? {}
        : Object.entries(e).reduce((e, t) => {
              let [n, r] = t;
              return (
                  (e[n] = {
                      countryPrices: {
                          countryCode: r.country_prices.country_code,
                          prices: r.country_prices.prices.map((e) => (0, i.n_)(e, !0)),
                      },
                      paymentSourcePrices: {},
                  }),
                  e
              );
          }, {});
}
