n.d(t, { v: () => c });
var i = n(477900),
    s = n(582128),
    l = n(442433),
    r = n(71393),
    a = n(287809),
    o = n(158045);
function c(e, t) {
    return s.useCallback(
        (s) => {
            let c;
            s.stopPropagation();
            let d = r.A.getGuild(e.guildId),
                u = a.default.getCurrentUser();
            (null != d || o.Ay.canUseCustomCallSounds(u)) &&
                ((c = a.default.getCurrentUser()),
                (null != d || o.Ay.canUseCustomCallSounds(c)) &&
                    (0, l.L3)(s, async () => {
                        let { default: s } = await Promise.all([
                            n.e("503376"),
                            n.e("926132"),
                            n.e("146652"),
                            n.e("638221"),
                            n.e("482861"),
                            n.e("61440"),
                        ]).then(n.bind(n, 710339));
                        return (n) => (0, i.jsx)(s, { ...n, soundGuild: d, activeCallGuildId: t, sound: e });
                    }));
        },
        [e, t],
    );
}
