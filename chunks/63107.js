n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(79766),
    l = n(28664),
    a = n(481060),
    o = n(715130),
    s = n(688766),
    c = n(630942);
function u(e) {
    let { children: t } = e,
        n = (0, o.H)(i.I.PREMIUM_TAB_TOOLTIP),
        u =
            null != n && "premiumTabTooltip" === n.properties.properties.oneofKind
                ? n.properties.properties.premiumTabTooltip
                : null,
        d = (0, s.Y)(null == u ? void 0 : u.asset);
    if (null == u) return t;
    let p = (0, r.jsxs)("div", {
        className: c.premiumTabTooltipContainer,
        children: [
            null != d &&
                (0, r.jsx)("img", {
                    className: c.premiumTabTooltipImage,
                    src: d,
                    alt: "",
                }),
            (0, r.jsxs)("div", {
                className: c.premiumTabTooltipContent,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        children: u.header,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: u.body,
                    }),
                ],
            }),
        ],
    });
    return (0, r.jsx)(l.u, {
        __unsupportedReactNodeAsText: p,
        position: "right",
        "aria-label": u.header,
        asContainer: !0,
        children: (0, r.jsx)("div", { children: t }),
    });
}
