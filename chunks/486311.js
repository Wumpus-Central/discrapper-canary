n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(413335),
    l = n(434479),
    o = n(703656),
    a = n(981631),
    s = n(176505),
    c = n(783684),
    u = n(388032);
function d(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(l.m, {
        id: 'skill-trees-'.concat(t.id),
        renderIcon: (e) => (0, r.jsx)(i.Z, { className: e }),
        text: u.NW.string(c.Z.yv3DJC),
        selected: n,
        onClick: () => {
            (0, o.uL)(a.Z5c.CHANNEL(t.id, s.oC.GUILD_BOOSTS));
        }
    });
}
