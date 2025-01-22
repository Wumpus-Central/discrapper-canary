var i = r(447631),
    a = r(952256),
    o = TypeError,
    s = Object.getOwnPropertyDescriptor,
    l =
        i &&
        !(function () {
            if (void 0 !== this) return !0;
            try {
                Object.defineProperty([], 'length', { writable: !1 }).length = 1;
            } catch (e) {
                return e instanceof TypeError;
            }
        })();
e.exports = l
    ? function (e, n) {
          if (a(e) && !s(e, 'length').writable) throw new o('Cannot set read only .length');
          return (e.length = n);
      }
    : function (e, n) {
          return (e.length = n);
      };
