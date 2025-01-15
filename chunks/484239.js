var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(314684),
    o = n(404615),
    c = n(743612),
    d = n(735825),
    u = n(506829),
    m = n(721239),
    g = n(557634),
    h = n(992429);
t.Z = (e) => {
    var t;
    let n,
        s,
        { title: p, titleClassName: x, buttonClassName: f, perkImage: _, isCarousel: E, onCtaClick: C, perkComponent: T, subtitle: S = '', descriptionCta: b = '', cardVariant: I, subtitleClassName: N, imageOverlayText: v } = e,
        A = (0, o._)(I),
        j = (0, l.yQ)(),
        R = (null == j ? void 0 : j.nitroTenureStatus) === d.EB.REDEEMABLE;
    switch (null == j ? void 0 : j.nitroTenureStatus) {
        case d.EB.REDEEMABLE:
            (n = h), (s = 'unlocked icon');
            break;
        case d.EB.PENDING:
            (n = m), (s = 'locked icon');
            break;
        case d.EB.REDEEMED:
            (n = g), (s = 'thumbs up icon');
            break;
        default:
            (n = void 0), (s = '');
    }
    let O = null != v;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: r()(u.cover, u.below) }),
            (0, i.jsx)(c.Z, {
                title: p,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: A,
                titleClassName: x,
                subtitle: S,
                subtitleClassName: N
            }),
            null != _ &&
                (0, i.jsxs)('div', {
                    className: r()(u.relative, { [u.cardImage]: !E }),
                    children: [
                        (0, i.jsx)('img', {
                            src: _,
                            alt: '',
                            className: E ? (O ? u.carouselCardImageGrayscale : u.carouselCardImage) : ''
                        }),
                        O
                            ? (0, i.jsx)('div', {
                                  className: u.imageOverlayTextContainer,
                                  children: (0, i.jsx)(a.Text, {
                                      className: u.imageOverlayText,
                                      variant: 'text-md/bold',
                                      children: v
                                  })
                              })
                            : null
                    ]
                }),
            null != T &&
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)('div', {
                        className: u.cardIllustrationNoHover,
                        children: [
                            T,
                            0 !== b.length &&
                                null != C &&
                                (0, i.jsx)(a.Button, {
                                    className: f,
                                    disabled: !R,
                                    fullWidth: !0,
                                    onClick: C,
                                    children: (0, i.jsxs)('div', {
                                        className: null == A ? void 0 : null === (t = A.descriptionCta) || void 0 === t ? void 0 : t.className,
                                        children: [
                                            (0, i.jsx)('img', {
                                                alt: s,
                                                src: n
                                            }),
                                            b
                                        ]
                                    })
                                })
                        ]
                    })
                })
        ]
    });
};
