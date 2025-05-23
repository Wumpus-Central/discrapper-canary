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
    b = n(981631),
    f = n(388032),
    g = n(379890);
let h = (e) => {
    var t, n, a;
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
    let E = null != C ? C : '',
        { handleCardVisibilityChange: j } = (0, d.E)(E, 'home', 'marketing wide banner'),
        P = h.bannerUrl;
    if (null == P) return null;
    let y = _ === p.AW.ORBS;
    return (0, r.jsx)(o.$, {
        innerRef: v,
        onChange: j,
        threshold: 0,
        children: (0, r.jsxs)('div', {
            ref: v,
            className: i()(g.row, g.between, g.bannerBlockContainer, g.centeredSection, { [g.extraRounded]: y }),
            children: [
                (0, r.jsx)('div', {
                    className: i()(g.wideBannerBackgroundImg, { [g.extraRounded]: y }),
                    children: (0, r.jsx)('img', {
                        ref: O,
                        src: P,
                        alt: h.title,
                        className: i()(g.wideBannerArt, { [g.wideBannerArtOrbs]: y }),
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
                                className: y ? g.wideBannerOrbsHeading : void 0,
                                variant: y ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: h.title
                            }),
                            (0, r.jsx)(s.Text, {
                                style: { color: null != (a = h.bannerTextColor) ? a : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: y ? 'text-md/medium' : 'text-sm/medium',
                                children: y ? f.intl.format(f.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(b.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : h.body
                            })
                        ]
                    })
                }),
                !0 !== h.disableCta &&
                    (0, r.jsx)(s.zxk, {
                        className: g.wideBannerBlockButton,
                        color: s.Ttl.PRIMARY,
                        onClick: () => m('shop wide banner', E),
                        children: f.intl.string(f.t.jVcuVV)
                    })
            ]
        })
    });
};
