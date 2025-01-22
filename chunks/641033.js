r.d(n, {
    Eo: function () {
        return _;
    },
    KH: function () {
        return u;
    },
    nc: function () {
        return p;
    },
    yz: function () {
        return h;
    }
});
var i = r(47120);
var a = r(724458);
var o = r(524484),
    s = r(981631);
let l = function (e, n) {
        let { multiplier: r, value: i } = e,
            [a, o] = n,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            l = i * r;
        return l <= 0
            ? 0
            : Math.min(
                  s,
                  a.reduce((e, n, r) => {
                      if (l > n) {
                          let e = o[r];
                          if (r + 1 === a.length) return o[r];
                          let i = a[r + 1],
                              s = o[r + 1],
                              u = i - n;
                          return ((l - n) / u) * (s - e) + e;
                      }
                      return l === n ? o[r] : e;
                  }, 0)
              );
    },
    u = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.qi.LEVEL_3;
        return l(e, [o.JR[n], o.u4[n]], 100000);
    },
    c = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1]
    ],
    d = c.map((e) => {
        let [n] = e;
        return n;
    }),
    f = c.map((e) => {
        let [n, r] = e;
        return r;
    }),
    p = (e) => l(e, [d, f], 1),
    h = (e) =>
        1 === e
            ? { color: s.Ilk.BRAND_500 }
            : 2 === e || 3 === e
              ? { color: s.Ilk.GREEN_360 }
              : 4 === e || 5 === e
                ? {
                      color: s.Ilk.YELLOW_300,
                      square: !0
                  }
                : 6 === e
                  ? {
                        color: s.Ilk.RED_400,
                        square: !0
                    }
                  : {
                        color: s.Ilk.ORANGE_345,
                        flair: !0
                    };
function _(e) {
    var n;
    return e.value * (null !== (n = e.multiplier) && void 0 !== n ? n : 1);
}
