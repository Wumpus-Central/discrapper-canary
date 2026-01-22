n.d(t, {
    E: () => c,
    v: () => u,
});
var r = n(627968);
n(64700);
var i = n(732955),
    l = n(397927),
    a = n(701273),
    s = n(985018),
    o = n(690990);
let c = (e) => {
    let { onConfirm: t, onCancel: n, title: c, subtitle: u, confirmCta: d, showOpenDiscord: p = !0 } = e;
    return (0, r.jsxs)("div", {
        className: o.RP,
        children: [
            (0, r.jsx)(l.Heading, {
                className: o.RS,
                variant: "heading-lg/extrabold",
                children: c,
            }),
            null != u
                ? (0, r.jsx)(l.Text, {
                      className: o.sT,
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: u,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: o.UD,
                children: [
                    p &&
                        (0, r.jsx)(i.$nd, {
                            variant: "primary",
                            text: s.intl.string(s.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, a.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(i.$nd, {
                        variant: "secondary",
                        text: d,
                        fullWidth: !0,
                        onClick: t,
                    }),
                    null != n &&
                        (0, r.jsx)(i.$nd, {
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
function u(e) {
    let { onConfirm: t, tierName: n, subscription: c } = e;
    return (0, r.jsxs)("div", {
        className: o.RP,
        children: [
            (0, r.jsx)(l.Heading, {
                className: o.RS,
                variant: "heading-lg/extrabold",
                children: s.intl.format(s.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(l.Text, {
                className: o.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: s.intl.format(s.t.OsAK9h, { timestamp: null == c ? void 0 : c.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: o.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: o.__invalid_openDiscordButton,
                        children: (0, r.jsx)(i.$nd, {
                            variant: "primary",
                            text: s.intl.string(s.t["8L5bZG"]),
                            onClick: () => (0, a.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(i.$nd, {
                        variant: "secondary",
                        text: s.intl.string(s.t.nlkywz),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
