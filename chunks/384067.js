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
    g = n(981631),
    b = n(388032),
    f = n(806734);
let h = (e) => {
    var t, n, a;
    let { wideBannerBlock: h, handleTransition: m, tab: _ } = e,
        C = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? void 0 : t.skuId,
        v = l.useRef(null),
        O = l.useRef(null),
        [S, x] = l.useState();
    l.useEffect(() => {
        let e = O.current;
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
    let E = null != C ? C : '',
        { handleCardVisibilityChange: j } = (0, d.E)(E, 'home', 'marketing wide banner'),
        y = h.bannerUrl;
    if (null == y) return null;
    let P = _ === p.AW.ORBS;
    return (0, r.jsx)(o.$, {
        innerRef: v,
        onChange: j,
        threshold: 0,
        children: (0, r.jsxs)('div', {
            ref: v,
            className: i()(f.row, f.between, f.bannerBlockContainer, f.centeredSection, { [f.extraRounded]: P }),
            children: [
                (0, r.jsx)('div', {
                    className: i()(f.wideBannerBackgroundImg, { [f.extraRounded]: P }),
                    children: (0, r.jsx)('img', {
                        ref: O,
                        src: y,
                        alt: h.title,
                        className: i()(f.wideBannerArt, { [f.wideBannerArtOrbs]: P }),
                        style: { height: null != S ? ''.concat(S, 'px') : 'auto' }
                    })
                }),
                (0, r.jsx)('div', {
                    className: f.wideBannerContentContainer,
                    style: { maxHeight: null != S ? ''.concat(S, 'px') : 'auto' },
                    children: (0, r.jsxs)('div', {
                        className: f.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                style: { color: null != (n = h.bannerTextColor) ? n : 'var(--header-primary)' },
                                className: P ? f.wideBannerOrbsHeading : void 0,
                                variant: P ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: h.title
                            }),
                            (0, r.jsx)(s.Text, {
                                style: { color: null != (a = h.bannerTextColor) ? a : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: P ? 'text-md/medium' : 'text-sm/medium',
                                children: P ? b.intl.format(b.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(g.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : h.body
                            })
                        ]
                    })
                }),
                !0 !== h.disableCta &&
                    (0, r.jsx)(s.zxk, {
                        className: f.wideBannerBlockButton,
                        color: s.Ttl.PRIMARY,
                        onClick: () => m('shop wide banner', E),
                        children: b.intl.string(b.t.jVcuVV)
                    })
            ]
        })
    });
};
