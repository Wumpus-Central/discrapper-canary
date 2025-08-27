function r(...e) {
    return 1 === e.length && e[0]
        ? e[0]
        : (t) => {
              let n = !1,
                  r = e.map((e) => {
                      let r = i(e, t);
                      return n || (n = "function" == typeof r), r;
                  });
              if (n)
                  return () => {
                      r.forEach((t, n) => {
                          "function" == typeof t ? t() : i(e[n], null);
                      });
                  };
          };
}
function i(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
}
n.d(t, { l: () => r });
