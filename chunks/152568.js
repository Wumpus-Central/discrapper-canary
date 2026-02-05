"use strict";
s.d(t, { A: () => L });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(554146),
    o = s(230109),
    c = s(397927),
    d = s(367727),
    u = s(976860),
    g = s(44724),
    m = s(954571),
    _ = s(975571),
    h = s(440938),
    p = s(590180),
    f = s(597783),
    E = s(212407),
    C = s(758836),
    b = s(652215),
    A = s(49999),
    x = s(818348),
    S = s(985018),
    v = s(201073);
let L = (e) => {
    let { wideBannerBlock: t, tab: s } = e,
        l = p.A.getCategoryByStoreListingId(t.categoryStoreListingId),
        L = r.useRef(null),
        T = r.useRef(null),
        [I, O] = r.useState(),
        [y, j] = r.useState(!1);
    r.useEffect(() => {
        let e = T.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && O(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let N = l?.skuId ?? "",
        { handleCardVisibilityChange: k } = (0, f.Z)(N, "home", "marketing wide banner"),
        R = (0, h.uM)(),
        { bannerURL: B } = (0, E.w$)(t),
        P = s === C.G2.ORBS,
        M = null != t.ctaRoute && "" !== t.ctaRoute,
        D = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || M),
        w = null != t.logoURL && "" !== t.logoURL,
        H = r.useCallback(() => {
            if ((j(!0), t.isDismissible)) {
                let e = t.dismissibleContentVersion ?? 0;
                (0, d.$l)(i.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: A.i.USER_DISMISS });
            }
        }, [t.isDismissible, t.dismissibleContentVersion]),
        G = r.useCallback(
            (e) => {
                m.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: R?.sessionId,
                    sku_id: N,
                    page_type: s,
                    page_section: R?.pageSection,
                    page_category: R?.pageCategory,
                    tile_type: "WIDE_BANNER",
                    tile_position: String(R?.tilePosition),
                    cta_name: e,
                });
            },
            [R, N, s],
        ),
        U = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((G(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                    let e = t.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                s = parseInt(t[2], 10);
                            (0, g.default)({ guildId: e, pageIndex: s });
                        }
                    } else (0, u.pX)(e);
                }
            },
            [t.ctaRoute, G],
        );
    if (null == B || y) return null;
    let F = a()(v.nM, v.Tq, v.TS, v.YB, { [v._1]: P, [v.vb]: M }),
        V = (0, n.jsxs)(n.Fragment, {
            children: [
                t.isDismissible &&
                    (0, n.jsx)("div", {
                        className: v.Mh,
                        children: (0, n.jsx)(c.JnF, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), H();
                            },
                            "aria-label": S.intl.string(S.t.WAI6xu),
                        }),
                    }),
                (0, n.jsx)("div", {
                    className: a()(v.zK, { [v._1]: P }),
                    style: null != I ? { height: `${I}px` } : void 0,
                    children: (0, n.jsx)("img", { ref: T, src: B, alt: t.title, className: a()(v.LN, { [v.d5]: P }) }),
                }),
                (0, n.jsx)("div", {
                    className: a()(v.Ep, { [v.Qq]: D }),
                    style: { maxHeight: null != I ? `${I}px` : "auto" },
                    children: (0, n.jsxs)("div", {
                        className: v.E8,
                        children: [
                            (0, n.jsx)(c.Heading, {
                                style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                className: P ? v.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: t.title,
                            }),
                            (0, n.jsx)(c.Text, {
                                style: { color: "var(--text-muted)" },
                                lineClamp: 2,
                                variant: P ? "text-md/medium" : "text-sm/medium",
                                children: P
                                    ? S.intl.format(S.t.SFFP7K, {
                                          helpdeskArticle: _.A.getArticleURL(b.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : t.body,
                            }),
                            D &&
                                (0, n.jsxs)("div", {
                                    className: v.nP,
                                    children: [
                                        (0, n.jsx)(c.Button, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                e.stopPropagation(), U(t.ctaText ?? S.intl.string(S.t.jVcuVY));
                                            },
                                            text: t.ctaText ?? S.intl.string(S.t.jVcuVY),
                                        }),
                                        w && (0, n.jsx)("img", { src: t.logoURL, alt: "", className: v.bU }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, n.jsx)(c.NPJ, {
        theme: P ? void 0 : x.NJ.DARK,
        children: (e) =>
            (0, n.jsx)(o.L, {
                innerRef: L,
                onChange: k,
                threshold: 0,
                children: M
                    ? (0, n.jsx)(c.DUT, { innerRef: L, onClick: () => U(null), className: a()(e, F), children: V })
                    : (0, n.jsx)("div", { ref: L, className: a()(e, F), children: V }),
            }),
    });
};
