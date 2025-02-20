n.d(t, { default: () => b });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(239091),
    c = n(984933),
    a = n(904483),
    o = n(522762),
    s = n(466330),
    u = n(981631),
    d = n(388032);
function b(e) {
    let { guild: t, onSelect: n } = e,
        b = c.ZP.getDefaultChannel(t.id, !0, u.Plq.CREATE_INSTANT_INVITE),
        p = (0, o.Z)(t.id),
        y = (0, a.Z)(t),
        O = (0, s.Z)({
            guild: t,
            source: u.t4x.GUILD_CONTEXT_MENU,
            channel: b
        });
    return (0, r.jsxs)(l.v2r, {
        navId: 'guild-context',
        'aria-label': d.NW.string(d.t.HpQykZ),
        onClose: i.Zy,
        onSelect: n,
        children: [
            (0, r.jsx)(l.kSQ, { children: p }),
            (0, r.jsxs)(l.kSQ, {
                children: [y, O]
            })
        ]
    });
}
