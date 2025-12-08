n.d(t, { Z: () => O }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    m = n(224706),
    g = n(812206),
    f = n(669764),
    p = n(810568),
    x = n(839392),
    v = n(774073),
    h = n(426482),
    j = n(644941),
    b = n(388032),
    _ = n(226788),
    y = n(414642);
let I = (e) => {
    let { game: t, onClose: n, trackClick: i } = e,
        r = (0, c.e7)([g.Z], () => g.Z.getApplication(t.applicationId));
    return (0, a.jsx)(d.u, {
        asContainer: !0,
        text: t.name,
        children: (0, a.jsx)(u.P3F, {
            className: y.similarGameImageClickable,
            onClick: async () => {
                i(p.as.ClickSimilarGame, t.applicationId),
                    (0, u.ZDy)(() =>
                        Promise.resolve((e) =>
                            (0, a.jsx)(
                                j.default,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            a = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            a.forEach(function (t) {
                                                var a;
                                                (a = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = a);
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
            children: (0, a.jsx)(h.C, {
                game: t,
                application: r,
                className: y.similarGameImage,
                size: h.Z.SMALL,
            }),
        }),
    });
};
function O(e) {
    let { applicationId: t, onClose: n, trackAction: r, similarGames: o, similarGamesError: d } = e,
        g = (0, c.e7)([x.Z, f.Z], () => {
            let e = void 0 === x.Z.getSimilarGames(t) && null == x.Z.getSimilarGamesError(t),
                n = o.some((e) => f.Z.isFetching(e));
            return e || n;
        }),
        p = (0, c.Wu)([f.Z], () =>
            o
                .map((e) => f.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, v.z6)(e.applicationId))
                .slice(0, 5),
        );
    return (i.useEffect(() => {
        o.length > 0 && m.Z.getDetectableGamesSupplemental([t, ...o]);
    }, [t, o]),
    g && null == d)
        ? (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)("div", { className: l()(y.loadingHeading, _.sectionHeader) }),
                  (0, a.jsx)("div", {
                      className: l()(_.row, _.gapLg),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, a.jsx)("div", { className: y.loadingArtwork }, e)),
                  }),
              ],
          })
        : (g || 0 !== p.length) && null == d
          ? (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(u.Heading, {
                        className: _.sectionHeader,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: b.intl.string(b.t["6rLyQB"]),
                    }),
                    (0, a.jsx)("div", {
                        className: y.similarGames,
                        style: {},
                        children: p.map((e) =>
                            (0, a.jsx)(
                                I,
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
