"use strict";
n.d(t, { v: () => c });
var r = n(627968),
    i = n(64700),
    a = n(442433),
    s = n(71393),
    o = n(287809),
    l = n(927578);
function u(e, t, i, s) {
    let u = o.default.getCurrentUser();
    (null != t || l.Ay.canUseCustomCallSounds(u)) &&
        (0, a.L3)(e, async () => {
            let { default: e } = await n.e("86266").then(n.bind(n, 313921));
            return (n) => (0, r.jsx)(e, { ...n, soundGuild: t, activeCallGuildId: s, sound: i });
        });
}
function c(e, t) {
    return i.useCallback(
        (n) => {
            n.stopPropagation();
            let r = s.A.getGuild(e.guildId),
                i = o.default.getCurrentUser();
            (null != r || l.Ay.canUseCustomCallSounds(i)) && u(n, r, e, t);
        },
        [e, t],
    );
}
