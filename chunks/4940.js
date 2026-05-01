"use strict";
var i = n(257943),
    r = n(804272),
    s = n(516549),
    a = n(101968),
    o = n(706598),
    l = TypeError,
    u = Object.defineProperty,
    c = Object.getOwnPropertyDescriptor,
    d = "enumerable",
    _ = "configurable",
    f = "writable";
t.f = i
    ? s
        ? function (e, t, n) {
              if (
                  (a(e),
                  (t = o(t)),
                  a(n),
                  "function" == typeof e && "prototype" === t && "value" in n && f in n && !n[f])
              ) {
                  var i = c(e, t);
                  i &&
                      i[f] &&
                      ((e[t] = n.value),
                      (n = { configurable: _ in n ? n[_] : i[_], enumerable: d in n ? n[d] : i[d], writable: !1 }));
              }
              return u(e, t, n);
          }
        : u
    : function (e, t, n) {
          if ((a(e), (t = o(t)), a(n), r))
              try {
                  return u(e, t, n);
              } catch (e) {}
          if ("get" in n || "set" in n) throw new l("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
      };
