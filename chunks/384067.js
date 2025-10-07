n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(120356),
    a = n.n(s),
    i = n(622535),
    o = n(481060),
    c = n(63063),
    u = n(597688),
    d = n(297651),
    g = n(794324),
    p = n(215023),
    f = n(981631),
    C = n(388032),
    h = n(310582);
let _ = (e) => {
    var t, n, s;
    let { wideBannerBlock: _, handleTransition: m, tab: b } = e,
        E = null == (t = u.Z.getCategoryByStoreListingId(_.categoryStoreListingId)) ? void 0 : t.skuId,
        S = l.useRef(null),
        v = l.useRef(null),
        [x, O] = l.useState();
    l.useEffect(() => {
        let e = v.current;
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
    let y = null != E ? E : "",
        { handleCardVisibilityChange: T } = (0, d.E)(y, "home", "marketing wide banner"),
        { bannerURL: L } = (0, g.UI)(_);
    if (null == L) return null;
    let j = b === p.AW.ORBS;
    return (0, r.jsx)(i.$, {
        innerRef: S,
        onChange: T,
        threshold: 0,
        children: (0, r.jsxs)("div", {
            ref: S,
            className: a()(h.row, h.between, h.bannerBlockContainer, h.centeredSection, { [h.extraRounded]: j }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(h.wideBannerBackgroundImg, { [h.extraRounded]: j }),
                    children: (0, r.jsx)("img", {
                        ref: v,
                        src: L,
                        alt: _.title,
                        className: a()(h.wideBannerArt, { [h.wideBannerArtOrbs]: j }),
                        style: { height: null != x ? "".concat(x, "px") : "auto" },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: h.wideBannerContentContainer,
                    style: { maxHeight: null != x ? "".concat(x, "px") : "auto" },
                    children: (0, r.jsxs)("div", {
                        className: h.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                style: { color: null != (n = _.bannerTextColor) ? n : "var(--header-primary)" },
                                className: j ? h.wideBannerOrbsHeading : void 0,
                                variant: j ? "heading-xl/bold" : "heading-lg/semibold",
                                children: _.title,
                            }),
                            (0, r.jsx)(o.Text, {
                                style: { color: null != (s = _.bannerTextColor) ? s : "var(--text-muted)" },
                                lineClamp: 2,
                                variant: j ? "text-md/medium" : "text-sm/medium",
                                children: j
                                    ? C.intl.format(C.t.SFFP7O, {
                                          helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : _.body,
                            }),
                        ],
                    }),
                }),
                !0 !== _.disableCta &&
                    (0, r.jsx)("div", {
                        className: h.wideBannerBlockButton,
                        children: (0, r.jsx)(o.zxk, {
                            variant: "overlay-primary",
                            onClick: () => m("shop wide banner", y),
                            text: C.intl.string(C.t.jVcuVV),
                        }),
                    }),
            ],
        }),
    });
};
