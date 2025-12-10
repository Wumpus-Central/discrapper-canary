n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(176782),
    c = n(743612),
    u = n(505754);
let d = (e) => {
    var t, n, i;
    let {
            title: d,
            titleClassName: f,
            buttonClassName: p,
            perkImage: _,
            isCarousel: m,
            onCtaClick: h,
            perkComponent: g,
            subtitle: E = "",
            descriptionCta: b = "",
            customContent: y,
            cardVariant: O,
            subtitleClassName: v,
            imageOverlayText: S,
        } = e,
        I = (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
        T = (0, l._)(O),
        C = null != S;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: a()(u.cover, u.below) }),
            (0, r.jsx)(c.Z, {
                title: d,
                shouldShowElement: I,
                cardVariantStyleInfo: T,
                titleClassName: f,
                subtitle: E,
                subtitleClassName: v,
            }),
            null != _ &&
                (0, r.jsxs)("div", {
                    className: a()(
                        u.relative,
                        {
                            [u.cardImage]: !m,
                            [u.hoverCardImage]:
                                !m && !(null == T || null == (t = T.perkImage) ? void 0 : t.disableHoverAnimation),
                        },
                        null == T || null == (n = T.perkImage) ? void 0 : n.className,
                    ),
                    children: [
                        (0, r.jsx)("img", {
                            src: _,
                            alt: "",
                            className: m ? (C ? u.carouselCardImageGrayscale : u.carouselCardImage) : "",
                        }),
                        C
                            ? (0, r.jsx)("div", {
                                  className: u.imageOverlayTextContainer,
                                  children: (0, r.jsx)(s.Text, {
                                      className: u.imageOverlayText,
                                      variant: "text-md/bold",
                                      children: S,
                                  }),
                              })
                            : null,
                    ],
                }),
            null != g &&
                (0, r.jsxs)("div", {
                    className: u.cardIllustrationNoHover,
                    children: [
                        g,
                        0 !== b.length &&
                            null != h &&
                            (0, r.jsx)(o.zx, {
                                "data-migration-pending": !0,
                                className: p,
                                fullWidth: !0,
                                onClick: h,
                                children: (0, r.jsx)("div", {
                                    className: null == T || null == (i = T.descriptionCta) ? void 0 : i.className,
                                    children: b,
                                }),
                            }),
                    ],
                }),
            y,
        ],
    });
};
