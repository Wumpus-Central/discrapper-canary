n.d(t, { $: () => u }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(793030),
    i = n(393238),
    o = n(840724),
    d = n(533785),
    c = n(174260),
    s = n(329353);
function u(e) {
    var t;
    let { applicationId: n, guildId: u, page: g } = e,
        { ref: f, width: p } = (0, i.ZP)(),
        [m, b] = r.useMemo(
            () =>
                (null == g ? void 0 : g.skuIds) == null || (null == g ? void 0 : g.skuIds.length) === 0
                    ? [[], []]
                    : (null == g ? void 0 : g.leaderboard) == null || null == p || p <= 516
                      ? [[], null == g ? void 0 : g.skuIds]
                      : p < 1104
                        ? [null == g ? void 0 : g.skuIds.slice(0, 1), null == g ? void 0 : g.skuIds.slice(1)]
                        : [null == g ? void 0 : g.skuIds.slice(0, 2), null == g ? void 0 : g.skuIds.slice(2)],
            [g, p],
        );
    return null == g
        ? null
        : (0, a.jsx)(l.zJl, {
              children: (0, a.jsxs)("section", {
                  ref: f,
                  className: s.container,
                  children: [
                      (0, a.jsx)(d.t, { leaderboard: g.leaderboard }),
                      (0, a.jsx)(c.Z, {
                          applicationId: n,
                          guildId: u,
                          skuIds: m,
                          variant: o.Z.MEDIUM,
                      }),
                      (0, a.jsx)(c.Z, {
                          applicationId: n,
                          guildId: u,
                          skuIds: b,
                      }),
                      null == (t = g.sections)
                          ? void 0
                          : t.map((e, t) => {
                                var r;
                                return (0, a.jsx)(
                                    c.Z,
                                    {
                                        guildId: u,
                                        applicationId: n,
                                        sectionTitle: null != (r = e.title) ? r : void 0,
                                        skuIds: e.skuIds,
                                    },
                                    "".concat(e.title, "-").concat(t),
                                );
                            }),
                  ],
              }),
          });
}
