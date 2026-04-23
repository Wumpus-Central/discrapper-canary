a.d(t, { D: () => i });
var l = a(627968),
    r = a(834730),
    n = a(673277),
    s = a(190503);
let i = {
    name: "Image",
    id: "cms-image",
    component: (e) => {
        let { imageSrc: t, videoSrc: a } = e;
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)(n.A, {
                    children: [
                        (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Static image" }),
                        (0, l.jsx)("div", { style: { height: 200 }, children: (0, l.jsx)(s.A, { src: { src: t } }) }),
                    ],
                }),
                (0, l.jsxs)(n.A, {
                    children: [
                        (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Video asset" }),
                        (0, l.jsx)("div", { style: { height: 200 }, children: (0, l.jsx)(s.A, { src: { src: a } }) }),
                    ],
                }),
            ],
        });
    },
    controls: {
        imageSrc: {
            label: "Image URL",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
        },
        videoSrc: {
            label: "Video URL",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/5029a9a78bdc28cef510f1bfdac9addb8b88664ecd81902baccba38d3e1104b0",
        },
    },
};
