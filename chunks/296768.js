r.d(t, { Z: () => I }), r(388685);
var n = r(200651),
    a = r(192379),
    i = r(120356),
    l = r.n(i),
    s = r(392711),
    o = r.n(s),
    c = r(442837),
    u = r(481060),
    d = r(224706),
    m = r(812206),
    g = r(669764),
    f = r(810568),
    p = r(839392),
    O = r(774073),
    E = r(426482),
    N = r(644941),
    h = r(388032),
    x = r(263930),
    j = r(276220);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let b = (e) => {
    let { game: t, onClose: r, trackClick: a } = e,
        i = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
    return (0, n.jsx)(u.ua7, {
        text: t.name,
        children: (e) => {
            var l, s;
            return (0, n.jsx)(
                u.P3F,
                ((l = v({}, e)),
                (s = s =
                    {
                        className: j.similarGameImageClickable,
                        onClick: async () => {
                            a(f.as.ClickSimilarGame, t.applicationId),
                                (0, u.ZDy)(() =>
                                    Promise.resolve((e) =>
                                        (0, n.jsx)(
                                            N.default,
                                            v(
                                                {
                                                    applicationId: t.applicationId,
                                                    source: f.m1.SimilarGames
                                                },
                                                e
                                            )
                                        )
                                    )
                                ),
                                await new Promise((e) => setTimeout(e, 10)),
                                r();
                        },
                        children: (0, n.jsx)(E.C, {
                            game: t,
                            application: i,
                            className: j.similarGameImage,
                            size: E.Z.SMALL
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                l)
            );
        }
    });
};
function I(e) {
    let { applicationId: t, onClose: r, trackAction: i, similarGames: s, similarGamesError: m } = e,
        f = (0, c.e7)([p.Z, g.Z], () => {
            let e = void 0 === p.Z.getSimilarGames(t) && null == p.Z.getSimilarGamesError(t),
                r = s.some((e) => g.Z.isFetching(e));
            return e || r;
        }),
        E = (0, c.Wu)([g.Z], () =>
            s
                .map((e) => g.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, O.z6)(e.applicationId))
                .slice(0, 5)
        );
    return (a.useEffect(() => {
        s.length > 0 && d.Z.getDetectableGamesSupplemental([t, ...s]);
    }, [t, s]),
    f && null == m)
        ? (0, n.jsxs)('div', {
              children: [
                  (0, n.jsx)('div', { className: l()(j.loadingHeading, x.sectionHeader) }),
                  (0, n.jsx)('div', {
                      className: l()(x.row, x.gapLg),
                      children: o()
                          .range(0, 5)
                          .map((e) => (0, n.jsx)('div', { className: j.loadingArtwork }, e))
                  })
              ]
          })
        : (f || 0 !== E.length) && null == m
          ? (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(u.X6q, {
                        className: x.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: h.NW.string(h.t['6rLyQE'])
                    }),
                    (0, n.jsx)('div', {
                        className: j.similarGames,
                        style: {},
                        children: E.map((e) =>
                            (0, n.jsx)(
                                b,
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
