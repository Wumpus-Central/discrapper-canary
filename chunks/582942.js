n.d(t, { A: () => N });
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(735438),
    s = n.n(r),
    o = n(311907),
    d = n(990078),
    c = n(939249),
    u = n(192308),
    m = n(534514),
    _ = n(587895),
    h = n(311043),
    f = n(454908),
    g = n(409626),
    p = n(422069),
    x = n(611656),
    b = n(459746),
    A = n(225732),
    v = n(985018),
    E = n(141535),
    I = n(192389);
let C = (e) => {
    let { game: t, onClose: n, trackClick: l } = e,
        i = (0, o.bG)([_.A], () => _.A.getApplication(t.applicationId));
    return (0, a.jsx)(d.m, {
        asContainer: !0,
        text: t.name,
        children: (0, a.jsx)(c.D, {
            className: I.fS,
            onClick: async () => {
                l(g.Ws.ClickSimilarGame, t.applicationId),
                    (0, u.openModalLazy)(() =>
                        Promise.resolve((e) =>
                            (0, a.jsx)(A.default, { applicationId: t.applicationId, source: g.Ob.SimilarGames, ...e }),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, a.jsx)(b.A, { game: t, application: i, className: I.n1, size: b.w.SMALL }),
        }),
    });
};
function N(e) {
    let { applicationId: t, onClose: n, trackAction: l, similarGames: r, similarGamesError: d } = e,
        c = (0, o.bG)([p.A, h.A], () => {
            let e = void 0 === p.A.getSimilarGames(t) && null == p.A.getSimilarGamesError(t),
                n = r.some((e) => h.A.isFetching(e));
            return e || n;
        }),
        u = (0, o.yK)([h.A], () =>
            r
                .map((e) => h.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, x.oS)(e.applicationId))
                .slice(0, 5),
        );
    return ((0, f.I)(t), (0, f.x)(r), c && null == d)
        ? (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)("div", { className: i()(I.vM, E.bV) }),
                  (0, a.jsx)("div", {
                      className: i()(E.nM, E.iH),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, a.jsx)("div", { className: I.nn }, e)),
                  }),
              ],
          })
        : (c || 0 !== u.length) && null == d
          ? (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(m.D, {
                        className: E.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t["6rLyQB"]),
                    }),
                    (0, a.jsx)("div", {
                        className: I.D$,
                        children: u.map((e) => (0, a.jsx)(C, { game: e, onClose: n, trackClick: l }, e.applicationId)),
                    }),
                ],
            })
          : null;
}
