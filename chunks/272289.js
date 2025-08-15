n.d(t, { Z: () => m }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(392711),
    o = n(296009),
    a = n(399606),
    c = n(804919),
    s = n(592183),
    d = n(224724),
    u = n(86419),
    f = n(747101),
    p = n(977416);
function m(e) {
    var { widgetGames: t, widgetType: n } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["widgetGames", "widgetType"]);
    let {
            games: g,
            isGameFetching: b,
            isSuggestedGamesLoading: j,
        } = (function (e, t) {
            let { games: n } = (function () {
                    let [e] = i.useState(() => (0, l.sampleSize)(c.qs, 4)),
                        { gameDataMap: t, isGameFetching: n } = (0, f.F)(e);
                    return {
                        games: i.useMemo(
                            () =>
                                e.map((e) => {
                                    let n = t[e];
                                    return {
                                        applicationId: e,
                                        gameName: null == n ? void 0 : n.name,
                                        imageSrc: null == n ? void 0 : n.coverImageUrl,
                                    };
                                }),
                            [e, t],
                        ),
                        isGameFetching: n,
                    };
                })(),
                r = new Set(t.map((e) => e.applicationId)),
                s = n.filter((e) => !r.has(e.applicationId)),
                [u, p, m] = (0, a.Wu)([d.Z], () => [
                    d.Z.suggestedFetchIsLoading,
                    d.Z.suggestedFetchError,
                    d.Z.suggestedGameIds,
                ]),
                g = i.useMemo(() => {
                    var t, n;
                    if (
                        p ||
                        (e === o.l.WANT_TO_PLAY_GAMES &&
                            (null == m || null == (t = m.suggestedWishlistGamesIds) ? void 0 : t.length) === 0) ||
                        (null == m || null == (n = m.suggestedGamesIds) ? void 0 : n.length) === 0
                    )
                        return s.map((e) => e.applicationId);
                    let r = [];
                    return (
                        e === o.l.WANT_TO_PLAY_GAMES
                            ? r.push(...m.suggestedWishlistGamesIds.slice(0, 4))
                            : r.push(...m.suggestedGamesIds.slice(0, 4)),
                        r.length < 4 && r.push(...s.slice(0, 4 - r.length).map((e) => e.applicationId)),
                        r
                    );
                }, [s, m, p, e]),
                { gameDataMap: b, isGameFetching: j } = (0, f.F)(g);
            return {
                games: i.useMemo(
                    () =>
                        g.map((e) => {
                            let t = b[e];
                            return {
                                applicationId: e,
                                gameName: null == t ? void 0 : t.name,
                                imageSrc: null == t ? void 0 : t.coverImageUrl,
                                comment: null == t ? void 0 : t.comment,
                            };
                        }),
                    [g, b],
                ),
                isGameFetching: j,
                isSuggestedGamesLoading: u,
            };
        })(n, t),
        y = i.useCallback(
            (e, t, r) => {
                s.Z.removeGameFromSuggestedGames(e),
                    (0, u.ES)(n, {
                        applicationId: e,
                        gameName: t,
                        imageSrc: r,
                    });
            },
            [n],
        );
    return (0, r.jsx)(
        p.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                games: g,
                isGameFetching: b,
                isSuggestedGamesLoading: j,
                onClick: y,
            },
            m,
        ),
    );
}
