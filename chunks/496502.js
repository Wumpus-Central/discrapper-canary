"use strict";
n.d(t, { v: () => u });
var i = n(627968),
    r = n(64700),
    s = n(442433),
    a = n(71393),
    o = n(287809),
    l = n(428262);
function u(e, t) {
    return r.useCallback(
        (r) => {
            let u;
            r.stopPropagation();
            let c = a.A.getGuild(e.guildId),
                d = o.default.getCurrentUser();
            (null != c || l.Ay.canUseCustomCallSounds(d)) &&
                ((u = o.default.getCurrentUser()),
                (null != c || l.Ay.canUseCustomCallSounds(u)) &&
                    (0, s.L3)(r, async () => {
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
