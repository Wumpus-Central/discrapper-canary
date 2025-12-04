n.d(t, { Z: () => u }), n(953529), n(388685);
var i = n(54381),
    l = n(473749),
    s = n(793030),
    r = n(199849),
    a = n(481060),
    o = n(479531),
    c = n(75666),
    d = n(388032);
function u(e) {
    let {
            directoryChannelId: t,
            description: n,
            onDescriptionChange: u,
            categoryId: m,
            onCategoryIdChange: x,
            onSubmit: C,
            onBack: g,
        } = e,
        [p, f] = l.useState(!1),
        [j, h] = l.useState(null),
        b = async () => {
            f(!0);
            try {
                await C();
            } catch (e) {
                h(new o.Z(e));
            }
            f(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.xBx, {
                title: d.intl.string(d.t["5bQcoa"]),
                subtitle: d.intl.string(d.t.Ie60Wc),
            }),
            (0, i.jsxs)(s.fef, {
                children: [
                    (0, i.jsx)(a.Kx8, {
                        label: d.intl.string(d.t.FFFAGt),
                        value: n,
                        maxLength: 200,
                        placeholder: d.intl.string(d.t.VzuITC),
                        onChange: u,
                        error: null == j ? void 0 : j.getAnyErrorMessage(),
                    }),
                    (0, i.jsx)(r.y6, {
                        label: d.intl.string(d.t.Olo8FB),
                        placeholder: d.intl.string(d.t.XqMe3N),
                        options: (0, c.b7)(t),
                        clearable: !1,
                        value: m,
                        onChange: x,
                        maxVisibleItems: 4,
                    }),
                ],
            }),
            (0, i.jsx)(s.Go$, {
                leading: (0, i.jsx)(a.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: d.intl.string(d.t["13/7kX"]),
                    onClick: g,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: d.intl.string(d.t.H9jxS1),
                        onClick: b,
                        loading: p,
                        disabled: "" === n || m === c.AR.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
