var r = n(447631),
    i = n(10012),
    o = n(228129),
    a = n(28886),
    s = n(591794),
    l = TypeError,
    c = Object.defineProperty,
    u = Object.getOwnPropertyDescriptor,
    d = 'enumerable',
    f = 'configurable',
    p = 'writable';
t.f = r
    ? o
        ? function (e, t, n) {
              if ((a(e), (t = s(t)), a(n), 'function' == typeof e && 'prototype' === t && 'value' in n && p in n && !n[p])) {
                  var r = u(e, t);
                  r &&
                      r[p] &&
                      ((e[t] = n.value),
                      (n = {
                          configurable: f in n ? n[f] : r[f],
                          enumerable: d in n ? n[d] : r[d],
                          writable: !1
                      }));
              }
              return c(e, t, n);
          }
        : c
    : function (e, t, n) {
          if ((a(e), (t = s(t)), a(n), i))
              try {
                  return c(e, t, n);
              } catch (e) {}
          if ('get' in n || 'set' in n) throw new l('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
      };
