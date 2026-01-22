n.d(t, { A: () => I }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    m = n(544420),
    f = n(587895),
    x = n(524799),
    b = n(409626),
    p = n(422069),
    g = n(611656),
    j = n(459746),
    h = n(225732),
    v = n(985018),
    y = n(851822),
    O = n(799864);
let A = (e) => {
    let { game: t, onClose: n, trackClick: r } = e,
        i = (0, c.bG)([f.A], () => f.A.getApplication(t.applicationId));
    return (0, l.jsx)(d.m, {
        asContainer: !0,
        text: t.name,
        children: (0, l.jsx)(u.DUT, {
            className: O.fS,
            onClick: async () => {
                r(b.Ws.ClickSimilarGame, t.applicationId),
                    (0, u.mMO)(() =>
                        Promise.resolve((e) =>
                            (0, l.jsx)(
                                h.default,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        applicationId: t.applicationId,
                                        source: b.Ob.SimilarGames,
                                    },
                                    e,
                                ),
                            ),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, l.jsx)(j.A, {
                game: t,
                application: i,
                className: O.n1,
                size: j.w.SMALL,
            }),
        }),
    });
};
function I(e) {
    let { applicationId: t, onClose: n, trackAction: i, similarGames: s, similarGamesError: d } = e,
        f = (0, c.bG)([p.A, x.A], () => {
            let e = void 0 === p.A.getSimilarGames(t) && null == p.A.getSimilarGamesError(t),
                n = s.some((e) => x.A.isFetching(e));
            return e || n;
        }),
        b = (0, c.yK)([x.A], () =>
            s
                .map((e) => x.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, g.oS)(e.applicationId))
                .slice(0, 5),
        );
    return (r.useEffect(() => {
        s.length > 0 && m.A.getDetectableGamesSupplemental([t, ...s]);
    }, [t, s]),
    f && null == d)
        ? (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)("div", { className: a()(O.vM, y.bV) }),
                  (0, l.jsx)("div", {
                      className: a()(y.nM, y.iH),
                      children: o()
                          .range(0, 5)
                          .map((e) => (0, l.jsx)("div", { className: O.nn }, e)),
                  }),
              ],
          })
        : (f || 0 !== b.length) && null == d
          ? (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(u.Heading, {
                        className: y.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t["6rLyQB"]),
                    }),
                    (0, l.jsx)("div", {
                        className: O.D$,
                        style: {},
                        children: b.map((e) =>
                            (0, l.jsx)(
                                A,
                                {
                                    game: e,
                                    onClose: n,
                                    trackClick: i,
                                },
                                e.applicationId,
                            ),
                        ),
                    }),
                ],
            })
          : null;
}
