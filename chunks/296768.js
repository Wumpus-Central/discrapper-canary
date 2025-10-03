n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    m = n(224706),
    f = n(812206),
    p = n(669764),
    x = n(810568),
    g = n(839392),
    h = n(774073),
    v = n(426482),
    j = n(644941),
    O = n(388032),
    y = n(226788),
    I = n(414642);
let b = (e) => {
    let { game: t, onClose: n, trackClick: i } = e,
        l = (0, c.e7)([f.Z], () => f.Z.getApplication(t.applicationId));
    return (0, r.jsx)(d.u, {
        asContainer: !0,
        text: t.name,
        children: (0, r.jsx)(u.P3F, {
            className: I.similarGameImageClickable,
            onClick: async () => {
                i(x.as.ClickSimilarGame, t.applicationId),
                    (0, u.ZDy)(() =>
                        Promise.resolve((e) =>
                            (0, r.jsx)(
                                j.default,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        applicationId: t.applicationId,
                                        source: x.m1.SimilarGames,
                                    },
                                    e,
                                ),
                            ),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, r.jsx)(v.C, {
                game: t,
                application: l,
                className: I.similarGameImage,
                size: v.Z.SMALL,
            }),
        }),
    });
};
function E(e) {
    let { applicationId: t, onClose: n, trackAction: l, similarGames: s, similarGamesError: d } = e,
        f = (0, c.e7)([g.Z, p.Z], () => {
            let e = void 0 === g.Z.getSimilarGames(t) && null == g.Z.getSimilarGamesError(t),
                n = s.some((e) => p.Z.isFetching(e));
            return e || n;
        }),
        x = (0, c.Wu)([p.Z], () =>
            s
                .map((e) => p.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, h.z6)(e.applicationId))
                .slice(0, 5),
        );
    return (i.useEffect(() => {
        s.length > 0 && m.Z.getDetectableGamesSupplemental([t, ...s]);
    }, [t, s]),
    f && null == d)
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", { className: a()(I.loadingHeading, y.sectionHeader) }),
                  (0, r.jsx)("div", {
                      className: a()(y.row, y.gapLg),
                      children: o()
                          .range(0, 5)
                          .map((e) => (0, r.jsx)("div", { className: I.loadingArtwork }, e)),
                  }),
              ],
          })
        : (f || 0 !== x.length) && null == d
          ? (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(u.X6q, {
                        className: y.sectionHeader,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: O.intl.string(O.t["6rLyQE"]),
                    }),
                    (0, r.jsx)("div", {
                        className: I.similarGames,
                        style: {},
                        children: x.map((e) =>
                            (0, r.jsx)(
                                b,
                                {
                                    game: e,
                                    onClose: n,
                                    trackClick: l,
                                },
                                e.applicationId,
                            ),
                        ),
                    }),
                ],
            })
          : null;
}
