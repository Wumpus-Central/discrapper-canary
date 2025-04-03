n.d(t, { W: () => f });
var r = n(192379),
    i = n(115434),
    s = n(264181),
    a = n(442837),
    l = n(442933),
    o = n(874703),
    c = n(619899),
    d = n(281598),
    u = n(388032),
    m = n(513767),
    g = n(78230),
    p = n(786792),
    h = n(161594);
let f = () => {
    let e = (0, c.zL)(d.Fr.UPSELL_BANNER),
        t = (0, c.zL)(d.Fr.UPSELL_BANNER_POPOUT),
        n = (0, l.H)('upsell_banner'),
        f = (0, a.e7)([o.Z], () => o.Z.getMarketingBySurface(i.K.EDIT_PROFILE_SETTINGS)),
        b = r.useMemo(
            () =>
                n
                    ? {
                          asset: g,
                          popoutAsset: m,
                          title: u.NW.string(u.t.QZVVBg),
                          body: u.NW.string(u.t.sajmAg),
                          version: 0,
                          revertTextColor: !1
                      }
                    : null != f
                      ? f
                      : {
                            asset: p,
                            popoutAsset: h,
                            title: u.NW.string(u.t['4Emkur']),
                            body: u.NW.string(u.t.gn7SZW),
                            version: 0,
                            revertTextColor: !1
                        },
            [f, n]
        );
    return r.useMemo(() => {
        var n, r;
        return (
            (n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, b)),
            (r = r =
                {
                    type: s.Z.BANNER,
                    asset: null != e ? e : b.asset,
                    popoutAsset: null != t ? t : b.popoutAsset
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
    }, [e, t, b]);
};
