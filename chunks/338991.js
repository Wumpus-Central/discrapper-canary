l.d(t, { default: () => o });
var e = l(200651);
l(192379);
var i = l(481060),
    a = l(239091),
    r = l(714447),
    s = l(439827),
    u = l(388032);
function o(n) {
    let { guildId: t, onSelect: l, onPickerClose: o } = n,
        c = (0, s.Z)(t, o),
        d = (0, r.Z)();
    return (0, e.jsx)(i.v2r, {
        navId: 'user-context',
        onClose: a.Zy,
        'aria-label': u.intl.string(u.t.liqwPD),
        className: 'context-menu',
        onSelect: l,
        children: (0, e.jsxs)(i.kSQ, {
            children: [d, c]
        })
    });
}
