n.d(t, {
    F: () => s,
    Z: () => d,
}),
    n(539854),
    n(388685);
var r = n(73800),
    l = n(442837),
    i = n(224706),
    o = n(669764);
function a(e) {
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
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function s(e) {
    return (
        r.useEffect(() => {
            if (e.length > 0) {
                let t = e.filter((e) => o.Z.canFetch(e));
                t.length > 0 && i.Z.getDetectableGamesSupplemental(t);
            }
        }, [e]),
        {
            gameDataMap: (0, l.cj)([o.Z], () => {
                let t = {};
                return (
                    e.forEach((e) => {
                        t[e] = o.Z.getGame(e);
                    }),
                    t
                );
            }),
            isGameFetching: r.useCallback((e) => o.Z.isFetching(e), []),
        }
    );
}
function d(e) {
    let { gameDataMap: t, isGameFetching: n } = s(
        r.useMemo(
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
        widgets: r.useMemo(
            () =>
                e.map((e) => {
                    let n = e.games.map((e) => {
                        let n = t[e.applicationId];
                        return c(a({}, e), {
                            gameName: null == n ? void 0 : n.name,
                            imageSrc: null == n ? void 0 : n.coverImageUrl,
                        });
                    });
                    return c(a({}, e), { games: n });
                }),
            [e, t],
        ),
        isGameFetching: n,
    };
}
