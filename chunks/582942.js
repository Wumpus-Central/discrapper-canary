i.d(t, { A: () => b });
var l = i(627968),
    a = i(64700),
    n = i(503698),
    s = i.n(n),
    r = i(735438),
    c = i.n(r),
    o = i(311907),
    d = i(990078),
    u = i(397927),
    m = i(544420),
    x = i(587895),
    g = i(524799),
    h = i(409626),
    f = i(422069),
    j = i(611656),
    p = i(459746),
    v = i(225732),
    A = i(985018),
    N = i(851822),
    _ = i(799864);
let I = (e) => {
    let { game: t, onClose: i, trackClick: a } = e,
        n = (0, o.bG)([x.A], () => x.A.getApplication(t.applicationId));
    return (0, l.jsx)(d.m, {
        asContainer: !0,
        text: t.name,
        children: (0, l.jsx)(u.DUT, {
            className: _.fS,
            onClick: async () => {
                a(h.Ws.ClickSimilarGame, t.applicationId),
                    (0, u.mMO)(() =>
                        Promise.resolve((e) =>
                            (0, l.jsx)(v.default, { applicationId: t.applicationId, source: h.Ob.SimilarGames, ...e }),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    i();
            },
            children: (0, l.jsx)(p.A, { game: t, application: n, className: _.n1, size: p.w.SMALL }),
        }),
    });
};
function b(e) {
    let { applicationId: t, onClose: i, trackAction: n, similarGames: r, similarGamesError: d } = e,
        x = (0, o.bG)([f.A, g.A], () => {
            let e = void 0 === f.A.getSimilarGames(t) && null == f.A.getSimilarGamesError(t),
                i = r.some((e) => g.A.isFetching(e));
            return e || i;
        }),
        h = (0, o.yK)([g.A], () =>
            r
                .map((e) => g.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, j.oS)(e.applicationId))
                .slice(0, 5),
        );
    return (a.useEffect(() => {
        r.length > 0 && m.A.getDetectableGamesSupplemental([t, ...r]);
    }, [t, r]),
    x && null == d)
        ? (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)("div", { className: s()(_.vM, N.bV) }),
                  (0, l.jsx)("div", {
                      className: s()(N.nM, N.iH),
                      children: c()
                          .range(0, 5)
                          .map((e) => (0, l.jsx)("div", { className: _.nn }, e)),
                  }),
              ],
          })
        : (x || 0 !== h.length) && null == d
          ? (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(u.Heading, {
                        className: N.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: A.intl.string(A.t["6rLyQB"]),
                    }),
                    (0, l.jsx)("div", {
                        className: _.D$,
                        children: h.map((e) => (0, l.jsx)(I, { game: e, onClose: i, trackClick: n }, e.applicationId)),
                    }),
                ],
            })
          : null;
}
