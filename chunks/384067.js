n.d(t, { Z: () => y }), n(388685), n(35282);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(704215),
    i = n(622535),
    c = n(481060),
    u = n(605236),
    d = n(703656),
    f = n(705338),
    g = n(626135),
    b = n(63063),
    p = n(381585),
    m = n(597688),
    h = n(297651),
    C = n(794324),
    E = n(215023),
    v = n(981631),
    S = n(921944),
    _ = n(231338),
    x = n(388032),
    O = n(222194);
let y = (e) => {
    var t, n, a;
    let { wideBannerBlock: y, tab: k } = e,
        T = m.Z.getCategoryByStoreListingId(y.categoryStoreListingId),
        j = l.useRef(null),
        L = l.useRef(null),
        [I, A] = l.useState(),
        [B, N] = l.useState(!1);
    l.useEffect(() => {
        let e = L.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && A(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let R = null != (t = null == T ? void 0 : T.skuId) ? t : "",
        { handleCardVisibilityChange: P } = (0, h.E)(R, "home", "marketing wide banner"),
        Z = (0, p.sp)(),
        { bannerURL: w } = (0, C.UI)(y),
        D = k === E.AW.ORBS,
        H = null != y.ctaRoute && "" !== y.ctaRoute,
        M = !0 !== y.disableCta && ((null != y.ctaText && "" !== y.ctaText) || H),
        F = null != y.logoURL && "" !== y.logoURL,
        W = l.useCallback(() => {
            if ((N(!0), y.isDismissible)) {
                var e;
                let t = null != (e = y.dismissibleContentVersion) ? e : 0;
                (0, u.wH)(o.z.COLLECTIBLES_SHOP_WIDE_BANNER, t, { dismissAction: S.L.USER_DISMISS });
            }
        }, [y.isDismissible, y.dismissibleContentVersion]),
        U = l.useCallback(
            (e) => {
                g.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == Z ? void 0 : Z.sessionId,
                    sku_id: R,
                    page_type: k,
                    page_section: null == Z ? void 0 : Z.pageSection,
                    page_category: null == Z ? void 0 : Z.pageCategory,
                    tile_type: "WIDE_BANNER",
                    tile_position: String(null == Z ? void 0 : Z.tilePosition),
                    cta_name: e,
                });
            },
            [Z, R, k],
        ),
        z = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((U(e), null != y.ctaRoute && "" !== y.ctaRoute)) {
                    let e = y.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                n = parseInt(t[2], 10);
                            (0, f.default)({
                                guildId: e,
                                pageIndex: n,
                            });
                        }
                    } else (0, d.uL)(e);
                }
            },
            [y.ctaRoute, U],
        );
    if (null == w || B) return null;
    let V = s()(O.row, O.between, O.bannerBlockContainer, O.centeredSection, {
            [O.extraRounded]: D,
            [O.bannerBlockContainerClickable]: H,
        }),
        G = (0, r.jsxs)(r.Fragment, {
            children: [
                y.isDismissible &&
                    (0, r.jsx)("div", {
                        className: O.wideBannerCloseButton,
                        children: (0, r.jsx)(c.PZ7, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), W();
                            },
                            "aria-label": x.intl.string(x.t.WAI6xu),
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: s()(O.wideBannerBackgroundImg, { [O.extraRounded]: D }),
                    style: null != I ? { height: "".concat(I, "px") } : void 0,
                    children: (0, r.jsx)("img", {
                        ref: L,
                        src: w,
                        alt: y.title,
                        className: s()(O.wideBannerArt, { [O.wideBannerArtOrbs]: D }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s()(O.wideBannerContentContainer, { [O.wideBannerWithCTAContentContainer]: M }),
                    style: { maxHeight: null != I ? "".concat(I, "px") : "auto" },
                    children: (0, r.jsxs)("div", {
                        className: O.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                style: { color: null != (n = y.bannerTextColor) ? n : "var(--text-strong)" },
                                className: D ? O.wideBannerOrbsHeading : void 0,
                                variant: "heading-xl/bold",
                                children: y.title,
                            }),
                            (0, r.jsx)(c.Text, {
                                style: { color: "var(--text-muted)" },
                                lineClamp: 2,
                                variant: D ? "text-md/medium" : "text-sm/medium",
                                children: D
                                    ? x.intl.format(x.t.SFFP7K, {
                                          helpdeskArticle: b.Z.getArticleURL(v.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : y.body,
                            }),
                            M &&
                                (0, r.jsxs)("div", {
                                    className: O.wideBannerCtaContainer,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                var t;
                                                e.stopPropagation(),
                                                    z(null != (t = y.ctaText) ? t : x.intl.string(x.t.jVcuVY));
                                            },
                                            text: null != (a = y.ctaText) ? a : x.intl.string(x.t.jVcuVY),
                                        }),
                                        F &&
                                            (0, r.jsx)("img", {
                                                src: y.logoURL,
                                                alt: "",
                                                className: O.wideBannerLogo,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, r.jsx)(c.f6W, {
        theme: D ? void 0 : _.BR.DARK,
        children: (e) =>
            (0, r.jsx)(i.$, {
                innerRef: j,
                onChange: P,
                threshold: 0,
                children: H
                    ? (0, r.jsx)(c.P3F, {
                          innerRef: j,
                          onClick: () => z(null),
                          className: s()(e, V),
                          children: G,
                      })
                    : (0, r.jsx)("div", {
                          ref: j,
                          className: s()(e, V),
                          children: G,
                      }),
            }),
    });
};
