var e = r(507604),
    o = r(64637),
    i = r(282108),
    u = r(179122),
    c = r(459316),
    a = TypeError,
    f = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    l = 'enumerable',
    p = 'configurable',
    d = 'writable';
n.f = e
    ? i
        ? function (t, n, r) {
              if ((u(t), (n = c(n)), u(r), 'function' == typeof t && 'prototype' === n && 'value' in r && d in r && !r[d])) {
                  var e = s(t, n);
                  e &&
                      e[d] &&
                      ((t[n] = r.value),
                      (r = {
                          configurable: p in r ? r[p] : e[p],
                          enumerable: l in r ? r[l] : e[l],
                          writable: !1
                      }));
              }
              return f(t, n, r);
          }
        : f
    : function (t, n, r) {
          if ((u(t), (n = c(n)), u(r), o))
              try {
                  return f(t, n, r);
              } catch (t) {}
          if ('get' in r || 'set' in r) throw new a('Accessors not supported');
          return 'value' in r && (t[n] = r.value), t;
      };
