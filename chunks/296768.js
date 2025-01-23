n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
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
    f = n(839392),
    h = n(774073),
    x = n(426482),
    _ = n(644941),
    E = n(388032),
    v = n(561526),
    I = n(230707);
let C = (e) => {
    let { game: t, onClose: n, trackClick: i } = e,
        a = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
    return (0, r.jsx)(d.Tooltip, {
        text: t.name,
        children: (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                className: I.similarGameImageClickable,
                onClick: async () => {
                    i(g.as.ClickSimilarGame, t.applicationId),
                        (0, d.openModalLazy)(() =>
                            Promise.resolve((e) =>
                                (0, r.jsx)(_.default, {
                                    applicationId: t.applicationId,
                                    source: g.m1.SimilarGames,
                                    ...e
                                })
                            )
                        ),
                        await new Promise((e) => setTimeout(e, 10)),
                        n();
                },
                children: (0, r.jsx)(x.C, {
                    game: t,
                    application: a,
                    className: I.similarGameImage,
                    size: x.Z.SMALL
                })
            })
    });
};
function A(e) {
    let { applicationId: t, onClose: n, trackAction: a, similarGames: o, similarGamesError: m } = e,
        g = (0, c.e7)([f.Z, p.Z], () => {
            let e = void 0 === f.Z.getSimilarGames(t) && null == f.Z.getSimilarGamesError(t),
                n = o.some((e) => p.Z.isFetching(e));
            return e || n;
        }),
        x = (0, c.Wu)([p.Z], () =>
            o
                .map((e) => p.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, h.z6)(e.applicationId))
                .slice(0, 5)
        );
    return (i.useEffect(() => {
        o.length > 0 && u.Z.getDetectableGamesSupplemental([t, ...o]);
    }, [t, o]),
    g && null == m)
        ? (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)('div', { className: l()(I.loadingHeading, v.sectionHeader) }),
                  (0, r.jsx)('div', {
                      className: l()(v.row, v.gapLg),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, r.jsx)('div', { className: I.loadingArtwork }, e))
                  })
              ]
          })
        : (g || 0 !== x.length) && null == m
          ? (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(d.Heading, {
                        className: v.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: E.intl.string(E.t['6rLyQE'])
                    }),
                    (0, r.jsx)('div', {
                        className: I.similarGames,
                        style: {},
                        children: x.map((e) =>
                            (0, r.jsx)(
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
