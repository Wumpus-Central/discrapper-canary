"use strict";
function i(e) {
    let t = (function (e) {
            let t = new Intl.NumberFormat(e, { useGrouping: !1 }),
                n = new Map();
            for (let e = 0; e <= 9; e++) n.set(t.format(e), String(e));
            return n;
        })(e),
        n = new Intl.NumberFormat(e, { notation: "compact", compactDisplay: "short" }),
        i = new Map();
    return {
        format(e) {
            var a;
            let s, l;
            if (0 === e || !Number.isFinite(e)) return n.format(e);
            let o = r(Math.abs(e)),
                d =
                    o >= 0
                        ? (function (e) {
                              let r = i.get(e);
                              if (void 0 === r) {
                                  let a = 10 ** e,
                                      s = (function (e, t) {
                                          let n = "";
                                          for (let i of e)
                                              "integer" === i.type || "fraction" === i.type
                                                  ? (n += (function (e, t) {
                                                        let n = "";
                                                        for (let i of e) n += t.get(i) ?? i;
                                                        return n;
                                                    })(i.value, t))
                                                  : "decimal" === i.type && (n += ".");
                                          return Number(n);
                                      })(n.formatToParts(a), t);
                                  (r = s > 0 ? a / s : 1), i.set(e, r);
                              }
                              return r;
                          })(o)
                        : 1,
                c =
                    ((s = Math.max(Math.min(r(Math.abs((a = e / d))) - 1, 0), -15)),
                    (Math.floor(a * (l = 10 ** -s)) / l) * d);
            return n.format(Number.isFinite(c) ? c : e);
        },
    };
}
function r(e) {
    if (0 === e) return 0;
    let t = Math.floor(Math.log10(e));
    for (; 10 ** t > e; ) t--;
    for (; 10 ** (t + 1) <= e; ) t++;
    return t;
}
n.d(t, { e: () => i });
