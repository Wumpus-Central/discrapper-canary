n.d(t, { Z: () => b }), n(47120);
var r = n(192379),
    i = n(115434),
    l = n(264181),
    o = n(442837),
    a = n(704215),
    s = n(243778),
    c = n(594174),
    u = n(51144),
    d = n(874703),
    p = n(794324),
    h = n(302800),
    f = n(921944);
let g = [],
    m = (e, t) => {
        var n, r, i, o;
        if ((null == t ? void 0 : t.type) !== l.Z.COACHTIP && !e.hasPreviewAssets) return null;
        let a =
            null != t
                ? {
                      title: () => t.title,
                      body: () => t.body,
                      assetIds: t.decorations,
                      entrypointBackgroundStyle: null === (n = t.refTargetBackground) || void 0 === n ? void 0 : n.style
                  }
                : {
                      title: () => '',
                      assetIds: []
                  };
        return (
            (i = (function (e) {
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
            })({ type: h.k2.COACHTIP }, a)),
            (o = o =
                {
                    imageSrc: null !== (r = e.coachtipAvatar) && void 0 !== r ? r : '',
                    entryPointBackgroundAssets: {
                        srcDark: e.buttonBGRestingDark,
                        srcLight: e.buttonBGRestingLight,
                        srcDarkHovered: e.buttonBGHoverDark,
                        srcLightHovered: e.buttonBGHoverLight
                    }
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            i
        );
    },
    b = () => {
        var e;
        let t = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
            n = (0, o.e7)([d.Z], () => d.Z.getMarketingBySurface(i.K.DESKTOP_SHOP_BUTTON)),
            h = (null == n ? void 0 : n.dismissibleContent) === a.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
            b = r.useMemo(() => ((0, u.Fc)(t) && null != n && !h ? [n.dismissibleContent] : g), [t, n, h]),
            _ = h && (null == n ? void 0 : n.type) === l.Z.COACHTIP ? a.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null,
            [E, O] = (0, s.US)(b, void 0, !0),
            [N, v] = (0, s.XR)(_, null !== (e = null == n ? void 0 : n.version) && void 0 !== e ? e : 0, void 0, !0),
            y = (0, p.mB)(n),
            I = null != E || null != N || y.hasPreviewAssets ? m(y, n) : null;
        return {
            shopButtonDisplayOptions: I,
            dismissShopButtonDC: () => {
                let e = h ? v : O;
                null != I && e(f.L.AUTO);
            }
        };
    };
