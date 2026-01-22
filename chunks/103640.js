n.d(t, {
    HN: () => l,
    RL: () => c,
    U$: () => s,
}),
    n(896048);
var r = n(374994),
    i = n(31408);
let a = function (e, t) {
        let { multiplier: n, value: r } = e,
            [i, a] = t,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            o = r * n;
        return o <= 0
            ? 0
            : Math.min(
                  s,
                  i.reduce((e, t, n) => {
                      if (o > t) {
                          let e = a[n];
                          if (n + 1 === i.length) return a[n];
                          let r = i[n + 1],
                              s = a[n + 1],
                              l = r - t;
                          return ((o - t) / l) * (s - e) + e;
                      }
                      return o === t ? a[n] : e;
                  }, 0),
              );
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.fZ.LEVEL_3;
        return a(e, [i.dw[t], i.MO[t]], 1e5);
    },
    o = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1],
    ],
    l =
        (o.map((e) => {
            let [t] = e;
            return t;
        }),
        o.map((e) => {
            let [t, n] = e;
            return n;
        }),
        (e) =>
            1 === e
                ? {
                      color: (0, r.dE)("BRAND_500"),
                  }
                : 2 === e || 3 === e
                  ? {
                        color: (0, r.dE)("GREEN_360"),
                    }
                  : 4 === e || 5 === e
                    ? {
                          color: (0, r.dE)("YELLOW_300"),
                          square: !0,
                      }
                    : 6 === e
                      ? {
                            color: (0, r.dE)("RED_400"),
                            square: !0,
                        }
                      : {
                            color: (0, r.dE)("ORANGE_345"),
                            flair: !0,
                        });

function c(e) {
    var t;
    return e.value * (null != (t = e.multiplier) ? t : 1);
}
