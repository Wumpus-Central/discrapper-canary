l.d(t, {
    A: () => O,
}),
    l(896048);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(735438),
    o = l.n(s),
    c = l(311907),
    d = l(990078),
    u = l(397927),
    m = l(544420),
    x = l(587895),
    f = l(524799),
    g = l(409626),
    h = l(422069),
    p = l(611656),
    j = l(459746),
    v = l(225732),
    b = l(985018),
    y = l(851822),
    A = l(799864);
let N = (e) => {
    let { game: t, onClose: l, trackClick: i } = e,
        a = (0, c.bG)([x.A], () => x.A.getApplication(t.applicationId));
    return (0, n.jsx)(d.m, {
        asContainer: !0,
        text: t.name,
        children: (0, n.jsx)(u.DUT, {
            className: A.fS,
            onClick: async () => {
                i(g.Ws.ClickSimilarGame, t.applicationId),
                    (0, u.mMO)(() =>
                        Promise.resolve((e) =>
                            (0, n.jsx)(
                                v.default,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var l = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(l);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                (n = l[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = n);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        applicationId: t.applicationId,
                                        source: g.Ob.SimilarGames,
                                    },
                                    e,
                                ),
                            ),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    l();
            },
            children: (0, n.jsx)(j.A, {
                game: t,
                application: a,
                className: A.n1,
                size: j.w.SMALL,
            }),
        }),
    });
};

function O(e) {
    let { applicationId: t, onClose: l, trackAction: a, similarGames: s, similarGamesError: d } = e,
        x = (0, c.bG)([h.A, f.A], () => {
            let e = void 0 === h.A.getSimilarGames(t) && null == h.A.getSimilarGamesError(t),
                l = s.some((e) => f.A.isFetching(e));
            return e || l;
        }),
        g = (0, c.yK)([f.A], () =>
            s
                .map((e) => f.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, p.oS)(e.applicationId))
                .slice(0, 5),
        );
    return (i.useEffect(() => {
        s.length > 0 && m.A.getDetectableGamesSupplemental([t, ...s]);
    }, [t, s]),
    x && null == d)
        ? (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)("div", {
                      className: r()(A.vM, y.bV),
                  }),
                  (0, n.jsx)("div", {
                      className: r()(y.nM, y.iH),
                      children: o()
                          .range(0, 5)
                          .map((e) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: A.nn,
                                  },
                                  e,
                              ),
                          ),
                  }),
              ],
          })
        : (x || 0 !== g.length) && null == d
          ? (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(u.Heading, {
                        className: y.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: b.intl.string(b.t["6rLyQB"]),
                    }),
                    (0, n.jsx)("div", {
                        className: A.D$,
                        children: g.map((e) =>
                            (0, n.jsx)(
                                N,
                                {
                                    game: e,
                                    onClose: l,
                                    trackClick: a,
                                },
                                e.applicationId,
                            ),
                        ),
                    }),
                ],
            })
          : null;
}
