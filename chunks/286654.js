n.d(t, { z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(239091),
    s = n(430824),
    o = n(594174),
    l = n(74538);
function u(e, t, r, s) {
    let u = o.default.getCurrentUser();
    (null != t || l.ZP.canUseCustomCallSounds(u)) &&
        (0, a.jW)(e, async () => {
            let { default: e } = await n.e('2356').then(n.bind(n, 876308));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    soundGuild: t,
                    activeCallGuildId: s,
                    sound: r
                });
        });
}
function c(e, t) {
    return r.useCallback(
        (n) => {
            n.stopPropagation();
            let i = s.Z.getGuild(e.guildId),
                r = o.default.getCurrentUser();
            (null != i || l.ZP.canUseCustomCallSounds(r)) && u(n, i, e, t);
        },
        [e, t]
    );
}
