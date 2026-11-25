function l(e) {
    if (0 === e) return 0;
    let n = Math.floor(Math.log10(e));
    for (; 10 ** n > e;) n--;
    for (; 10 ** (n + 1) <= e;) n++;
    return n;
}
t.d(
    n,
    {},
    {
        e: function (e) {
            let n = (function (e) {
                    let n = new Intl.NumberFormat(e, { useGrouping: !1 }),
                        t = new Map();
                    for (let e = 0; e <= 9; e++) t.set(n.format(e), String(e));
                    return t;
                })(e),
                t = new Intl.NumberFormat(e, { notation: "compact", compactDisplay: "short" }),
                s = new Map();
            return {
                format(e) {
                    var a;
                    let i, r;
                    if (0 === e || !Number.isFinite(e)) return t.format(e);
                    let o = l(Math.abs(e)),
                        u =
                            o >= 0
                                ? (function (e) {
                                      let l = s.get(e);
                                      if (void 0 === l) {
                                          let a = 10 ** e,
                                              i = (function (e, n) {
                                                  let t = "";
                                                  for (let l of e)
                                                      "integer" === l.type || "fraction" === l.type
                                                          ? (t += (function (e, n) {
                                                                let t = "";
                                                                for (let l of e) t += n.get(l) ?? l;
                                                                return t;
                                                            })(l.value, n))
                                                          : "decimal" === l.type && (t += ".");
                                                  return Number(t);
                                              })(t.formatToParts(a), n);
                                          ((l = i > 0 ? a / i : 1), s.set(e, l));
                                      }
                                      return l;
                                  })(o)
                                : 1,
                        c =
                            ((i = Math.max(Math.min(l(Math.abs((a = e / u))) - 1, 0), -15)),
                            (Math.floor(a * (r = 10 ** -i)) / r) * u);
                    return t.format(Number.isFinite(c) ? c : e);
                },
            };
        },
    },
);
