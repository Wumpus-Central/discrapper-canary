(n.d(t, { Z: () => d }), n(539854), n(388685));
var r = n(73800),
    o = n(924322),
    i = n(442837),
    l = n(224706),
    a = n(669764),
    c = n(823379);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
    let t = r.useMemo(
        () =>
            (function (e) {
                let t = [];
                return (
                    e.forEach((e) => {
                        let n = e.gameWidgetType;
                        switch (n) {
                            case o.g.FAVORITE:
                                t.push(e.game.applicationId);
                                break;
                            case o.g.CURRENT:
                            case o.g.WANT_TO_PLAY:
                            case o.g.PLAYED:
                                e.games.forEach((e) => {
                                    t.push(e.applicationId);
                                });
                                break;
                            default:
                                (0, c.vE)(n);
                        }
                    }),
                    [...new Set(t)]
                );
            })(e),
        [e]
    );
    return (
        r.useEffect(() => {
            t.length > 0 && l.Z.getDetectableGamesSupplemental(t);
        }, [t]),
        {
            isFetching: (0, i.e7)([a.Z], () => t.some((e) => a.Z.isFetching(e))),
            widgets: r.useMemo(
                () =>
                    e.map((e) => {
                        let t = e.gameWidgetType;
                        switch (t) {
                            case o.g.FAVORITE: {
                                let t = a.Z.getGame(e.game.applicationId),
                                    n = u(s({}, e.game), {
                                        gameName: null == t ? void 0 : t.name,
                                        imageSrc: null == t ? void 0 : t.coverImageUrl
                                    });
                                return u(s({}, e), { game: n });
                            }
                            case o.g.CURRENT:
                            case o.g.WANT_TO_PLAY:
                            case o.g.PLAYED: {
                                let t = e.games.map((e) => {
                                    let t = a.Z.getGame(e.applicationId);
                                    return u(s({}, e), {
                                        gameName: null == t ? void 0 : t.name,
                                        imageSrc: null == t ? void 0 : t.coverImageUrl
                                    });
                                });
                                return u(s({}, e), { games: t });
                            }
                            default:
                                return (0, c.vE)(t);
                        }
                    }),
                [e]
            )
        }
    );
}
