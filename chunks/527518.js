n.d(t, {
    c$: () => u,
});
var r = n(627968),
    i = n(162097),
    a = n(142270),
    s = n(240248),
    o = n(652215),
    l = n(985018),
    c = n(749226);
let u = {
    title: "Balance Widget",
    stories: [
        {
            name: "Balance Widget Card",
            id: "balance-widget-card",
            component: (e) => {
                let { ctaText: t, linkText: n, linkPreText: a } = e;
                return (0, r.jsx)(i.b, {
                    ctaText: (0, s.uJ)(t) ? l.intl.string(l.t.H57f41) : t,
                    linkText: (0, s.uJ)(n) ? l.intl.string(l.t["7f4H7D"]) : n,
                    linkPreText: (0, s.uJ)(a) ? void 0 : a,
                    ctaOnClick: o.tEg,
                });
            },
            controls: {
                ctaText: {
                    label: "CTA Text",
                    type: "text",
                    defaultValue: "",
                },
                linkText: {
                    label: "Link Text",
                    type: "text",
                    defaultValue: "",
                },
                linkPreText: {
                    label: "Link Pre Text",
                    type: "text",
                    defaultValue: "",
                },
            },
        },
        {
            name: "Balance Widget Menu",
            id: "balance-widget-menu",
            component: (e) => {
                let { ctaText: t, linkText: n, showNotificationBadge: i, cardAlignment: u } = e;
                return (0, r.jsx)("div", {
                    className: c.tH,
                    children: (0, r.jsx)(a.SS, {
                        className: c.oz,
                        ctaText: (0, s.uJ)(t) ? l.intl.string(l.t["J+vlIR"]) : t,
                        ctaOnClick: o.tEg,
                        showNotificationBadge: i,
                        cardAlignment: u,
                        linkText: (0, s.uJ)(n) ? l.intl.string(l.t.XRdyjz) : n,
                    }),
                });
            },
            controls: {
                ctaText: {
                    label: "CTA Text",
                    type: "text",
                    defaultValue: "",
                },
                showNotificationBadge: {
                    label: "Show Notification Badge",
                    type: "boolean",
                    defaultValue: !1,
                },
                cardAlignment: {
                    label: "Card Alignment",
                    type: "select",
                    options: [
                        {
                            label: "Start",
                            value: a.cP.START,
                        },
                        {
                            label: "End",
                            value: a.cP.END,
                        },
                    ],
                    defaultValue: a.cP.START,
                },
                linkText: {
                    label: "Link Text",
                    type: "text",
                    defaultValue: "",
                },
            },
        },
    ],
};
