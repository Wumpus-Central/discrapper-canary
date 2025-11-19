n.d(t, { Z: () => E }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    m = n(224706),
    f = n(812206),
    g = n(669764),
    p = n(810568),
    x = n(839392),
    h = n(774073),
    v = n(426482),
    j = n(644941),
    O = n(388032),
    y = n(226788),
    I = n(414642);
let b = (e) => {
    let { game: t, onClose: n, trackClick: l } = e,
        r = (0, c.e7)([f.Z], () => f.Z.getApplication(t.applicationId));
    return (0, i.jsx)(d.u, {
        asContainer: !0,
        text: t.name,
        children: (0, i.jsx)(u.P3F, {
            className: I.similarGameImageClickable,
            onClick: async () => {
                l(p.as.ClickSimilarGame, t.applicationId),
                    (0, u.ZDy)(() =>
                        Promise.resolve((e) =>
                            (0, i.jsx)(
                                j.default,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = i);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        applicationId: t.applicationId,
                                        source: p.m1.SimilarGames,
                                    },
                                    e,
                                ),
                            ),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, i.jsx)(v.C, {
                game: t,
                application: r,
                className: I.similarGameImage,
                size: v.Z.SMALL,
            }),
        }),
    });
};
function E(e) {
    let { applicationId: t, onClose: n, trackAction: r, similarGames: s, similarGamesError: d } = e,
        f = (0, c.e7)([x.Z, g.Z], () => {
            let e = void 0 === x.Z.getSimilarGames(t) && null == x.Z.getSimilarGamesError(t),
                n = s.some((e) => g.Z.isFetching(e));
            return e || n;
        }),
        p = (0, c.Wu)([g.Z], () =>
            s
                .map((e) => g.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, h.z6)(e.applicationId))
                .slice(0, 5),
        );
    return (l.useEffect(() => {
        s.length > 0 && m.Z.getDetectableGamesSupplemental([t, ...s]);
    }, [t, s]),
    f && null == d)
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", { className: a()(I.loadingHeading, y.sectionHeader) }),
                  (0, i.jsx)("div", {
                      className: a()(y.row, y.gapLg),
                      children: o()
                          .range(0, 5)
                          .map((e) => (0, i.jsx)("div", { className: I.loadingArtwork }, e)),
                  }),
              ],
          })
        : (f || 0 !== p.length) && null == d
          ? (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(u.Heading, {
                        className: y.sectionHeader,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: O.intl.string(O.t["6rLyQB"]),
                    }),
                    (0, i.jsx)("div", {
                        className: I.similarGames,
                        style: {},
                        children: p.map((e) =>
                            (0, i.jsx)(
                                b,
                                {
                                    game: e,
                                    onClose: n,
                                    trackClick: r,
                                },
                                e.applicationId,
                            ),
                        ),
                    }),
                ],
            })
          : null;
}
