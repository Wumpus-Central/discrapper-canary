n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(273504),
    a = n(981631),
    o = n(388032),
    c = n(410411),
    d = n(799639);
function u(e) {
    let { rule: t, onChangeRule: n } = e,
        [u, m] = r.useState(t.name);
    return (0, i.jsxs)(l.FormItem, {
        children: [
            (0, i.jsx)(l.Text, {
                className: d.triggerHeader,
                variant: 'text-sm/semibold',
                children: o.intl.string(o.t.WVAHxM)
            }),
            (0, i.jsx)(l.TextInput, {
                className: c.ruleNameInput,
                onChange: (e) => {
                    m(e),
                        n({
                            ...t,
                            name: e
                        });
                },
                onClick: (e) => e.stopPropagation(),
                onKeyPress: (e) => {
                    e.which === a.yXg.SPACE && e.stopPropagation();
                },
                placeholder: o.intl.string(o.t['5AO43N']),
                maxLength: s.OU,
                value: u
            })
        ]
    });
}
