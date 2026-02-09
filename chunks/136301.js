"use strict";
n.d(t, { o: () => o });
var r = n(627968),
    i = n(397927),
    a = n(673277),
    s = n(634791);
let o = {
    name: "The Any Block",
    id: "any",
    component: () =>
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    children:
                        "The Any component is used to allow injecting super-bespoke components into a layout without defining a new block type.",
                }),
                (0, r.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    children: "It's ONLY use is to be overriden by another block in `useComponentRegistry`",
                }),
                (0, r.jsx)(a.A, { children: (0, r.jsx)(s.A, {}) }),
            ],
        }),
    controls: {},
};
