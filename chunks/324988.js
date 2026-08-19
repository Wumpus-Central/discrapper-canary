var n = e(344815),
    o = e(339626),
    i = e(647055),
    u = e(380744)("toStringTag"),
    a = Object,
    c =
        "Arguments" ===
        i(
            (function () {
                return arguments;
            })(),
        ),
    f = function (r, t) {
        try {
            return r[t];
        } catch (r) {}
    };
r.exports = n
    ? i
    : function (r) {
          var t, e, n;
          return void 0 === r
              ? "Undefined"
              : null === r
                ? "Null"
                : "string" == typeof (e = f((t = a(r)), u))
                  ? e
                  : c
                    ? i(t)
                    : "Object" === (n = i(t)) && o(t.callee)
                      ? "Arguments"
                      : n;
      };
