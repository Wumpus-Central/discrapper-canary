n.d(t, { A: () => c });
var r = n(64700),
    i = n(417597),
    a = n(594061),
    s = n(796774),
    o = n(209932),
    l = n(766864);
function c() {
    let e = (0, l.zZ)("useFetchSoundboardData");
    return {
        fetching: (0, i.bG)([o.A], () => o.A.isFetchingAnySounds()),
        maybeFetchData: r.useCallback(() => {
            s.E7(), a.bW.loadIfNecessary();
        }, [e.sortingStrategy]),
    };
}
