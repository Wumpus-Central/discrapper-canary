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
    b = n(388032),
    g = n(806734);
let h = (e) => {
    var t, n, a;
    let { wideBannerBlock: h, handleTransition: m, tab: _ } = e,
        C = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? void 0 : t.skuId,
        v = l.useRef(null),
        O = l.useRef(null),
        [E, x] = l.useState();
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
    let S = null != C ? C : '',
        { handleCardVisibilityChange: j } = (0, d.E)(S, 'home', 'marketing wide banner'),
        y = h.bannerUrl;
    if (null == y) return null;
    let k = _ === p.AW.ORBS;
    return (0, r.jsx)(o.$, {
        innerRef: v,
        onChange: j,
        threshold: 0,
        children: (0, r.jsxs)('div', {
            ref: v,
            className: i()(g.row, g.between, g.bannerBlockContainer, g.centeredSection, { [g.extraRounded]: k }),
            children: [
                (0, r.jsx)('div', {
                    className: i()(g.wideBannerBackgroundImg, { [g.extraRounded]: k }),
                    children: (0, r.jsx)('img', {
                        ref: O,
                        src: y,
                        alt: h.title,
                        className: i()(g.wideBannerArt, { [g.wideBannerArtOrbs]: k }),
                        style: { height: null != E ? ''.concat(E, 'px') : 'auto' }
                    })
                }),
                (0, r.jsx)('div', {
                    className: g.wideBannerContentContainer,
                    style: { maxHeight: null != E ? ''.concat(E, 'px') : 'auto' },
                    children: (0, r.jsxs)('div', {
                        className: g.wideBannerTextContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                style: { color: null != (n = h.bannerTextColor) ? n : 'var(--header-primary)' },
                                className: k ? g.wideBannerOrbsHeading : void 0,
                                variant: k ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: h.title
                            }),
                            (0, r.jsx)(s.Text, {
                                style: { color: null != (a = h.bannerTextColor) ? a : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: k ? 'text-md/medium' : 'text-sm/medium',
                                children: k ? b.intl.format(b.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : h.body
                            })
                        ]
                    })
                }),
                !0 !== h.disableCta &&
                    (0, r.jsx)(s.zxk, {
                        className: g.wideBannerBlockButton,
                        color: s.Ttl.PRIMARY,
                        onClick: () => m('shop wide banner', S),
                        children: b.intl.string(b.t.jVcuVV)
                    })
            ]
        })
    });
};
