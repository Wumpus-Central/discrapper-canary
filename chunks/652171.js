n.d(t, { default: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(239091),
    a = n(984933),
    c = n(904483),
    o = n(522762),
    u = n(466330),
    s = n(981631),
    d = n(388032);
function p(e) {
    let { guild: t, onSelect: n } = e,
        p = a.ZP.getDefaultChannel(t.id, !0, s.Plq.CREATE_INSTANT_INVITE),
        b = (0, o.Z)(t.id),
        y = (0, c.Z)(t),
        f = (0, u.Z)({
            guild: t,
            source: s.t4x.GUILD_CONTEXT_MENU,
            channel: p,
        });
    return (0, r.jsxs)(i.v2r, {
        navId: "guild-context",
        "aria-label": d.intl.string(d.t.HpQykc),
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
