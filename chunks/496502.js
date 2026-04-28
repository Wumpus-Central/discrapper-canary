"use strict";
n.d(t, { v: () => c });
var l = n(627968),
    i = n(64700),
    s = n(442433),
    a = n(71393),
    r = n(287809),
    o = n(927578);
function c(e, t) {
    return i.useCallback(
        (i) => {
            let c;
            i.stopPropagation();
            let u = a.A.getGuild(e.guildId),
                d = r.default.getCurrentUser();
            (null != u || o.Ay.canUseCustomCallSounds(d)) &&
                ((c = r.default.getCurrentUser()),
                (null != u || o.Ay.canUseCustomCallSounds(c)) &&
                    (0, s.L3)(i, async () => {
                        let { default: i } = await Promise.all([
                            n.e("3376"),
                            n.e("26132"),
                            n.e("46652"),
                            n.e("61440"),
                        ]).then(n.bind(n, 710339));
                        return (n) => (0, l.jsx)(i, { ...n, soundGuild: u, activeCallGuildId: t, sound: e });
                    }));
        },
        [e, t],
    );
}
