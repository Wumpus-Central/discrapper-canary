r.d(t, { Z: () => h }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(622535),
    s = r(481060),
    c = r(63063),
    u = r(597688),
    d = r(297651),
    p = r(215023),
    f = r(981631),
    g = r(388032),
    b = r(806734);
let h = (e) => {
    var t, r, a;
    let { wideBannerBlock: h, handleTransition: m, tab: _ } = e,
        v = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? void 0 : t.skuId,
        C = l.useRef(null),
        O = l.useRef(null),
        [E, S] = l.useState();
    l.useEffect(() => {
        let e = O.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && S(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let y = null != v ? v : "",
        { handleCardVisibilityChange: x } = (0, d.E)(y, "home", "marketing wide banner"),
        j = h.bannerUrl;
    if (null == j) return null;
    let T = _ === p.AW.ORBS;
    return (0, n.jsx)(o.$, {
        innerRef: C,
        onChange: x,
        threshold: 0,
        children: (0, n.jsxs)("div", {
            ref: C,
            className: i()(b.row, b.between, b.bannerBlockContainer, b.centeredSection, { [b.extraRounded]: T }),
            children: [
                (0, n.jsx)("div", {
                    className: i()(b.wideBannerBackgroundImg, { [b.extraRounded]: T }),
                    children: (0, n.jsx)("img", {
                        ref: O,
                        src: j,
                        alt: h.title,
                        className: i()(b.wideBannerArt, { [b.wideBannerArtOrbs]: T }),
                        style: { height: null != E ? "".concat(E, "px") : "auto" },
                    }),
                }),
                (0, n.jsx)("div", {
                    className: b.wideBannerContentContainer,
                    style: { maxHeight: null != E ? "".concat(E, "px") : "auto" },
                    children: (0, n.jsxs)("div", {
                        className: b.wideBannerTextContainer,
                        children: [
                            (0, n.jsx)(s.X6q, {
                                style: { color: null != (r = h.bannerTextColor) ? r : "var(--header-primary)" },
                                className: T ? b.wideBannerOrbsHeading : void 0,
                                variant: T ? "heading-xl/bold" : "heading-lg/semibold",
                                children: h.title,
                            }),
                            (0, n.jsx)(s.Text, {
                                style: { color: null != (a = h.bannerTextColor) ? a : "var(--text-muted)" },
                                lineClamp: 2,
                                variant: T ? "text-md/medium" : "text-sm/medium",
                                children: T
                                    ? g.intl.format(g.t.SFFP7O, {
                                          helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : h.body,
                            }),
                        ],
                    }),
                }),
                !0 !== h.disableCta &&
                    (0, n.jsx)("div", {
                        className: b.wideBannerBlockButton,
                        children: (0, n.jsx)(s.zxk, {
                            variant: "overlay-primary",
                            onClick: () => m("shop wide banner", y),
                            text: g.intl.string(g.t.jVcuVV),
                        }),
                    }),
            ],
        }),
    });
};
