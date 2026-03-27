n.d(t, { E: () => d, v: () => c });
var i = n(627968);
n(64700);
var l = n(732955),
    r = n(397927),
    a = n(701273),
    s = n(985018),
    o = n(727512);
let d = (e) => {
    let { onConfirm: t, onCancel: n, title: d, subtitle: c, confirmCta: u, showOpenDiscord: m = !0 } = e;
    return (0, i.jsxs)("div", {
        className: o.RP,
        children: [
            (0, i.jsx)(r.Heading, { className: o.RS, variant: "heading-lg/extrabold", children: d }),
            null != c
                ? (0, i.jsx)(r.Text, { className: o.sT, variant: "text-sm/normal", color: "text-default", children: c })
                : null,
            (0, i.jsxs)("div", {
                className: o.UD,
                children: [
                    m &&
                        (0, i.jsx)(l.$nd, {
                            variant: "primary",
                            text: s.intl.string(s.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, a.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(l.$nd, { variant: "secondary", text: u, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, i.jsx)(l.$nd, {
                            variant: "secondary",
                            text: s.intl.string(s.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function c(e) {
    let { onConfirm: t, tierName: n, subscription: d } = e;
    return (0, i.jsxs)("div", {
        className: o.RP,
        children: [
            (0, i.jsx)(r.Heading, {
                className: o.RS,
                variant: "heading-lg/extrabold",
                children: s.intl.format(s.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(r.Text, {
                className: o.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: s.intl.format(s.t.OsAK9h, { timestamp: d?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: o.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: o.__invalid_openDiscordButton,
                        children: (0, i.jsx)(l.$nd, {
                            variant: "primary",
                            text: s.intl.string(s.t["8L5bZG"]),
                            onClick: () => (0, a.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(l.$nd, { variant: "secondary", text: s.intl.string(s.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
