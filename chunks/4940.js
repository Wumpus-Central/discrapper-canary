var n = e(257943),
    o = e(804272),
    i = e(516549),
    a = e(101968),
    u = e(706598),
    c = TypeError,
    f = Object.defineProperty,
    p = Object.getOwnPropertyDescriptor,
    s = "enumerable",
    y = "configurable",
    v = "writable";
t.f = n
    ? i
        ? function (r, t, e) {
              if (
                  (a(r),
                  (t = u(t)),
                  a(e),
                  "function" == typeof r && "prototype" === t && "value" in e && v in e && !e[v])
              ) {
                  var n = p(r, t);
                  n &&
                      n[v] &&
                      ((r[t] = e.value),
                      (e = { configurable: y in e ? e[y] : n[y], enumerable: s in e ? e[s] : n[s], writable: !1 }));
              }
              return f(r, t, e);
          }
        : f
    : function (r, t, e) {
          if ((a(r), (t = u(t)), a(e), o))
              try {
                  return f(r, t, e);
              } catch (r) {}
          if ("get" in e || "set" in e) throw new c("Accessors not supported");
          return "value" in e && (r[t] = e.value), r;
      };
