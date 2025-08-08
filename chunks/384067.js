n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(622535),
    s = n(481060),
    c = n(63063),
    u = n(597688),
    d = n(297651),
    p = n(215023),
    g = n(981631),
    f = n(388032),
    b = n(806734);
let h = (e) => {
    var t, n, a;
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
    return (0, r.jsx)(o.$, {
        innerRef: C,
        onChange: x,
        threshold: 0,
        children: (0, r.jsxs)("div", {
            ref: C,
            className: i()(b.row, b.between, b.bannerBlockContainer, b.centeredSection, { [b.extraRounded]: T }),
            children: [
                (0, r.jsx)("div", {
                    className: i()(b.wideBannerBackgroundImg, { [b.extraRounded]: T }),
                    children: (0, r.jsx)("img", {
                        ref: O,
                        src: j,
                        alt: h.title,
                        className: i()(b.wideBannerArt, { [b.wideBannerArtOrbs]: T }),
                        style: { height: null != E ? "".concat(E, "px") : "auto" },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: b.wideBannerContentContainer,
                    style: { maxHeight: null != E ? "".concat(E, "px") : "auto" },
                    children: (0, r.jsxs)("div", {
                        className: b.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                style: { color: null != (n = h.bannerTextColor) ? n : "var(--header-primary)" },
                                className: T ? b.wideBannerOrbsHeading : void 0,
                                variant: T ? "heading-xl/bold" : "heading-lg/semibold",
                                children: h.title,
                            }),
                            (0, r.jsx)(s.Text, {
                                style: { color: null != (a = h.bannerTextColor) ? a : "var(--text-muted)" },
                                lineClamp: 2,
                                variant: T ? "text-md/medium" : "text-sm/medium",
                                children: T
                                    ? f.intl.format(f.t.SFFP7O, {
                                          helpdeskArticle: c.Z.getArticleURL(g.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : h.body,
                            }),
                        ],
                    }),
                }),
                !0 !== h.disableCta &&
                    (0, r.jsx)("div", {
                        className: b.wideBannerBlockButton,
                        children: (0, r.jsx)(s.zxk, {
                            variant: "overlay-primary",
                            onClick: () => m("shop wide banner", y),
                            text: f.intl.string(f.t.jVcuVV),
                        }),
                    }),
            ],
        }),
    });
};
