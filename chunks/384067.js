n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(622535),
    o = n(481060),
    c = n(63063),
    u = n(597688),
    d = n(297651),
    g = n(794324),
    p = n(215023),
    f = n(981631),
    h = n(388032),
    C = n(310582);
let _ = (e) => {
    var t, n, i;
    let { wideBannerBlock: _, handleTransition: m, tab: b } = e,
        v = u.Z.getCategoryByStoreListingId(_.categoryStoreListingId),
        E = l.useRef(null),
        x = l.useRef(null),
        [O, S] = l.useState();
    l.useEffect(() => {
        let e = x.current;
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
    let y = null != (t = null == v ? void 0 : v.skuId) ? t : "",
        { handleCardVisibilityChange: j } = (0, d.E)(y, "home", "marketing wide banner"),
        { bannerURL: k } = (0, g.UI)(_);
    if (null == k) return null;
    let T = b === p.AW.ORBS;
    return (0, r.jsx)(a.$, {
        innerRef: E,
        onChange: j,
        threshold: 0,
        children: (0, r.jsxs)("div", {
            ref: E,
            className: s()(C.row, C.between, C.bannerBlockContainer, C.centeredSection, { [C.extraRounded]: T }),
            children: [
                (0, r.jsx)("div", {
                    className: s()(C.wideBannerBackgroundImg, { [C.extraRounded]: T }),
                    children: (0, r.jsx)("img", {
                        ref: x,
                        src: k,
                        alt: _.title,
                        className: s()(C.wideBannerArt, { [C.wideBannerArtOrbs]: T }),
                        style: { height: null != O ? "".concat(O, "px") : "auto" },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: C.wideBannerContentContainer,
                    style: { maxHeight: null != O ? "".concat(O, "px") : "auto" },
                    children: (0, r.jsxs)("div", {
                        className: C.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                style: { color: null != (n = _.bannerTextColor) ? n : "var(--header-primary)" },
                                className: T ? C.wideBannerOrbsHeading : void 0,
                                variant: T ? "heading-xl/bold" : "heading-lg/semibold",
                                children: _.title,
                            }),
                            (0, r.jsx)(o.Text, {
                                style: { color: null != (i = _.bannerTextColor) ? i : "var(--text-muted)" },
                                lineClamp: 2,
                                variant: T ? "text-md/medium" : "text-sm/medium",
                                children: T
                                    ? h.intl.format(h.t.SFFP7K, {
                                          helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : _.body,
                            }),
                        ],
                    }),
                }),
                !0 !== _.disableCta &&
                    (0, r.jsx)("div", {
                        className: C.wideBannerBlockButton,
                        children: (0, r.jsx)(o.Button, {
                            variant: "overlay-primary",
                            onClick: () => {
                                m({
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
