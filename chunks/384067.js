n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(622535),
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
        E = null == (t = u.Z.getCategoryByStoreListingId(_.categoryStoreListingId)) ? void 0 : t.skuId,
        v = l.useRef(null),
        S = l.useRef(null),
        [O, x] = l.useState();
    l.useEffect(() => {
        let e = S.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && x(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let y = null != E ? E : "",
        { handleCardVisibilityChange: j } = (0, d.E)(y, "home", "marketing wide banner"),
        { bannerURL: T } = (0, g.UI)(_);
    if (null == T) return null;
    let L = b === f.AW.ORBS;
    return (0, r.jsx)(o.$, {
        innerRef: v,
        onChange: j,
        threshold: 0,
        children: (0, r.jsxs)("div", {
            ref: v,
            className: s()(h.row, h.between, h.bannerBlockContainer, h.centeredSection, { [h.extraRounded]: L }),
            children: [
                (0, r.jsx)("div", {
                    className: s()(h.wideBannerBackgroundImg, { [h.extraRounded]: L }),
                    children: (0, r.jsx)("img", {
                        ref: S,
                        src: T,
                        alt: _.title,
                        className: s()(h.wideBannerArt, { [h.wideBannerArtOrbs]: L }),
                        style: { height: null != O ? "".concat(O, "px") : "auto" },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: h.wideBannerContentContainer,
                    style: { maxHeight: null != O ? "".concat(O, "px") : "auto" },
                    children: (0, r.jsxs)("div", {
                        className: h.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                style: { color: null != (n = _.bannerTextColor) ? n : "var(--header-primary)" },
                                className: L ? h.wideBannerOrbsHeading : void 0,
                                variant: L ? "heading-xl/bold" : "heading-lg/semibold",
                                children: _.title,
                            }),
                            (0, r.jsx)(a.Text, {
                                style: { color: null != (i = _.bannerTextColor) ? i : "var(--text-muted)" },
                                lineClamp: 2,
                                variant: L ? "text-md/medium" : "text-sm/medium",
                                children: L
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
                            onClick: () => m("shop wide banner", y),
                            text: C.intl.string(C.t.jVcuVV),
                        }),
                    }),
            ],
        }),
    });
};
