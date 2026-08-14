l.d(e, { A: () => r });
var t = l(429913),
    a = l(569926),
    o = l(582128),
    u = l(227309),
    i = l(871633);
function r(n) {
    let { applicationId: e, gameId: l } = n,
        r = (0, t.h)(null == l ? e : void 0),
        d = (function (n) {
            let { applicationId: e, gameId: l } = n,
                u = (0, t.h)(null == l ? e : void 0),
                i = null == l && null != e && null == u,
                r = o.useMemo(() => (null != l ? l : null == u ? null : u.getCanonicalGameId()), [l, u]),
                { data: d, isLoading: c } = (0, a.I)(r);
            return { gameId: r, gameRecord: d ?? null, isLoading: i || c };
        })({ applicationId: e, gameId: null != r && (0, i.bB)(r) ? u.aX : l }),
        c = null != d.gameRecord && (0, i.Zb)(d.gameRecord),
        { data: s, isLoading: f } = (0, a.I)(c ? u.aX : void 0);
    return c ? { gameId: u.aX, gameRecord: s ?? null, isLoading: f } : d;
}
