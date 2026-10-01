n.d(t, { v: () => u });
var l = n(477900),
    i = n(582128),
    s = n(442433),
    a = n(71393),
    r = n(287809),
    o = n(158045);
function u(e, t) {
    return i.useCallback(
        (i) => {
            let u;
            i.stopPropagation();
            let d = a.A.getGuild(e.guildId),
                c = r.default.getCurrentUser();
            (null != d || o.Ay.canUseCustomCallSounds(c)) &&
                ((u = r.default.getCurrentUser()),
                (null != d || o.Ay.canUseCustomCallSounds(u)) &&
                    (0, s.L3)(i, async () => {
                        let { default: i } = await Promise.all([
                            n.e("503376"),
                            n.e("926132"),
                            n.e("146652"),
                            n.e("638221"),
                            n.e("482861"),
                            n.e("61440"),
                        ]).then(n.bind(n, 710339));
                        return (n) => (0, l.jsx)(i, { ...n, soundGuild: d, activeCallGuildId: t, sound: e });
                    }));
        },
        [e, t],
    );
}
