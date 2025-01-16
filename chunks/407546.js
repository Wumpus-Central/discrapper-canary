r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(149765),
    s = r(993365),
    o = r(481060),
    l = r(981631),
    u = r(388032),
    c = r(804537);
let d = 5;
function f(e) {
    let { error: n, selectedGuildId: r, onGuildChange: f, guilds: _, disabled: h = !1 } = e,
        p = _.filter((e) => a.e$(e.permissions, l.Plq.MANAGE_GUILD)).map((e) => ({
            value: e.id,
            label: e.name
        }));
    return (0, i.jsxs)('div', {
        className: c.selectorGroup,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-deprecated-12/semibold',
                className: c.sectionLabel,
                children: u.intl.string(u.t['1DXFFR'])
            }),
            null != n && '' !== n
                ? (0, i.jsx)(s.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: n
                  })
                : null,
            (0, i.jsx)(o.SearchableSelect, {
                wrapperClassName: c.select,
                maxVisibleItems: d,
                placeholder: u.intl.string(u.t.oM4E1N),
                options: p,
                onChange: f,
                isDisabled: h,
                value: r
            }),
            (0, i.jsx)(s.x, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                className: c.label,
                children: u.intl.format(u.t.t9Jm9v, {})
            })
        ]
    });
}
