i.d(t, { Y: () => p, S: () => x });
var n = i(64700),
    l = i(17928),
    s = i(311043),
    a = i(569926),
    r = i(958805),
    c = i(61881),
    u = i(735438),
    o = i(353640),
    d = i(540185),
    g = i(282435);
let m = (0, u.sampleSize)(g.cG, g.cG.length),
    f = (0, o.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, l) => {
            let s = new Set(l.map((e) => e.applicationId));
            for (let l of (e({
                stack: [...i.filter((e) => !s.has(e)), ...m],
                wishlistStack: [...n.filter((e) => !s.has(e)), ...m],
            }),
            Object.values(d.x)))
                t().setNext(6, l);
        },
        setNext: (e, i) => {
            let n = t().getNext(e, i);
            t()._setGameIds(i, n);
            let l = t().peekNext(7, i);
            t()._setPeekedGameIds(i, l);
        },
        getNext: (e, i) => {
            let n = i === d.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = n.slice(0, e),
                s = n.slice(e);
            return t()._setStack(i, s), l;
        },
        peekNext: (e, i) => (i === d.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, i) => {
            let n = t().gameIds[i] ?? [],
                l = n.indexOf(e);
            if (-1 === l) return;
            let s = [...n];
            s.splice(l, 1);
            let a = t().getNext(1, i),
                r = t().peekNext(7, i);
            t()._setGameIds(i, [...s, ...a]), t()._setPeekedGameIds(i, [...r, ...a]);
        },
        bumpMultiple: (e, i) => {
            let n = (t().gameIds[i] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - n.length, i),
                s = t().peekNext(7, i);
            t()._setGameIds(i, [...n, ...l]), t()._setPeekedGameIds(i, [...s, ...l]);
        },
        remove: (e, i) => {
            let n = (i === d.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i));
        },
        _setGameIds: (t, i) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: i } }));
        },
        _setStack: (t, i) => {
            t === d.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: i }) : e({ stack: i });
        },
        _setPeekedGameIds: (t, i) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: i } }));
        },
    }));
function x(e) {
    let { bump: t, bumpMultiple: i, gameIds: r } = f();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = f(),
            r = n.useMemo(() => i[e] ?? [], [i, e]);
        (0, a.x)(r);
        let c = (0, l.yK)([s.A], () => r.map((e) => s.A.isFetching(e)));
        n.useEffect(() => {
            for (let i of r) {
                let n = s.A.didFetchingFail(i),
                    l = s.A.hasNoData(i),
                    a = !!s.A.getGame(i),
                    r = null != s.A.getCoverImageUrl(i);
                (n || l || (a && !r)) && t(i, e);
            }
        }, [r, t, e, c]);
    })(e);
    let c = n.useMemo(() => r[e] ?? [], [r, e]),
        u = n.useCallback(
            (i) => {
                t(i, e);
            },
            [t, e],
        ),
        o = (0, l.yK)([s.A], () => c.map((e) => s.A.isFetching(e)));
    n.useEffect(() => {
        let t = c.filter((e) => {
            let t = s.A.didFetchingFail(e),
                i = s.A.hasNoData(e),
                n = !!s.A.getGame(e),
                l = null != s.A.getCoverImageUrl(e);
            return t || i || (n && !l);
        });
        t.length > 0 && i(t, e);
    }, [c, e, i, o]);
    let d = n.useMemo(() => c.map((e) => ({ applicationId: e })), [c]);
    return { applicationIds: c, games: d, onAddGame: u };
}
function p(e, t) {
    let [i, s, a, u] = (0, l.yK)([c.A], () => [
            c.A.suggestedFetchAttempted,
            c.A.suggestedFetchError,
            c.A.suggestedGameIds,
            c.A.suggestedFetchIsLoading,
        ]),
        { onLoad: o } = f();
    n.useEffect(() => {
        !i && e && r.A.fetchSuggestedGames();
    }, [i, e]);
    let d = i && !u;
    n.useEffect(() => {
        if (!d) return;
        let e = t.map((e) => e.games).flat();
        s || o(a.suggestedGamesIds ?? [], a.suggestedWishlistGamesIds ?? [], e);
    }, [d]);
}
