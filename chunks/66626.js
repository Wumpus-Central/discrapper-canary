n.d(t, { Z: () => u }), n(953529), n(388685);
var i = n(951288),
    s = n(647438),
    l = n(481060),
    r = n(479531),
    a = n(600164),
    o = n(75666),
    c = n(388032),
    d = n(960780);
function u(e) {
    let {
            directoryChannelId: t,
            description: n,
            onDescriptionChange: u,
            categoryId: m,
            onCategoryIdChange: x,
            onSubmit: C,
            onClose: p,
            onBack: h,
        } = e,
        [g, f] = s.useState(!1),
        [j, _] = s.useState(null),
        b = async () => {
            f(!0);
            try {
                await C();
            } catch (e) {
                _(new r.Z(e));
            }
            f(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: a.Z.Direction.VERTICAL,
                className: d.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: d.title,
                        variant: "heading-xl/semibold",
                        children: c.intl.string(c.t["5bQcoa"]),
                    }),
                    (0, i.jsx)(l.Text, {
                        className: d.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: c.intl.string(c.t.Ie60WV),
                    }),
                    null != p &&
                        (0, i.jsx)(l.olH, {
                            className: d.closeButton,
                            onClick: p,
                        }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                className: d.createGuild,
                paddingFix: !1,
                children: [
                    (0, i.jsx)(l.Kx8, {
                        label: c.intl.string(c.t.FFFAGh),
                        value: n,
                        maxLength: 200,
                        placeholder: c.intl.string(c.t.VzuITE),
                        onChange: u,
                        error: null == j ? void 0 : j.getAnyErrorMessage(),
                    }),
                    (0, i.jsx)(l.q4e, {
                        label: c.intl.string(c.t.Olo8FB),
                        placeholder: c.intl.string(c.t.XqMe3N),
                        options: (0, o.b7)(t),
                        clearable: !1,
                        value: m,
                        onChange: x,
                        maxVisibleItems: 4,
                    }),
                ],
            }),
            (0, i.jsxs)(l.mzw, {
                className: d.footer,
                children: [
                    (0, i.jsx)(l.zxk, {
                        variant: "primary",
                        text: c.intl.string(c.t.H9jxS0),
                        onClick: b,
                        loading: g,
                        disabled: "" === n || m === o.AR.UNCATEGORIZED,
                    }),
                    (0, i.jsx)(l.Avr, {
                        size: "sm",
                        variant: "secondary",
                        text: c.intl.string(c.t["13/7kZ"]),
                        onClick: h,
                    }),
                ],
            }),
        ],
    });
}
