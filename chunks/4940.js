var r = n(257943),
    i = n(804272),
    a = n(516549),
    s = n(101968),
    o = n(706598),
    l = TypeError,
    c = Object.defineProperty,
    u = Object.getOwnPropertyDescriptor,
    d = "enumerable",
    f = "configurable",
    p = "writable";
t.f = r
    ? a
        ? function (e, t, n) {
              if (
                  (s(e),
                  (t = o(t)),
                  s(n),
                  "function" == typeof e && "prototype" === t && "value" in n && p in n && !n[p])
              ) {
                  var r = u(e, t);
                  r &&
                      r[p] &&
                      ((e[t] = n.value),
                      (n = {
                          configurable: f in n ? n[f] : r[f],
                          enumerable: d in n ? n[d] : r[d],
                          writable: !1,
                      }));
              }
              return c(e, t, n);
          }
        : c
    : function (e, t, n) {
          if ((s(e), (t = o(t)), s(n), i))
              try {
                  return c(e, t, n);
              } catch (e) {}
          if ("get" in n || "set" in n) throw new l("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
      };
