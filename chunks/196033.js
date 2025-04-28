n.d(t, { W: () => p });
var i = n(192379),
    r = n(115434),
    s = n(264181),
    l = n(442837),
    a = n(874703),
    o = n(619899),
    c = n(281598),
    d = n(388032),
    u = n(786792),
    m = n(161594);
let p = () => {
    let e = (0, o.zL)(c.jE.UPSELL_BANNER),
        t = (0, o.zL)(c.jE.UPSELL_BANNER_POPOUT),
        n = (0, l.e7)([a.Z], () => a.Z.getMarketingBySurface(r.K.EDIT_PROFILE_SETTINGS)),
        p = i.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: u,
                          popoutAsset: m,
                          title: d.intl.string(d.t['4Emkur']),
                          body: d.intl.string(d.t.gn7SZW),
                          version: 0,
                          revertTextColor: !1
                      },
            [n]
        );
    return i.useMemo(() => {
        var n, i;
        return (
            (n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, p)),
            (i = i =
                {
                    type: s.Z.BANNER,
                    asset: null != e ? e : p.asset,
                    popoutAsset: null != t ? t : p.popoutAsset
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            n
        );
    }, [e, t, p]);
};
