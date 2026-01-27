n.d(t, {
    M: () => p,
});
var r = n(64700),
    i = n(379197),
    l = n(488430),
    s = n(311907),
    a = n(457421),
    o = n(940622),
    c = n(559474),
    d = n(985018),
    u = n(795056),
    _ = n(996613);
let p = () => {
    let e = (0, o.mb)(c.RN.UPSELL_BANNER),
        t = (0, o.mb)(c.RN.UPSELL_BANNER_POPOUT),
        n = (0, s.bG)([a.A], () => a.A.getMarketingBySurface(i.R.EDIT_PROFILE_SETTINGS)),
        p = r.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: _,
                          popoutAsset: u,
                          title: d.intl.string(d.t.QZVVBh),
                          body: d.intl.string(d.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        );
    return r.useMemo(() => {
        var n, r;
        return (
            (n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, p)),
            (r = r =
                {
                    type: l.G.BANNER,
                    asset: null != e ? e : p.asset,
                    popoutAsset: null != t ? t : p.popoutAsset,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            n
        );
    }, [e, t, p]);
};
