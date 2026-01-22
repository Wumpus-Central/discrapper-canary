var r = n(257943),
    i = n(703441),
    a = TypeError,
    s = Object.getOwnPropertyDescriptor;
e.exports =
    r &&
    !(function () {
        if (void 0 !== this) return !0;
        try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
        } catch (e) {
            return e instanceof TypeError;
        }
    })()
        ? function (e, t) {
              if (i(e) && !s(e, "length").writable) throw new a("Cannot set read only .length");
              return (e.length = t);
          }
        : function (e, t) {
              return (e.length = t);
          };
