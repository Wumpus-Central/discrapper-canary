"use strict";
n.d(t, { r: () => o });
var r = n(64700),
    i = n(311907),
    a = n(696451),
    s = n(369496);
function o(e) {
    let { user: t, guildId: n } = e,
        o = (0, i.bG)([a.Ay], () => (null != n && null != t ? a.Ay.getMember(n, t.id) : null));
    return r.useMemo(() => {
        if (null != t) return (0, s.WK)(o?.collectibles?.nameplate) ?? t.nameplate;
    }, [o, t]);
}
