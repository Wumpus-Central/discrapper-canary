n.d(t, { A: () => I });
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(735438),
    s = n.n(r),
    o = n(311907),
    c = n(990078),
    d = n(397927),
    u = n(587895),
    m = n(136086),
    x = n(885151),
    f = n(409626),
    h = n(422069),
    g = n(611656),
    p = n(459746),
    v = n(225732),
    j = n(985018),
    _ = n(851822),
    A = n(799864);
let E = (e) => {
    let { game: t, onClose: n, trackClick: l } = e,
        i = (0, o.bG)([u.A], () => u.A.getApplication(t.applicationId));
    return (0, a.jsx)(c.m, {
        asContainer: !0,
        text: t.name,
        children: (0, a.jsx)(d.DUT, {
            className: A.fS,
            onClick: async () => {
                l(f.Ws.ClickSimilarGame, t.applicationId),
                    (0, d.mMO)(() =>
                        Promise.resolve((e) =>
                            (0, a.jsx)(v.default, { applicationId: t.applicationId, source: f.Ob.SimilarGames, ...e }),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, a.jsx)(p.A, { game: t, application: i, className: A.n1, size: p.w.SMALL }),
        }),
    });
};
function I(e) {
    let { applicationId: t, onClose: n, trackAction: l, similarGames: r, similarGamesError: c } = e,
        u = (0, o.bG)([h.A, m.A], () => {
            let e = void 0 === h.A.getSimilarGames(t) && null == h.A.getSimilarGamesError(t),
                n = r.some((e) => m.A.isFetching(e));
            return e || n;
        }),
        f = (0, o.yK)([m.A], () =>
            r
                .map((e) => m.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, g.oS)(e.applicationId))
                .slice(0, 5),
        );
    return ((0, x.k)(t), (0, x.W)(r), u && null == c)
        ? (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)("div", { className: i()(A.vM, _.bV) }),
                  (0, a.jsx)("div", {
                      className: i()(_.nM, _.iH),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, a.jsx)("div", { className: A.nn }, e)),
                  }),
              ],
          })
        : (u || 0 !== f.length) && null == c
          ? (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(d.Heading, {
                        className: _.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t["6rLyQB"]),
                    }),
                    (0, a.jsx)("div", {
                        className: A.D$,
                        children: f.map((e) =>
                            null != e.supplementalData
                                ? (0, a.jsx)(
                                      E,
                                      { game: e.supplementalData, onClose: n, trackClick: l },
                                      e.applicationId,
                                  )
                                : null,
                        ),
                    }),
                ],
            })
          : null;
}
