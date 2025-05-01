n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(314684),
    o = n(404615),
    c = n(743612),
    d = n(735825),
    u = n(344253),
    m = n(721239),
    p = n(557634),
    g = n(992429);
let h = (e) => {
    var t;
    let n,
        r,
        { title: h, titleClassName: f, buttonClassName: b, perkImage: _, isCarousel: x, onCtaClick: E, perkComponent: j, subtitle: C = '', descriptionCta: O = '', cardVariant: S, subtitleClassName: v, imageOverlayText: T } = e,
        I = (0, o._)(S),
        N = (0, a.Er)(),
        y = (null == N ? void 0 : N.nitroTenureStatus) === d.EB.REDEEMABLE;
    switch (null == N ? void 0 : N.nitroTenureStatus) {
        case d.EB.REDEEMABLE:
            (n = g), (r = 'unlocked icon');
            break;
        case d.EB.PENDING:
            (n = m), (r = 'locked icon');
            break;
        case d.EB.REDEEMED:
            (n = p), (r = 'thumbs up icon');
            break;
        default:
            (n = void 0), (r = '');
    }
    let A = null != T;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: s()(u.cover, u.below) }),
            (0, i.jsx)(c.Z, {
                title: h,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: I,
                titleClassName: f,
                subtitle: C,
                subtitleClassName: v
            }),
            null != _ &&
                (0, i.jsxs)('div', {
                    className: s()(u.relative, { [u.cardImage]: !x }),
                    children: [
                        (0, i.jsx)('img', {
                            src: _,
                            alt: '',
                            className: x ? (A ? u.carouselCardImageGrayscale : u.carouselCardImage) : ''
                        }),
                        A
                            ? (0, i.jsx)('div', {
                                  className: u.imageOverlayTextContainer,
                                  children: (0, i.jsx)(l.Text, {
                                      className: u.imageOverlayText,
                                      variant: 'text-md/bold',
                                      children: T
                                  })
                              })
                            : null
                    ]
                }),
            null != j &&
                (0, i.jsxs)('div', {
                    className: u.cardIllustrationNoHover,
                    children: [
                        j,
                        0 !== O.length &&
                            null != E &&
                            (0, i.jsx)(l.zxk, {
                                className: b,
                                disabled: !y,
                                fullWidth: !0,
                                onClick: E,
                                children: (0, i.jsxs)('div', {
                                    className: null == I || null == (t = I.descriptionCta) ? void 0 : t.className,
                                    children: [
                                        (0, i.jsx)('img', {
                                            alt: r,
                                            src: n
                                        }),
                                        O
                                    ]
                                })
                            })
                    ]
                })
        ]
    });
};
