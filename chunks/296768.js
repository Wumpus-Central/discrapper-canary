n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(224706),
    m = n(812206),
    p = n(669764),
    g = n(810568),
    h = n(839392),
    _ = n(774073),
    f = n(426482),
    x = n(644941),
    E = n(388032),
    v = n(561526),
    I = n(230707);
let C = (e) => {
    let { game: t, onClose: n, trackClick: r } = e,
        a = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
    return (0, i.jsx)(d.ua7, {
        text: t.name,
        children: (e) =>
            (0, i.jsx)(d.P3F, {
                ...e,
                className: I.similarGameImageClickable,
                onClick: async () => {
                    r(g.as.ClickSimilarGame, t.applicationId),
                        (0, d.ZDy)(() =>
                            Promise.resolve((e) =>
                                (0, i.jsx)(x.default, {
                                    applicationId: t.applicationId,
                                    source: g.m1.SimilarGames,
                                    ...e
                                })
                            )
                        ),
                        await new Promise((e) => setTimeout(e, 10)),
                        n();
                },
                children: (0, i.jsx)(f.C, {
                    game: t,
                    application: a,
                    className: I.similarGameImage,
                    size: f.Z.SMALL
                })
            })
    });
};
function A(e) {
    let { applicationId: t, onClose: n, trackAction: a, similarGames: o, similarGamesError: m } = e,
        g = (0, c.e7)([h.Z, p.Z], () => {
            let e = void 0 === h.Z.getSimilarGames(t) && null == h.Z.getSimilarGamesError(t),
                n = o.some((e) => p.Z.isFetching(e));
            return e || n;
        }),
        f = (0, c.Wu)([p.Z], () =>
            o
                .map((e) => p.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, _.z6)(e.applicationId))
                .slice(0, 5)
        );
    return (r.useEffect(() => {
        o.length > 0 && u.Z.getDetectableGamesSupplemental([t, ...o]);
    }, [t, o]),
    g && null == m)
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', { className: l()(I.loadingHeading, v.sectionHeader) }),
                  (0, i.jsx)('div', {
                      className: l()(v.row, v.gapLg),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, i.jsx)('div', { className: I.loadingArtwork }, e))
                  })
              ]
          })
        : (g || 0 !== f.length) && null == m
          ? (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(d.X6q, {
                        className: v.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: E.intl.string(E.t['6rLyQE'])
                    }),
                    (0, i.jsx)('div', {
                        className: I.similarGames,
                        style: {},
                        children: f.map((e) =>
                            (0, i.jsx)(
                                C,
                                {
                                    game: e,
                                    onClose: n,
                                    trackClick: a
                                },
                                e.applicationId
                            )
                        )
                    })
                ]
            })
          : null;
}
