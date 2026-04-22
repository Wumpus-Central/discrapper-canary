l.d(t, { X: () => o });
var a = l(627968);
l(64700);
var r = l(951707),
    n = l(618473);
let s = () => (0, a.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } }),
    o = {
        name: "ContainedHero",
        id: "contained-hero",
        component: (e) => {
            let {
                    containerHeight: t,
                    showChildren: l,
                    bannerSrc: o,
                    animatedBannerSrc: i,
                    logoSrc: d,
                    href: c,
                    backgroundColor: u,
                } = e,
                x = () =>
                    l
                        ? (0, a.jsxs)(r.A, {
                              children: [
                                  (0, a.jsx)(s, {}),
                                  (0, a.jsx)(s, {}),
                                  (0, a.jsx)(s, {}),
                                  (0, a.jsx)(s, {}),
                                  (0, a.jsx)(s, {}),
                                  (0, a.jsx)(s, {}),
                                  (0, a.jsx)(s, {}),
                                  (0, a.jsx)(s, {}),
                                  (0, a.jsx)(s, {}),
                                  (0, a.jsx)(s, {}),
                              ],
                          })
                        : null;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("div", {
                        style: { height: l ? void 0 : t },
                        children: (0, a.jsx)(n.A, {
                            bannerSrc: { src: o },
                            logoSrc: { src: d },
                            href: c,
                            backgroundColor: u,
                            children: x(),
                        }),
                    }),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)("div", {
                        style: { height: l ? void 0 : t },
                        children: (0, a.jsx)(n.A, {
                            bannerSrc: { src: i },
                            logoSrc: { src: d },
                            href: c,
                            backgroundColor: u,
                            children: x(),
                        }),
                    }),
                ],
            });
        },
        controls: {
            bannerSrc: {
                label: "Banner Source",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
            },
            animatedBannerSrc: {
                label: "Animated Banner Source (GIF/WebP)",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/5029a9a78bdc28cef510f1bfdac9addb8b88664ecd81902baccba38d3e1104b0",
            },
            logoSrc: {
                label: "Logo Source",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
            },
            backgroundColor: { label: "Background Color", type: "text", defaultValue: "#171D55" },
            href: { label: "Href", type: "text", defaultValue: "/shop?tab=catalog" },
            containerHeight: { label: "Container Height", type: "number", defaultValue: 150 },
            showChildren: { label: "Show Children", type: "boolean", defaultValue: !1 },
        },
    };
