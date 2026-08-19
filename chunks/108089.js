"use strict";
function l(e) {
    let t = (function (e) {
            let t = new Intl.NumberFormat(e, { useGrouping: !1 }),
                n = new Map();
            for (let e = 0; e <= 9; e++) n.set(t.format(e), String(e));
            return n;
        })(e),
        n = new Intl.NumberFormat(e, { notation: "compact", compactDisplay: "short" }),
        l = new Map();
    return {
        format(e) {
            var s;
            let r, a;
            if (0 === e || !Number.isFinite(e)) return n.format(e);
            let o = i(Math.abs(e)),
                u =
                    o >= 0
                        ? (function (e) {
                              let i = l.get(e);
                              if (void 0 === i) {
                                  let s = 10 ** e,
                                      r = (function (e, t) {
                                          let n = "";
                                          for (let l of e)
                                              "integer" === l.type || "fraction" === l.type
                                                  ? (n += (function (e, t) {
                                                        let n = "";
                                                        for (let l of e) n += t.get(l) ?? l;
                                                        return n;
                                                    })(l.value, t))
                                                  : "decimal" === l.type && (n += ".");
                                          return Number(n);
                                      })(n.formatToParts(s), t);
                                  (i = r > 0 ? s / r : 1), l.set(e, i);
                              }
                              return i;
                          })(o)
                        : 1,
                c =
                    ((r = Math.max(Math.min(i(Math.abs((s = e / u))) - 1, 0), -15)),
                    (Math.floor(s * (a = 10 ** -r)) / a) * u);
            return n.format(Number.isFinite(c) ? c : e);
        },
    };
}
function i(e) {
    if (0 === e) return 0;
    let t = Math.floor(Math.log10(e));
    for (; 10 ** t > e; ) t--;
    for (; 10 ** (t + 1) <= e; ) t++;
    return t;
}
n.d(t, { e: () => l });
