function n() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return 1 === t.length && t[0]
        ? t[0]
        : (e) => {
              let r = !1,
                  n = t.map((t) => {
                      let n = i(t, e);
                      return ((r ||= "function" == typeof n), n);
                  });
              if (r)
                  return () => {
                      n.forEach((e, r) => {
                          "function" == typeof e ? e() : i(t[r], null);
                      });
                  };
          };
}
function i(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
}
r.d(t, { P: () => n });
