r.d(t, {
    F: () => u,
    Z: () => d,
}),
    r(539854),
    r(388685);
var n = r(647438),
    i = r(442837),
    a = r(224706),
    l = r(669764),
    o = r(77498);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function u(e) {
    n.useEffect(() => {
        if (e.length > 0) {
            let t = e.filter((e) => l.Z.canFetch(e));
            t.length > 0 && a.Z.getDetectableGamesSupplemental(t);
        }
    }, [e]);
    let [t, r] = (0, i.Wu)([l.Z], () => [l.Z.numNoDataAvailable(), l.Z.numSupplementalGames()]);
    return {
        gameDataMap: n.useMemo(() => {
            let t = {};
            return (
                e.forEach((e) => {
                    t[e] = l.Z.getGame(e);
                }),
                t
            );
        }, [e, t, r]),
        isGameFetching: n.useCallback((e) => l.Z.isFetching(e), []),
    };
}
function d(e) {
    let { gameDataMap: t, isGameFetching: r } = u(
        n.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    return (
                        e.forEach((e) => {
                            e.games.forEach((e) => {
                                t.push(e.applicationId);
                            });
                        }),
                        [...new Set(t)]
                    );
                })(e),
            [e],
        ),
    );
    return {
        widgets: n.useMemo(
            () =>
                e.map((e) => {
                    let r = e.games.map((e) => {
                        let r = t[e.applicationId];
                        if (null != r)
                            return s(c({}, e), {
                                gameName: r.name,
                                imageSrc: r.coverImageUrl,
                            });
                        let n = o.Z.getDetectableGame(e.applicationId);
                        return s(c({}, e), { gameName: null == n ? void 0 : n.name });
                    });
                    return s(c({}, e), { games: r });
                }),
            [e, t],
        ),
        isGameFetching: r,
    };
}
