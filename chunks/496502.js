"use strict";
n.d(t, { v: () => d });
var i = n(477900),
    r = n(582128),
    a = n(442433),
    s = n(71393),
    l = n(287809),
    o = n(428262);
function d(e, t) {
    return r.useCallback(
        (r) => {
            let d;
            r.stopPropagation();
            let c = s.A.getGuild(e.guildId),
                u = l.default.getCurrentUser();
            (null != c || o.Ay.canUseCustomCallSounds(u)) &&
                ((d = l.default.getCurrentUser()),
                (null != c || o.Ay.canUseCustomCallSounds(d)) &&
                    (0, a.L3)(r, async () => {
                        let { default: r } = await Promise.all([
                            n.e("3376"),
                            n.e("26132"),
                            n.e("46652"),
                            n.e("61440"),
                        ]).then(n.bind(n, 710339));
                        return (n) => (0, i.jsx)(r, { ...n, soundGuild: c, activeCallGuildId: t, sound: e });
                    }));
        },
        [e, t],
    );
}
