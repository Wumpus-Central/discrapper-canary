l.d(n, { $: () => u }), l(388685);
var t = l(951288),
    i = l(647438),
    a = l(793030),
    r = l(393238),
    d = l(840724),
    o = l(533785),
    s = l(822458),
    c = l(329353);
function u(e) {
    var n;
    let { applicationId: l, guildId: u, page: p } = e,
        { ref: g, width: I } = (0, r.ZP)(),
        [v, x] = i.useMemo(
            () =>
                (null == p ? void 0 : p.skuIds) == null || (null == p ? void 0 : p.skuIds.length) === 0
                    ? [[], []]
                    : (null == p ? void 0 : p.leaderboard) == null || null == I || I <= 516
                      ? [[], null == p ? void 0 : p.skuIds]
                      : I < 1104
                        ? [null == p ? void 0 : p.skuIds.slice(0, 1), null == p ? void 0 : p.skuIds.slice(1)]
                        : [null == p ? void 0 : p.skuIds.slice(0, 2), null == p ? void 0 : p.skuIds.slice(2)],
            [p, I],
        );
    return null == p
        ? null
        : (0, t.jsx)(a.zJl, {
              children: (0, t.jsxs)("section", {
                  ref: g,
                  className: c.container,
                  children: [
                      (0, t.jsx)(o.t, { leaderboard: p.leaderboard }),
                      (0, t.jsx)(s.Z, {
                          applicationId: l,
                          guildId: u,
                          skuIds: v,
                          variant: d.Z.MEDIUM,
                      }),
                      (0, t.jsx)(s.Z, {
                          applicationId: l,
                          guildId: u,
                          skuIds: x,
                      }),
                      null == (n = p.sections)
                          ? void 0
                          : n.map((e, n) => {
                                var i;
                                return (0, t.jsx)(
                                    s.Z,
                                    {
                                        guildId: u,
                                        applicationId: l,
                                        sectionTitle: null != (i = e.title) ? i : void 0,
                                        skuIds: e.skuIds,
                                    },
                                    "".concat(e.title, "-").concat(n),
                                );
                            }),
                  ],
              }),
          });
}
