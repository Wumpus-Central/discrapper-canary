n.d(t, { Z: () => f }), n(953529), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(793030),
    r = n(199849),
    s = n(481060),
    o = n(479531),
    c = n(486527),
    d = n(388032),
    u = n(69737);
function f(e) {
    let {
            directoryChannelId: t,
            description: n,
            onDescriptionChange: f,
            categoryId: m,
            onCategoryIdChange: x,
            onSubmit: g,
            onBack: C,
        } = e,
        [j, p] = a.useState(!1),
        [b, h] = a.useState(null),
        L = async () => {
            p(!0);
            try {
                await g();
            } catch (e) {
                h(new o.Z(e));
            }
            p(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.xBx, {
                title: d.intl.string(d.t["5bQcoa"]),
                subtitle: d.intl.string(d.t.Ie60Wc),
            }),
            (0, i.jsx)(l.fef, {
                children: (0, i.jsxs)("div", {
                    className: u.modalBody,
                    children: [
                        (0, i.jsx)(s.Kx8, {
                            label: d.intl.string(d.t.FFFAGt),
                            value: n,
                            maxLength: 200,
                            placeholder: d.intl.string(d.t.VzuITC),
                            onChange: f,
                            error: null == b ? void 0 : b.getAnyErrorMessage(),
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
            }),
            (0, i.jsx)(l.Go$, {
                leading: (0, i.jsx)(s.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: d.intl.string(d.t["13/7kX"]),
                    onClick: C,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: d.intl.string(d.t.H9jxS1),
                        onClick: L,
                        loading: j,
                        disabled: "" === n || m === c.AR.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
