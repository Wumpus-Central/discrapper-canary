"use strict";
n.d(t, { HN: () => l, RL: () => u, U$: () => a });
var i = n(374994),
    r = n(31408);
let s = function (e, t) {
        let { multiplier: n, value: i } = e,
            [r, s] = t,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            o = i * n;
        return o <= 0
            ? 0
            : Math.min(
                  a,
                  r.reduce((e, t, n) => {
                      if (o > t) {
                          let e = s[n];
                          return n + 1 === r.length ? s[n] : ((o - t) / (r[n + 1] - t)) * (s[n + 1] - e) + e;
                      }
                      return o === t ? s[n] : e;
                  }, 0),
              );
    },
    a = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.fZ.LEVEL_3;
        return s(e, [r.dw[t], r.MO[t]], 1e5);
    },
    o = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1],
    ];
o.map((e) => {
    let [t] = e;
    return t;
}),
    o.map((e) => {
        let [t, n] = e;
        return n;
    });
let l = (e) =>
    1 === e
        ? { color: (0, i.dE)("BRAND_500") }
        : 2 === e || 3 === e
          ? { color: (0, i.dE)("GREEN_360") }
          : 4 === e || 5 === e
            ? { color: (0, i.dE)("YELLOW_300"), square: !0 }
            : 6 === e
              ? { color: (0, i.dE)("RED_400"), square: !0 }
              : { color: (0, i.dE)("ORANGE_345"), flair: !0 };
function u(e) {
    return e.value * (e.multiplier ?? 1);
}
