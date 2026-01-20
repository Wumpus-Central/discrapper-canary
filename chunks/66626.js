n.d(t, { Z: () => u }), n(953529), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(793030),
    r = n(481060),
    s = n(479531),
    o = n(486527),
    c = n(388032),
    d = n(69737);
function u(e) {
    let {
            directoryChannelId: t,
            description: n,
            onDescriptionChange: u,
            categoryId: f,
            onCategoryIdChange: m,
            onSubmit: x,
            onBack: g,
        } = e,
        [C, j] = a.useState(!1),
        [p, b] = a.useState(null),
        h = async () => {
            j(!0);
            try {
                await x();
            } catch (e) {
                b(new s.Z(e));
            }
            j(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.xBx, {
                title: c.intl.string(c.t["5bQcoa"]),
                subtitle: c.intl.string(c.t.Ie60Wc),
            }),
            (0, i.jsx)(l.fef, {
                children: (0, i.jsxs)("div", {
                    className: d.modalBody,
                    children: [
                        (0, i.jsx)(r.Kx8, {
                            label: c.intl.string(c.t.FFFAGt),
                            value: n,
                            maxLength: 200,
                            placeholder: c.intl.string(c.t.VzuITC),
                            onChange: u,
                            error: null == p ? void 0 : p.getAnyErrorMessage(),
                        }),
                        (0, i.jsx)(r.PhF, {
                            selectionMode: "single",
                            label: c.intl.string(c.t.Olo8FB),
                            placeholder: c.intl.string(c.t.XqMe3N),
                            options: (0, o.b7)(t),
                            value: f,
                            onSelectionChange: m,
                            maxOptionsVisible: 4,
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(l.Go$, {
                leading: (0, i.jsx)(r.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: c.intl.string(c.t["13/7kX"]),
                    onClick: g,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: c.intl.string(c.t.H9jxS1),
                        onClick: h,
                        loading: C,
                        disabled: "" === n || f === o.AR.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
