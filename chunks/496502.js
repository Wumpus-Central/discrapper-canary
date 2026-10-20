n.d(t, { v: () => d });
var i = n(477900),
    s = n(582128),
    l = n(442433),
    a = n(71393),
    r = n(287809),
    o = n(158045);
function d(e, t) {
    return s.useCallback(
        (s) => {
            let d;
            s.stopPropagation();
            let c = a.A.getGuild(e.guildId),
                u = r.default.getCurrentUser();
            (null != c || o.Ay.canUseCustomCallSounds(u)) &&
                ((d = r.default.getCurrentUser()),
                (null != c || o.Ay.canUseCustomCallSounds(d)) &&
                    (0, l.L3)(s, async () => {
                        let { default: s } = await Promise.all([
                            n.e("503376"),
                            n.e("926132"),
                            n.e("146652"),
                            n.e("638221"),
                            n.e("482861"),
                            n.e("61440"),
                        ]).then(n.bind(n, 710339));
                        return (n) => (0, i.jsx)(s, { ...n, soundGuild: c, activeCallGuildId: t, sound: e });
                    }));
        },
        [e, t],
    );
}
