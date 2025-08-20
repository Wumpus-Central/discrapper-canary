r.d(t, {
    F: () => s,
    Z: () => u,
}),
    r(539854),
    r(388685);
var n = r(647438),
    l = r(442837),
    i = r(224706),
    a = r(669764);
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
function o(e, t) {
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
function s(e) {
    return (
        n.useEffect(() => {
            if (e.length > 0) {
                let t = e.filter((e) => a.Z.canFetch(e));
                t.length > 0 && i.Z.getDetectableGamesSupplemental(t);
            }
        }, [e]),
        {
            gameDataMap: (0, l.cj)([a.Z], () => {
                let t = {};
                return (
                    e.forEach((e) => {
                        t[e] = a.Z.getGame(e);
                    }),
                    t
                );
            }),
            isGameFetching: n.useCallback((e) => a.Z.isFetching(e), []),
        }
    );
}
function u(e) {
    let { gameDataMap: t, isGameFetching: r } = s(
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
                        return o(c({}, e), {
                            gameName: null == r ? void 0 : r.name,
                            imageSrc: null == r ? void 0 : r.coverImageUrl,
                        });
                    });
                    return o(c({}, e), { games: r });
                }),
            [e, t],
        ),
        isGameFetching: r,
    };
}
