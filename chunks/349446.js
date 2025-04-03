var e = n(447631),
    o = n(10012),
    i = n(228129),
    u = n(28886),
    s = n(591794),
    c = TypeError,
    f = Object.defineProperty,
    a = Object.getOwnPropertyDescriptor,
    p = 'enumerable',
    v = 'configurable',
    l = 'writable';
r.f = e
    ? i
        ? function (t, r, n) {
              if ((u(t), (r = s(r)), u(n), 'function' == typeof t && 'prototype' === r && 'value' in n && l in n && !n[l])) {
                  var e = a(t, r);
                  e &&
                      e[l] &&
                      ((t[r] = n.value),
                      (n = {
                          configurable: v in n ? n[v] : e[v],
                          enumerable: p in n ? n[p] : e[p],
                          writable: !1
                      }));
              }
              return f(t, r, n);
          }
        : f
    : function (t, r, n) {
          if ((u(t), (r = s(r)), u(n), o))
              try {
                  return f(t, r, n);
              } catch (t) {}
          if ('get' in n || 'set' in n) throw new c('Accessors not supported');
          return 'value' in n && (t[r] = n.value), t;
      };
