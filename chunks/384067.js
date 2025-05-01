n.d(t, { Z: () => h }), n(388685);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(622535),
    s = n(481060),
    c = n(63063),
    u = n(597688),
    d = n(297651),
    b = n(215023),
    p = n(981631),
    f = n(388032),
    g = n(806734);
let h = (e) => {
    var t, n, a;
    let { wideBannerBlock: h, handleTransition: m, tab: _ } = e,
        C = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? void 0 : t.skuId,
        v = l.useRef(null),
        x = l.useRef(null),
        [O, j] = l.useState();
    l.useEffect(() => {
        let e = x.current;
        if (null == e) return;
        let t = () => {
            e.naturalWidth > 0 && e.naturalHeight > 0 && j(1080 * (e.naturalHeight / e.naturalWidth));
        };
        return (
            e.complete ? t() : (e.onload = t),
            () => {
                e.onload = null;
            }
        );
    }, []);
    let y = null != C ? C : '',
        { handleCardVisibilityChange: S } = (0, d.E)(y, 'home', 'marketing wide banner'),
        k = h.bannerUrl;
    if (null == k) return null;
    let P = _ === b.AW.ORBS;
    return (0, r.jsx)(o.$, {
        innerRef: v,
        onChange: S,
        threshold: 0,
        children: (0, r.jsxs)('div', {
            ref: v,
            className: i()(g.row, g.between, g.bannerBlockContainer, g.centeredSection, { [g.extraRounded]: P }),
            children: [
                (0, r.jsx)('div', {
                    className: i()(g.wideBannerBackgroundImg, { [g.extraRounded]: P }),
                    children: (0, r.jsx)('img', {
                        ref: x,
                        src: k,
                        alt: h.title,
                        className: i()(g.wideBannerArt, { [g.wideBannerArtOrbs]: P }),
                        style: { height: null != O ? ''.concat(O, 'px') : 'auto' }
                    })
                }),
                (0, r.jsx)('div', {
                    className: g.wideBannerContentContainer,
                    style: { maxHeight: null != O ? ''.concat(O, 'px') : 'auto' },
                    children: (0, r.jsxs)('div', {
                        className: g.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                style: { color: null != (n = h.bannerTextColor) ? n : 'var(--header-primary)' },
                                className: P ? g.wideBannerOrbsHeading : void 0,
                                variant: P ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: h.title
                            }),
                            (0, r.jsx)(s.Text, {
                                style: { color: null != (a = h.bannerTextColor) ? a : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: P ? 'text-md/medium' : 'text-sm/medium',
                                children: P ? f.intl.format(f.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(p.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : h.body
                            })
                        ]
                    })
                }),
                !0 !== h.disableCta &&
                    (0, r.jsx)(s.zxk, {
                        className: g.wideBannerBlockButton,
                        color: s.Ttl.PRIMARY,
                        onClick: () => m('shop wide banner', y),
                        children: f.intl.string(f.t.jVcuVV)
                    })
            ]
        })
    });
};
