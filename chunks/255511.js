n.d(t, { Z: () => a });
var r = n(513866),
    o = n(205591);
function a() {
    return (a = r
        ? o(r).call(r)
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(null, arguments);
}
