n.d(t, { default: () => h });
var l = n(200651);
n(192379);
var i = n(481060),
    a = n(239091),
    d = n(984933),
    r = n(904483),
    s = n(522762),
    c = n(466330),
    u = n(981631),
    o = n(388032);
function h(e) {
    let { guild: t, onSelect: n } = e,
        h = d.ZP.getDefaultChannel(t.id, !0, u.Plq.CREATE_INSTANT_INVITE),
        Z = (0, s.Z)(t.id),
        N = (0, r.Z)(t),
        _ = (0, c.Z)({
            guild: t,
            source: u.t4x.GUILD_CONTEXT_MENU,
            channel: h
        });
    return (0, l.jsxs)(i.v2r, {
        navId: 'guild-context',
        'aria-label': o.intl.string(o.t.HpQykZ),
        onClose: a.Zy,
        onSelect: n,
        children: [
            (0, l.jsx)(i.kSQ, { children: Z }),
            (0, l.jsxs)(i.kSQ, {
                children: [N, _]
            })
        ]
    });
}
