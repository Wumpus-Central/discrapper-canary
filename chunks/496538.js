var n = e(257943),
    o = e(703441),
    i = TypeError,
    a = Object.getOwnPropertyDescriptor;
r.exports =
    n &&
    !(function () {
        if (void 0 !== this) return !0;
        try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
        } catch (r) {
            return r instanceof TypeError;
        }
    })()
        ? function (r, t) {
              if (o(r) && !a(r, "length").writable) throw new i("Cannot set read only .length");
              return (r.length = t);
          }
        : function (r, t) {
              return (r.length = t);
          };
