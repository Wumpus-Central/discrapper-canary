n.d(t, { _: () => c }), n(321073);
var l = n(64700),
    a = n(792216),
    i = n(505779),
    r = n(778591);
let s = new Set(["1402418703554842694", "356877880938070016"]),
    o = [i.V.EPICGAMES, i.V.STEAM, i.V.ROBLOX, i.V.BATTLENET, i.V.RIOT, i.V.MINECRAFT];
function c(e) {
    let t = (0, r.I)(e?.applicationId),
        n = e?.applicationId,
        c = e?.websites,
        d = e?.steamReleaseStatus;
    return l.useMemo(() => {
        if (null == c || null == n) return [];
        let e = c.filter(
            (e) =>
                (e.category !== i.V.EPICGAMES || !!s.has(n)) &&
                (e.category !== i.V.STEAM || d !== a.Y.RETIRED_ABANDONED) &&
                o.includes(e.category),
        );
        return (
            null == t ||
                d === a.Y.RETIRED_ABANDONED ||
                e.some((e) => e.category === i.V.STEAM) ||
                e.push({ category: i.V.STEAM, url: t }),
            e.sort((e, t) => (e.category === i.V.STEAM ? -1 : +(t.category === i.V.STEAM)))
        );
    }, [t, c, n, d]);
}
