n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(149765),
    a = n(993365),
    o = n(481060),
    s = n(981631),
    l = n(388032),
    c = n(340181);
let u = 5;
function d(e) {
    let { error: t, selectedGuildId: n, onGuildChange: d, guilds: f, disabled: _ = !1 } = e,
        p = f
            .filter((e) => i.e$(e.permissions, s.Plq.MANAGE_GUILD))
            .map((e) => ({
                value: e.id,
                label: e.name
            }));
    return (0, r.jsxs)('div', {
        className: c.selectorGroup,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-deprecated-12/semibold',
                className: c.sectionLabel,
                children: l.intl.string(l.t['1DXFFR'])
            }),
            null != t && '' !== t
                ? (0, r.jsx)(a.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: t
                  })
                : null,
            (0, r.jsx)(o.VcW, {
                wrapperClassName: c.select,
                maxVisibleItems: u,
                placeholder: l.intl.string(l.t.oM4E1N),
                options: p,
                onChange: d,
                isDisabled: _,
                value: n
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                className: c.label,
                children: l.intl.format(l.t.t9Jm9v, {})
            })
        ]
    });
}
