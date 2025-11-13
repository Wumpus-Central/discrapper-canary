n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(622535),
    s = n(481060),
    c = n(63063),
    u = n(597688),
    d = n(297651),
    g = n(794324),
    p = n(215023),
    f = n(981631),
    h = n(388032),
    C = n(310582);
let m = (e) => {
    var t, n, i;
    let { wideBannerBlock: m, handleTransition: _, tab: b } = e,
        v = u.Z.getCategoryByStoreListingId(m.categoryStoreListingId),
        x = l.useRef(null),
        E = l.useRef(null),
        [S, O] = l.useState();
    l.useEffect(() => {
        let e = E.current;
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
    let y = null != (t = null == v ? void 0 : v.skuId) ? t : "",
        { handleCardVisibilityChange: j } = (0, d.E)(y, "home", "marketing wide banner"),
        { bannerURL: k } = (0, g.UI)(m);
    if (null == k) return null;
    let I = b === p.AW.ORBS;
    return (0, r.jsx)(o.$, {
        innerRef: x,
        onChange: j,
        threshold: 0,
        children: (0, r.jsxs)("div", {
            ref: x,
            className: a()(C.row, C.between, C.bannerBlockContainer, C.centeredSection, { [C.extraRounded]: I }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(C.wideBannerBackgroundImg, { [C.extraRounded]: I }),
                    children: (0, r.jsx)("img", {
                        ref: E,
                        src: k,
                        alt: m.title,
                        className: a()(C.wideBannerArt, { [C.wideBannerArtOrbs]: I }),
                        style: { height: null != S ? "".concat(S, "px") : "auto" },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: C.wideBannerContentContainer,
                    style: { maxHeight: null != S ? "".concat(S, "px") : "auto" },
                    children: (0, r.jsxs)("div", {
                        className: C.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                style: { color: null != (n = m.bannerTextColor) ? n : "var(--header-primary)" },
                                className: I ? C.wideBannerOrbsHeading : void 0,
                                variant: I ? "heading-xl/bold" : "heading-lg/semibold",
                                children: m.title,
                            }),
                            (0, r.jsx)(s.Text, {
                                style: { color: null != (i = m.bannerTextColor) ? i : "var(--text-muted)" },
                                lineClamp: 2,
                                variant: I ? "text-md/medium" : "text-sm/medium",
                                children: I
                                    ? h.intl.format(h.t.SFFP7K, {
                                          helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : m.body,
                            }),
                        ],
                    }),
                }),
                !0 !== m.disableCta &&
                    (0, r.jsx)("div", {
                        className: C.wideBannerBlockButton,
                        children: (0, r.jsx)(s.Button, {
                            variant: "overlay-primary",
                            onClick: () => {
                                _({
                                    sourceButton: "shop wide banner",
                                    categorySkuId: y,
                                    isInternalShopDeeplink: !0,
                                    isOrbsExclusive: null == v ? void 0 : v.isOrbsExclusive,
                                });
                            },
                            text: h.intl.string(h.t.jVcuVY),
                        }),
                    }),
            ],
        }),
    });
};
