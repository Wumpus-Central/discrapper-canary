"use strict";
n.d(t, { K: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(17372),
    l = n(204173),
    a = n(985018),
    o = n(563087);
let d = (e) => {
    let { showBackButton: t, onBack: n, renderFooter: d, onReopen: c } = e,
        u = (0, l.i)(r.tY.MEDIA_TAKEDOWN, c),
        h = (0, i.jsxs)(s.ButtonGroup, {
            fullWidth: !0,
            children: [
                t &&
                    null != n &&
                    (0, i.jsx)(s.Button, { variant: "secondary", text: a.intl.string(a.t["13/7kX"]), onClick: n }),
                (0, i.jsx)(s.Button, { text: a.intl.string(a.t.D5Czbu), variant: "primary", onClick: u }),
            ],
        });
    return (0, i.jsxs)(s.BJc, {
        gap: 24,
        children: [
            (0, i.jsxs)(s.BJc, {
                gap: 8,
                children: [
                    (0, i.jsx)(s.Heading, { variant: "heading-xl/semibold", children: a.intl.string(a.t.YignUm) }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: a.intl.string(a.t["3zG2Y9"]),
                    }),
                ],
            }),
            (0, i.jsxs)(s.BJc, {
                gap: 16,
                children: [
                    (0, i.jsxs)(s.BJc, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(s.Text, { variant: "text-md/semibold", children: a.intl.string(a.t.CfBo0z) }),
                            (0, i.jsxs)("ul", {
                                className: o.T,
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: a.intl.string(a.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: a.intl.string(a.t.dFaQGn),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: a.intl.string(a.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: a.intl.string(a.t.o5azXJ),
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: a.intl.format(a.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)(s.BJc, {
                gap: 8,
                children: [
                    (0, i.jsx)(s.Text, { variant: "text-md/semibold", children: a.intl.string(a.t.FJh2zi) }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: a.intl.format(a.t.R2Q57u, {
                            supportOrgURL: "https://stopncii.org/partners/global-network-of-partners/",
                            wellbeingURL: "https://discord.com/safety-wellbeing",
                            helpCenterURL: "https://support.discord.com/hc/articles/38675715591831",
                        }),
                    }),
                ],
            }),
            d?.(h),
        ],
    });
};
