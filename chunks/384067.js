n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(622535),
    s = n(481060),
    c = n(63063),
    u = n(597688),
    d = n(297651),
    b = n(215023),
    f = n(981631),
    p = n(388032),
    g = n(806734);
let h = (e) => {
    var t, n, i;
    let { wideBannerBlock: h, handleTransition: m, tab: _ } = e,
        C = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? void 0 : t.skuId,
        v = l.useRef(null),
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
    let j = null != C ? C : '',
        { handleCardVisibilityChange: y } = (0, d.E)(j, 'home', 'marketing wide banner'),
        P = h.bannerUrl;
    if (null == P) return null;
    let E = _ === b.AW.ORBS;
    return (0, r.jsx)(o.$, {
        innerRef: v,
        onChange: y,
        threshold: 0,
        children: (0, r.jsxs)('div', {
            ref: v,
            className: a()(g.row, g.between, g.bannerBlockContainer, g.centeredSection, { [g.extraRounded]: E }),
            children: [
                (0, r.jsx)('div', {
                    className: a()(g.wideBannerBackgroundImg, { [g.extraRounded]: E }),
                    children: (0, r.jsx)('img', {
                        ref: O,
                        src: P,
                        alt: h.title,
                        className: a()(g.wideBannerArt, { [g.wideBannerArtOrbs]: E }),
                        style: { height: null != x ? ''.concat(x, 'px') : 'auto' }
                    })
                }),
                (0, r.jsx)('div', {
                    className: g.wideBannerContentContainer,
                    style: { maxHeight: null != x ? ''.concat(x, 'px') : 'auto' },
                    children: (0, r.jsxs)('div', {
                        className: g.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                style: { color: null != (n = h.bannerTextColor) ? n : 'var(--header-primary)' },
                                className: E ? g.wideBannerOrbsHeading : void 0,
                                variant: E ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: h.title
                            }),
                            (0, r.jsx)(s.Text, {
                                style: { color: null != (i = h.bannerTextColor) ? i : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: E ? 'text-md/medium' : 'text-sm/medium',
                                children: E ? p.intl.format(p.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : h.body
                            })
                        ]
                    })
                }),
                !0 !== h.disableCta &&
                    (0, r.jsx)(s.zxk, {
                        className: g.wideBannerBlockButton,
                        color: s.Ttl.PRIMARY,
                        onClick: () => m('shop wide banner', j),
                        children: p.intl.string(p.t.jVcuVV)
                    })
            ]
        })
    });
};
