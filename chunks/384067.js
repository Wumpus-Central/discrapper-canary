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
    f = n(981631),
    g = n(388032),
    b = n(806734);
let h = (e) => {
    var t, n, a;
    let { wideBannerBlock: h, handleTransition: m, tab: _ } = e,
        C = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? void 0 : t.skuId,
        v = l.useRef(null),
        O = l.useRef(null),
        [S, E] = l.useState();
    l.useEffect(() => {
        let e = O.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && E(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let x = null != C ? C : '',
        { handleCardVisibilityChange: y } = (0, d.E)(x, 'home', 'marketing wide banner'),
        j = h.bannerUrl;
    if (null == j) return null;
    let P = _ === p.AW.ORBS;
    return (0, r.jsx)(o.$, {
        innerRef: v,
        onChange: y,
        threshold: 0,
        children: (0, r.jsxs)('div', {
            ref: v,
            className: i()(b.row, b.between, b.bannerBlockContainer, b.centeredSection, { [b.extraRounded]: P }),
            children: [
                (0, r.jsx)('div', {
                    className: i()(b.wideBannerBackgroundImg, { [b.extraRounded]: P }),
                    children: (0, r.jsx)('img', {
                        ref: O,
                        src: j,
                        alt: h.title,
                        className: i()(b.wideBannerArt, { [b.wideBannerArtOrbs]: P }),
                        style: { height: null != S ? ''.concat(S, 'px') : 'auto' }
                    })
                }),
                (0, r.jsx)('div', {
                    className: b.wideBannerContentContainer,
                    style: { maxHeight: null != S ? ''.concat(S, 'px') : 'auto' },
                    children: (0, r.jsxs)('div', {
                        className: b.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                style: { color: null != (n = h.bannerTextColor) ? n : 'var(--header-primary)' },
                                className: P ? b.wideBannerOrbsHeading : void 0,
                                variant: P ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: h.title
                            }),
                            (0, r.jsx)(s.Text, {
                                style: { color: null != (a = h.bannerTextColor) ? a : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: P ? 'text-md/medium' : 'text-sm/medium',
                                children: P ? g.intl.format(g.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : h.body
                            })
                        ]
                    })
                }),
                !0 !== h.disableCta &&
                    (0, r.jsx)(s.zxk, {
                        className: b.wideBannerBlockButton,
                        color: s.Ttl.PRIMARY,
                        onClick: () => m('shop wide banner', x),
                        children: g.intl.string(g.t.jVcuVV)
                    })
            ]
        })
    });
};
