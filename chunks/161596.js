function n(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
}
r.d(
    t,
    {},
    {
        P: function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return 1 === t.length && t[0]
                ? t[0]
                : (e) => {
                      let r = !1,
                          i = t.map((t) => {
                              let i = n(t, e);
                              return ((r ||= "function" == typeof i), i);
                          });
                      if (r)
                          return () => {
                              i.forEach((e, r) => {
                                  "function" == typeof e ? e() : n(t[r], null);
                              });
                          };
                  };
        },
    },
);
