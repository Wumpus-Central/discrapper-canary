n.d(t, { Z: () => h }), n(388685);
var r = n(473749),
    i = n(115434),
    l = n(264181),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(243778),
    u = n(874703),
    d = n(794324),
    p = n(302800),
    f = n(921944);
let h = () => {
    var e;
    let t = (0, a.e7)([u.Z], () => u.Z.getMarketingBySurface(i.K.DESKTOP_SHOP_BUTTON)),
        n = !(0, o.$sL)(),
        [h, g] = (0, c.XR)(
            n ? s.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null,
            null != (e = null == t ? void 0 : t.version) ? e : 0,
            void 0,
            !0,
        ),
        m = (0, d.mB)(t),
        _ =
            null != h
                ? ((e, t) => {
                      var n, r, i, a, s, o, c, u;
                      if ((null == t ? void 0 : t.type) === l.Z.COACHTIP || e.hasPreviewAssets) {
                          let i =
                              null != t
                                  ? {
                                        title: () => t.title,
                                        body: () => t.body,
                                        assetIds: t.decorations,
                                        entrypointBackgroundStyle:
                                            null == (n = t.refTargetBackground) ? void 0 : n.style,
                                    }
                                  : {
                                        title: () => "",
                                        assetIds: [],
                                    };
                          return (
                              (c = (function (e) {
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
                              })({ type: p.k2.COACHTIP }, i)),
                              (u = u =
                                  {
                                      imageSrc: null != (r = e.coachtipAvatar) ? r : "",
                                      entryPointBackgroundAssets: {
                                          srcDark: e.buttonBGRestingDark,
                                          srcLight: e.buttonBGRestingLight,
                                          srcDarkHovered: e.buttonBGHoverDark,
                                          srcLightHovered: e.buttonBGHoverLight,
                                      },
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(u)).forEach(function (e) {
                                        Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(u, e));
                                    }),
                              c
                          );
                      }
                      if ((null == t ? void 0 : t.type) === l.Z.COACHMARK) {
                          let e = t.refTargetBackground;
                          return {
                              type: p.k2.COACHMARK,
                              title: () => t.title,
                              body: () => t.body,
                              assetDark: t.assetDark,
                              assetLight: t.assetLight,
                              entrypointBackgroundStyle: null == e ? void 0 : e.style,
                              entryPointBackgroundAssets: {
                                  srcDarkHovered:
                                      null == e || null == (a = e.asset) || null == (i = a.hovered) ? void 0 : i.dark,
                                  srcLightHovered:
                                      null == e || null == (o = e.asset) || null == (s = o.hovered) ? void 0 : s.light,
                              },
                          };
                      }
                      return null;
                  })(m, t)
                : null,
        b = r.useCallback(() => {
            null != _ && g(f.L.AUTO);
        }, [_, g]);
    return {
        shopButtonDisplayOptions: _,
        dismissShopButtonDC: b,
    };
};
