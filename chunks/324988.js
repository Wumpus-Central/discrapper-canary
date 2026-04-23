var n = e(344815),
    o = e(339626),
    a = e(647055),
    i = e(380744)("toStringTag"),
    p = Object,
    u =
        "Arguments" ===
        a(
            (function () {
                return arguments;
            })(),
        ),
    y = function (r, t) {
        try {
            return r[t];
        } catch (r) {}
    };
r.exports = n
    ? a
    : function (r) {
          var t, e, n;
          return void 0 === r
              ? "Undefined"
              : null === r
                ? "Null"
                : "string" == typeof (e = y((t = p(r)), i))
                  ? e
                  : u
                    ? a(t)
                    : "Object" === (n = a(t)) && o(t.callee)
                      ? "Arguments"
                      : n;
      };
