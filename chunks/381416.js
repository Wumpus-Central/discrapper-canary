n.d(t, { s: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(388032),
    a = n(394121);
function s(e) {
    let { onDiscardApplication: t, onContinueApplication: n, guild: s } = e;
    return (0, r.jsxs)("div", {
        className: a.confirmation,
        children: [
            (0, r.jsx)("div", {
                className: a.iconWrapper,
                children: (0, r.jsx)(i.Gzi, {
                    size: "md",
                    color: i.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, r.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                children:
                    null != s
                        ? l.intl.formatToPlainString(l.t.f5Jaw7, { guildName: s.name })
                        : l.intl.string(l.t["0sTyEb"]),
            }),
            (0, r.jsxs)("div", {
                className: a.incompleteButtonsContainer,
                children: [
                    (0, r.jsx)(i.Button, {
                        fullWidth: !0,
                        onClick: n,
                        variant: "secondary",
                        size: "md",
                        text: l.intl.string(l.t.h3aGmv),
                    }),
                    (0, r.jsx)(i.Button, {
                        fullWidth: !0,
                        onClick: t,
                        variant: "critical-primary",
                        size: "md",
                        text: l.intl.string(l.t.OQFlFD),
                    }),
                ],
            }),
        ],
    });
}
