n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(149765),
    o = n(993365),
    a = n(481060),
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
            (0, r.jsx)(a.X6q, {
                variant: 'heading-deprecated-12/semibold',
                className: c.sectionLabel,
                children: l.NW.string(l.t['1DXFFR'])
            }),
            null != t && '' !== t
                ? (0, r.jsx)(o.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: t
                  })
                : null,
            (0, r.jsx)(a.VcW, {
                wrapperClassName: c.select,
                maxVisibleItems: u,
                placeholder: l.NW.string(l.t.oM4E1N),
                options: p,
                onChange: d,
                isDisabled: _,
                value: n
            }),
            (0, r.jsx)(o.x, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                className: c.label,
                children: l.NW.format(l.t.t9Jm9v, {})
            })
        ]
    });
}
