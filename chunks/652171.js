n.d(t, { default: () => p });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(239091),
    a = n(984933),
    c = n(904483),
    o = n(522762),
    s = n(466330),
    u = n(981631),
    d = n(388032);
function p(e) {
    let { guild: t, onSelect: n } = e,
        p = a.ZP.getDefaultChannel(t.id, !0, u.Plq.CREATE_INSTANT_INVITE),
        b = (0, o.Z)(t.id),
        y = (0, c.Z)(t),
        f = (0, s.Z)({
            guild: t,
            source: u.InstantInviteSources.GUILD_CONTEXT_MENU,
            channel: p,
        });
    return (0, r.jsxs)(i.v2r, {
        navId: "guild-context",
        "aria-label": d.intl.string(d.t.HpQykZ),
        onClose: l.Zy,
        onSelect: n,
        children: [
            (0, r.jsx)(i.kSQ, { children: b }),
            (0, r.jsxs)(i.kSQ, {
                children: [y, f],
            }),
        ],
    });
}
