n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(224706),
    m = n(812206),
    f = n(669764),
    p = n(810568),
    g = n(839392),
    x = n(774073),
    h = n(426482),
    v = n(644941),
    j = n(388032),
    O = n(226788),
    y = n(414642);
function b(e) {
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
}
let I = (e) => {
    let { game: t, onClose: n, trackClick: i } = e,
        l = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
    return (0, r.jsx)(u.ua7, {
        text: t.name,
        children: (e) => {
            var a, s;
            return (0, r.jsx)(
                u.P3F,
                ((a = b({}, e)),
                (s = s =
                    {
                        className: y.similarGameImageClickable,
                        onClick: async () => {
                            i(p.as.ClickSimilarGame, t.applicationId),
                                (0, u.ZDy)(() =>
                                    Promise.resolve((e) =>
                                        (0, r.jsx)(
                                            v.default,
                                            b(
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
                        children: (0, r.jsx)(h.C, {
                            game: t,
                            application: l,
                            className: y.similarGameImage,
                            size: h.Z.SMALL,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                a),
            );
        },
    });
};
function E(e) {
    let { applicationId: t, onClose: n, trackAction: l, similarGames: s, similarGamesError: m } = e,
        p = (0, c.e7)([g.Z, f.Z], () => {
            let e = void 0 === g.Z.getSimilarGames(t) && null == g.Z.getSimilarGamesError(t),
                n = s.some((e) => f.Z.isFetching(e));
            return e || n;
        }),
        h = (0, c.Wu)([f.Z], () =>
            s
                .map((e) => f.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, x.z6)(e.applicationId))
                .slice(0, 5),
        );
    return (i.useEffect(() => {
        s.length > 0 && d.Z.getDetectableGamesSupplemental([t, ...s]);
    }, [t, s]),
    p && null == m)
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", { className: a()(y.loadingHeading, O.sectionHeader) }),
                  (0, r.jsx)("div", {
                      className: a()(O.row, O.gapLg),
                      children: o()
                          .range(0, 5)
                          .map((e) => (0, r.jsx)("div", { className: y.loadingArtwork }, e)),
                  }),
              ],
          })
        : (p || 0 !== h.length) && null == m
          ? (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(u.X6q, {
                        className: O.sectionHeader,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: j.intl.string(j.t["6rLyQE"]),
                    }),
                    (0, r.jsx)("div", {
                        className: y.similarGames,
                        style: {},
                        children: h.map((e) =>
                            (0, r.jsx)(
                                I,
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
