n.d(t, { _: () => d });
var i = n(627968),
    s = n(158954),
    a = n(397927),
    l = n(933297),
    r = n(50900);
function o(e) {
    let { decoration: t } = e,
        n = t.useText();
    return (0, i.jsx)(s.$nd, { variant: "secondary", onClick: t.onClick, text: n });
}
function c(e) {
    let { decoration: t } = e;
    return null == t ? null : t.type === l.WX.BUTTON ? (0, i.jsx)(o, { decoration: t }) : void 0;
}
function d(e) {
    let { title: t, icon: n, subtitle: l, decoration: o } = e;
    return (0, i.jsxs)(s.BJc, {
        gap: 8,
        padding: { left: 12, right: 12, bottom: 24 },
        children: [
            (0, i.jsxs)("div", {
                className: r.g,
                children: [
                    (0, i.jsxs)("div", {
                        className: r.D,
                        children: [
                            (0, i.jsx)(s.DZT, { variant: "heading-xl/normal", color: "text-strong", children: t }),
                            null != n && (0, i.jsx)(n, { color: a.LU0.colors.INTERACTIVE_ICON_DEFAULT, size: "md" }),
                        ],
                    }),
                    (0, i.jsx)(c, { decoration: o }),
                ],
            }),
            null != l && (0, i.jsx)(s.EYj, { variant: "text-md/normal", color: "text-subtle", children: l }),
        ],
    });
}
