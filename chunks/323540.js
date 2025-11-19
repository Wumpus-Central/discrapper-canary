l.d(e, { $: () => u }), l(388685);
var t = l(54381),
    i = l(473749),
    a = l(793030),
    d = l(393238),
    r = l(840724),
    o = l(533785),
    s = l(822458),
    c = l(329353);
function u(n) {
    var e;
    let { applicationId: l, guildId: u, page: p } = n,
        { ref: g, width: I } = (0, d.ZP)(),
        [x, m] = i.useMemo(
            () =>
                (null == p ? void 0 : p.skuIds) == null || (null == p ? void 0 : p.skuIds.length) === 0
                    ? [[], []]
                    : (null == p ? void 0 : p.leaderboard) == null || null == I || I <= 516 || I < 1104
                      ? [[], null == p ? void 0 : p.skuIds]
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
                          skuIds: x,
                          variant: r.Z.MEDIUM,
                      }),
                      (0, t.jsx)(s.Z, {
                          applicationId: l,
                          guildId: u,
                          skuIds: m,
                      }),
                      null == (e = p.sections)
                          ? void 0
                          : e.map((n, e) => {
                                var i;
                                return (0, t.jsx)(
                                    s.Z,
                                    {
                                        guildId: u,
                                        applicationId: l,
                                        sectionTitle: null != (i = n.title) ? i : void 0,
                                        skuIds: n.skuIds,
                                    },
                                    "".concat(n.title, "-").concat(e),
                                );
                            }),
                  ],
              }),
          });
}
