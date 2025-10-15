n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(622535),
    a = n(481060),
    c = n(63063),
    u = n(597688),
    d = n(297651),
    g = n(794324),
    f = n(215023),
    p = n(981631),
    C = n(388032),
    h = n(310582);
let _ = (e) => {
    var t, n, i;
    let { wideBannerBlock: _, handleTransition: m, tab: b } = e,
        v = null == (t = u.Z.getCategoryByStoreListingId(_.categoryStoreListingId)) ? void 0 : t.skuId,
        E = l.useRef(null),
        O = l.useRef(null),
        [x, S] = l.useState();
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
        { handleCardVisibilityChange: k } = (0, d.E)(y, "home", "marketing wide banner"),
        { bannerURL: j } = (0, g.UI)(_);
    if (null == j) return null;
    let T = b === f.AW.ORBS;
    return (0, r.jsx)(s.$, {
        innerRef: E,
        onChange: k,
        threshold: 0,
        children: (0, r.jsxs)("div", {
            ref: E,
            className: o()(h.row, h.between, h.bannerBlockContainer, h.centeredSection, { [h.extraRounded]: T }),
            children: [
                (0, r.jsx)("div", {
                    className: o()(h.wideBannerBackgroundImg, { [h.extraRounded]: T }),
                    children: (0, r.jsx)("img", {
                        ref: O,
                        src: j,
                        alt: _.title,
                        className: o()(h.wideBannerArt, { [h.wideBannerArtOrbs]: T }),
                        style: { height: null != x ? "".concat(x, "px") : "auto" },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: h.wideBannerContentContainer,
                    style: { maxHeight: null != x ? "".concat(x, "px") : "auto" },
                    children: (0, r.jsxs)("div", {
                        className: h.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                style: { color: null != (n = _.bannerTextColor) ? n : "var(--header-primary)" },
                                className: T ? h.wideBannerOrbsHeading : void 0,
                                variant: T ? "heading-xl/bold" : "heading-lg/semibold",
                                children: _.title,
                            }),
                            (0, r.jsx)(a.Text, {
                                style: { color: null != (i = _.bannerTextColor) ? i : "var(--text-muted)" },
                                lineClamp: 2,
                                variant: T ? "text-md/medium" : "text-sm/medium",
                                children: T
                                    ? C.intl.format(C.t.SFFP7O, {
                                          helpdeskArticle: c.Z.getArticleURL(p.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : _.body,
                            }),
                        ],
                    }),
                }),
                !0 !== _.disableCta &&
                    (0, r.jsx)("div", {
                        className: h.wideBannerBlockButton,
                        children: (0, r.jsx)(a.Button, {
                            variant: "overlay-primary",
                            onClick: () => m("shop wide banner", y, void 0, !0),
                            text: C.intl.string(C.t.jVcuVV),
                        }),
                    }),
            ],
        }),
    });
};
