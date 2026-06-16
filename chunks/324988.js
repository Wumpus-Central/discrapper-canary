"use strict";
var i = n(344815),
    r = n(339626),
    s = n(647055),
    a = n(380744)("toStringTag"),
    o = Object,
    l =
        "Arguments" ===
        s(
            (function () {
                return arguments;
            })(),
        ),
    u = function (e, t) {
        try {
            return e[t];
        } catch (e) {}
    };
e.exports = i
    ? s
    : function (e) {
          var t, n, i;
          return void 0 === e
              ? "Undefined"
              : null === e
                ? "Null"
                : "string" == typeof (n = u((t = o(e)), a))
                  ? n
                  : l
                    ? s(t)
                    : "Object" === (i = s(t)) && r(t.callee)
                      ? "Arguments"
                      : i;
      };
