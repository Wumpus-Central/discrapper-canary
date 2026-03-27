n.d(t, { A: () => E });
var a = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    r = n(735438),
    s = n.n(r),
    c = n(311907),
    o = n(990078),
    d = n(397927),
    u = n(587895),
    m = n(136086),
    x = n(885151),
    h = n(409626),
    f = n(422069),
    g = n(611656),
    _ = n(459746),
    p = n(225732),
    v = n(985018),
    A = n(282063),
    j = n(379093);
let C = (e) => {
    let { game: t, onClose: n, trackClick: i } = e,
        l = (0, c.bG)([u.A], () => u.A.getApplication(t.applicationId));
    return (0, a.jsx)(o.m, {
        asContainer: !0,
        text: t.name,
        children: (0, a.jsx)(d.DUT, {
            className: j.fS,
            onClick: async () => {
                i(h.Ws.ClickSimilarGame, t.applicationId),
                    (0, d.mMO)(() =>
                        Promise.resolve((e) =>
                            (0, a.jsx)(p.default, { applicationId: t.applicationId, source: h.Ob.SimilarGames, ...e }),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, a.jsx)(_.A, { game: t, application: l, className: j.n1, size: _.w.SMALL }),
        }),
    });
};
function E(e) {
    let { applicationId: t, onClose: n, trackAction: i, similarGames: r, similarGamesError: o } = e,
        u = (0, c.bG)([f.A, m.A], () => {
            let e = void 0 === f.A.getSimilarGames(t) && null == f.A.getSimilarGamesError(t),
                n = r.some((e) => m.A.isFetching(e));
            return e || n;
        }),
        h = (0, c.yK)([m.A], () =>
            r
                .map((e) => m.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, g.oS)(e.applicationId))
                .slice(0, 5),
        );
    return ((0, x.k)(t), (0, x.W)(r), u && null == o)
        ? (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)("div", { className: l()(j.vM, A.bV) }),
                  (0, a.jsx)("div", {
                      className: l()(A.nM, A.iH),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, a.jsx)("div", { className: j.nn }, e)),
                  }),
              ],
          })
        : (u || 0 !== h.length) && null == o
          ? (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(d.Heading, {
                        className: A.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t["6rLyQB"]),
                    }),
                    (0, a.jsx)("div", {
                        className: j.D$,
                        children: h.map((e) =>
                            null != e.supplementalData
                                ? (0, a.jsx)(
                                      C,
                                      { game: e.supplementalData, onClose: n, trackClick: i },
                                      e.applicationId,
                                  )
                                : null,
                        ),
                    }),
                ],
            })
          : null;
}
