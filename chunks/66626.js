n.d(t, { Z: () => m }), n(953529), n(388685);
var i = n(951288),
    l = n(647438),
    s = n(369585),
    r = n(103866),
    a = n(37148),
    o = n(481060),
    c = n(479531),
    d = n(75666),
    u = n(388032);
function m(e) {
    let {
            directoryChannelId: t,
            description: n,
            onDescriptionChange: m,
            categoryId: x,
            onCategoryIdChange: C,
            onSubmit: g,
            onBack: p,
        } = e,
        [f, j] = l.useState(!1),
        [h, _] = l.useState(null),
        b = async () => {
            j(!0);
            try {
                await g();
            } catch (e) {
                _(new c.Z(e));
            }
            j(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.x, {
                title: u.intl.string(u.t["5bQcoa"]),
                subtitle: u.intl.string(u.t.Ie60WV),
            }),
            (0, i.jsxs)(r.f, {
                children: [
                    (0, i.jsx)(o.Kx8, {
                        label: u.intl.string(u.t.FFFAGh),
                        value: n,
                        maxLength: 200,
                        placeholder: u.intl.string(u.t.VzuITE),
                        onChange: m,
                        error: null == h ? void 0 : h.getAnyErrorMessage(),
                    }),
                    (0, i.jsx)(o.q4e, {
                        label: u.intl.string(u.t.Olo8FB),
                        placeholder: u.intl.string(u.t.XqMe3N),
                        options: (0, d.b7)(t),
                        clearable: !1,
                        value: x,
                        onChange: C,
                        maxVisibleItems: 4,
                    }),
                ],
            }),
            (0, i.jsx)(s.G, {
                leading: (0, i.jsx)(o.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: u.intl.string(u.t["13/7kZ"]),
                    onClick: p,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: u.intl.string(u.t.H9jxS0),
                        onClick: b,
                        loading: f,
                        disabled: "" === n || x === d.AR.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
