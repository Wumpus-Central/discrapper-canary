"use strict";
n.d(t, { r: () => o });
var r = n(64700),
    i = n(311907),
    a = n(696451),
    s = n(369496);
function o(e) {
    let { user: t, guildId: n } = e,
        o = (0, i.bG)([a.Ay], () => (null != n && null != t ? a.Ay.getMember(n, t.id) : null));
    return (0, r.useMemo)(() => {
        if (null == t) return;
        let e = (0, s.WK)(o?.collectibles?.nameplate);
        return null != n && null != e ? e : t.nameplate;
    }, [o, n, t]);
}
