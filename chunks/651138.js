(s.d(a, { default: () => p }), s(388685));
var r = s(255367),
    t = s(73800),
    n = s(442837),
    i = s(481060),
    d = s(239091),
    l = s(434404),
    c = s(496675),
    o = s(981631),
    u = s(388032);
function p(e) {
    let { guild: a, onSelect: s } = e,
        [p, b] = t.useState(a.premiumProgressBarEnabled),
        [h, g] = t.useState(!1),
        k = (0, n.e7)([c.Z], () => c.Z.can(o.Plq.MANAGE_GUILD, a)),
        m = async () => {
            k && (g(!0), await l.Z.saveGuild(a.id, { premiumProgressBarEnabled: !p }), b(!p), g(!1));
        };
    return (0, r.jsx)(i.v2r, {
        navId: 'progress-bar-context',
        onClose: d.Zy,
        'aria-label': u.intl.string(u.t['m85s/v']),
        onSelect: s,
        children: (0, r.jsx)(i.S89, {
            id: 'progress-bar-enabled',
            label: u.intl.string(u.t['0CJWPz']),
            checked: p,
            disabled: h,
            action: m
        })
    });
}
