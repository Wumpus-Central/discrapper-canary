n.d(t, { Z: () => O }), n(388685), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(704215),
    s = n(622535),
    c = n(481060),
    u = n(605236),
    d = n(703656),
    f = n(705338),
    g = n(63063),
    p = n(597688),
    m = n(297651),
    h = n(794324),
    C = n(215023),
    _ = n(981631),
    b = n(921944),
    v = n(231338),
    x = n(388032),
    E = n(310582);
let O = (e) => {
    var t;
    let { wideBannerBlock: n, handleTransition: i, tab: O } = e,
        S = p.Z.getCategoryByStoreListingId(n.categoryStoreListingId),
        y = l.useRef(null),
        j = l.useRef(null),
        [k, I] = l.useState(),
        [T, L] = l.useState(!1);
    l.useEffect(() => {
        let e = j.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && I(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let B = null != (t = null == S ? void 0 : S.skuId) ? t : "",
        { handleCardVisibilityChange: P } = (0, m.E)(B, "home", "marketing wide banner"),
        { bannerURL: N } = (0, h.UI)(n),
        A = O === C.AW.ORBS,
        R =
            !0 !== n.disableCta &&
            ((null != n.ctaText && "" !== n.ctaText) || (null != n.ctaRoute && "" !== n.ctaRoute)),
        Z = null != n.logoURL && "" !== n.logoURL,
        w = l.useCallback(() => {
            if ((L(!0), n.isDismissible)) {
                var e;
                let t = null != (e = n.dismissibleContentVersion) ? e : 0;
                (0, u.wH)(o.z.COLLECTIBLES_SHOP_WIDE_BANNER, t, { dismissAction: b.L.USER_DISMISS });
            }
        }, [n.isDismissible, n.dismissibleContentVersion]),
        D = l.useCallback(() => {
            if (null != n.ctaRoute && "" !== n.ctaRoute) {
                let e = n.ctaRoute;
                if (e.includes("game-shop")) {
                    let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                    if (null != t) {
                        let e = t[1],
                            n = parseInt(t[2], 10);
                        (0, f.Z)({
                            guildId: e,
                            pageIndex: n,
                        });
                    }
                } else (0, d.uL)(e);
            }
        }, [n.ctaRoute]);
    return null == N || T
        ? null
        : (0, r.jsx)(c.f6W, {
              theme: A ? void 0 : v.BR.DARK,
              children: (e) => {
                  var t, l;
                  return (0, r.jsx)(s.$, {
                      innerRef: y,
                      onChange: P,
                      threshold: 0,
                      children: (0, r.jsxs)("div", {
                          ref: y,
                          className: a()(e, E.row, E.between, E.bannerBlockContainer, E.centeredSection, {
                              [E.extraRounded]: A,
                          }),
                          children: [
                              n.isDismissible &&
                                  (0, r.jsx)("div", {
                                      className: E.wideBannerCloseButton,
                                      children: (0, r.jsx)(c.PZ7, {
                                          size: "sm",
                                          onClick: w,
                                          "aria-label": x.intl.string(x.t.WAI6xu),
                                      }),
                                  }),
                              (0, r.jsx)("div", {
                                  className: a()(E.wideBannerBackgroundImg, { [E.extraRounded]: A }),
                                  style: null != k ? { height: "".concat(k, "px") } : void 0,
                                  children: (0, r.jsx)("img", {
                                      ref: j,
                                      src: N,
                                      alt: n.title,
                                      className: a()(E.wideBannerArt, { [E.wideBannerArtOrbs]: A }),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: a()(E.wideBannerContentContainer, {
                                      [E.wideBannerWithCTAContentContainer]: R,
                                  }),
                                  style: { maxHeight: null != k ? "".concat(k, "px") : "auto" },
                                  children: (0, r.jsxs)("div", {
                                      className: E.wideBannerTextContainer,
                                      children: [
                                          (0, r.jsx)(c.Heading, {
                                              style: {
                                                  color: null != (t = n.bannerTextColor) ? t : "var(--header-primary)",
                                              },
                                              className: A ? E.wideBannerOrbsHeading : void 0,
                                              variant: "heading-xl/bold",
                                              children: n.title,
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              style: { color: "var(--text-muted)" },
                                              lineClamp: 2,
                                              variant: A ? "text-md/medium" : "text-sm/medium",
                                              children: A
                                                  ? x.intl.format(x.t.SFFP7K, {
                                                        helpdeskArticle: g.Z.getArticleURL(
                                                            _.BhN.VIRTUAL_CURRENCY_LEARN_MORE,
                                                        ),
                                                    })
                                                  : n.body,
                                          }),
                                          R &&
                                              (0, r.jsxs)("div", {
                                                  className: E.wideBannerCtaContainer,
                                                  children: [
                                                      (0, r.jsx)(c.Button, {
                                                          variant: "overlay-primary",
                                                          onClick: D,
                                                          text: null != (l = n.ctaText) ? l : x.intl.string(x.t.jVcuVY),
                                                      }),
                                                      Z &&
                                                          (0, r.jsx)("img", {
                                                              src: n.logoURL,
                                                              alt: "",
                                                              className: E.wideBannerLogo,
                                                          }),
                                                  ],
                                              }),
                                      ],
                                  }),
                              }),
                              !R &&
                                  (0, r.jsx)("div", {
                                      className: E.wideBannerBlockButton,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "overlay-primary",
                                          onClick: () => {
                                              i({
                                                  sourceButton: "shop wide banner",
                                                  categorySkuId: B,
                                                  isInternalShopDeeplink: !0,
                                                  isOrbsExclusive: null == S ? void 0 : S.isOrbsExclusive,
                                              });
                                          },
                                          text: x.intl.string(x.t.jVcuVY),
                                      }),
                                  }),
                          ],
                      }),
                  });
              },
          });
};
