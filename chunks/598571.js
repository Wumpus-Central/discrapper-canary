"use strict";
n.d(t, { A: () => o });
var r = n(937357),
    a = n(862699);
function o() {
    return (o = r
        ? a(r).call(r)
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(null, arguments);
}
