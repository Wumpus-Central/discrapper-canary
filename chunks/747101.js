n.d(t, {
    FX: () => m,
    ZP: () => g,
    kN: () => p,
    kO: () => d,
    qU: () => f,
}),
    n(388685);
var r = n(647438),
    i = n(442837),
    a = n(224706),
    l = n(669764),
    o = n(77498),
    s = n(836197);
function c(e) {
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
function u(e, t) {
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
function d(e) {
    return (0, i.e7)([l.Z], () => l.Z.isFetching(e));
}
function f(e) {
    r.useEffect(() => {
        if (e.length > 0) {
            let t = e.filter((e) => l.Z.canFetch(e));
            t.length > 0 && a.Z.getDetectableGamesSupplemental(t);
        }
    }, [e]);
}
function g(e) {
    f(
        r.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    return (
                        e.forEach((e) => {
                            e.games.forEach((e) => {
                                t.add(e.applicationId);
                            });
                        }),
                        [...t]
                    );
                })(e),
            [e],
        ),
    );
}
function p(e) {
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
function m(e) {
    let t = p(e.games.map((e) => e.applicationId));
    return r.useMemo(
        () =>
            new s.zy(
                u(c({}, e), {
                    games: e.games.map((e) => {
                        let n = t[e.applicationId];
                        if (null != n)
                            return u(c({}, e), {
                                gameName: n.name,
                                imageSrc: n.coverImageUrl,
                            });
                        let r = o.Z.getDetectableGame(e.applicationId);
                        return u(c({}, e), { gameName: null == r ? void 0 : r.name });
                    }),
                }),
            ),
        [e, t],
    );
}
