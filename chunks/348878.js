var n = e(414123),
    o = e(453669),
    s = TypeError,
    i = Object.getOwnPropertyDescriptor;
t.exports =
    n &&
    !(function () {
        if (void 0 !== this) return !0;
        try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
        } catch (t) {
            return t instanceof TypeError;
        }
    })()
        ? function (t, r) {
              if (o(t) && !i(t, "length").writable) throw new s("Cannot set read only .length");
              return (t.length = r);
          }
        : function (t, r) {
              return (t.length = r);
          };
