"use strict";
a.d(t, { o: () => s });
var r = a(627968),
    l = a(834730),
    n = a(673277),
    i = a(634791);
let s = {
    name: "The Any Block",
    id: "any",
    component: () =>
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.E, {
                    variant: "text-md/semibold",
                    children:
                        "The Any component is used to allow injecting super-bespoke components into a layout without defining a new block type.",
                }),
                (0, r.jsx)(l.E, {
                    variant: "text-md/semibold",
                    children: "It's ONLY use is to be overriden by another block in `useComponentRegistry`",
                }),
                (0, r.jsx)(n.A, { children: (0, r.jsx)(i.A, {}) }),
            ],
        }),
    controls: {},
};
