n.d(i, { default: () => l });
var s = n(477900);
n(582128);
var e = n(512750),
    a = n(808885),
    r = n(828162),
    u = n(660183);
function l(t) {
    let { guilds: i, analyticsLocation: n, onClose: l, transitionState: d, returnRef: c } = t;
    return (0, s.jsx)(a.A, {
        transitionState: d,
        onClose: l,
        returnRef: c,
        title: u.intl.string(u.t.xO5QzM),
        subtitle: u.intl.string(u.t["h+7Yx3"]),
        guilds: i,
        onSelectGuild: async (t) => {
            (await l(), (0, r.A)(t.id, n, e.SL));
        },
    });
}
