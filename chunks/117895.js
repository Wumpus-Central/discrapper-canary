var r = a(507604),
    n = a(64637),
    _ = a(282108),
    o = a(179122),
    i = a(459316),
    c = TypeError,
    s = Object.defineProperty,
    E = Object.getOwnPropertyDescriptor,
    l = 'enumerable',
    u = 'configurable',
    I = 'writable';
e.f = r
    ? _
        ? function (t, e, a) {
              if ((o(t), (e = i(e)), o(a), 'function' == typeof t && 'prototype' === e && 'value' in a && I in a && !a[I])) {
                  var r = E(t, e);
                  r &&
                      r[I] &&
                      ((t[e] = a.value),
                      (a = {
                          configurable: u in a ? a[u] : r[u],
                          enumerable: l in a ? a[l] : r[l],
                          writable: !1
                      }));
              }
              return s(t, e, a);
          }
        : s
    : function (t, e, a) {
          if ((o(t), (e = i(e)), o(a), n))
              try {
                  return s(t, e, a);
              } catch (t) {}
          if ('get' in a || 'set' in a) throw new c('Accessors not supported');
          return 'value' in a && (t[e] = a.value), t;
      };
