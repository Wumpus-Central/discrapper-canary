"use strict";
s.d(t, { A: () => O });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(554146),
    o = s(230109),
    c = s(815021),
    d = s(534514),
    u = s(834730),
    g = s(821609),
    h = s(43990),
    _ = s(939249),
    m = s(367727),
    p = s(976860),
    f = s(44724),
    E = s(954571),
    x = s(975571),
    A = s(440938),
    C = s(590180),
    S = s(597783),
    b = s(212407),
    v = s(758836),
    L = s(652215),
    I = s(49999),
    j = s(818348),
    N = s(985018),
    T = s(941734);
let O = (e) => {
    let { wideBannerBlock: t, tab: s } = e,
        r = C.A.getCategoryByStoreListingId(t.categoryStoreListingId),
        O = l.useRef(null),
        y = l.useRef(null),
        [k, R] = l.useState(),
        [B, P] = l.useState(!1);
    l.useEffect(() => {
        let e = y.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && R(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let M = r?.skuId ?? "",
        { handleCardVisibilityChange: D } = (0, S.Z)(M, "home", "marketing wide banner"),
        w = (0, A.uM)(),
        { bannerURL: H } = (0, b.w$)(t),
        G = s === v.G2.ORBS,
        F = null != t.ctaRoute && "" !== t.ctaRoute,
        U = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || F),
        K = null != t.logoURL && "" !== t.logoURL,
        V = l.useCallback(() => {
            if ((P(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, m.$l)(i.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: I.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        W = l.useCallback(
            (e) => {
                E.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: w?.sessionId,
                    sku_id: M,
                    page_type: s,
                    page_section: w?.pageSection,
                    page_category: w?.pageCategory,
                    tile_type: "WIDE_BANNER",
                    tile_position: String(w?.tilePosition),
                    cta_name: e,
                });
            },
            [w, M, s],
        ),
        z = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((W(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                    let e = t.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                s = parseInt(t[2], 10);
                            (0, f.default)({ guildId: e, pageIndex: s });
                        }
                    } else (0, p.pX)(e);
                }
            },
            [t.ctaRoute, W],
        );
    if (null == H || B) return null;
    let $ = a()(T.nM, T.Tq, T.TS, T.YB, { [T._1]: G, [T.vb]: F }),
        Y = (0, n.jsxs)(n.Fragment, {
            children: [
                t.isDismissible &&
                    (0, n.jsx)("div", {
                        className: T.Mh,
                        children: (0, n.jsx)(c.J, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), V();
                            },
                            "aria-label": N.intl.string(N.t.WAI6xu),
                        }),
                    }),
                (0, n.jsx)("div", {
                    className: a()(T.zK, { [T._1]: G }),
                    style: null != k ? { height: `${k}px` } : void 0,
                    children: (0, n.jsx)("img", { ref: y, src: H, alt: t.title, className: a()(T.LN, { [T.d5]: G }) }),
                }),
                (0, n.jsx)("div", {
                    className: a()(T.Ep, { [T.Qq]: U }),
                    style: { maxHeight: null != k ? `${k}px` : "auto" },
                    children: (0, n.jsxs)("div", {
                        className: T.E8,
                        children: [
                            (0, n.jsx)(d.D, {
                                style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                className: G ? T.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: t.title,
                            }),
                            (0, n.jsx)(u.E, {
                                style: { color: "var(--text-muted)" },
                                lineClamp: 2,
                                variant: G ? "text-md/medium" : "text-sm/medium",
                                children: G
                                    ? N.intl.format(N.t.SFFP7K, {
                                          helpdeskArticle: x.A.getArticleURL(L.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            U &&
                                (0, n.jsxs)("div", {
                                    className: T.nP,
                                    children: [
                                        (0, n.jsx)(g.$, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), z(t.ctaText ?? N.intl.string(N.t.jVcuVY));
                                            },
                                            text: t.ctaText ?? N.intl.string(N.t.jVcuVY),
                                        }),
                                        K && (0, n.jsx)("img", { src: t.logoURL, alt: "", className: T.bU }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, n.jsx)(h.N, {
        theme: G ? void 0 : j.NJ.DARK,
        children: (e) =>
            (0, n.jsx)(o.L, {
                innerRef: O,
                onChange: D,
                threshold: 0,
                children: F
                    ? (0, n.jsx)(_.D, { innerRef: O, onClick: () => z(null), className: a()(e, $), children: Y })
                    : (0, n.jsx)("div", { ref: O, className: a()(e, $), children: Y }),
            }),
    });
};
