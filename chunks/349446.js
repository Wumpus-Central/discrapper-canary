var i = r(447631),
    a = r(10012),
    o = r(228129),
    s = r(28886),
    l = r(591794),
    u = TypeError,
    c = Object.defineProperty,
    d = Object.getOwnPropertyDescriptor,
    f = 'enumerable',
    p = 'configurable',
    h = 'writable';
n.f = i
    ? o
        ? function (e, n, r) {
              if ((s(e), (n = l(n)), s(r), 'function' == typeof e && 'prototype' === n && 'value' in r && h in r && !r[h])) {
                  var i = d(e, n);
                  i &&
                      i[h] &&
                      ((e[n] = r.value),
                      (r = {
                          configurable: p in r ? r[p] : i[p],
                          enumerable: f in r ? r[f] : i[f],
                          writable: !1
                      }));
              }
              return c(e, n, r);
          }
        : c
    : function (e, n, r) {
          if ((s(e), (n = l(n)), s(r), a))
              try {
                  return c(e, n, r);
              } catch (e) {}
          if ('get' in r || 'set' in r) throw new u('Accessors not supported');
          return 'value' in r && (e[n] = r.value), e;
      };
