n.d(t, { v: () => u });
var l = n(477900),
    i = n(582128),
    s = n(442433),
    r = n(71393),
    a = n(287809),
    o = n(158045);
function u(e, t) {
    return i.useCallback(
        (i) => {
            let u;
            i.stopPropagation();
            let c = r.A.getGuild(e.guildId),
                d = a.default.getCurrentUser();
            (null != c || o.Ay.canUseCustomCallSounds(d)) &&
                ((u = a.default.getCurrentUser()),
                (null != c || o.Ay.canUseCustomCallSounds(u)) &&
                    (0, s.L3)(i, async () => {
                        let { default: i } = await Promise.all([
                            n.e("503376"),
                            n.e("926132"),
                            n.e("146652"),
                            n.e("61440"),
                        ]).then(n.bind(n, 710339));
                        return (n) => (0, l.jsx)(i, { ...n, soundGuild: c, activeCallGuildId: t, sound: e });
                    }));
        },
        [e, t],
    );
}
