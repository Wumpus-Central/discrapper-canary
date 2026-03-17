a.d(t, { r: () => o });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(377890);
let o = {
    name: "Heading",
    id: "cms-heading",
    component: (e) =>
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(r.Text, { variant: "text-lg/semibold", children: "Heading component for CMS content." }),
                (0, l.jsx)(n.A, { ...e }),
                (0, l.jsx)("hr", {}),
                (0, l.jsx)(n.A, { content: "Variant = heading-sm/normal", variant: "heading-sm/normal" }),
                (0, l.jsx)(n.A, { content: "Variant = heading-sm/medium", variant: "heading-sm/medium" }),
                (0, l.jsx)(n.A, { content: "Variant = heading-sm/semibold", variant: "heading-sm/semibold" }),
                (0, l.jsx)(n.A, { content: "Variant = heading-md/normal", variant: "heading-md/normal" }),
                (0, l.jsx)(n.A, { content: "Variant = heading-md/medium", variant: "heading-md/medium" }),
                (0, l.jsx)(n.A, { content: "Variant = heading-md/semibold", variant: "heading-md/semibold" }),
                (0, l.jsx)(n.A, { content: "Variant = heading-lg/normal", variant: "heading-lg/normal" }),
                (0, l.jsx)(n.A, { content: "Variant = heading-lg/medium", variant: "heading-lg/medium" }),
                (0, l.jsx)(n.A, { content: "Variant = heading-lg/semibold", variant: "heading-lg/semibold" }),
            ],
        }),
    controls: {
        content: { type: "text", label: "Content", defaultValue: "Hello, world!" },
        variant: {
            type: "select",
            label: "Variant",
            defaultValue: "heading-md/semibold",
            options: [
                { label: "heading-sm/normal", value: "heading-sm/normal" },
                { label: "heading-sm/medium", value: "heading-sm/medium" },
                { label: "heading-sm/semibold", value: "heading-sm/semibold" },
                { label: "heading-md/normal", value: "heading-md/normal" },
                { label: "heading-md/medium", value: "heading-md/medium" },
                { label: "heading-md/semibold", value: "heading-md/semibold" },
                { label: "heading-lg/normal", value: "heading-lg/normal" },
                { label: "heading-lg/medium", value: "heading-lg/medium" },
                { label: "heading-lg/semibold", value: "heading-lg/semibold" },
            ],
        },
    },
};
