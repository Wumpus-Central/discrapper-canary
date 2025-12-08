n.d(t, {
    kN: () => s,
    kO: () => o,
    qU: () => c,
}),
    n(388685);
var r = n(473749),
    i = n(442837),
    l = n(224706),
    a = n(669764);
function o(e) {
    return (0, i.e7)([a.Z], () => a.Z.isFetching(e));
}
function c(e) {
    r.useEffect(() => {
        if (e.length > 0) {
            let t = e.filter((e) => a.Z.canFetch(e));
            t.length > 0 && l.Z.getDetectableGamesSupplemental(t);
        }
    }, [e]);
}
function s(e) {
    let [t, n] = (0, i.Wu)([a.Z], () => [a.Z.numNoDataAvailable(), a.Z.numSupplementalGames()]);
    return r.useMemo(() => {
        let t = {};
        return (
            e.forEach((e) => {
                t[e] = a.Z.getGame(e);
            }),
            t
        );
    }, [e, t, n]);
}
