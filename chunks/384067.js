(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(622535),
    s = n(755721),
    c = n(481060),
    u = n(63063),
    d = n(597688),
    p = n(297651),
    g = n(215023),
    f = n(981631),
    h = n(388032),
    b = n(806734);
let m = (e) => {
    var t, n, o;
    let { wideBannerBlock: m, handleTransition: _, tab: C } = e,
        O = null == (t = d.Z.getCategoryByStoreListingId(m.categoryStoreListingId)) ? void 0 : t.skuId,
        v = l.useRef(null),
        E = l.useRef(null),
        [S, x] = l.useState();
    l.useEffect(() => {
        let e = E.current;
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
    let y = null != O ? O : '',
        { handleCardVisibilityChange: j } = (0, p.E)(y, 'home', 'marketing wide banner'),
        T = m.bannerUrl;
    if (null == T) return null;
    let P = C === g.AW.ORBS;
    return (0, r.jsx)(i.$, {
        innerRef: v,
        onChange: j,
        threshold: 0,
        children: (0, r.jsxs)('div', {
            ref: v,
            className: a()(b.row, b.between, b.bannerBlockContainer, b.centeredSection, { [b.extraRounded]: P }),
            children: [
                (0, r.jsx)('div', {
                    className: a()(b.wideBannerBackgroundImg, { [b.extraRounded]: P }),
                    children: (0, r.jsx)('img', {
                        ref: E,
                        src: T,
                        alt: m.title,
                        className: a()(b.wideBannerArt, { [b.wideBannerArtOrbs]: P }),
                        style: { height: null != S ? ''.concat(S, 'px') : 'auto' }
                    })
                }),
                (0, r.jsx)('div', {
                    className: b.wideBannerContentContainer,
                    style: { maxHeight: null != S ? ''.concat(S, 'px') : 'auto' },
                    children: (0, r.jsxs)('div', {
                        className: b.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                style: { color: null != (n = m.bannerTextColor) ? n : 'var(--header-primary)' },
                                className: P ? b.wideBannerOrbsHeading : void 0,
                                variant: P ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: m.title
                            }),
                            (0, r.jsx)(c.Text, {
                                style: { color: null != (o = m.bannerTextColor) ? o : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: P ? 'text-md/medium' : 'text-sm/medium',
                                children: P ? h.intl.format(h.t.SFFP7O, { helpdeskArticle: u.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : m.body
                            })
                        ]
                    })
                }),
                !0 !== m.disableCta &&
                    (0, r.jsx)(s.zx, {
                        className: b.wideBannerBlockButton,
                        color: s.Tt.PRIMARY,
                        onClick: () => _('shop wide banner', y),
                        children: h.intl.string(h.t.jVcuVV)
                    })
            ]
        })
    });
};
