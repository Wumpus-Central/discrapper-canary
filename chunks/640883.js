var e = r(507604),
    o = r(88996),
    i = TypeError,
    u = Object.getOwnPropertyDescriptor;
t.exports =
    e &&
    !(function () {
        if (void 0 !== this) return !0;
        try {
            Object.defineProperty([], 'length', { writable: !1 }).length = 1;
        } catch (t) {
            return t instanceof TypeError;
        }
    })()
        ? function (t, n) {
              if (o(t) && !u(t, 'length').writable) throw new i('Cannot set read only .length');
              return (t.length = n);
          }
        : function (t, n) {
              return (t.length = n);
          };
