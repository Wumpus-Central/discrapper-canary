n.d(t, { Y: () => x, S: () => f });
var i = n(64700),
    a = n(17928),
    l = n(311043),
    s = n(569926),
    r = n(958805),
    o = n(61881),
    c = n(735438),
    d = n(353640),
    u = n(540185),
    g = n(282435);
let m = (0, c.sampleSize)(g.cG, g.cG.length),
    _ = (0, d.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, a) => {
            let l = new Set(a.map((e) => e.applicationId));
            for (let a of (e({
                stack: [...n.filter((e) => !l.has(e)), ...m],
                wishlistStack: [...i.filter((e) => !l.has(e)), ...m],
            }),
            Object.values(u.x)))
                t().setNext(6, a);
        },
        setNext: (e, n) => {
            let i = t().getNext(e, n);
            t()._setGameIds(n, i);
            let a = t().peekNext(7, n);
            t()._setPeekedGameIds(n, a);
        },
        getNext: (e, n) => {
            let i = n === u.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                a = i.slice(0, e),
                l = i.slice(e);
            return t()._setStack(n, l), a;
        },
        peekNext: (e, n) => (n === u.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let i = t().gameIds[n] ?? [],
                a = i.indexOf(e);
            if (-1 === a) return;
            let l = [...i];
            l.splice(a, 1);
            let s = t().getNext(1, n),
                r = t().peekNext(7, n);
            t()._setGameIds(n, [...l, ...s]), t()._setPeekedGameIds(n, [...r, ...s]);
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                a = t().getNext(6 - i.length, n),
                l = t().peekNext(7, n);
            t()._setGameIds(n, [...i, ...a]), t()._setPeekedGameIds(n, [...l, ...a]);
        },
        remove: (e, n) => {
            let i = (n === u.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n));
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
    let { bump: t, bumpMultiple: n, gameIds: r } = _();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = _(),
            r = i.useMemo(() => n[e] ?? [], [n, e]);
        (0, s.x)(r);
        let o = (0, a.yK)([l.A], () => r.map((e) => l.A.isFetching(e)));
        i.useEffect(() => {
            for (let n of r) {
                let i = l.A.didFetchingFail(n),
                    a = l.A.hasNoData(n),
                    s = !!l.A.getGame(n),
                    r = null != l.A.getCoverImageUrl(n);
                (i || a || (s && !r)) && t(n, e);
            }
        }, [r, t, e, o]);
    })(e);
    let o = i.useMemo(() => r[e] ?? [], [r, e]),
        c = i.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        d = (0, a.yK)([l.A], () => o.map((e) => l.A.isFetching(e)));
    i.useEffect(() => {
        let t = o.filter((e) => {
            let t = l.A.didFetchingFail(e),
                n = l.A.hasNoData(e),
                i = !!l.A.getGame(e),
                a = null != l.A.getCoverImageUrl(e);
            return t || n || (i && !a);
        });
        t.length > 0 && n(t, e);
    }, [o, e, n, d]);
    let u = i.useMemo(() => o.map((e) => ({ applicationId: e })), [o]);
    return { applicationIds: o, games: u, onAddGame: c };
}
function x(e, t) {
    let [n, l, s, c] = (0, a.yK)([o.A], () => [
            o.A.suggestedFetchAttempted,
            o.A.suggestedFetchError,
            o.A.suggestedGameIds,
            o.A.suggestedFetchIsLoading,
        ]),
        { onLoad: d } = _();
    i.useEffect(() => {
        !n && e && r.A.fetchSuggestedGames();
    }, [n, e]);
    let u = n && !c;
    i.useEffect(() => {
        if (!u) return;
        let e = t.map((e) => e.games).flat();
        l || d(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
    }, [u]);
}
