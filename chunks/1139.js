"use strict";
function n() {
    return (n = Object.assign
        ? Object.assign.bind()
        : function (t) {
              for (var r = 1; r < arguments.length; r++) {
                  var e = arguments[r];
                  for (var n in e) ({}).hasOwnProperty.call(e, n) && (t[n] = e[n]);
              }
              return t;
          }).apply(null, arguments);
}
e.d(r, { A: () => n });
