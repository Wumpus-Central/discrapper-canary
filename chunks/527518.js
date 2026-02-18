l.d(t, { c$: () => c });
var a = l(627968),
    n = l(162097),
    r = l(142270),
    i = l(240248),
    s = l(652215),
    o = l(985018),
    u = l(749226);
let c = {
    title: "Balance Widget",
    stories: [
        {
            name: "Balance Widget Card",
            id: "balance-widget-card",
            component: (e) => {
                let { ctaText: t, linkText: l, linkPreText: r } = e;
                return (0, a.jsx)(n.b, {
                    ctaText: (0, i.uJ)(t) ? o.intl.string(o.t.H57f41) : t,
                    linkText: (0, i.uJ)(l) ? o.intl.string(o.t["7f4H7D"]) : l,
                    linkPreText: (0, i.uJ)(r) ? void 0 : r,
                    ctaOnClick: s.tEg,
                });
            },
            controls: {
                ctaText: { label: "CTA Text", type: "text", defaultValue: "" },
                linkText: { label: "Link Text", type: "text", defaultValue: "" },
                linkPreText: { label: "Link Pre Text", type: "text", defaultValue: "" },
            },
        },
        {
            name: "Balance Widget Menu",
            id: "balance-widget-menu",
            component: (e) => {
                let { ctaText: t, linkText: l, showNotificationBadge: n, cardAlignment: c } = e;
                return (0, a.jsx)("div", {
                    className: u.tH,
                    children: (0, a.jsx)(r.SS, {
                        className: u.oz,
                        ctaText: (0, i.uJ)(t) ? o.intl.string(o.t["J+vlIR"]) : t,
                        ctaOnClick: s.tEg,
                        showNotificationBadge: n,
                        cardAlignment: c,
                        linkText: (0, i.uJ)(l) ? o.intl.string(o.t.XRdyjz) : l,
                    }),
                });
            },
            controls: {
                ctaText: { label: "CTA Text", type: "text", defaultValue: "" },
                showNotificationBadge: { label: "Show Notification Badge", type: "boolean", defaultValue: !1 },
                cardAlignment: {
                    label: "Card Alignment",
                    type: "select",
                    options: [
                        { label: "Start", value: r.cP.START },
                        { label: "End", value: r.cP.END },
                    ],
                    defaultValue: r.cP.START,
                },
                linkText: { label: "Link Text", type: "text", defaultValue: "" },
            },
        },
    ],
};
