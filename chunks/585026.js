"use strict";
a.d(t, { r: () => s });
var r = a(627968);
a(64700);
var l = a(834730),
    n = a(331322),
    i = a(646092);
let s = {
    name: "Button",
    id: "cms-button",
    component: (e) =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.E, { variant: "text-lg/semibold", children: "Button component for CMS interactions." }),
                (0, r.jsxs)(n.B, {
                    direction: "vertical",
                    children: [
                        (0, r.jsx)(i.A, { ...e }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsx)(i.A, { href: e.href, ctaText: "Variant = primary", variant: "primary" }),
                        (0, r.jsx)(i.A, { href: e.href, ctaText: "Variant = secondary", variant: "secondary" }),
                        (0, r.jsx)(i.A, {
                            href: e.href,
                            ctaText: "Variant = critical-primary",
                            variant: "critical-primary",
                        }),
                        (0, r.jsx)(i.A, {
                            href: e.href,
                            ctaText: "Variant = critical-secondary",
                            variant: "critical-secondary",
                        }),
                        (0, r.jsx)(i.A, { href: e.href, ctaText: "Variant = active", variant: "active" }),
                        (0, r.jsx)(i.A, {
                            href: e.href,
                            ctaText: "Variant = overlay-primary",
                            variant: "overlay-primary",
                        }),
                        (0, r.jsx)(i.A, {
                            href: e.href,
                            ctaText: "Variant = overlay-secondary",
                            variant: "overlay-secondary",
                        }),
                        (0, r.jsx)(i.A, { href: e.href, ctaText: "Variant = expressive", variant: "expressive" }),
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
