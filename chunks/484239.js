n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(176782),
    c = n(743612),
    u = n(759291);
let d = (e) => {
    var t, n, i;
    let {
            title: d,
            titleClassName: f,
            buttonClassName: _,
            perkImage: p,
            isCarousel: h,
            onCtaClick: m,
            perkComponent: g,
            subtitle: E = "",
            descriptionCta: b = "",
            customContent: y,
            cardVariant: O,
            subtitleClassName: v,
            imageOverlayText: I,
        } = e,
        T = (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
        S = (0, l._)(O),
        A = null != I;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: a()(u.cover, u.below) }),
            (0, r.jsx)(c.Z, {
                title: d,
                shouldShowElement: T,
                cardVariantStyleInfo: S,
                titleClassName: f,
                subtitle: E,
                subtitleClassName: v,
            }),
            null != p &&
                (0, r.jsxs)("div", {
                    className: a()(
                        u.relative,
                        {
                            [u.cardImage]: !h,
                            [u.hoverCardImage]:
                                !h && !(null == S || null == (t = S.perkImage) ? void 0 : t.disableHoverAnimation),
                        },
                        null == S || null == (n = S.perkImage) ? void 0 : n.className,
                    ),
                    children: [
                        (0, r.jsx)("img", {
                            src: p,
                            alt: "",
                            className: h ? (A ? u.carouselCardImageGrayscale : u.carouselCardImage) : "",
                        }),
                        A
                            ? (0, r.jsx)("div", {
                                  className: u.imageOverlayTextContainer,
                                  children: (0, r.jsx)(s.Text, {
                                      className: u.imageOverlayText,
                                      variant: "text-md/bold",
                                      children: I,
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
                            null != m &&
                            (0, r.jsx)(o.zx, {
                                "data-migration-pending": !0,
                                className: _,
                                fullWidth: !0,
                                onClick: m,
                                children: (0, r.jsx)("div", {
                                    className: null == S || null == (i = S.descriptionCta) ? void 0 : i.className,
                                    children: b,
                                }),
                            }),
                    ],
                }),
            y,
        ],
    });
};
