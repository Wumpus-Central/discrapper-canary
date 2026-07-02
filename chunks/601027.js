"use strict";
n.d(t, { u: () => a });
var r = /^(38190|98365)$/.test(n.j)
    ? null
    : {
          ceil: Math.ceil,
          round: Math.round,
          floor: Math.floor,
          trunc: function (e) {
              return e < 0 ? Math.ceil(e) : Math.floor(e);
          },
      };
function a(e) {
    return e ? r[e] : r.trunc;
}
