n.d(t, {
    Eo: () => c,
    KH: () => o,
    yz: () => l,
}),
    n(388685);
var r = n(900089),
    i = n(524484);
let a = function (e, t) {
        let { multiplier: n, value: r } = e,
            [i, a] = t,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            s = r * n;
        return s <= 0
            ? 0
            : Math.min(
                  o,
                  i.reduce((e, t, n) => {
                      if (s > t) {
                          let e = a[n];
                          if (n + 1 === i.length) return a[n];
                          let r = i[n + 1],
                              o = a[n + 1],
                              l = r - t;
                          return ((s - t) / l) * (o - e) + e;
                      }
                      return s === t ? a[n] : e;
                  }, 0),
              );
    },
    o = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.qi.LEVEL_3;
        return a(e, [i.JR[t], i.u4[t]], 100000);
    },
    s = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1],
    ],
    l =
        (s.map((e) => {
            let [t] = e;
            return t;
        }),
        s.map((e) => {
            let [t, n] = e;
            return n;
        }),
        (e) =>
            1 === e
                ? { color: (0, r.Fw)("BRAND_500") }
                : 2 === e || 3 === e
                  ? { color: (0, r.Fw)("GREEN_360") }
                  : 4 === e || 5 === e
                    ? {
                          color: (0, r.Fw)("YELLOW_300"),
                          square: !0,
                      }
                    : 6 === e
                      ? {
                            color: (0, r.Fw)("RED_400"),
                            square: !0,
                        }
                      : {
                            color: (0, r.Fw)("ORANGE_345"),
                            flair: !0,
                        });
function c(e) {
    var t;
    return e.value * (null != (t = e.multiplier) ? t : 1);
}
