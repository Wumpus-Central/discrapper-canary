r.d(t, {
    FX: () => p,
    ZP: () => g,
    kN: () => b,
    kO: () => d,
    qU: () => f,
}),
    r(388685);
var n = r(647438),
    i = r(442837),
    l = r(224706),
    o = r(669764),
    a = r(77498),
    c = r(836197);
function s(e) {
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
function u(e, t) {
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
function d(e) {
    return (0, i.e7)([o.Z], () => o.Z.isFetching(e));
}
function f(e) {
    n.useEffect(() => {
        if (e.length > 0) {
            let t = e.filter((e) => o.Z.canFetch(e));
            t.length > 0 && l.Z.getDetectableGamesSupplemental(t);
        }
    }, [e]);
}
function g(e) {
    f(
        n.useMemo(
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
function b(e) {
    let [t, r] = (0, i.Wu)([o.Z], () => [o.Z.numNoDataAvailable(), o.Z.numSupplementalGames()]);
    return n.useMemo(() => {
        let t = {};
        return (
            e.forEach((e) => {
                t[e] = o.Z.getGame(e);
            }),
            t
        );
    }, [e, t, r]);
}
function p(e) {
    let t = b(e.games.map((e) => e.applicationId));
    return n.useMemo(
        () =>
            new c.zy(
                u(s({}, e), {
                    games: e.games.map((e) => {
                        let r = t[e.applicationId];
                        if (null != r)
                            return u(s({}, e), {
                                gameName: r.name,
                                imageSrc: r.coverImageUrl,
                            });
                        let n = a.Z.getDetectableGame(e.applicationId);
                        return u(s({}, e), { gameName: null == n ? void 0 : n.name });
                    }),
                }),
            ),
        [e, t],
    );
}
