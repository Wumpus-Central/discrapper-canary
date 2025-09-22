n.d(t, { Z: () => m }), n(953529), n(388685);
var i = n(951288),
    s = n(647438),
    l = n(755721),
    r = n(481060),
    a = n(479531),
    o = n(600164),
    c = n(75666),
    d = n(388032),
    u = n(960780);
function m(e) {
    let {
            directoryChannelId: t,
            description: n,
            onDescriptionChange: m,
            categoryId: x,
            onCategoryIdChange: C,
            onSubmit: h,
            onClose: p,
            onBack: f,
        } = e,
        [g, j] = s.useState(!1),
        [_, b] = s.useState(null),
        L = async () => {
            j(!0);
            try {
                await h();
            } catch (e) {
                b(new a.Z(e));
            }
            j(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.xBx, {
                direction: o.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.X6q, {
                        className: u.title,
                        variant: "heading-xl/semibold",
                        children: d.intl.string(d.t["5bQcoa"]),
                    }),
                    (0, i.jsx)(r.Text, {
                        className: u.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: d.intl.string(d.t.Ie60WV),
                    }),
                    null != p &&
                        (0, i.jsx)(r.olH, {
                            className: u.closeButton,
                            onClick: p,
                        }),
                ],
            }),
            (0, i.jsxs)(r.hzk, {
                className: u.createGuild,
                paddingFix: !1,
                children: [
                    (0, i.jsx)(r.xJW, {
                        title: d.intl.string(d.t.FFFAGh),
                        children: (0, i.jsx)(r.Kx8, {
                            value: n,
                            maxLength: 200,
                            placeholder: d.intl.string(d.t.VzuITE),
                            onChange: m,
                            error: null == _ ? void 0 : _.getAnyErrorMessage(),
                        }),
                    }),
                    (0, i.jsx)(r.xJW, {
                        className: u.formItemSpaced,
                        title: d.intl.string(d.t.Olo8FB),
                        children: (0, i.jsx)(r.q4e, {
                            placeholder: d.intl.string(d.t.XqMe3N),
                            options: (0, c.b7)(t),
                            clearable: !1,
                            value: x,
                            onChange: C,
                            maxVisibleItems: 4,
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)(r.mzw, {
                justify: o.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(r.zxk, {
                        variant: "primary",
                        text: d.intl.string(d.t.H9jxS0),
                        onClick: L,
                        loading: g,
                        disabled: "" === n || x === c.AR.UNCATEGORIZED,
                    }),
                    (0, i.jsx)(l.zx, {
                        className: u.backButton,
                        look: l.zx.Looks.BLANK,
                        size: l.zx.Sizes.MIN,
                        onClick: f,
                        children: d.intl.string(d.t["13/7kZ"]),
                    }),
                ],
            }),
        ],
    });
}
