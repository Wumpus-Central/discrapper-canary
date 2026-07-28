"use strict";
n.d(t, { A: () => o });
var i = n(429913),
    r = n(569926),
    a = n(582128),
    s = n(227309),
    l = n(871633);
function o(e) {
    let { applicationId: t, gameId: n } = e,
        o = (0, i.h)(null == n ? t : void 0),
        d = (function (e) {
            let { applicationId: t, gameId: n } = e,
                s = (0, i.h)(null == n ? t : void 0),
                l = null == n && null != t && null == s,
                o = a.useMemo(() => (null != n ? n : null == s ? null : s.getCanonicalGameId()), [n, s]),
                { data: d, isLoading: c } = (0, r.I)(o);
            return { gameId: o, gameRecord: d ?? null, isLoading: l || c };
        })({ applicationId: t, gameId: null != o && (0, l.bB)(o) ? s.aX : n }),
        c = null != d.gameRecord && (0, l.Zb)(d.gameRecord),
        { data: u, isLoading: _ } = (0, r.I)(c ? s.aX : void 0);
    return c ? { gameId: s.aX, gameRecord: u ?? null, isLoading: _ } : d;
}
