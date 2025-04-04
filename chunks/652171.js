n.d(t, { default: () => p });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(239091),
    c = n(984933),
    a = n(904483),
    o = n(522762),
    u = n(466330),
    s = n(981631),
    d = n(388032);
function p(e) {
    let { guild: t, onSelect: n } = e,
        p = c.ZP.getDefaultChannel(t.id, !0, s.Plq.CREATE_INSTANT_INVITE),
        b = (0, o.Z)(t.id),
        y = (0, a.Z)(t),
        O = (0, u.Z)({
            guild: t,
            source: s.t4x.GUILD_CONTEXT_MENU,
            channel: p
        });
    return (0, r.jsxs)(l.v2r, {
        navId: 'guild-context',
        'aria-label': d.NW.string(d.t.HpQykZ),
        onClose: i.Zy,
        onSelect: n,
        children: [
            (0, r.jsx)(l.kSQ, { children: b }),
            (0, r.jsxs)(l.kSQ, {
                children: [y, O]
            })
        ]
    });
}
