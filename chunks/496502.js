"use strict";
n.d(t, { v: () => c });
var i = n(627968),
    l = n(64700),
    s = n(442433),
    r = n(71393),
    a = n(287809),
    o = n(927578);
function c(e, t) {
    return l.useCallback(
        (l) => {
            let c;
            l.stopPropagation();
            let u = r.A.getGuild(e.guildId),
                d = a.default.getCurrentUser();
            (null != u || o.Ay.canUseCustomCallSounds(d)) &&
                ((c = a.default.getCurrentUser()),
                (null != u || o.Ay.canUseCustomCallSounds(c)) &&
                    (0, s.L3)(l, async () => {
                        let { default: l } = await n.e("86266").then(n.bind(n, 313921));
                        return (n) => (0, i.jsx)(l, { ...n, soundGuild: u, activeCallGuildId: t, sound: e });
                    }));
        },
        [e, t],
    );
}
