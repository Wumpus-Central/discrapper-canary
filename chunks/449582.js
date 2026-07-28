"use strict";
n.d(t, { r: () => l });
var i = n(582128),
    r = n(17928),
    a = n(696451),
    s = n(780898);
function l(e) {
    let { user: t, guildId: n } = e,
        l = (0, r.bG)([a.Ay], () => (null != n && null != t ? a.Ay.getMember(n, t.id) : null));
    return i.useMemo(() => {
        if (null != t) return (0, s.WK)(l?.collectibles?.nameplate) ?? t.nameplate;
    }, [l, t]);
}
