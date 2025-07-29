(r.d(t, { Z: () => b }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(622535),
    s = r(481060),
    c = r(63063),
    u = r(597688),
    d = r(297651),
    p = r(215023),
    f = r(981631),
    g = r(388032),
    h = r(806734);
let b = (e) => {
    var t, r, i;
    let { wideBannerBlock: b, handleTransition: m, tab: _ } = e,
        O = null == (t = u.Z.getCategoryByStoreListingId(b.categoryStoreListingId)) ? void 0 : t.skuId,
        C = l.useRef(null),
        v = l.useRef(null),
        [E, S] = l.useState();
    l.useEffect(() => {
        let e = v.current;
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
    let y = null != O ? O : '',
        { handleCardVisibilityChange: x } = (0, d.E)(y, 'home', 'marketing wide banner'),
        j = b.bannerUrl;
    if (null == j) return null;
    let T = _ === p.AW.ORBS;
    return (0, n.jsx)(o.$, {
        innerRef: C,
        onChange: x,
        threshold: 0,
        children: (0, n.jsxs)('div', {
            ref: C,
            className: a()(h.row, h.between, h.bannerBlockContainer, h.centeredSection, { [h.extraRounded]: T }),
            children: [
                (0, n.jsx)('div', {
                    className: a()(h.wideBannerBackgroundImg, { [h.extraRounded]: T }),
                    children: (0, n.jsx)('img', {
                        ref: v,
                        src: j,
                        alt: b.title,
                        className: a()(h.wideBannerArt, { [h.wideBannerArtOrbs]: T }),
                        style: { height: null != E ? ''.concat(E, 'px') : 'auto' }
                    })
                }),
                (0, n.jsx)('div', {
                    className: h.wideBannerContentContainer,
                    style: { maxHeight: null != E ? ''.concat(E, 'px') : 'auto' },
                    children: (0, n.jsxs)('div', {
                        className: h.wideBannerTextContainer,
                        children: [
                            (0, n.jsx)(s.X6q, {
                                style: { color: null != (r = b.bannerTextColor) ? r : 'var(--header-primary)' },
                                className: T ? h.wideBannerOrbsHeading : void 0,
                                variant: T ? 'heading-xl/bold' : 'heading-lg/semibold',
                                children: b.title
                            }),
                            (0, n.jsx)(s.Text, {
                                style: { color: null != (i = b.bannerTextColor) ? i : 'var(--text-muted)' },
                                lineClamp: 2,
                                variant: T ? 'text-md/medium' : 'text-sm/medium',
                                children: T ? g.intl.format(g.t.SFFP7O, { helpdeskArticle: c.Z.getArticleURL(f.BhN.VIRTUAL_CURRENCY_LEARN_MORE) }) : b.body
                            })
                        ]
                    })
                }),
                !0 !== b.disableCta &&
                    (0, n.jsx)('div', {
                        className: h.wideBannerBlockButton,
                        children: (0, n.jsx)(s.zxk, {
                            variant: 'overlay-primary',
                            onClick: () => m('shop wide banner', y),
                            text: g.intl.string(g.t.jVcuVV)
                        })
                    })
            ]
        })
    });
};
