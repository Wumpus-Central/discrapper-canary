n.d(t, { Z: () => d }), n(953529), n(388685);
var i = n(54381),
    l = n(473749),
    s = n(793030),
    r = n(481060),
    a = n(479531),
    o = n(75666),
    c = n(388032);
function d(e) {
    let {
            directoryChannelId: t,
            description: n,
            onDescriptionChange: d,
            categoryId: u,
            onCategoryIdChange: m,
            onSubmit: x,
            onBack: C,
        } = e,
        [g, p] = l.useState(!1),
        [f, j] = l.useState(null),
        h = async () => {
            p(!0);
            try {
                await x();
            } catch (e) {
                j(new a.Z(e));
            }
            p(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.xBx, {
                title: c.intl.string(c.t["5bQcoa"]),
                subtitle: c.intl.string(c.t.Ie60Wc),
            }),
            (0, i.jsxs)(s.fef, {
                children: [
                    (0, i.jsx)(r.Kx8, {
                        label: c.intl.string(c.t.FFFAGt),
                        value: n,
                        maxLength: 200,
                        placeholder: c.intl.string(c.t.VzuITC),
                        onChange: d,
                        error: null == f ? void 0 : f.getAnyErrorMessage(),
                    }),
                    (0, i.jsx)(r.q4e, {
                        label: c.intl.string(c.t.Olo8FB),
                        placeholder: c.intl.string(c.t.XqMe3N),
                        options: (0, o.b7)(t),
                        clearable: !1,
                        value: u,
                        onChange: m,
                        maxVisibleItems: 4,
                    }),
                ],
            }),
            (0, i.jsx)(s.Go$, {
                leading: (0, i.jsx)(r.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: c.intl.string(c.t["13/7kX"]),
                    onClick: C,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: c.intl.string(c.t.H9jxS1),
                        onClick: h,
                        loading: g,
                        disabled: "" === n || u === o.AR.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
