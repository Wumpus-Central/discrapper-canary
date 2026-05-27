l.d(n, { A: () => d });
var a = l(429913),
    t = l(569926),
    o = l(64700),
    i = l(227309),
    u = l(871633);
function d(e) {
    let { applicationId: n, gameId: l } = e,
        d = (0, a.h)(null == l ? n : void 0),
        r = (function (e) {
            let { applicationId: n, gameId: l } = e,
                i = (0, a.h)(null == l ? n : void 0),
                u = null == l && null != n && null == i,
                d = o.useMemo(() => (null != l ? l : null == i ? null : i.getCanonicalGameId()), [l, i]),
                { data: r, isLoading: s } = (0, t.I)(d);
            return { gameId: d, gameRecord: r ?? null, isLoading: u || s };
        })({ applicationId: n, gameId: null != d && (0, u.bB)(d) ? i.aX : l }),
        s = null != r.gameRecord && (0, u.Zb)(r.gameRecord),
        { data: A, isLoading: I } = (0, t.I)(s ? i.aX : void 0);
    return s ? { gameId: i.aX, gameRecord: A ?? null, isLoading: I } : r;
}
