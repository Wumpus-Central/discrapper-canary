a.d(t, { o: () => s });
var l = a(627968),
    r = a(397927),
    n = a(673277),
    o = a(634791);
let s = {
    name: "The Any Block",
    id: "any",
    component: () =>
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    children:
                        "The Any component is used to allow injecting super-bespoke components into a layout without defining a new block type.",
                }),
                (0, l.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    children: "It's ONLY use is to be overriden by another block in `useComponentRegistry`",
                }),
                (0, l.jsx)(n.A, { children: (0, l.jsx)(o.A, {}) }),
            ],
        }),
    controls: {},
};
