(n.d(t, { O: () => d }), n(321073));
var i = n(817379),
    r = n(503235),
    a = n(51104),
    s = n(128400),
    l = n(105292);
let o = [r.v7.BASE, r.v7.FACE, r.v7.OUTFIT, r.v7.OUTFIT_COLOR, r.v7.HAT, r.v7.SHOES, r.v7.WEARABLE, r.v7.AURA];
function d(e) {
    let t = [];
    return (
        o.forEach((n) => {
            let o = e[r.hw[n]],
                d =
                    null != o
                        ? (function (e, t) {
                              let n = r.hw[e];
                              if ((0, r.nb)(n, t)) return;
                              let s = a.$[n];
                              switch (e) {
                                  case r.v7.OUTFIT: {
                                      let e = (0, i.FA)(t);
                                      return null != e ? s[e] : void 0;
                                  }
                                  case r.v7.OUTFIT_COLOR:
                                      if ((0, i.FA)(t) === t) return;
                                      return a.x[t];
                                  default:
                                      return s[t];
                              }
                          })(n, o)
                        : void 0;
            null != d &&
                t.push(
                    l.intl.formatToPlainString(s.default["Z+HdIo"], { category: (0, r.cq)(n), name: l.intl.string(d) }),
                );
        }),
        l.intl.formatToPlainString(s.default.mQNR4x, {
            traits: new Intl.ListFormat(l.intl.currentLocale, { type: "conjunction" }).format(t),
        })
    );
}
