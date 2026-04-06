n.d(e, { A: () => r });
function r() {
    return (r = Object.assign
        ? Object.assign.bind()
        : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
          }).apply(null, arguments);
}
