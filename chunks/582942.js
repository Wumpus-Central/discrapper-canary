n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(735438),
    r = n.n(s),
    c = n(311907),
    o = n(990078),
    d = n(397927),
    u = n(587895),
    m = n(136086),
    x = n(885151),
    g = n(409626),
    h = n(422069),
    f = n(611656),
    j = n(459746),
    p = n(225732),
    I = n(985018),
    v = n(851822),
    E = n(799864);
let A = (e) => {
    let { game: t, onClose: n, trackClick: l } = e,
        a = (0, c.bG)([u.A], () => u.A.getApplication(t.applicationId));
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: t.name,
        children: (0, i.jsx)(d.DUT, {
            className: E.fS,
            onClick: async () => {
                l(g.Ws.ClickSimilarGame, t.applicationId),
                    (0, d.mMO)(() =>
                        Promise.resolve((e) =>
                            (0, i.jsx)(p.default, { applicationId: t.applicationId, source: g.Ob.SimilarGames, ...e }),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, i.jsx)(j.A, { game: t, application: a, className: E.n1, size: j.w.SMALL }),
        }),
    });
};
function _(e) {
    let { applicationId: t, onClose: n, trackAction: l, similarGames: s, similarGamesError: o } = e,
        u = (0, c.bG)([h.A, m.A], () => {
            let e = void 0 === h.A.getSimilarGames(t) && null == h.A.getSimilarGamesError(t),
                n = s.some((e) => m.A.isFetching(e));
            return e || n;
        }),
        g = (0, c.yK)([m.A], () =>
            s
                .map((e) => m.A.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, f.oS)(e.applicationId))
                .slice(0, 5),
        );
    return ((0, x.k)(t), (0, x.W)(s), u && null == o)
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", { className: a()(E.vM, v.bV) }),
                  (0, i.jsx)("div", {
                      className: a()(v.nM, v.iH),
                      children: r()
                          .range(0, 5)
                          .map((e) => (0, i.jsx)("div", { className: E.nn }, e)),
                  }),
              ],
          })
        : (u || 0 !== g.length) && null == o
          ? (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Heading, {
                        className: v.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: I.intl.string(I.t["6rLyQB"]),
                    }),
                    (0, i.jsx)("div", {
                        className: E.D$,
                        children: g.map((e) =>
                            null != e.supplementalData
                                ? (0, i.jsx)(
                                      A,
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
