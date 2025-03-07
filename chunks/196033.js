n.d(t, { W: () => p });
var r = n(192379),
    i = n(115434),
    s = n(264181),
    a = n(442837),
    l = n(874703),
    o = n(619899),
    c = n(281598),
    d = n(388032),
    u = n(786792),
    m = n(161594);
let p = () => {
    let e = (0, o.z)(c.Fr.UPSELL_BANNER),
        t = (0, o.z)(c.Fr.UPSELL_BANNER_POPOUT),
        n = (0, a.e7)([l.Z], () => l.Z.getMarketingBySurface(i.K.EDIT_PROFILE_SETTINGS)),
        p = r.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: u,
                          popoutAsset: m,
                          title: d.NW.string(d.t['4Emkur']),
                          body: d.NW.string(d.t.gn7SZW),
                          version: 0,
                          revertTextColor: !1
                      },
            [n]
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
            })({}, p)),
            (r = r =
                {
                    type: s.Z.BANNER,
                    asset: null != e ? e : p.asset,
                    popoutAsset: null != t ? t : p.popoutAsset
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
