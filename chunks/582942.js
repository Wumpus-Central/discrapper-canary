n.d(t, { A: () => b });
var a = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    r = n(735438),
    s = n.n(r),
    o = n(311907),
    c = n(990078),
    d = n(397927),
    u = n(587895),
    m = n(311043),
    x = n(454908),
    g = n(409626),
    h = n(422069),
    f = n(611656),
    p = n(459746),
    _ = n(225732),
    v = n(985018),
    A = n(282063),
    j = n(379093);
let E = (e) => {
    let { game: t, onClose: n, trackClick: i } = e,
        l = (0, o.bG)([u.A], () => u.A.getApplication(t.applicationId));
    return (0, a.jsx)(c.m, {
        asContainer: !0,
        text: t.name,
        children: (0, a.jsx)(d.DUT, {
            className: j.fS,
            onClick: async () => {
                i(g.Ws.ClickSimilarGame, t.applicationId),
                    (0, d.mMO)(() =>
                        Promise.resolve((e) =>
                            (0, a.jsx)(_.default, { applicationId: t.applicationId, source: g.Ob.SimilarGames, ...e }),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, a.jsx)(p.A, { game: t, application: l, className: j.n1, size: p.w.SMALL }),
        }),
    });
};
function b(e) {
    let { applicationId: t, onClose: n, trackAction: i, similarGames: r, similarGamesError: c } = e,
        u = (0, o.bG)([h.A, m.A], () => {
            let e = void 0 === h.A.getSimilarGames(t) && null == h.A.getSimilarGamesError(t),
                n = r.some((e) => m.A.isFetching(e));
            return e || n;
        }),
        g = (0, o.yK)([m.A], () =>
            r
                .map((e) => m.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, f.oS)(e.applicationId))
                .slice(0, 5),
        );
    return ((0, x.I)(t), (0, x.x)(r), u && null == c)
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
        : (u || 0 !== g.length) && null == c
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
                        children: g.map((e) => (0, a.jsx)(E, { game: e, onClose: n, trackClick: i }, e.applicationId)),
                    }),
                ],
            })
          : null;
}
