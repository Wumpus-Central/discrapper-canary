"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
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
    I = n(851822),
    j = n(799864);
let A = (e) => {
    let { game: t, onClose: n, trackClick: l } = e,
        a = (0, c.bG)([u.A], () => u.A.getApplication(t.applicationId));
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: t.name,
        children: (0, i.jsx)(d.DUT, {
            className: j.fS,
            onClick: async () => {
                l(h.Ws.ClickSimilarGame, t.applicationId),
                    (0, d.mMO)(() =>
                        Promise.resolve((e) =>
                            (0, i.jsx)(p.default, { applicationId: t.applicationId, source: h.Ob.SimilarGames, ...e }),
                        ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
            },
            children: (0, i.jsx)(_.A, { game: t, application: a, className: j.n1, size: _.w.SMALL }),
        }),
    });
};
function E(e) {
    let { applicationId: t, onClose: n, trackAction: l, similarGames: r, similarGamesError: o } = e,
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
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", { className: a()(j.vM, I.bV) }),
                  (0, i.jsx)("div", {
                      className: a()(I.nM, I.iH),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, i.jsx)("div", { className: j.nn }, e)),
                  }),
              ],
          })
        : (u || 0 !== h.length) && null == o
          ? (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Heading, {
                        className: I.bV,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: v.intl.string(v.t["6rLyQB"]),
                    }),
                    (0, i.jsx)("div", {
                        className: j.D$,
                        children: h.map((e) =>
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
