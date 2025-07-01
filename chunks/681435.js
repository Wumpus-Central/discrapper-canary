(n.d(t, { Z: () => f }), n(388685));
var r = n(73800),
    i = n(115434),
    l = n(264181),
    a = n(442837),
    o = n(704215),
    s = n(243778),
    c = n(874703),
    u = n(794324),
    d = n(302800),
    p = n(921944);
let h = (e, t) => {
        if ((null == t ? void 0 : t.type) === l.Z.COACHTIP || e.hasPreviewAssets) {
            var n, r, i, a;
            let l =
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
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({ type: d.k2.COACHTIP }, l)),
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
        }
        return (null == t ? void 0 : t.type) === l.Z.COACHMARK
            ? {
                  type: d.k2.COACHMARK,
                  title: () => t.title,
                  body: () => t.body,
                  assetDark: t.assetDark,
                  assetLight: t.assetLight
              }
            : null;
    },
    f = () => {
        var e;
        let t = (0, a.e7)([c.Z], () => c.Z.getMarketingBySurface(i.K.DESKTOP_SHOP_BUTTON)),
            [n, l] = (0, s.XR)(o.z.COLLECTIBLES_SHOP_ENTRY_MARKETING, null != (e = null == t ? void 0 : t.version) ? e : 0, void 0, !0),
            d = (0, u.mB)(t),
            f = null != n ? h(d, t) : null,
            g = r.useCallback(() => {
                null != f && l(p.L.AUTO);
            }, [f, l]);
        return {
            shopButtonDisplayOptions: f,
            dismissShopButtonDC: g
        };
    };
