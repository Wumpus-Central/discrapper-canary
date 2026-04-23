"use strict";
r.d(t, { A: () => l });
var n = r(477891),
    o = r(536132),
    a = r(375987),
    i = n.A ? n.A.toStringTag : void 0;
let l = function (e) {
    return null == e
        ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
        : i && i in Object(e)
          ? (0, o.A)(e)
          : (0, a.A)(e);
};
