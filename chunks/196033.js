n.d(t, { W: () => f });
var i = n(192379),
    r = n(115434),
    s = n(264181),
    l = n(442837),
    a = n(442933),
    o = n(874703),
    c = n(619899),
    d = n(281598),
    u = n(388032),
    m = n(513767),
    p = n(78230),
    g = n(786792),
    h = n(161594);
let f = () => {
    let e = (0, c.zL)(d.jE.UPSELL_BANNER),
        t = (0, c.zL)(d.jE.UPSELL_BANNER_POPOUT),
        n = (0, a.H)('upsell_banner'),
        f = (0, l.e7)([o.Z], () => o.Z.getMarketingBySurface(r.K.EDIT_PROFILE_SETTINGS)),
        b = i.useMemo(
            () =>
                null != f
                    ? f
                    : n
                      ? {
                            asset: p,
                            popoutAsset: m,
                            title: u.intl.string(u.t.QZVVBg),
                            body: u.intl.string(u.t.sajmAg),
                            version: 0,
                            revertTextColor: !1
                        }
                      : {
                            asset: g,
                            popoutAsset: h,
                            title: u.intl.string(u.t['4Emkur']),
                            body: u.intl.string(u.t.gn7SZW),
                            version: 0,
                            revertTextColor: !1
                        },
            [f, n]
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
            })({}, b)),
            (i = i =
                {
                    type: s.Z.BANNER,
                    asset: null != e ? e : b.asset,
                    popoutAsset: null != t ? t : b.popoutAsset
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
    }, [e, t, b]);
};
