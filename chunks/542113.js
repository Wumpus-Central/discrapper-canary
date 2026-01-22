e.d(n, { A: () => r });
function r() {
    return (r = Object.assign
        ? Object.assign.bind()
        : function (t) {
              for (var n = 1; n < arguments.length; n++) {
                  var e = arguments[n];
                  for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
              }
              return t;
          }).apply(null, arguments);
}
