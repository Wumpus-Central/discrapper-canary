"use strict";
var n = e(486816),
    o = e(407057),
    s = e(459547),
    i = e(532459),
    u = Object.isExtensible;
t.exports =
    n(function () {
        u(1);
    }) || i
        ? function (t) {
              return !!o(t) && (!i || "ArrayBuffer" !== s(t)) && (!u || u(t));
          }
        : u;
