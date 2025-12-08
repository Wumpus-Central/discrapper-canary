n.d(t, { Z: () => m }), n(953529), n(388685);
var i = n(54381),
    l = n(473749),
    a = n(793030),
    r = n(199849),
    s = n(481060),
    o = n(479531),
    c = n(75666),
    d = n(388032),
    u = n(698213);
function m(e) {
    let {
            directoryChannelId: t,
            description: n,
            onDescriptionChange: m,
            categoryId: x,
            onCategoryIdChange: g,
            onSubmit: C,
            onBack: f,
        } = e,
        [j, p] = l.useState(!1),
        [b, h] = l.useState(null),
        L = async () => {
            p(!0);
            try {
                await C();
            } catch (e) {
                h(new o.Z(e));
            }
            p(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.xBx, {
                title: d.intl.string(d.t["5bQcoa"]),
                subtitle: d.intl.string(d.t.Ie60Wc),
            }),
            (0, i.jsx)(a.fef, {
                children: (0, i.jsxs)("div", {
                    className: u.modalBody,
                    children: [
                        (0, i.jsx)(s.Kx8, {
                            label: d.intl.string(d.t.FFFAGt),
                            value: n,
                            maxLength: 200,
                            placeholder: d.intl.string(d.t.VzuITC),
                            onChange: m,
                            error: null == b ? void 0 : b.getAnyErrorMessage(),
                        }),
                        (0, i.jsx)(r.y6, {
                            label: d.intl.string(d.t.Olo8FB),
                            placeholder: d.intl.string(d.t.XqMe3N),
                            options: (0, c.b7)(t),
                            clearable: !1,
                            value: x,
                            onChange: g,
                            maxVisibleItems: 4,
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(a.Go$, {
                leading: (0, i.jsx)(s.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: d.intl.string(d.t["13/7kX"]),
                    onClick: f,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: d.intl.string(d.t.H9jxS1),
                        onClick: L,
                        loading: j,
                        disabled: "" === n || x === c.AR.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
