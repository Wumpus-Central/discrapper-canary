n.d(t, {
    Eo: () => f,
    KH: () => s,
    nc: () => c,
    yz: () => d
}),
    n(47120),
    n(724458);
var i = n(524484),
    r = n(981631);
let a = function (e, t) {
        let { multiplier: n, value: i } = e,
            [r, a] = t,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            o = i * n;
        return o <= 0
            ? 0
            : Math.min(
                  s,
                  r.reduce((e, t, n) => {
                      if (o > t) {
                          let e = a[n];
                          if (n + 1 === r.length) return a[n];
                          let i = r[n + 1],
                              s = a[n + 1],
                              l = i - t;
                          return ((o - t) / l) * (s - e) + e;
                      }
                      return o === t ? a[n] : e;
                  }, 0)
              );
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.qi.LEVEL_3;
        return a(e, [i.JR[t], i.u4[t]], 100000);
    },
    o = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1]
    ],
    l = o.map((e) => {
        let [t] = e;
        return t;
    }),
    u = o.map((e) => {
        let [t, n] = e;
        return n;
    }),
    c = (e) => a(e, [l, u], 1),
    d = (e) =>
        1 === e
            ? { color: r.Ilk.BRAND_500 }
            : 2 === e || 3 === e
              ? { color: r.Ilk.GREEN_360 }
              : 4 === e || 5 === e
                ? {
                      color: r.Ilk.YELLOW_300,
                      square: !0
                  }
                : 6 === e
                  ? {
                        color: r.Ilk.RED_400,
                        square: !0
                    }
                  : {
                        color: r.Ilk.ORANGE_345,
                        flair: !0
                    };
function f(e) {
    var t;
    return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1);
}
