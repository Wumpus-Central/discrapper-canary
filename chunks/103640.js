n.d(t, { HN: () => l, RL: () => o, U$: () => a });
var i = n(374994),
    r = n(31408);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.fZ.LEVEL_3;
    return (function (e, t) {
        let { multiplier: n, value: i } = e,
            [r, a] = t,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            l = i * n;
        return l <= 0
            ? 0
            : Math.min(
                  s,
                  r.reduce((e, t, n) => {
                      if (l > t) {
                          let e = a[n];
                          return n + 1 === r.length ? a[n] : ((l - t) / (r[n + 1] - t)) * (a[n + 1] - e) + e;
                      }
                      return l === t ? a[n] : e;
                  }, 0),
              );
    })(e, [r.dw[t], r.MO[t]], 1e5);
}
let s = [
    [1, 0.001],
    [25, 0.3],
    [100, 0.5],
    [250, 0.8],
    [500, 0.9],
    [2500, 0.95],
    [9001, 1],
];
function l(e) {
    return 1 === e
        ? { color: (0, i.dE)("BRAND_500") }
        : 2 === e || 3 === e
          ? { color: (0, i.dE)("GREEN_360") }
          : 4 === e || 5 === e
            ? { color: (0, i.dE)("YELLOW_300"), square: !0 }
            : 6 === e
              ? { color: (0, i.dE)("RED_400"), square: !0 }
              : { color: (0, i.dE)("ORANGE_345"), flair: !0 };
}
function o(e) {
    return e.value * (e.multiplier ?? 1);
}
s.map((e) => {
    let [t] = e;
    return t;
}),
    s.map((e) => {
        let [t, n] = e;
        return n;
    });
