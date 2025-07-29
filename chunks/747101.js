(n.d(t, { Z: () => u }), n(539854), n(388685));
var r = n(73800),
    o = n(442837),
    i = n(224706),
    a = n(669764),
    l = n(823379),
    c = n(836197);
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
function d(e, t) {
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
function u(e) {
    let t = r.useMemo(
        () =>
            (function (e) {
                let t = [];
                return (
                    e.forEach((e) => {
                        let n = e.gameWidgetType;
                        switch (n) {
                            case c.g.FAVORITE:
                                t.push(e.game.applicationId);
                                break;
                            case c.g.CURRENT:
                            case c.g.WANT_TO_PLAY:
                            case c.g.PLAYED:
                                e.games.forEach((e) => {
                                    t.push(e.applicationId);
                                });
                                break;
                            default:
                                (0, l.vE)(n);
                        }
                    }),
                    [...new Set(t)]
                );
            })(e),
        [e]
    );
    return (
        r.useEffect(() => {
            t.length > 0 && i.Z.getDetectableGamesSupplemental(t);
        }, [t]),
        {
            isFetching: (0, o.e7)([a.Z], () => t.some((e) => a.Z.isFetching(e))),
            widgets: r.useMemo(
                () =>
                    e.map((e) => {
                        let t = e.gameWidgetType;
                        switch (t) {
                            case c.g.FAVORITE: {
                                let t = a.Z.getGame(e.game.applicationId),
                                    n = d(s({}, e.game), {
                                        gameName: null == t ? void 0 : t.name,
                                        imageSrc: null == t ? void 0 : t.coverImageUrl
                                    });
                                return d(s({}, e), { game: n });
                            }
                            case c.g.CURRENT:
                            case c.g.WANT_TO_PLAY:
                            case c.g.PLAYED: {
                                let t = e.games.map((e) => {
                                    let t = a.Z.getGame(e.applicationId);
                                    return d(s({}, e), {
                                        gameName: null == t ? void 0 : t.name,
                                        imageSrc: null == t ? void 0 : t.coverImageUrl
                                    });
                                });
                                return d(s({}, e), { games: t });
                            }
                            default:
                                return (0, l.vE)(t);
                        }
                    }),
                [e]
            )
        }
    );
}
