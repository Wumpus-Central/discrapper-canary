n.d(t, { Z: () => y }), n(388685), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(704215),
    a = n(622535),
    c = n(481060),
    u = n(605236),
    d = n(703656),
    g = n(705338),
    f = n(626135),
    p = n(63063),
    m = n(381585),
    C = n(597688),
    h = n(297651),
    _ = n(794324),
    b = n(215023),
    E = n(981631),
    v = n(921944),
    S = n(231338),
    O = n(388032),
    x = n(310582);
let y = (e) => {
    var t, n, i;
    let { wideBannerBlock: y, tab: k } = e,
        T = C.Z.getCategoryByStoreListingId(y.categoryStoreListingId),
        j = l.useRef(null),
        I = l.useRef(null),
        [L, B] = l.useState(),
        [N, A] = l.useState(!1);
    l.useEffect(() => {
        let e = I.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && B(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let P = null != (t = null == T ? void 0 : T.skuId) ? t : "",
        { handleCardVisibilityChange: R } = (0, h.E)(P, "home", "marketing wide banner"),
        Z = (0, m.sp)(),
        { bannerURL: w } = (0, _.UI)(y),
        H = k === b.AW.ORBS,
        D = null != y.ctaRoute && "" !== y.ctaRoute,
        M = !0 !== y.disableCta && ((null != y.ctaText && "" !== y.ctaText) || D),
        F = null != y.logoURL && "" !== y.logoURL,
        W = l.useCallback(() => {
            if ((A(!0), y.isDismissible)) {
                var e;
                let t = null != (e = y.dismissibleContentVersion) ? e : 0;
                (0, u.wH)(o.z.COLLECTIBLES_SHOP_WIDE_BANNER, t, { dismissAction: v.L.USER_DISMISS });
            }
        }, [y.isDismissible, y.dismissibleContentVersion]),
        U = l.useCallback(
            (e) => {
                f.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == Z ? void 0 : Z.sessionId,
                    sku_id: P,
                    page_type: k,
                    page_section: null == Z ? void 0 : Z.pageSection,
                    page_category: null == Z ? void 0 : Z.pageCategory,
                    tile_type: "WIDE_BANNER",
                    tile_position: String(null == Z ? void 0 : Z.tilePosition),
                    cta_name: e,
                });
            },
            [Z, P, k],
        ),
        V = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((U(e), null != y.ctaRoute && "" !== y.ctaRoute)) {
                    let e = y.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                n = parseInt(t[2], 10);
                            (0, g.default)({
                                guildId: e,
                                pageIndex: n,
                            });
                        }
                    } else (0, d.uL)(e);
                }
            },
            [y.ctaRoute, U],
        );
    if (null == w || N) return null;
    let z = s()(x.row, x.between, x.bannerBlockContainer, x.centeredSection, {
            [x.extraRounded]: H,
            [x.bannerBlockContainerClickable]: D,
        }),
        G = (0, r.jsxs)(r.Fragment, {
            children: [
                y.isDismissible &&
                    (0, r.jsx)("div", {
                        className: x.wideBannerCloseButton,
                        children: (0, r.jsx)(c.PZ7, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), W();
                            },
                            "aria-label": O.intl.string(O.t.WAI6xu),
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: s()(x.wideBannerBackgroundImg, { [x.extraRounded]: H }),
                    style: null != L ? { height: "".concat(L, "px") } : void 0,
                    children: (0, r.jsx)("img", {
                        ref: I,
                        src: w,
                        alt: y.title,
                        className: s()(x.wideBannerArt, { [x.wideBannerArtOrbs]: H }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s()(x.wideBannerContentContainer, { [x.wideBannerWithCTAContentContainer]: M }),
                    style: { maxHeight: null != L ? "".concat(L, "px") : "auto" },
                    children: (0, r.jsxs)("div", {
                        className: x.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                style: { color: null != (n = y.bannerTextColor) ? n : "var(--header-primary)" },
                                className: H ? x.wideBannerOrbsHeading : void 0,
                                variant: "heading-xl/bold",
                                children: y.title,
                            }),
                            (0, r.jsx)(c.Text, {
                                style: { color: "var(--text-muted)" },
                                lineClamp: 2,
                                variant: H ? "text-md/medium" : "text-sm/medium",
                                children: H
                                    ? O.intl.format(O.t.SFFP7K, {
                                          helpdeskArticle: p.Z.getArticleURL(E.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : y.body,
                            }),
                            M &&
                                (0, r.jsxs)("div", {
                                    className: x.wideBannerCtaContainer,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                var t;
                                                e.stopPropagation(),
                                                    V(null != (t = y.ctaText) ? t : O.intl.string(O.t.jVcuVY));
                                            },
                                            text: null != (i = y.ctaText) ? i : O.intl.string(O.t.jVcuVY),
                                        }),
                                        F &&
                                            (0, r.jsx)("img", {
                                                src: y.logoURL,
                                                alt: "",
                                                className: x.wideBannerLogo,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, r.jsx)(c.f6W, {
        theme: H ? void 0 : S.BR.DARK,
        children: (e) =>
            (0, r.jsx)(a.$, {
                innerRef: j,
                onChange: R,
                threshold: 0,
                children: D
                    ? (0, r.jsx)(c.P3F, {
                          innerRef: j,
                          onClick: () => V(null),
                          className: s()(e, z),
                          children: G,
                      })
                    : (0, r.jsx)("div", {
                          ref: j,
                          className: s()(e, z),
                          children: G,
                      }),
            }),
    });
};
