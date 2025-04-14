n.d(t, { default: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(239091),
    c = n(984933),
    a = n(904483),
    o = n(522762),
    s = n(466330),
    u = n(981631),
    d = n(388032);
function p(e) {
    let { guild: t, onSelect: n } = e,
        p = c.ZP.getDefaultChannel(t.id, !0, u.Plq.CREATE_INSTANT_INVITE),
        b = (0, o.Z)(t.id),
        y = (0, a.Z)(t),
        O = (0, s.Z)({
            guild: t,
            source: u.t4x.GUILD_CONTEXT_MENU,
            channel: p
        });
    return (0, r.jsxs)(i.v2r, {
        navId: 'guild-context',
        'aria-label': d.NW.string(d.t.HpQykZ),
        onClose: l.Zy,
        onSelect: n,
        children: [
            (0, r.jsx)(i.kSQ, { children: b }),
            (0, r.jsxs)(i.kSQ, {
                children: [y, O]
            })
        ]
    });
}
