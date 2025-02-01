var i = n(447631),
    r = n(952256),
    a = TypeError,
    s = Object.getOwnPropertyDescriptor,
    o =
        i &&
        !(function () {
            if (void 0 !== this) return !0;
            try {
                Object.defineProperty([], 'length', { writable: !1 }).length = 1;
            } catch (e) {
                return e instanceof TypeError;
            }
        })();
e.exports = o
    ? function (e, t) {
          if (r(e) && !s(e, 'length').writable) throw new a('Cannot set read only .length');
          return (e.length = t);
      }
    : function (e, t) {
          return (e.length = t);
      };
