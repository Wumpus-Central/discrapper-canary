var n = e(414123),
    o = e(890084),
    s = e(4505),
    i = e(155084),
    u = e(176986),
    c = TypeError,
    a = Object.defineProperty,
    f = Object.getOwnPropertyDescriptor,
    p = "enumerable",
    l = "configurable",
    v = "writable";
r.f = n
    ? s
        ? function (t, r, e) {
              if (
                  (i(t),
                  (r = u(r)),
                  i(e),
                  "function" == typeof t && "prototype" === r && "value" in e && v in e && !e[v])
              ) {
                  var n = f(t, r);
                  n &&
                      n[v] &&
                      ((t[r] = e.value),
                      (e = {
                          configurable: l in e ? e[l] : n[l],
                          enumerable: p in e ? e[p] : n[p],
                          writable: !1,
                      }));
              }
              return a(t, r, e);
          }
        : a
    : function (t, r, e) {
          if ((i(t), (r = u(r)), i(e), o))
              try {
                  return a(t, r, e);
              } catch (t) {}
          if ("get" in e || "set" in e) throw new c("Accessors not supported");
          return "value" in e && (t[r] = e.value), t;
      };
