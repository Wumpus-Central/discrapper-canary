var n = e(257943),
    o = e(804272),
    i = e(516549),
    u = e(101968),
    a = e(706598),
    c = TypeError,
    f = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    p = "enumerable",
    l = "configurable",
    v = "writable";
t.f = n
    ? i
        ? function (r, t, e) {
              if (
                  (u(r),
                  (t = a(t)),
                  u(e),
                  "function" == typeof r && "prototype" === t && "value" in e && v in e && !e[v])
              ) {
                  var n = s(r, t);
                  n &&
                      n[v] &&
                      ((r[t] = e.value),
                      (e = { configurable: l in e ? e[l] : n[l], enumerable: p in e ? e[p] : n[p], writable: !1 }));
              }
              return f(r, t, e);
          }
        : f
    : function (r, t, e) {
          if ((u(r), (t = a(t)), u(e), o))
              try {
                  return f(r, t, e);
              } catch (r) {}
          if ("get" in e || "set" in e) throw new c("Accessors not supported");
          return "value" in e && (r[t] = e.value), r;
      };
