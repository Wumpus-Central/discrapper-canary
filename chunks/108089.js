function n(e) {
    let t = (function (e) {
            let t = new Intl.NumberFormat(e, { useGrouping: !1 }),
                l = new Map();
            for (let e = 0; e <= 9; e++) l.set(t.format(e), String(e));
            return l;
        })(e),
        l = new Intl.NumberFormat(e, { notation: "compact", compactDisplay: "short" }),
        n = new Map();
    return {
        format(e) {
            var s;
            let i, r;
            if (0 === e || !Number.isFinite(e)) return l.format(e);
            let o = a(Math.abs(e)),
                u =
                    o >= 0
                        ? (function (e) {
                              let a = n.get(e);
                              if (void 0 === a) {
                                  let s = 10 ** e,
                                      i = (function (e, t) {
                                          let l = "";
                                          for (let n of e)
                                              "integer" === n.type || "fraction" === n.type
                                                  ? (l += (function (e, t) {
                                                        let l = "";
                                                        for (let n of e) l += t.get(n) ?? n;
                                                        return l;
                                                    })(n.value, t))
                                                  : "decimal" === n.type && (l += ".");
                                          return Number(l);
                                      })(l.formatToParts(s), t);
                                  ((a = i > 0 ? s / i : 1), n.set(e, a));
                              }
                              return a;
                          })(o)
                        : 1,
                c =
                    ((i = Math.max(Math.min(a(Math.abs((s = e / u))) - 1, 0), -15)),
                    (Math.floor(s * (r = 10 ** -i)) / r) * u);
            return l.format(Number.isFinite(c) ? c : e);
        },
    };
}
function a(e) {
    if (0 === e) return 0;
    let t = Math.floor(Math.log10(e));
    for (; 10 ** t > e;) t--;
    for (; 10 ** (t + 1) <= e;) t++;
    return t;
}
l.d(t, { e: () => n });
