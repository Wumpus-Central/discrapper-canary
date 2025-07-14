(r.d(t, { Z: () => m }), r(388685));
var n = r(255367),
    l = r(73800),
    o = r(120356),
    i = r.n(o),
    a = r(622535),
    s = r(755721),
    c = r(481060),
    u = r(63063),
    d = r(597688),
    p = r(297651),
    g = r(215023),
    f = r(981631),
    h = r(388032),
    b = r(806734);
let m = (e) => {
    var t, r, o;
    let { wideBannerBlock: m, handleTransition: _, tab: C } = e,
        O = null == (t = d.Z.getCategoryByStoreListingId(m.categoryStoreListingId)) ? void 0 : t.skuId,
        v = l.useRef(null),
        E = l.useRef(null),
        [S, y] = l.useState();
    l.useEffect(() => {
        let e = E.current;
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
    let x = null != O ? O : '',
        { handleCardVisibilityChange: j } = (0, p.E)(x, 'home', 'marketing wide banner'),
        T = m.bannerUrl;
    if (null == T) return null;
    let P = C === g.AW.ORBS;
    return (0, n.jsx)(a.$, {
        innerRef: v,
        onChange: j,
        threshold: 0,
        children: (0, n.jsxs)('div', {
            ref: v,
            className: i()(b.row, b.between, b.bannerBlockContainer, b.centeredSection, { [b.extraRounded]: P }),
            children: [
                (0, n.jsx)('div', {
                    className: i()(b.wideBannerBackgroundImg, { [b.extraRounded]: P }),
                    children: (0, n.jsx)('img', {
                        ref: E,
                        src: T,
                        alt: m.title,
                        className: i()(b.wideBannerArt, { [b.wideBannerArtOrbs]: P }),
                        style: { height: null != S ? ''.concat(S, 'px') : 'auto' }
                    })
                }),
                (0, n.jsx)('div', {
                    className: b.wideBannerContentContainer,
                    style: { maxHeight: null != S ? ''.concat(S, 'px') : 'auto' },
                    children: (0, n.jsxs)('div', {
                        className: b.wideBannerTextContainer,
                        children: [
                            (0, n.jsx)(c.X6q, {
                                style: { color: null != (r = m.bannerTextColor) ? r : 'var(--header-primary)' },
                                className: P ? b.wideBannerOrbsHeading : void 0,
                                variant: P ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: m.title
                            }),
                            (0, n.jsx)(c.Text, {
                                style: { color: null != (o = m.bannerTextColor) ? o : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: P ? 'text-md/medium' : 'text-sm/medium',
                                children: P ? h.intl.format(h.t.SFFP7O, { helpdeskArticle: u.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : m.body
                            })
                        ]
                    })
                }),
                !0 !== m.disableCta &&
                    (0, n.jsx)(s.zx, {
                        className: b.wideBannerBlockButton,
                        color: s.Tt.PRIMARY,
                        onClick: () => _('shop wide banner', x),
                        children: h.intl.string(h.t.jVcuVV)
                    })
            ]
        })
    });
};
