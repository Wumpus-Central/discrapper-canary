n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(404615),
    o = n(743612),
    c = n(593595);
let d = (e) => {
    var t;
    let { title: n, titleClassName: r, buttonClassName: d, perkImage: u, isCarousel: m, onCtaClick: g, perkComponent: p, subtitle: h = '', descriptionCta: f = '', cardVariant: b, subtitleClassName: _, imageOverlayText: x } = e,
        E = (0, a._)(b),
        j = null != x;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: s()(c.cover, c.below) }),
            (0, i.jsx)(o.Z, {
                title: n,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: E,
                titleClassName: r,
                subtitle: h,
                subtitleClassName: _
            }),
            null != u &&
                (0, i.jsxs)('div', {
                    className: s()(c.relative, { [c.cardImage]: !m }),
                    children: [
                        (0, i.jsx)('img', {
                            src: u,
                            alt: '',
                            className: m ? (j ? c.carouselCardImageGrayscale : c.carouselCardImage) : ''
                        }),
                        j
                            ? (0, i.jsx)('div', {
                                  className: c.imageOverlayTextContainer,
                                  children: (0, i.jsx)(l.Text, {
                                      className: c.imageOverlayText,
                                      variant: 'text-md/bold',
                                      children: x
                                  })
                              })
                            : null
                    ]
                }),
            null != p &&
                (0, i.jsxs)('div', {
                    className: c.cardIllustrationNoHover,
                    children: [
                        p,
                        0 !== f.length &&
                            null != g &&
                            (0, i.jsx)(l.zxk, {
                                className: d,
                                fullWidth: !0,
                                onClick: g,
                                children: (0, i.jsx)('div', {
                                    className: null == E || null == (t = E.descriptionCta) ? void 0 : t.className,
                                    children: f
                                })
                            })
                    ]
                })
        ]
    });
};
