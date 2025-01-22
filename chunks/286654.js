r.d(n, {
    z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(239091),
    s = r(430824),
    l = r(594174),
    u = r(74538);
function c(e, n, a, s) {
    let c = l.default.getCurrentUser();
    (null != n || u.ZP.canUseCustomCallSounds(c)) &&
        (0, o.jW)(e, async () => {
            let { default: e } = await r.e('2356').then(r.bind(r, 876308));
            return (r) =>
                (0, i.jsx)(e, {
                    ...r,
                    soundGuild: n,
                    activeCallGuildId: s,
                    sound: a
                });
        });
}
function d(e, n) {
    return a.useCallback(
        (r) => {
            r.stopPropagation();
            let i = s.Z.getGuild(e.guildId),
                a = l.default.getCurrentUser();
            (null != i || u.ZP.canUseCustomCallSounds(a)) && c(r, i, e, n);
        },
        [e, n]
    );
}
