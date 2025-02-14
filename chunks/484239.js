n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(314684),
    o = n(404615),
    c = n(743612),
    d = n(735825),
    u = n(510040),
    m = n(721239),
    g = n(557634),
    h = n(992429);
let x = (e) => {
    var t;
    let n,
        s,
        { title: x, titleClassName: _, buttonClassName: p, perkImage: E, isCarousel: C, onCtaClick: f, perkComponent: T, subtitle: N = '', descriptionCta: S = '', cardVariant: I, subtitleClassName: b, imageOverlayText: v } = e,
        j = (0, o._)(I),
        A = (0, a.yQ)(),
        O = (null == A ? void 0 : A.nitroTenureStatus) === d.EB.REDEEMABLE;
    switch (null == A ? void 0 : A.nitroTenureStatus) {
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
    let R = null != v;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: r()(u.cover, u.below) }),
            (0, i.jsx)(c.Z, {
                title: x,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: j,
                titleClassName: _,
                subtitle: N,
                subtitleClassName: b
            }),
            null != E &&
                (0, i.jsxs)('div', {
                    className: r()(u.relative, { [u.cardImage]: !C }),
                    children: [
                        (0, i.jsx)('img', {
                            src: E,
                            alt: '',
                            className: C ? (R ? u.carouselCardImageGrayscale : u.carouselCardImage) : ''
                        }),
                        R
                            ? (0, i.jsx)('div', {
                                  className: u.imageOverlayTextContainer,
                                  children: (0, i.jsx)(l.Text, {
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
                            0 !== S.length &&
                                null != f &&
                                (0, i.jsx)(l.zxk, {
                                    className: p,
                                    disabled: !O,
                                    fullWidth: !0,
                                    onClick: f,
                                    children: (0, i.jsxs)('div', {
                                        className: null == j ? void 0 : null === (t = j.descriptionCta) || void 0 === t ? void 0 : t.className,
                                        children: [
                                            (0, i.jsx)('img', {
                                                alt: s,
                                                src: n
                                            }),
                                            S
                                        ]
                                    })
                                })
                        ]
                    })
                })
        ]
    });
};
