n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(404615),
    c = n(743612),
    u = n(505754);
let d = (e) => {
    var t;
    let {
            title: n,
            titleClassName: i,
            buttonClassName: d,
            perkImage: f,
            isCarousel: _,
            onCtaClick: p,
            perkComponent: h,
            subtitle: m = "",
            descriptionCta: g = "",
            cardVariant: E,
            subtitleClassName: b,
            imageOverlayText: y,
        } = e,
        O = (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
        v = (0, l._)(E),
        I = null != y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: a()(u.cover, u.below) }),
            (0, r.jsx)(c.Z, {
                title: n,
                shouldShowElement: O,
                cardVariantStyleInfo: v,
                titleClassName: i,
                subtitle: m,
                subtitleClassName: b,
            }),
            null != f &&
                (0, r.jsxs)("div", {
                    className: a()(u.relative, { [u.cardImage]: !_ }),
                    children: [
                        (0, r.jsx)("img", {
                            src: f,
                            alt: "",
                            className: _ ? (I ? u.carouselCardImageGrayscale : u.carouselCardImage) : "",
                        }),
                        I
                            ? (0, r.jsx)("div", {
                                  className: u.imageOverlayTextContainer,
                                  children: (0, r.jsx)(s.Text, {
                                      className: u.imageOverlayText,
                                      variant: "text-md/bold",
                                      children: y,
                                  }),
                              })
                            : null,
                    ],
                }),
            null != h &&
                (0, r.jsxs)("div", {
                    className: u.cardIllustrationNoHover,
                    children: [
                        h,
                        0 !== g.length &&
                            null != p &&
                            (0, r.jsx)(o.zx, {
                                "data-migration-pending": !0,
                                className: d,
                                fullWidth: !0,
                                onClick: p,
                                children: (0, r.jsx)("div", {
                                    className: null == v || null == (t = v.descriptionCta) ? void 0 : t.className,
                                    children: g,
                                }),
                            }),
                    ],
                }),
        ],
    });
};
