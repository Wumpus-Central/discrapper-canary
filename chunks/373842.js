n.d(t, { Y: () => h, S: () => f });
var i = n(582128),
    l = n(17928),
    a = n(311043),
    s = n(569926),
    r = n(958805),
    d = n(61881),
    o = n(435558),
    c = n(196765),
    u = n(540185),
    m = n(282435);
let g = (0, o.sampleSize)(m.sx, m.sx.length),
    x = (0, c.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let a = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...n.filter((e) => !a.has(e)), ...g],
                wishlistStack: [...i.filter((e) => !a.has(e)), ...g],
            }),
            Object.values(u.x)))
                t().setNext(6, l);
        },
        setNext: (e, n) => {
            let i = t().getNext(e, n);
            t()._setGameIds(n, i);
            let l = t().peekNext(7, n);
            t()._setPeekedGameIds(n, l);
        },
        getNext: (e, n) => {
            let i = n === u.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = i.slice(0, e),
                a = i.slice(e);
            return (t()._setStack(n, a), l);
        },
        peekNext: (e, n) => (n === u.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let i = t().gameIds[n] ?? [],
                l = i.indexOf(e);
            if (-1 === l) return;
            let a = [...i];
            a.splice(l, 1);
            let s = t().getNext(1, n),
                r = t().peekNext(7, n);
            (t()._setGameIds(n, [...a, ...s]), t()._setPeekedGameIds(n, [...r, ...s]));
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                a = t().peekNext(7, n);
            (t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...a, ...l]));
        },
        remove: (e, n) => {
            let i = (n === u.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            (t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n)));
        },
        _setGameIds: (t, n) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: n } }));
        },
        _setStack: (t, n) => {
            t === u.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: n }) : e({ stack: n });
        },
        _setPeekedGameIds: (t, n) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: n } }));
        },
    }));
function f(e) {
    let { bump: t, bumpMultiple: n, gameIds: r } = x();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = x(),
            r = i.useMemo(() => n[e] ?? [], [n, e]);
        (0, s.x)(r);
        let d = (0, l.yK)([a.A], () => r.map((e) => a.A.isFetching(e)));
        i.useEffect(() => {
            for (let n of r) {
                let i = a.A.didFetchingFail(n),
                    l = a.A.hasNoData(n),
                    s = !!a.A.getGame(n),
                    r = null != a.A.getCoverImageUrl(n);
                (i || l || (s && !r)) && t(n, e);
            }
        }, [r, t, e, d]);
    })(e);
    let d = i.useMemo(() => r[e] ?? [], [r, e]),
        o = i.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        c = (0, l.yK)([a.A], () => d.map((e) => a.A.isFetching(e)));
    i.useEffect(() => {
        let t = d.filter((e) => {
            let t = a.A.didFetchingFail(e),
                n = a.A.hasNoData(e),
                i = !!a.A.getGame(e),
                l = null != a.A.getCoverImageUrl(e);
            return t || n || (i && !l);
        });
        t.length > 0 && n(t, e);
    }, [d, e, n, c]);
    let u = i.useMemo(() => d.map((e) => ({ gameId: e })), [d]);
    return { gameIds: d, games: u, onAddGame: o };
}
function h(e, t) {
    let [n, a, s, o] = (0, l.yK)([d.A], () => [
            d.A.suggestedFetchAttempted,
            d.A.suggestedFetchError,
            d.A.suggestedGameIds,
            d.A.suggestedFetchIsLoading,
        ]),
        { onLoad: c } = x();
    i.useEffect(() => {
        !n && e && r.A.fetchSuggestedGames();
    }, [n, e]);
    let u = n && !o;
    i.useEffect(() => {
        if (!u) return;
        let e = t.map((e) => e.games).flat();
        a || c(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
    }, [u]);
}
