n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(622535),
    o = n(481060),
    c = n(63063),
    u = n(597688),
    d = n(297651),
    g = n(215023),
    f = n(981631),
    p = n(388032),
    m = n(310582);
let _ = (e) => {
    var t, n, a;
    let { wideBannerBlock: _, handleTransition: h, tab: b } = e,
        C = null == (t = u.Z.getCategoryByStoreListingId(_.categoryStoreListingId)) ? void 0 : t.skuId,
        E = l.useRef(null),
        S = l.useRef(null),
        [O, v] = l.useState();
    l.useEffect(() => {
        let e = S.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && v(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let x = null != C ? C : "",
        { handleCardVisibilityChange: y } = (0, d.E)(x, "home", "marketing wide banner"),
        T = _.bannerUrl;
    if (null == T) return null;
    let L = b === g.AW.ORBS;
    return (0, r.jsx)(i.$, {
        innerRef: E,
        onChange: y,
        threshold: 0,
        children: (0, r.jsxs)("div", {
            ref: E,
            className: s()(m.row, m.between, m.bannerBlockContainer, m.centeredSection, { [m.extraRounded]: L }),
            children: [
                (0, r.jsx)("div", {
                    className: s()(m.wideBannerBackgroundImg, { [m.extraRounded]: L }),
                    children: (0, r.jsx)("img", {
                        ref: S,
                        src: T,
                        alt: _.title,
                        className: s()(m.wideBannerArt, { [m.wideBannerArtOrbs]: L }),
                        style: { height: null != O ? "".concat(O, "px") : "auto" },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: m.wideBannerContentContainer,
                    style: { maxHeight: null != O ? "".concat(O, "px") : "auto" },
                    children: (0, r.jsxs)("div", {
                        className: m.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                style: { color: null != (n = _.bannerTextColor) ? n : "var(--header-primary)" },
                                className: L ? m.wideBannerOrbsHeading : void 0,
                                variant: L ? "heading-xl/bold" : "heading-lg/semibold",
                                children: _.title,
                            }),
                            (0, r.jsx)(o.Text, {
                                style: { color: null != (a = _.bannerTextColor) ? a : "var(--text-muted)" },
                                lineClamp: 2,
                                variant: L ? "text-md/medium" : "text-sm/medium",
                                children: L
                                    ? p.intl.format(p.t.SFFP7O, {
                                          helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE),
                                      })
                                    : _.body,
                            }),
                        ],
                    }),
                }),
                !0 !== _.disableCta &&
                    (0, r.jsx)("div", {
                        className: m.wideBannerBlockButton,
                        children: (0, r.jsx)(o.zxk, {
                            variant: "overlay-primary",
                            onClick: () => h("shop wide banner", x),
                            text: p.intl.string(p.t.jVcuVV),
                        }),
                    }),
            ],
        }),
    });
};
