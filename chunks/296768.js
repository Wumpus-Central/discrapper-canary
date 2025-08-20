n.d(t, { Z: () => P }), n(388685);
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
    p = n(669764),
    f = n(810568),
    g = n(839392),
    x = n(774073),
    j = n(426482),
    h = n(644941),
    v = n(388032),
    O = n(226788),
    b = n(414642);
function y(e) {
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
                ((a = y({}, e)),
                (s = s =
                    {
                        className: b.similarGameImageClickable,
                        onClick: async () => {
                            i(f.as.ClickSimilarGame, t.applicationId),
                                (0, u.ZDy)(() =>
                                    Promise.resolve((e) =>
                                        (0, r.jsx)(
                                            h.default,
                                            y(
                                                {
                                                    applicationId: t.applicationId,
                                                    source: f.m1.SimilarGames,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                                ),
                                await new Promise((e) => setTimeout(e, 10)),
                                n();
                        },
                        children: (0, r.jsx)(j.C, {
                            game: t,
                            application: l,
                            className: b.similarGameImage,
                            size: j.Z.SMALL,
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
function P(e) {
    let { applicationId: t, onClose: n, trackAction: l, similarGames: s, similarGamesError: m } = e,
        f = (0, c.e7)([g.Z, p.Z], () => {
            let e = void 0 === g.Z.getSimilarGames(t) && null == g.Z.getSimilarGamesError(t),
                n = s.some((e) => p.Z.isFetching(e));
            return e || n;
        }),
        j = (0, c.Wu)([p.Z], () =>
            s
                .map((e) => p.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, x.z6)(e.applicationId))
                .slice(0, 5),
        );
    return (i.useEffect(() => {
        s.length > 0 && d.Z.getDetectableGamesSupplemental([t, ...s]);
    }, [t, s]),
    f && null == m)
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", { className: a()(b.loadingHeading, O.sectionHeader) }),
                  (0, r.jsx)("div", {
                      className: a()(O.row, O.gapLg),
                      children: o()
                          .range(0, 5)
                          .map((e) => (0, r.jsx)("div", { className: b.loadingArtwork }, e)),
                  }),
              ],
          })
        : (f || 0 !== j.length) && null == m
          ? (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(u.X6q, {
                        className: O.sectionHeader,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: v.intl.string(v.t["6rLyQE"]),
                    }),
                    (0, r.jsx)("div", {
                        className: b.similarGames,
                        style: {},
                        children: j.map((e) =>
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
