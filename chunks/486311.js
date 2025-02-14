n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(413335),
    r = n(434479),
    a = n(703656),
    o = n(981631),
    s = n(176505),
    c = n(306685),
    d = n(388032);
function u(e) {
    let { guild: t, selected: n } = e;
    return (0, i.jsx)(r.m, {
        id: 'skill-trees-'.concat(t.id),
        renderIcon: (e) => (0, i.jsx)(l.Z, { className: e }),
        text: d.intl.string(c.Z.yv3DJC),
        selected: n,
        onClick: () => {
            (0, a.uL)(o.Z5c.CHANNEL(t.id, s.oC.GUILD_BOOSTS));
        }
    });
}
