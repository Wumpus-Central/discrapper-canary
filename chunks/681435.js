n.d(t, { Z: () => b }), n(388685);
var r = n(73800),
    i = n(115434),
    l = n(264181),
    a = n(442837),
    o = n(704215),
    s = n(243778),
    c = n(594174),
    u = n(51144),
    d = n(874703),
    p = n(794324),
    h = n(302800),
    f = n(921944);
let g = [],
    m = (e, t) => {
        var n, r, i, a;
        if ((null == t ? void 0 : t.type) !== l.Z.COACHTIP && !e.hasPreviewAssets) return null;
        let o =
            null != t
                ? {
                      title: () => t.title,
                      body: () => t.body,
                      assetIds: t.decorations,
                      entrypointBackgroundStyle: null == (n = t.refTargetBackground) ? void 0 : n.style
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
            })({ type: h.k2.COACHTIP }, o)),
            (a = a =
                {
                    imageSrc: null != (r = e.coachtipAvatar) ? r : '',
                    entryPointBackgroundAssets: {
                        srcDark: e.buttonBGRestingDark,
                        srcLight: e.buttonBGRestingLight,
                        srcDarkHovered: e.buttonBGHoverDark,
                        srcLightHovered: e.buttonBGHoverLight
                    }
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            i
        );
    },
    b = () => {
        var e;
        let t = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
            n = (0, a.e7)([d.Z], () => d.Z.getMarketingBySurface(i.K.DESKTOP_SHOP_BUTTON)),
            h = (null == n ? void 0 : n.dismissibleContent) === o.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
            b = r.useMemo(() => ((0, u.Fc)(t) && null != n && !h ? [n.dismissibleContent] : g), [t, n, h]),
            _ = h && (null == n ? void 0 : n.type) === l.Z.COACHTIP ? o.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null,
            [E, O] = (0, s.US)(b, void 0, !0),
            [y, I] = (0, s.XR)(_, null != (e = null == n ? void 0 : n.version) ? e : 0, void 0, !0),
            v = (0, p.mB)(n),
            C = null != E || null != y || v.hasPreviewAssets ? m(v, n) : null;
        return {
            shopButtonDisplayOptions: C,
            dismissShopButtonDC: () => {
                let e = h ? I : O;
                null != C && e(f.L.AUTO);
            }
        };
    };
