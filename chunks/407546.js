n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(149765),
    a = n(993365),
    s = n(481060),
    o = n(981631),
    l = n(388032),
    u = n(10599);
let c = 5;
function d(e) {
    let { error: t, selectedGuildId: n, onGuildChange: d, guilds: f, disabled: _ = !1 } = e,
        p = f
            .filter((e) => r.e$(e.permissions, o.Plq.MANAGE_GUILD))
            .map((e) => ({
                value: e.id,
                label: e.name
            }));
    return (0, i.jsxs)('div', {
        className: u.selectorGroup,
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-deprecated-12/semibold',
                className: u.sectionLabel,
                children: l.intl.string(l.t['1DXFFR'])
            }),
            null != t && '' !== t
                ? (0, i.jsx)(a.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: t
                  })
                : null,
            (0, i.jsx)(s.VcW, {
                wrapperClassName: u.select,
                maxVisibleItems: c,
                placeholder: l.intl.string(l.t.oM4E1N),
                options: p,
                onChange: d,
                isDisabled: _,
                value: n
            }),
            (0, i.jsx)(a.x, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                className: u.label,
                children: l.intl.format(l.t.t9Jm9v, {})
            })
        ]
    });
}
