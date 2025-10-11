n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(304055);
function l(e) {
    let {
        className: t,
        copy: n,
        bannerImage: i,
        textColor: l = "always-white",
        hideGiftIcon: c = !1,
        hideNitroIcon: u = !1,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(s.bannerContainer, t),
        children: [
            null == i
                ? null
                : (0, r.jsx)("img", {
                      alt: "",
                      className: s.banner,
                      src: i,
                  }),
            (0, r.jsxs)("div", {
                className: s.textContainer,
                children: [
                    !1 === c &&
                        (0, r.jsx)(o.OgN, {
                            size: "md",
                            color: "currentColor",
                            className: s.giftIcon,
                        }),
                    !1 === u &&
                        (0, r.jsx)(o.SrA, {
                            size: "md",
                            color: o.TVs.colors.TEXT_INVERT,
                            className: s.nitroIcon,
                        }),
                    (0, r.jsx)(o.Heading, {
                        className: a()(s.textHeader, { [s.textHeaderWithIcon]: !c }),
                        color: l,
                        variant: "heading-md/bold",
                        children: n,
                    }),
                ],
            }),
        ],
    });
}
