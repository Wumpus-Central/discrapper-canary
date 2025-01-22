r.d(n, {
    l: function () {
        return o;
    }
});
var i = r(724458);
var a = r(301766);
function o(e) {
    return null == e
        ? {}
        : Object.keys(e).reduce((n, r) => {
              if (null == e) return n;
              let i = e[r];
              return (
                  (n[r] = {
                      countryPrices: {
                          countryCode: i.country_prices.country_code,
                          prices: i.country_prices.prices.map((e) => (0, a.kH)(e, !0))
                      },
                      paymentSourcePrices: {}
                  }),
                  n
              );
          }, {});
}
