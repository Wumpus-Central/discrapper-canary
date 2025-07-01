(n.d(t, { Z: () => b }), n(388685));
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
    h = n(806734);
let b = (e) => {
    var t, n, a;
    let { wideBannerBlock: b, handleTransition: m, tab: _ } = e,
        C = null == (t = u.Z.getCategoryByStoreListingId(b.categoryStoreListingId)) ? void 0 : t.skuId,
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
        { handleCardVisibilityChange: y } = (0, d.E)(E, 'home', 'marketing wide banner'),
        j = b.bannerUrl;
    if (null == j) return null;
    let P = _ === p.AW.ORBS;
    return (0, r.jsx)(o.$, {
        innerRef: v,
        onChange: y,
        threshold: 0,
        children: (0, r.jsxs)('div', {
            ref: v,
            className: i()(h.row, h.between, h.bannerBlockContainer, h.centeredSection, { [h.extraRounded]: P }),
            children: [
                (0, r.jsx)('div', {
                    className: i()(h.wideBannerBackgroundImg, { [h.extraRounded]: P }),
                    children: (0, r.jsx)('img', {
                        ref: O,
                        src: j,
                        alt: b.title,
                        className: i()(h.wideBannerArt, { [h.wideBannerArtOrbs]: P }),
                        style: { height: null != S ? ''.concat(S, 'px') : 'auto' }
                    })
                }),
                (0, r.jsx)('div', {
                    className: h.wideBannerContentContainer,
                    style: { maxHeight: null != S ? ''.concat(S, 'px') : 'auto' },
                    children: (0, r.jsxs)('div', {
                        className: h.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                style: { color: null != (n = b.bannerTextColor) ? n : 'var(--header-primary)' },
                                className: P ? h.wideBannerOrbsHeading : void 0,
                                variant: P ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: b.title
                            }),
                            (0, r.jsx)(s.Text, {
                                style: { color: null != (a = b.bannerTextColor) ? a : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: P ? 'text-md/medium' : 'text-sm/medium',
                                children: P ? g.intl.format(g.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : b.body
                            })
                        ]
                    })
                }),
                !0 !== b.disableCta &&
                    (0, r.jsx)(s.zxk, {
                        className: h.wideBannerBlockButton,
                        color: s.Ttl.PRIMARY,
                        onClick: () => m('shop wide banner', E),
                        children: g.intl.string(g.t.jVcuVV)
                    })
            ]
        })
    });
};
