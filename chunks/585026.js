a.d(t, { r: () => o });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(646092);
let o = {
    name: "Button",
    id: "cms-button",
    component: (e) =>
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(r.Text, { variant: "text-lg/semibold", children: "Button component for CMS interactions." }),
                (0, l.jsxs)(r.BJc, {
                    direction: "vertical",
                    children: [
                        (0, l.jsx)(n.A, { ...e }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(n.A, { href: e.href, ctaText: "Variant = primary", variant: "primary" }),
                        (0, l.jsx)(n.A, { href: e.href, ctaText: "Variant = secondary", variant: "secondary" }),
                        (0, l.jsx)(n.A, {
                            href: e.href,
                            ctaText: "Variant = critical-primary",
                            variant: "critical-primary",
                        }),
                        (0, l.jsx)(n.A, {
                            href: e.href,
                            ctaText: "Variant = critical-secondary",
                            variant: "critical-secondary",
                        }),
                        (0, l.jsx)(n.A, { href: e.href, ctaText: "Variant = active", variant: "active" }),
                        (0, l.jsx)(n.A, {
                            href: e.href,
                            ctaText: "Variant = overlay-primary",
                            variant: "overlay-primary",
                        }),
                        (0, l.jsx)(n.A, {
                            href: e.href,
                            ctaText: "Variant = overlay-secondary",
                            variant: "overlay-secondary",
                        }),
                        (0, l.jsx)(n.A, { href: e.href, ctaText: "Variant = expressive", variant: "expressive" }),
                    ],
                }),
            ],
        }),
    controls: {
        href: { type: "text", label: "URL", defaultValue: "https://discord.com" },
        ctaText: { type: "text", label: "Button Text", defaultValue: "Click Me" },
        variant: {
            type: "select",
            label: "Variant",
            defaultValue: "secondary",
            options: [
                { label: "Primary", value: "primary" },
                { label: "Secondary", value: "secondary" },
                { label: "Critical Primary", value: "critical-primary" },
                { label: "Critical Secondary", value: "critical-secondary" },
                { label: "Active", value: "active" },
                { label: "Overlay Primary", value: "overlay-primary" },
                { label: "Overlay Secondary", value: "overlay-secondary" },
                { label: "Expressive", value: "expressive" },
            ],
        },
    },
};
