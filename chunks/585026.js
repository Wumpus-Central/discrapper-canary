a.d(t, { r: () => i });
var l = a(627968);
a(64700);
var r = a(834730),
    n = a(331322),
    s = a(646092);
let i = {
    name: "Button",
    id: "cms-button",
    component: (e) =>
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Button component for CMS interactions." }),
                (0, l.jsxs)(n.B, {
                    direction: "vertical",
                    children: [
                        (0, l.jsx)(s.A, { ...e }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(s.A, { href: e.href, ctaText: "Variant = primary", variant: "primary" }),
                        (0, l.jsx)(s.A, { href: e.href, ctaText: "Variant = secondary", variant: "secondary" }),
                        (0, l.jsx)(s.A, {
                            href: e.href,
                            ctaText: "Variant = critical-primary",
                            variant: "critical-primary",
                        }),
                        (0, l.jsx)(s.A, {
                            href: e.href,
                            ctaText: "Variant = critical-secondary",
                            variant: "critical-secondary",
                        }),
                        (0, l.jsx)(s.A, { href: e.href, ctaText: "Variant = active", variant: "active" }),
                        (0, l.jsx)(s.A, {
                            href: e.href,
                            ctaText: "Variant = overlay-primary",
                            variant: "overlay-primary",
                        }),
                        (0, l.jsx)(s.A, {
                            href: e.href,
                            ctaText: "Variant = overlay-secondary",
                            variant: "overlay-secondary",
                        }),
                        (0, l.jsx)(s.A, { href: e.href, ctaText: "Variant = expressive", variant: "expressive" }),
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
