"use strict";
a.d(t, { a: () => i });
var r = a(627968);
a(64700);
var l = a(834730),
    n = a(287944);
let i = {
    name: "Tooltip",
    id: "cms-tooltip",
    component: (e) =>
        (0, r.jsx)(n.A, {
            ...e,
            children: (0, r.jsx)("div", {
                style: { width: 300, background: "pink", borderRadius: 8, padding: 12 },
                children: (0, r.jsx)(l.E, { variant: "text-lg/semibold", children: "Hover me." }),
            }),
        }),
    controls: {
        text: { type: "text", label: "Content", defaultValue: "Hello, world!" },
        position: {
            type: "select",
            label: "Position",
            defaultValue: "top",
            options: [
                { label: "top", value: "top" },
                { label: "left", value: "left" },
                { label: "right", value: "right" },
                { label: "bottom", value: "bottom" },
            ],
        },
    },
};
