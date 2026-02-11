n.d(t, { _: () => u });
var i = n(627968),
    s = n(158954),
    a = n(397927),
    l = n(933297);
function r(e) {
    let { decoration: t } = e,
        n = t.useText();
    return (0, i.jsx)(s.$nd, { variant: "secondary", onClick: t.onClick, text: n });
}
function o(e) {
    let { decoration: t } = e,
        n = t.button;
    return (0, i.jsx)(n, {});
}
function c(e) {
    let { decoration: t } = e;
    return (0, i.jsx)(s.BJc, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: t.buttons.map((e) => {
            switch (e.type) {
                case l.UV.BUTTON:
                    return (0, i.jsx)(r, { decoration: e }, e.id);
                case l.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, i.jsx)(o, { decoration: e }, e.id);
            }
        }),
    });
}
function d(e) {
    let { decoration: t } = e;
    return null == t ? null : t.type === l.WX.BUTTON_GROUP ? (0, i.jsx)(c, { decoration: t }) : void 0;
}
function u(e) {
    let { title: t, icon: n, subtitle: l, decoration: r } = e;
    return (0, i.jsxs)(s.BJc, {
        direction: "horizontal",
        align: "center",
        gap: 16,
        padding: { left: 12, right: 12, bottom: 24 },
        children: [
            (0, i.jsxs)(s.BJc, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, i.jsxs)(s.BJc, {
                        direction: "horizontal",
                        gap: 8,
                        children: [
                            (0, i.jsx)(s.DZT, { variant: "heading-xl/normal", color: "text-strong", children: t }),
                            null != n && (0, i.jsx)(n, { color: a.LU0.colors.INTERACTIVE_ICON_DEFAULT, size: "md" }),
                        ],
                    }),
                    null != l && (0, i.jsx)(s.EYj, { variant: "text-sm/normal", color: "text-subtle", children: l }),
                ],
            }),
            (0, i.jsx)(d, { decoration: r }),
        ],
    });
}
