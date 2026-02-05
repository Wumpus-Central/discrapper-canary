n.d(t, { E: () => c, v: () => d });
var i = n(627968);
n(64700);
var r = n(732955),
    l = n(397927),
    a = n(701273),
    s = n(985018),
    o = n(690990);
let c = (e) => {
    let { onConfirm: t, onCancel: n, title: c, subtitle: d, confirmCta: u, showOpenDiscord: m = !0 } = e;
    return (0, i.jsxs)("div", {
        className: o.RP,
        children: [
            (0, i.jsx)(l.Heading, { className: o.RS, variant: "heading-lg/extrabold", children: c }),
            null != d
                ? (0, i.jsx)(l.Text, { className: o.sT, variant: "text-sm/normal", color: "text-default", children: d })
                : null,
            (0, i.jsxs)("div", {
                className: o.UD,
                children: [
                    m &&
                        (0, i.jsx)(r.$nd, {
                            variant: "primary",
                            text: s.intl.string(s.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, a.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(r.$nd, { variant: "secondary", text: u, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, i.jsx)(r.$nd, {
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
function d(e) {
    let { onConfirm: t, tierName: n, subscription: c } = e;
    return (0, i.jsxs)("div", {
        className: o.RP,
        children: [
            (0, i.jsx)(l.Heading, {
                className: o.RS,
                variant: "heading-lg/extrabold",
                children: s.intl.format(s.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(l.Text, {
                className: o.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: s.intl.format(s.t.OsAK9h, { timestamp: c?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: o.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: o.__invalid_openDiscordButton,
                        children: (0, i.jsx)(r.$nd, {
                            variant: "primary",
                            text: s.intl.string(s.t["8L5bZG"]),
                            onClick: () => (0, a.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(r.$nd, { variant: "secondary", text: s.intl.string(s.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
