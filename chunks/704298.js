"use strict";
a.d(t, { g: () => n });
var r = a(627968);
a(64700);
var l = a(706992);
let n = {
    name: "NarrowContent",
    id: "narrow-content",
    component: (e) => {
        let { padding: t } = e;
        return (0, r.jsx)("div", {
            style: { background: "#5865f2", width: "100%" },
            children: (0, r.jsx)(l.A, {
                padding: t,
                children: (0, r.jsx)("div", {
                    style: { background: "white", color: "#000", padding: 16, fontWeight: "bold" },
                    children: "Content constrained to 1080px, centered",
                }),
            }),
        });
    },
    controls: { padding: { label: "Padding", type: "number", defaultValue: 32, minValue: 0 } },
};
