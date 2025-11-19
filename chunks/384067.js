n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(704215),
    o = n(622535),
    c = n(481060),
    u = n(605236),
    d = n(63063),
    g = n(597688),
    p = n(297651),
    f = n(794324),
    m = n(215023),
    h = n(981631),
    C = n(921944),
    _ = n(231338),
    b = n(388032),
    v = n(687983);
let x = (e) => {
    var t;
    let { wideBannerBlock: n, handleTransition: i, tab: x } = e,
        E = g.Z.getCategoryByStoreListingId(n.categoryStoreListingId),
        O = l.useRef(null),
        S = l.useRef(null),
        [y, j] = l.useState(),
        [k, I] = l.useState(!1);
    l.useEffect(() => {
        let e = S.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && j(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let T = null != (t = null == E ? void 0 : E.skuId) ? t : "",
        { handleCardVisibilityChange: L } = (0, p.E)(T, "home", "marketing wide banner"),
        { bannerURL: B } = (0, f.UI)(n),
        P = x === m.AW.ORBS,
        N =
            !0 !== n.disableCta &&
            ((null != n.ctaText && "" !== n.ctaText) || (null != n.ctaRoute && "" !== n.ctaRoute)),
        A = null != n.logoURL && "" !== n.logoURL,
        R = l.useCallback(() => {
            if ((I(!0), n.isDismissible)) {
                var e;
                let t = null != (e = n.dismissibleContentVersion) ? e : 0;
                (0, u.wH)(s.z.COLLECTIBLES_SHOP_WIDE_BANNER, t, { dismissAction: C.L.USER_DISMISS });
            }
        }, [n.isDismissible, n.dismissibleContentVersion]),
        Z = l.useCallback(() => {
            null != n.ctaRoute &&
                "" !== n.ctaRoute &&
                i({
                    sourceButton: "shop wide banner cta",
                    categorySkuId: T,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: null == E ? void 0 : E.isOrbsExclusive,
                });
        }, [n.ctaRoute, i, T, null == E ? void 0 : E.isOrbsExclusive]);
    return null == B || k
        ? null
        : (0, r.jsx)(c.f6W, {
              theme: P ? void 0 : _.BR.DARK,
              children: (e) => {
                  var t, l;
                  return (0, r.jsx)(o.$, {
                      innerRef: O,
                      onChange: L,
                      threshold: 0,
                      children: (0, r.jsxs)("div", {
                          ref: O,
                          className: a()(e, v.row, v.between, v.bannerBlockContainer, v.centeredSection, {
                              [v.extraRounded]: P,
                          }),
                          children: [
                              n.isDismissible &&
                                  (0, r.jsx)("div", {
                                      className: v.wideBannerCloseButton,
                                      children: (0, r.jsx)(c.PZ7, {
                                          size: "sm",
                                          onClick: R,
                                          "aria-label": b.intl.string(b.t.WAI6xu),
                                      }),
                                  }),
                              (0, r.jsx)("div", {
                                  className: a()(v.wideBannerBackgroundImg, { [v.extraRounded]: P }),
                                  style: null != y ? { height: "".concat(y, "px") } : void 0,
                                  children: (0, r.jsx)("img", {
                                      ref: S,
                                      src: B,
                                      alt: n.title,
                                      className: a()(v.wideBannerArt, { [v.wideBannerArtOrbs]: P }),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: a()(v.wideBannerContentContainer, {
                                      [v.wideBannerWithCTAContentContainer]: N,
                                  }),
                                  style: { maxHeight: null != y ? "".concat(y, "px") : "auto" },
                                  children: (0, r.jsxs)("div", {
                                      className: v.wideBannerTextContainer,
                                      children: [
                                          (0, r.jsx)(c.Heading, {
                                              style: {
                                                  color: null != (t = n.bannerTextColor) ? t : "var(--header-primary)",
                                              },
                                              className: P ? v.wideBannerOrbsHeading : void 0,
                                              variant: "heading-xl/bold",
                                              children: n.title,
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              style: { color: "var(--text-muted)" },
                                              lineClamp: 2,
                                              variant: P ? "text-md/medium" : "text-sm/medium",
                                              children: P
                                                  ? b.intl.format(b.t.SFFP7K, {
                                                        helpdeskArticle: d.Z.getArticleURL(
                                                            h.BhN.VIRTUAL_CURRENCY_LEARN_MORE,
                                                        ),
                                                    })
                                                  : n.body,
                                          }),
                                          N &&
                                              (0, r.jsxs)("div", {
                                                  className: v.wideBannerCtaContainer,
                                                  children: [
                                                      (0, r.jsx)(c.Button, {
                                                          variant: "overlay-primary",
                                                          onClick: Z,
                                                          text: null != (l = n.ctaText) ? l : b.intl.string(b.t.jVcuVY),
                                                      }),
                                                      A &&
                                                          (0, r.jsx)("img", {
                                                              src: n.logoURL,
                                                              alt: "",
                                                              className: v.wideBannerLogo,
                                                          }),
                                                  ],
                                              }),
                                      ],
                                  }),
                              }),
                              !N &&
                                  (0, r.jsx)("div", {
                                      className: v.wideBannerBlockButton,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "overlay-primary",
                                          onClick: () => {
                                              i({
                                                  sourceButton: "shop wide banner",
                                                  categorySkuId: T,
                                                  isInternalShopDeeplink: !0,
                                                  isOrbsExclusive: null == E ? void 0 : E.isOrbsExclusive,
                                              });
                                          },
                                          text: b.intl.string(b.t.jVcuVY),
                                      }),
                                  }),
                          ],
                      }),
                  });
              },
          });
};
