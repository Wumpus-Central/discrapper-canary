n.d(t, { HN: () => o, RL: () => d, U$: () => s });
var i = n(374994),
    a = n(31408);
let r = function (e, t) {
        let { multiplier: n, value: i } = e,
            [a, r] = t,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            l = i * n;
        return l <= 0
            ? 0
            : Math.min(
                  s,
                  a.reduce((e, t, n) => {
                      if (l > t) {
                          let e = r[n];
                          return n + 1 === a.length ? r[n] : ((l - t) / (a[n + 1] - t)) * (r[n + 1] - e) + e;
                      }
                      return l === t ? r[n] : e;
                  }, 0),
              );
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.fZ.LEVEL_3;
        return r(e, [a.dw[t], a.MO[t]], 1e5);
    },
    l = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1],
    ];
l.map((e) => {
    let [t] = e;
    return t;
}),
    l.map((e) => {
        let [t, n] = e;
        return n;
    });
let o = (e) =>
    1 === e
        ? { color: (0, i.dE)("BRAND_500") }
        : 2 === e || 3 === e
          ? { color: (0, i.dE)("GREEN_360") }
          : 4 === e || 5 === e
            ? { color: (0, i.dE)("YELLOW_300"), square: !0 }
            : 6 === e
              ? { color: (0, i.dE)("RED_400"), square: !0 }
              : { color: (0, i.dE)("ORANGE_345"), flair: !0 };
function d(e) {
    return e.value * (e.multiplier ?? 1);
}
