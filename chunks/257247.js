l.d(t, { V: () => o });
var a = l(627968);
l(64700);
var r = l(951707),
    n = l(260779);
let s = () => (0, a.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } }),
    o = {
        name: "FullHero",
        id: "full-hero",
        component: (e) => {
            let { bannerSrc: t, animatedBannerSrc: l, logoSrc: o, backgroundColor: i, href: d } = e;
            return (0, a.jsx)(n.A, {
                bannerSrc: "" !== l ? [{ src: l }, { src: t }] : { src: t },
                logoSrc: "" !== o ? { src: o } : void 0,
                backgroundColor: i,
                href: "" !== d ? d : void 0,
                children: (0, a.jsxs)(r.A, {
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
                }),
            });
        },
        controls: {
            bannerSrc: {
                label: "Banner Source",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
            },
            animatedBannerSrc: { label: "Animated Banner Source (GIF/WebP)", type: "text", defaultValue: "" },
            logoSrc: {
                label: "Logo Source",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
            },
            backgroundColor: { label: "Background Color", type: "text", defaultValue: "#171D55" },
            href: { label: "Href", type: "text", defaultValue: "/shop?tab=catalog" },
        },
    };
