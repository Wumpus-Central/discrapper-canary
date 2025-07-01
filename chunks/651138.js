(n.d(t, { default: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(239091),
    s = n(434404),
    c = n(496675),
    u = n(981631),
    d = n(388032);
function h(e) {
    let { guild: t, onSelect: n } = e,
        [h, p] = i.useState(t.premiumProgressBarEnabled),
        [f, g] = i.useState(!1),
        m = (0, l.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_GUILD, t)),
        b = async () => {
            m && (g(!0), await s.Z.saveGuild(t.id, { premiumProgressBarEnabled: !h }), p(!h), g(!1));
        };
    return (0, r.jsx)(o.v2r, {
        navId: 'progress-bar-context',
        onClose: a.Zy,
        'aria-label': d.intl.string(d.t['m85s/v']),
        onSelect: n,
        children: (0, r.jsx)(o.S89, {
            id: 'progress-bar-enabled',
            label: d.intl.string(d.t['0CJWPz']),
            checked: h,
            disabled: f,
            action: b
        })
    });
}
