"use strict";
n.d(t, { A: () => l });
var i = n(429913),
    r = n(569926),
    s = n(64700),
    a = n(227309),
    o = n(871633);
function l(e) {
    let { applicationId: t, gameId: n } = e,
        l = (0, i.h)(null == n ? t : void 0),
        u = (function (e) {
            let { applicationId: t, gameId: n } = e,
                a = (0, i.h)(null == n ? t : void 0),
                o = null == n && null != t && null == a,
                l = s.useMemo(() => (null != n ? n : null == a ? null : a.getCanonicalGameId()), [n, a]),
                { data: u, isLoading: c } = (0, r.I)(l);
            return { gameId: l, gameRecord: u ?? null, isLoading: o || c };
        })({ applicationId: t, gameId: null != l && (0, o.bB)(l) ? a.aX : n }),
        c = null != u.gameRecord && (0, o.Zb)(u.gameRecord),
        { data: d, isLoading: _ } = (0, r.I)(c ? a.aX : void 0);
    return c ? { gameId: a.aX, gameRecord: d ?? null, isLoading: _ } : u;
}
