n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(314684),
    o = n(404615),
    c = n(743612),
    d = n(735825),
    u = n(832554),
    m = n(721239),
    g = n(557634),
    _ = n(992429);
let p = (e) => {
    var t;
    let n,
        r,
        { title: p, titleClassName: f, buttonClassName: h, perkImage: x, isCarousel: E, onCtaClick: C, perkComponent: b, subtitle: v = '', descriptionCta: T = '', cardVariant: N, subtitleClassName: I, imageOverlayText: R } = e,
        j = (0, o._)(N),
        S = (0, l.yQ)(),
        A = (null == S ? void 0 : S.nitroTenureStatus) === d.EB.REDEEMABLE;
    switch (null == S ? void 0 : S.nitroTenureStatus) {
        case d.EB.REDEEMABLE:
            (n = _), (r = 'unlocked icon');
            break;
        case d.EB.PENDING:
            (n = m), (r = 'locked icon');
            break;
        case d.EB.REDEEMED:
            (n = g), (r = 'thumbs up icon');
            break;
        default:
            (n = void 0), (r = '');
    }
    let P = null != R;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: a()(u.cover, u.below) }),
            (0, i.jsx)(c.Z, {
                title: p,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: j,
                titleClassName: f,
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
                                      children: R
                                  })
                              })
                            : null
                    ]
                }),
            null != b &&
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)('div', {
                        className: u.cardIllustrationNoHover,
                        children: [
                            b,
                            0 !== T.length &&
                                null != C &&
                                (0, i.jsx)(s.zxk, {
                                    className: h,
                                    disabled: !A,
                                    fullWidth: !0,
                                    onClick: C,
                                    children: (0, i.jsxs)('div', {
                                        className: null == j ? void 0 : null === (t = j.descriptionCta) || void 0 === t ? void 0 : t.className,
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
