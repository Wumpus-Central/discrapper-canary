n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(481060),
    o = n(404615),
    c = n(743612),
    d = n(593595);
let u = (e) => {
    var t;
    let { title: n, titleClassName: r, buttonClassName: u, perkImage: m, isCarousel: p, onCtaClick: g, perkComponent: h, subtitle: f = '', descriptionCta: b = '', cardVariant: x, subtitleClassName: _, imageOverlayText: j } = e,
        C = (0, o._)(x),
        E = null != j;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: s()(d.cover, d.below) }),
            (0, i.jsx)(c.Z, {
                title: n,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: C,
                titleClassName: r,
                subtitle: f,
                subtitleClassName: _
            }),
            null != m &&
                (0, i.jsxs)('div', {
                    className: s()(d.relative, { [d.cardImage]: !p }),
                    children: [
                        (0, i.jsx)('img', {
                            src: m,
                            alt: '',
                            className: p ? (E ? d.carouselCardImageGrayscale : d.carouselCardImage) : ''
                        }),
                        E
                            ? (0, i.jsx)('div', {
                                  className: d.imageOverlayTextContainer,
                                  children: (0, i.jsx)(l.Text, {
                                      className: d.imageOverlayText,
                                      variant: 'text-md/bold',
                                      children: j
                                  })
                              })
                            : null
                    ]
                }),
            null != h &&
                (0, i.jsxs)('div', {
                    className: d.cardIllustrationNoHover,
                    children: [
                        h,
                        0 !== b.length &&
                            null != g &&
                            (0, i.jsx)(a.zx, {
                                className: u,
                                fullWidth: !0,
                                onClick: g,
                                children: (0, i.jsx)('div', {
                                    className: null == C || null == (t = C.descriptionCta) ? void 0 : t.className,
                                    children: b
                                })
                            })
                    ]
                })
        ]
    });
};
