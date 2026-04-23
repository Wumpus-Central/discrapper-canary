n.d(t, { A: () => N });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(735438),
    s = n.n(r),
    o = n(311907),
    c = n(990078),
    d = n(939249),
    u = n(192308),
    m = n(534514),
    h = n(587895),
    f = n(311043),
    _ = n(454908),
    g = n(409626),
    p = n(422069),
    x = n(611656),
    E = n(459746),
    A = n(225732),
    v = n(985018),
    I = n(141535),
    b = n(192389);
let j = (e) => {
    let { game: t, onClose: n, trackClick: a } = e,
        i = (0, o.bG)([h.A], () => h.A.getApplication(t.applicationId));
    return (0, l.jsx)(c.m, {
        asContainer: !0,
        text: t.name,
        children: (0, l.jsx)(d.D, {
            className: b.fS,
            onClick: async () => {
                a(g.Ws.ClickSimilarGame, t.applicationId),
                    (0, u.openModalLazy)(() =>
                        Promise.resolve((e) =>
                            (0, l.jsx)(A.default, { applicationId: t.applicationId, source: g.Ob.SimilarGames, ...e }),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, l.jsx)(E.A, { game: t, application: i, className: b.n1, size: E.w.SMALL }),
        }),
    });
};
function N(e) {
    let { applicationId: t, onClose: n, trackAction: a, similarGames: r, similarGamesError: c } = e,
        d = (0, o.bG)([p.A, f.A], () => {
            let e = void 0 === p.A.getSimilarGames(t) && null == p.A.getSimilarGamesError(t),
                n = r.some((e) => f.A.isFetching(e));
            return e || n;
        }),
        u = (0, o.yK)([f.A], () =>
            r
                .map((e) => f.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, x.oS)(e.applicationId))
                .slice(0, 5),
        );
    return ((0, _.I)(t), (0, _.x)(r), d && null == c)
        ? (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)("div", { className: i()(b.vM, I.bV) }),
                  (0, l.jsx)("div", {
                      className: i()(I.nM, I.iH),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, l.jsx)("div", { className: b.nn }, e)),
                  }),
              ],
          })
        : (d || 0 !== u.length) && null == c
          ? (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(m.D, {
                        className: I.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t["6rLyQB"]),
                    }),
                    (0, l.jsx)("div", {
                        className: b.D$,
                        children: u.map((e) => (0, l.jsx)(j, { game: e, onClose: n, trackClick: a }, e.applicationId)),
                    }),
                ],
            })
          : null;
}
