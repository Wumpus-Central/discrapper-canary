n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(176782),
    c = n(743612),
    u = n(759291);
let d = (e) => {
    var t, n, i, d;
    let {
            title: f,
            titleClassName: _,
            buttonClassName: p,
            perkImage: h,
            isCarousel: m,
            onCtaClick: g,
            perkComponent: E,
            subtitle: b = "",
            descriptionCta: y = "",
            cta: O = "",
            cardVariant: v,
            subtitleClassName: I,
            imageOverlayText: T,
        } = e,
        S = (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
        A = (0, l._)(v),
        C = null != T;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: a()(u.cover, u.below) }),
            (0, r.jsx)(c.Z, {
                title: f,
                shouldShowElement: S,
                cardVariantStyleInfo: A,
                titleClassName: _,
                subtitle: b,
                subtitleClassName: I,
            }),
            null != h &&
                (0, r.jsxs)("div", {
                    className: a()(
                        u.relative,
                        {
                            [u.cardImage]: !m,
                            [u.hoverCardImage]:
                                !m && !(null == A || null == (t = A.perkImage) ? void 0 : t.disableHoverAnimation),
                        },
                        null == A || null == (n = A.perkImage) ? void 0 : n.className,
                    ),
                    children: [
                        (0, r.jsx)("img", {
                            src: h,
                            alt: "",
                            className: m ? (C ? u.carouselCardImageGrayscale : u.carouselCardImage) : "",
                        }),
                        C
                            ? (0, r.jsx)("div", {
                                  className: u.imageOverlayTextContainer,
                                  children: (0, r.jsx)(s.Text, {
                                      className: u.imageOverlayText,
                                      variant: "text-md/bold",
                                      children: T,
                                  }),
                              })
                            : null,
                    ],
                }),
            null != E &&
                (0, r.jsxs)("div", {
                    className: u.cardIllustrationNoHover,
                    children: [
                        E,
                        0 !== y.length &&
                            null != g &&
                            (0, r.jsx)(o.zx, {
                                "data-migration-pending": !0,
                                className: p,
                                fullWidth: !0,
                                onClick: g,
                                children: (0, r.jsx)("div", {
                                    className: null == A || null == (i = A.descriptionCta) ? void 0 : i.className,
                                    children: y,
                                }),
                            }),
                    ],
                }),
            "" !== O &&
                null != g &&
                (0, r.jsx)(o.zx, {
                    "data-migration-pending": !0,
                    className: p,
                    fullWidth: !0,
                    onClick: g,
                    children: (0, r.jsx)("div", {
                        className: null == A || null == (d = A.cta) ? void 0 : d.className,
                        children: O,
                    }),
                }),
        ],
    });
};
