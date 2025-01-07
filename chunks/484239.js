var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(314684),
    o = n(404615),
    c = n(743612),
    d = n(735825),
    u = n(506829),
    g = n(721239),
    m = n(557634),
    f = n(992429);
t.Z = (e) => {
    var t;
    let n,
        r,
        { title: p, titleClassName: _, buttonClassName: h, perkImage: x, isCarousel: E, onCtaClick: b, perkComponent: C, subtitle: v = '', descriptionCta: T = '', cardVariant: N, subtitleClassName: I, imageOverlayText: S } = e,
        R = (0, o._)(N),
        j = (0, l.yQ)(),
        A = (null == j ? void 0 : j.nitroTenureStatus) === d.EB.REDEEMABLE;
    switch (null == j ? void 0 : j.nitroTenureStatus) {
        case d.EB.REDEEMABLE:
            (n = f), (r = 'unlocked icon');
            break;
        case d.EB.PENDING:
            (n = g), (r = 'locked icon');
            break;
        case d.EB.REDEEMED:
            (n = m), (r = 'thumbs up icon');
            break;
        default:
            (n = void 0), (r = '');
    }
    let P = null != S;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: a()(u.cover, u.below) }),
            (0, i.jsx)(c.Z, {
                title: p,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: R,
                titleClassName: _,
                subtitle: v,
                subtitleClassName: I
            }),
            null != x &&
                (0, i.jsxs)('div', {
                    className: a()(u.relative, { [u.cardImage]: !E }),
                    children: [
                        (0, i.jsx)('img', {
                            src: x,
                            alt: '',
                            className: E ? (P ? u.carouselCardImageGrayscale : u.carouselCardImage) : ''
                        }),
                        P
                            ? (0, i.jsx)('div', {
                                  className: u.imageOverlayTextContainer,
                                  children: (0, i.jsx)(s.Text, {
                                      className: u.imageOverlayText,
                                      variant: 'text-md/bold',
                                      children: S
                                  })
                              })
                            : null
                    ]
                }),
            null != C &&
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)('div', {
                        className: u.cardIllustrationNoHover,
                        children: [
                            C,
                            0 !== T.length &&
                                null != b &&
                                (0, i.jsx)(s.Button, {
                                    className: h,
                                    disabled: !A,
                                    fullWidth: !0,
                                    onClick: b,
                                    children: (0, i.jsxs)('div', {
                                        className: null == R ? void 0 : null === (t = R.descriptionCta) || void 0 === t ? void 0 : t.className,
                                        children: [
                                            (0, i.jsx)('img', {
                                                alt: r,
                                                src: n
                                            }),
                                            T
                                        ]
                                    })
                                })
                        ]
                    })
                })
        ]
    });
};
