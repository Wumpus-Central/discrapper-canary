var r = n(507604),
    i = n(64637),
    a = n(282108),
    o = n(179122),
    s = n(459316),
    l = TypeError,
    c = Object.defineProperty,
    u = Object.getOwnPropertyDescriptor,
    d = 'enumerable',
    _ = 'configurable',
    f = 'writable';
t.f = r
    ? a
        ? function (e, t, n) {
              if ((o(e), (t = s(t)), o(n), 'function' == typeof e && 'prototype' === t && 'value' in n && f in n && !n[f])) {
                  var r = u(e, t);
                  r &&
                      r[f] &&
                      ((e[t] = n.value),
                      (n = {
                          configurable: _ in n ? n[_] : r[_],
                          enumerable: d in n ? n[d] : r[d],
                          writable: !1
                      }));
              }
              return c(e, t, n);
          }
        : c
    : function (e, t, n) {
          if ((o(e), (t = s(t)), o(n), i))
              try {
                  return c(e, t, n);
              } catch (e) {}
          if ('get' in n || 'set' in n) throw new l('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
      };
