"use strict";
var r = n(257943),
    i = n(804272),
    s = n(516549),
    a = n(101968),
    o = n(706598),
    l = TypeError,
    u = Object.defineProperty,
    c = Object.getOwnPropertyDescriptor,
    d = "enumerable",
    _ = "configurable",
    f = "writable";
t.f = r
    ? s
        ? function (e, t, n) {
              if (
                  (a(e),
                  (t = o(t)),
                  a(n),
                  "function" == typeof e && "prototype" === t && "value" in n && f in n && !n[f])
              ) {
                  var r = c(e, t);
                  r &&
                      r[f] &&
                      ((e[t] = n.value),
                      (n = { configurable: _ in n ? n[_] : r[_], enumerable: d in n ? n[d] : r[d], writable: !1 }));
              }
              return u(e, t, n);
          }
        : u
    : function (e, t, n) {
          if ((a(e), (t = o(t)), a(n), i))
              try {
                  return u(e, t, n);
              } catch (e) {}
          if ("get" in n || "set" in n) throw new l("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
      };
