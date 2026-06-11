n.d(t, { E: () => c, v: () => d });
var l = n(627968);
n(64700);
var r = n(821609),
    i = n(534514),
    a = n(834730),
    s = n(701273),
    o = n(375708),
    u = n(425013);
let c = (e) => {
    let { onConfirm: t, onCancel: n, title: c, subtitle: d, confirmCta: C, showOpenDiscord: p = !0 } = e;
    return (0, l.jsxs)("div", {
        className: u.RP,
        children: [
            (0, l.jsx)(i.D, { className: u.RS, variant: "heading-lg/extrabold", children: c }),
            null != d
                ? (0, l.jsx)(a.E, { className: u.sT, variant: "text-sm/normal", color: "text-default", children: d })
                : null,
            (0, l.jsxs)("div", {
                className: u.UD,
                children: [
                    p &&
                        (0, l.jsx)(r.$, {
                            variant: "primary",
                            text: o.intl.string(o.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, s.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, l.jsx)(r.$, { variant: "secondary", text: C, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, l.jsx)(r.$, {
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
function d(e) {
    let { onConfirm: t, tierName: n, subscription: c } = e;
    return (0, l.jsxs)("div", {
        className: u.RP,
        children: [
            (0, l.jsx)(i.D, {
                className: u.RS,
                variant: "heading-lg/extrabold",
                children: o.intl.format(o.t.wLFT6z, { tier: n }),
            }),
            (0, l.jsx)(a.E, {
                className: u.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: o.intl.format(o.t.OsAK9h, { timestamp: c?.currentPeriodEnd }),
            }),
            (0, l.jsxs)("div", {
                className: u.UD,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: u.__invalid_openDiscordButton,
                        children: (0, l.jsx)(r.$, {
                            variant: "primary",
                            text: o.intl.string(o.t["8L5bZG"]),
                            onClick: () => (0, s.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, l.jsx)(r.$, { variant: "secondary", text: o.intl.string(o.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
