"use strict";
var r = n(344815),
    i = n(339626),
    a = n(647055),
    s = n(380744)("toStringTag"),
    o = Object,
    l =
        "Arguments" ===
        a(
            (function () {
                return arguments;
            })(),
        ),
    u = function (e, t) {
        try {
            return e[t];
        } catch (e) {}
    };
e.exports = r
    ? a
    : function (e) {
          var t, n, r;
          return void 0 === e
              ? "Undefined"
              : null === e
                ? "Null"
                : "string" == typeof (n = u((t = o(e)), s))
                  ? n
                  : l
                    ? a(t)
                    : "Object" === (r = a(t)) && i(t.callee)
                      ? "Arguments"
                      : r;
      };
