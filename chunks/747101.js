n.d(t, { Z: () => s }), n(539854), n(388685);
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
    let t = r.useMemo(
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
    );
    r.useEffect(() => {
        if (t.length > 0) {
            let e = t.filter((e) => o.Z.canFetch(e));
            e.length > 0 && i.Z.getDetectableGamesSupplemental(e);
        }
    }, [t]);
    let n = (0, l.cj)([o.Z], () => {
        let e = {};
        return (
            t.forEach((t) => {
                e[t] = o.Z.getGame(t);
            }),
            e
        );
    });
    return {
        widgets: r.useMemo(
            () =>
                e.map((e) => {
                    let t = e.games.map((e) => {
                        let t = n[e.applicationId];
                        return c(a({}, e), {
                            gameName: null == t ? void 0 : t.name,
                            imageSrc: null == t ? void 0 : t.coverImageUrl,
                        });
                    });
                    return c(a({}, e), { games: t });
                }),
            [e, n],
        ),
        isGameFetching: r.useCallback((e) => o.Z.isFetching(e), []),
    };
}
