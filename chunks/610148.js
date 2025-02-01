var n = e(325008),
    o = e(498576),
    i = TypeError,
    f = Object.getOwnPropertyDescriptor,
    u =
        n &&
        !(function () {
            if (void 0 !== this) return !0;
            try {
                Object.defineProperty([], 'length', { writable: !1 }).length = 1;
            } catch (r) {
                return r instanceof TypeError;
            }
        })();
r.exports = u
    ? function (r, t) {
          if (o(r) && !f(r, 'length').writable) throw i('Cannot set read only .length');
          return (r.length = t);
      }
    : function (r, t) {
          return (r.length = t);
      };
