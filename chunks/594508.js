n.d(e, { E: () => u, v: () => d });
var i = n(627968);
n(64700);
var l = n(821609),
    r = n(534514),
    a = n(834730),
    s = n(701273),
    o = n(985018),
    c = n(425013);
let u = (t) => {
    let { onConfirm: e, onCancel: n, title: u, subtitle: d, confirmCta: p, showOpenDiscord: m = !0 } = t;
    return (0, i.jsxs)("div", {
        className: c.RP,
        children: [
            (0, i.jsx)(r.D, { className: c.RS, variant: "heading-lg/extrabold", children: u }),
            null != d
                ? (0, i.jsx)(a.E, { className: c.sT, variant: "text-sm/normal", color: "text-default", children: d })
                : null,
            (0, i.jsxs)("div", {
                className: c.UD,
                children: [
                    m &&
                        (0, i.jsx)(l.$, {
                            variant: "primary",
                            text: o.intl.string(o.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, s.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(l.$, { variant: "secondary", text: p, fullWidth: !0, onClick: e }),
                    null != n &&
                        (0, i.jsx)(l.$, {
                            variant: "secondary",
                            text: o.intl.string(o.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function d(t) {
    let { onConfirm: e, tierName: n, subscription: u } = t;
    return (0, i.jsxs)("div", {
        className: c.RP,
        children: [
            (0, i.jsx)(r.D, {
                className: c.RS,
                variant: "heading-lg/extrabold",
                children: o.intl.format(o.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(a.E, {
                className: c.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: o.intl.format(o.t.OsAK9h, { timestamp: u?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: c.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: c.__invalid_openDiscordButton,
                        children: (0, i.jsx)(l.$, {
                            variant: "primary",
                            text: o.intl.string(o.t["8L5bZG"]),
                            onClick: () => (0, s.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(l.$, { variant: "secondary", text: o.intl.string(o.t.nlkywz), onClick: e }),
                ],
            }),
        ],
    });
}
