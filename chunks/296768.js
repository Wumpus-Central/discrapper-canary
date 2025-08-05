(r.d(t, { Z: () => w }), r(388685));
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(392711),
    s = r.n(o),
    c = r(442837),
    d = r(481060),
    u = r(224706),
    m = r(812206),
    g = r(669764),
    p = r(810568),
    f = r(839392),
    x = r(774073),
    j = r(426482),
    v = r(644941),
    h = r(388032),
    b = r(263930),
    O = r(276220);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
let _ = (e) => {
    let { game: t, onClose: r, trackClick: a } = e,
        i = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
    return (0, n.jsx)(d.ua7, {
        text: t.name,
        children: (e) => {
            var l, o;
            return (0, n.jsx)(
                d.P3F,
                ((l = y({}, e)),
                (o = o =
                    {
                        className: O.similarGameImageClickable,
                        onClick: async () => {
                            (a(p.as.ClickSimilarGame, t.applicationId),
                                (0, d.ZDy)(() =>
                                    Promise.resolve((e) =>
                                        (0, n.jsx)(
                                            v.default,
                                            y(
                                                {
                                                    applicationId: t.applicationId,
                                                    source: p.m1.SimilarGames
                                                },
                                                e
                                            )
                                        )
                                    )
                                ),
                                await new Promise((e) => setTimeout(e, 10)),
                                r());
                        },
                        children: (0, n.jsx)(j.C, {
                            game: t,
                            application: i,
                            className: O.similarGameImage,
                            size: j.Z.SMALL
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                l)
            );
        }
    });
};
function w(e) {
    let { applicationId: t, onClose: r, trackAction: i, similarGames: o, similarGamesError: m } = e,
        p = (0, c.e7)([f.Z, g.Z], () => {
            let e = void 0 === f.Z.getSimilarGames(t) && null == f.Z.getSimilarGamesError(t),
                r = o.some((e) => g.Z.isFetching(e));
            return e || r;
        }),
        j = (0, c.Wu)([g.Z], () =>
            o
                .map((e) => g.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, x.z6)(e.applicationId))
                .slice(0, 5)
        );
    return (a.useEffect(() => {
        o.length > 0 && u.Z.getDetectableGamesSupplemental([t, ...o]);
    }, [t, o]),
    p && null == m)
        ? (0, n.jsxs)('div', {
              children: [
                  (0, n.jsx)('div', { className: l()(O.loadingHeading, b.sectionHeader) }),
                  (0, n.jsx)('div', {
                      className: l()(b.row, b.gapLg),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, n.jsx)('div', { className: O.loadingArtwork }, e))
                  })
              ]
          })
        : (p || 0 !== j.length) && null == m
          ? (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(d.X6q, {
                        className: b.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: h.intl.string(h.t['6rLyQE'])
                    }),
                    (0, n.jsx)('div', {
                        className: O.similarGames,
                        style: {},
                        children: j.map((e) =>
                            (0, n.jsx)(
                                _,
                                {
                                    game: e,
                                    onClose: r,
                                    trackClick: i
                                },
                                e.applicationId
                            )
                        )
                    })
                ]
            })
          : null;
}
