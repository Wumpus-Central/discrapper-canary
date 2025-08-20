r.d(t, { Z: () => b }), r(388685);
var n = r(951288),
    l = r(647438),
    a = r(120356),
    i = r.n(a),
    o = r(622535),
    s = r(481060),
    c = r(63063),
    u = r(597688),
    d = r(297651),
    p = r(215023),
    g = r(981631),
    f = r(388032),
    m = r(310582);
let b = (e) => {
    var t, r, a;
    let { wideBannerBlock: b, handleTransition: h, tab: _ } = e,
        v = null == (t = u.Z.getCategoryByStoreListingId(b.categoryStoreListingId)) ? void 0 : t.skuId,
        O = l.useRef(null),
        C = l.useRef(null),
        [E, y] = l.useState();
    l.useEffect(() => {
        let e = C.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && y(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let S = null != v ? v : "",
        { handleCardVisibilityChange: x } = (0, d.E)(S, "home", "marketing wide banner"),
        j = b.bannerUrl;
    if (null == j) return null;
    let T = _ === p.AW.ORBS;
    return (0, n.jsx)(o.$, {
        innerRef: O,
        onChange: x,
        threshold: 0,
        children: (0, n.jsxs)("div", {
            ref: O,
            className: i()(m.row, m.between, m.bannerBlockContainer, m.centeredSection, { [m.extraRounded]: T }),
            children: [
                (0, n.jsx)("div", {
                    className: i()(m.wideBannerBackgroundImg, { [m.extraRounded]: T }),
                    children: (0, n.jsx)("img", {
                        ref: C,
                        src: j,
                        alt: b.title,
                        className: i()(m.wideBannerArt, { [m.wideBannerArtOrbs]: T }),
                        style: { height: null != E ? "".concat(E, "px") : "auto" },
                    }),
                }),
                (0, n.jsx)("div", {
                    className: m.wideBannerContentContainer,
                    style: { maxHeight: null != E ? "".concat(E, "px") : "auto" },
                    children: (0, n.jsxs)("div", {
                        className: m.wideBannerTextContainer,
                        children: [
                            (0, n.jsx)(s.X6q, {
                                style: { color: null != (r = b.bannerTextColor) ? r : "var(--header-primary)" },
                                className: T ? m.wideBannerOrbsHeading : void 0,
                                variant: T ? "heading-xl/bold" : "heading-lg/semibold",
                                children: b.title,
                            }),
                            (0, n.jsx)(s.Text, {
                                style: { color: null != (a = b.bannerTextColor) ? a : "var(--text-muted)" },
                                lineClamp: 2,
                                variant: T ? "text-md/medium" : "text-sm/medium",
                                children: T
                                    ? f.intl.format(f.t.SFFP7O, {
                                          helpdeskArticle: c.Z.getArticleURL(g.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : b.body,
                            }),
                        ],
                    }),
                }),
                !0 !== b.disableCta &&
                    (0, n.jsx)("div", {
                        className: m.wideBannerBlockButton,
                        children: (0, n.jsx)(s.zxk, {
                            variant: "overlay-primary",
                            onClick: () => h("shop wide banner", S),
                            text: f.intl.string(f.t.jVcuVV),
                        }),
                    }),
            ],
        }),
    });
};
