n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(392711),
    s = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(224706),
    m = n(812206),
    _ = n(669764),
    g = n(810568),
    p = n(839392),
    f = n(774073),
    h = n(426482),
    x = n(644941),
    v = n(388032),
    I = n(959559),
    C = n(226241);
let E = (e) => {
    let { game: t, onClose: n, trackClick: a } = e,
        i = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
    return (0, r.jsx)(d.ua7, {
        text: t.name,
        children: (e) =>
            (0, r.jsx)(d.P3F, {
                ...e,
                className: C.similarGameImageClickable,
                onClick: async () => {
                    a(g.as.ClickSimilarGame, t.applicationId),
                        (0, d.ZDy)(() =>
                            Promise.resolve((e) =>
                                (0, r.jsx)(x.default, {
                                    applicationId: t.applicationId,
                                    source: g.m1.SimilarGames,
                                    ...e
                                })
                            )
                        ),
                        await new Promise((e) => setTimeout(e, 10)),
                        n();
                },
                children: (0, r.jsx)(h.C, {
                    game: t,
                    application: i,
                    className: C.similarGameImage,
                    size: h.Z.SMALL
                })
            })
    });
};
function b(e) {
    let { applicationId: t, onClose: n, trackAction: i, similarGames: l, similarGamesError: m } = e,
        g = (0, c.e7)([p.Z, _.Z], () => {
            let e = void 0 === p.Z.getSimilarGames(t) && null == p.Z.getSimilarGamesError(t),
                n = l.some((e) => _.Z.isFetching(e));
            return e || n;
        }),
        h = (0, c.Wu)([_.Z], () =>
            l
                .map((e) => _.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, f.z6)(e.applicationId))
                .slice(0, 5)
        );
    return (a.useEffect(() => {
        l.length > 0 && u.Z.getDetectableGamesSupplemental([t, ...l]);
    }, [t, l]),
    g && null == m)
        ? (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)('div', { className: o()(C.loadingHeading, I.sectionHeader) }),
                  (0, r.jsx)('div', {
                      className: o()(I.row, I.gapLg),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, r.jsx)('div', { className: C.loadingArtwork }, e))
                  })
              ]
          })
        : (g || 0 !== h.length) && null == m
          ? (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(d.X6q, {
                        className: I.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: v.intl.string(v.t['6rLyQE'])
                    }),
                    (0, r.jsx)('div', {
                        className: C.similarGames,
                        style: {},
                        children: h.map((e) =>
                            (0, r.jsx)(
                                E,
                                {
                                    game: e,
                                    onClose: n,
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
