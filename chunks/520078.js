var e = n(447631),
    o = n(952256),
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
        ? function (t, r) {
              if (o(t) && !u(t, 'length').writable) throw new i('Cannot set read only .length');
              return (t.length = r);
          }
        : function (t, r) {
              return (t.length = r);
          };
