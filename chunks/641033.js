n.d(t, {
    Eo: () => f,
    KH: () => a,
    nc: () => u,
    yz: () => d
}),
    n(47120);
var r = n(524484),
    i = n(981631);
let o = function (e, t) {
        let { multiplier: n, value: r } = e,
            [i, o] = t,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            s = r * n;
        return s <= 0
            ? 0
            : Math.min(
                  a,
                  i.reduce((e, t, n) => {
                      if (s > t) {
                          let e = o[n];
                          if (n + 1 === i.length) return o[n];
                          let r = i[n + 1],
                              a = o[n + 1],
                              l = r - t;
                          return ((s - t) / l) * (a - e) + e;
                      }
                      return s === t ? o[n] : e;
                  }, 0)
              );
    },
    a = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.qi.LEVEL_3;
        return o(e, [r.JR[t], r.u4[t]], 100000);
    },
    s = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1]
    ],
    l = s.map((e) => {
        let [t] = e;
        return t;
    }),
    c = s.map((e) => {
        let [t, n] = e;
        return n;
    }),
    u = (e) => o(e, [l, c], 1),
    d = (e) =>
        1 === e
            ? { color: i.Ilk.BRAND_500 }
            : 2 === e || 3 === e
              ? { color: i.Ilk.GREEN_360 }
              : 4 === e || 5 === e
                ? {
                      color: i.Ilk.YELLOW_300,
                      square: !0
                  }
                : 6 === e
                  ? {
                        color: i.Ilk.RED_400,
                        square: !0
                    }
                  : {
                        color: i.Ilk.ORANGE_345,
                        flair: !0
                    };
function f(e) {
    var t;
    return e.value * (null != (t = e.multiplier) ? t : 1);
}
