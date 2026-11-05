s.r(l);
var e = s(477900);
s(582128);
var r = s(503698),
    u = s.n(r),
    n = s(499373),
    c = s(607470),
    t = s(366523),
    d = s(30760);
s.d(
    l,
    {},
    {
        default: function (a) {
            var l;
            let { imageUrl: s, backgroundImageUrl: r, altText: i, customClassNames: m, rewardGraphic: o } = a;
            if (null == s) return null;
            let p =
                    ((l = o),
                    l?.type === "image"
                        ? (0, e.jsx)("img", { src: l.url, alt: l.alt, className: u()(d.wP, d.Mc) })
                        : l?.type === "video"
                          ? (0, e.jsx)(c.A, {
                                src: l.url,
                                alt: l.alt,
                                className: u()(d.wP, d.Mc),
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                            })
                          : null),
                { containerClassName: g = d.wP, backgroundImageClassName: h, foregroundImageClassName: x } = m ?? {};
            return (0, e.jsxs)("div", {
                className: u()(d.LZ, { [d.Mc]: null != p }),
                children: [
                    (0, e.jsx)(t.A, {
                        cardImage: s,
                        cardBackgroundImage: r,
                        altText: i,
                        shape: null != m ? "custom" : "square",
                        containerClassName: u()(g, { [d.Mc]: null != p }),
                        backgroundImageClassName: h,
                        foregroundImageClassName: x,
                    }),
                    null != p &&
                        (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(n.PlusMediumIcon, { size: "xs" }), p] }),
                ],
            });
        },
    },
);
