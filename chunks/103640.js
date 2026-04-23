n.d(t, { HN: () => l, RL: () => o, U$: () => s });
var i = n(374994),
    r = n(31408);
let a = function (e, t) {
        let { multiplier: n, value: i } = e,
            [r, a] = t,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            _ = i * n;
        return _ <= 0
            ? 0
            : Math.min(
                  s,
                  r.reduce((e, t, n) => {
                      if (_ > t) {
                          let e = a[n];
                          return n + 1 === r.length ? a[n] : ((_ - t) / (r[n + 1] - t)) * (a[n + 1] - e) + e;
                      }
                      return _ === t ? a[n] : e;
                  }, 0),
              );
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.fZ.LEVEL_3;
        return a(e, [r.dw[t], r.MO[t]], 1e5);
    },
    _ = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1],
    ];
_.map((e) => {
    let [t] = e;
    return t;
}),
    _.map((e) => {
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
function o(e) {
    return e.value * (e.multiplier ?? 1);
}
