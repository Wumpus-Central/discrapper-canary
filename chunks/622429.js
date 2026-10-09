s.d(i, { default: () => d });
var n = s(477900);
s(582128);
var a = s(512750),
    e = s(793574),
    l = s(808885),
    r = s(828162),
    u = s(660183);
function d(t) {
    let { guilds: i, onClose: s, transitionState: d } = t;
    return (0, n.jsx)(l.A, {
        transitionState: d,
        onClose: s,
        title: u.intl.string(u.t.xO5QzM),
        subtitle: u.intl.string(u.t["h+7Yx3"]),
        guilds: i,
        onSelectGuild: async (t) => {
            (await s(), (0, r.A)(t.id, e.A.USER_PROFILE_MODAL_V2, a.SL));
        },
    });
}
