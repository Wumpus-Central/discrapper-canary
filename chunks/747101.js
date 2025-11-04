n.d(t, {
    kN: () => s,
    kO: () => o,
    qU: () => c,
}),
    n(388685);
var r = n(647438),
    i = n(442837),
    a = n(224706),
    l = n(669764);
function o(e) {
    return (0, i.e7)([l.Z], () => l.Z.isFetching(e));
}
function c(e) {
    r.useEffect(() => {
        if (e.length > 0) {
            let t = e.filter((e) => l.Z.canFetch(e));
            t.length > 0 && a.Z.getDetectableGamesSupplemental(t);
        }
    }, [e]);
}
function s(e) {
    let [t, n] = (0, i.Wu)([l.Z], () => [l.Z.numNoDataAvailable(), l.Z.numSupplementalGames()]);
    return r.useMemo(() => {
        let t = {};
        return (
            e.forEach((e) => {
                t[e] = l.Z.getGame(e);
            }),
            t
        );
    }, [e, t, n]);
}
