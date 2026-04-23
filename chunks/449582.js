"use strict";
n.d(t, { r: () => o });
var r = n(64700),
    i = n(311907),
    s = n(696451),
    a = n(780898);
function o(e) {
    let { user: t, guildId: n } = e,
        o = (0, i.bG)([s.Ay], () => (null != n && null != t ? s.Ay.getMember(n, t.id) : null));
    return r.useMemo(() => {
        if (null != t) return (0, a.WK)(o?.collectibles?.nameplate) ?? t.nameplate;
    }, [o, t]);
}
