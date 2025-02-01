var i = n(447631),
    r = n(10012),
    a = n(228129),
    s = n(28886),
    o = n(591794),
    l = TypeError,
    u = Object.defineProperty,
    c = Object.getOwnPropertyDescriptor,
    d = 'enumerable',
    f = 'configurable',
    _ = 'writable';
t.f = i
    ? a
        ? function (e, t, n) {
              if ((s(e), (t = o(t)), s(n), 'function' == typeof e && 'prototype' === t && 'value' in n && _ in n && !n[_])) {
                  var i = c(e, t);
                  i &&
                      i[_] &&
                      ((e[t] = n.value),
                      (n = {
                          configurable: f in n ? n[f] : i[f],
                          enumerable: d in n ? n[d] : i[d],
                          writable: !1
                      }));
              }
              return u(e, t, n);
          }
        : u
    : function (e, t, n) {
          if ((s(e), (t = o(t)), s(n), r))
              try {
                  return u(e, t, n);
              } catch (e) {}
          if ('get' in n || 'set' in n) throw new l('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
      };
