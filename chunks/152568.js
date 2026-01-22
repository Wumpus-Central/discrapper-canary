l.d(t, { A: () => _ }), l(896048), l(747238);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(554146),
    o = l(230109),
    c = l(397927),
    u = l(367727),
    d = l(976860),
    f = l(44724),
    b = l(954571),
    g = l(975571),
    p = l(440938),
    m = l(590180),
    h = l(597783),
    E = l(212407),
    v = l(758836),
    A = l(652215),
    x = l(49999),
    S = l(818348),
    C = l(985018),
    O = l(201073);
let _ = (e) => {
    var t, l, s;
    let { wideBannerBlock: _, tab: y } = e,
        j = m.A.getCategoryByStoreListingId(_.categoryStoreListingId),
        L = r.useRef(null),
        T = r.useRef(null),
        [I, N] = r.useState(),
        [k, R] = r.useState(!1);
    r.useEffect(() => {
        let e = T.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && N(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let P = null != (t = null == j ? void 0 : j.skuId) ? t : "",
        { handleCardVisibilityChange: D } = (0, h.Z)(P, "home", "marketing wide banner"),
        w = (0, p.uM)(),
        { bannerURL: B } = (0, E.w$)(_),
        M = y === v.G2.ORBS,
        H = null != _.ctaRoute && "" !== _.ctaRoute,
        G = !0 !== _.disableCta && ((null != _.ctaText && "" !== _.ctaText) || H),
        F = null != _.logoURL && "" !== _.logoURL,
        U = r.useCallback(() => {
            if ((R(!0), _.isDismissible)) {
                var e;
                let t = null != (e = _.dismissibleContentVersion) ? e : 0;
                (0, u.$l)(i.M.COLLECTIBLES_SHOP_WIDE_BANNER, t, { dismissAction: x.i.USER_DISMISS });
            }
        }, [_.isDismissible, _.dismissibleContentVersion]),
        z = r.useCallback(
            (e) => {
                b.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == w ? void 0 : w.sessionId,
                    sku_id: P,
                    page_type: y,
                    page_section: null == w ? void 0 : w.pageSection,
                    page_category: null == w ? void 0 : w.pageCategory,
                    tile_type: "WIDE_BANNER",
                    tile_position: String(null == w ? void 0 : w.tilePosition),
                    cta_name: e,
                });
            },
            [w, P, y],
        ),
        V = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((z(e), null != _.ctaRoute && "" !== _.ctaRoute)) {
                    let e = _.ctaRoute;
                    if (e.includes("game-shop")) {
                        let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                        if (null != t) {
                            let e = t[1],
                                l = parseInt(t[2], 10);
                            (0, f.default)({
                                guildId: e,
                                pageIndex: l,
                            });
                        }
                    } else (0, d.pX)(e);
                }
            },
            [_.ctaRoute, z],
        );
    if (null == B || k) return null;
    let K = a()(O.nM, O.Tq, O.TS, O.YB, {
            [O._1]: M,
            [O.vb]: H,
        }),
        W = (0, n.jsxs)(n.Fragment, {
            children: [
                _.isDismissible &&
                    (0, n.jsx)("div", {
                        className: O.Mh,
                        children: (0, n.jsx)(c.JnF, {
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(), U();
                            },
                            "aria-label": C.intl.string(C.t.WAI6xu),
                        }),
                    }),
                (0, n.jsx)("div", {
                    className: a()(O.zK, { [O._1]: M }),
                    style: null != I ? { height: "".concat(I, "px") } : void 0,
                    children: (0, n.jsx)("img", {
                        ref: T,
                        src: B,
                        alt: _.title,
                        className: a()(O.LN, { [O.d5]: M }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: a()(O.Ep, { [O.Qq]: G }),
                    style: { maxHeight: null != I ? "".concat(I, "px") : "auto" },
                    children: (0, n.jsxs)("div", {
                        className: O.E8,
                        children: [
                            (0, n.jsx)(c.Heading, {
                                style: { color: null != (l = _.bannerTextColor) ? l : "var(--text-strong)" },
                                className: M ? O.O2 : void 0,
                                variant: "heading-xl/bold",
                                children: _.title,
                            }),
                            (0, n.jsx)(c.Text, {
                                style: { color: "var(--text-muted)" },
                                lineClamp: 2,
                                variant: M ? "text-md/medium" : "text-sm/medium",
                                children: M
                                    ? C.intl.format(C.t.SFFP7K, {
                                          helpdeskArticle: g.A.getArticleURL(A.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : _.body,
                            }),
                            G &&
                                (0, n.jsxs)("div", {
                                    className: O.nP,
                                    children: [
                                        (0, n.jsx)(c.Button, {
                                            variant: "overlay-primary",
                                            onClick: (e) => {
                                                var t;
                                                e.stopPropagation(),
                                                    V(null != (t = _.ctaText) ? t : C.intl.string(C.t.jVcuVY));
                                            },
                                            text: null != (s = _.ctaText) ? s : C.intl.string(C.t.jVcuVY),
                                        }),
                                        F &&
                                            (0, n.jsx)("img", {
                                                src: _.logoURL,
                                                alt: "",
                                                className: O.bU,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        });
    return (0, n.jsx)(c.NPJ, {
        theme: M ? void 0 : S.NJ.DARK,
        children: (e) =>
            (0, n.jsx)(o.L, {
                innerRef: L,
                onChange: D,
                threshold: 0,
                children: H
                    ? (0, n.jsx)(c.DUT, {
                          innerRef: L,
                          onClick: () => V(null),
                          className: a()(e, K),
                          children: W,
                      })
                    : (0, n.jsx)("div", {
                          ref: L,
                          className: a()(e, K),
                          children: W,
                      }),
            }),
    });
};
