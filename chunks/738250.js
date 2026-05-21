a.d(n, { A: () => r });
var l = a(429913),
    o = a(569926),
    t = a(64700),
    i = a(227309),
    d = a(871633);
function r(e) {
    let { applicationId: n, gameId: a } = e,
        r = (0, l.h)(null == a ? n : void 0),
        u = (function (e) {
            let { applicationId: n, gameId: a } = e,
                i = (0, l.h)(null == a ? n : void 0),
                d = null == a && null != n && null == i,
                r = t.useMemo(() => (null != a ? a : null == i ? null : i.getCanonicalGameId()), [a, i]),
                { data: u, isLoading: s } = (0, o.I)(r);
            return { gameId: r, gameRecord: u ?? null, isLoading: d || s };
        })({ applicationId: n, gameId: null != r && (0, d.bB)(r) ? i.aX : a }),
        s = null != u.gameRecord && (0, d.Zb)(u.gameRecord),
        { data: I, isLoading: A } = (0, o.I)(s ? i.aX : void 0);
    return s ? { gameId: i.aX, gameRecord: I ?? null, isLoading: A } : u;
}
