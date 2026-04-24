"use strict";
n.d(t, { r: () => r });
var l = n(64700),
    i = n(17928),
    s = n(696451),
    a = n(780898);
function r(e) {
    let { user: t, guildId: n } = e,
        r = (0, i.bG)([s.Ay], () => (null != n && null != t ? s.Ay.getMember(n, t.id) : null));
    return l.useMemo(() => {
        if (null != t) return (0, a.WK)(r?.collectibles?.nameplate) ?? t.nameplate;
    }, [r, t]);
}
