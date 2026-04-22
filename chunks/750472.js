"use strict";
a.d(t, { D: () => s });
var r = a(627968),
    l = a(834730),
    n = a(673277),
    i = a(190503);
let s = {
    name: "Image",
    id: "cms-image",
    component: (e) => {
        let { imageSrc: t, videoSrc: a } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(n.A, {
                    children: [
                        (0, r.jsx)(l.E, { variant: "text-lg/semibold", children: "Static image" }),
                        (0, r.jsx)("div", { style: { height: 200 }, children: (0, r.jsx)(i.A, { src: { src: t } }) }),
                    ],
                }),
                (0, r.jsxs)(n.A, {
                    children: [
                        (0, r.jsx)(l.E, { variant: "text-lg/semibold", children: "Video asset" }),
                        (0, r.jsx)("div", { style: { height: 200 }, children: (0, r.jsx)(i.A, { src: { src: a } }) }),
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
