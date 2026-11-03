t.d(n, { v: () => d });
var s = t(477900),
    i = t(582128),
    l = t(442433),
    a = t(71393),
    r = t(287809),
    o = t(24482);
function d(e, n) {
    return i.useCallback(
        (i) => {
            let d;
            i.stopPropagation();
            let c = a.A.getGuild(e.guildId),
                u = r.default.getCurrentUser();
            (null != c || o.Ay.canUseCustomCallSounds(u)) &&
                ((d = r.default.getCurrentUser()),
                (null != c || o.Ay.canUseCustomCallSounds(d)) &&
                    (0, l.L3)(i, async () => {
                        let { default: i } = await Promise.all([
                            t.e("503376"),
                            t.e("926132"),
                            t.e("146652"),
                            t.e("638221"),
                            t.e("482861"),
                            t.e("61440"),
                        ]).then(t.bind(t, 710339));
                        return (t) => (0, s.jsx)(i, { ...t, soundGuild: c, activeCallGuildId: n, sound: e });
                    }));
        },
        [e, n],
    );
}
