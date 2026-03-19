n.d(t, { _: () => o }), n(321073);
var a = n(64700),
    l = n(792216),
    i = n(505779),
    r = n(778591);
let s = new Set(["1402418703554842694", "356877880938070016"]),
    c = [i.V.EPICGAMES, i.V.STEAM, i.V.ROBLOX, i.V.BATTLENET, i.V.RIOT, i.V.MINECRAFT];
function o(e) {
    let t = (0, r.I)(e?.applicationId),
        n = e?.applicationId,
        o = e?.websites,
        d = e?.steamReleaseStatus;
    return a.useMemo(() => {
        if (null == o || null == n) return [];
        let e = o.filter(
            (e) =>
                (e.category !== i.V.EPICGAMES || !!s.has(n)) &&
                (e.category !== i.V.STEAM || d !== l.Y.RETIRED_ABANDONED) &&
                c.includes(e.category),
        );
        return (
            null == t ||
                d === l.Y.RETIRED_ABANDONED ||
                e.some((e) => e.category === i.V.STEAM) ||
                e.push({ category: i.V.STEAM, url: t }),
            e.sort((e, t) => (e.category === i.V.STEAM ? -1 : +(t.category === i.V.STEAM)))
        );
    }, [t, o, n, d]);
}
