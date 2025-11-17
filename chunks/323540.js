t.d(n, { $: () => u }), t(388685);
var l = t(54381),
    i = t(473749),
    a = t(793030),
    r = t(393238),
    d = t(840724),
    o = t(533785),
    s = t(822458),
    c = t(329353);
function u(e) {
    var n;
    let { applicationId: t, guildId: u, page: p } = e,
        { ref: g, width: I } = (0, r.ZP)(),
        [x, m] = i.useMemo(
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
        : (0, l.jsx)(a.zJl, {
              children: (0, l.jsxs)("section", {
                  ref: g,
                  className: c.container,
                  children: [
                      (0, l.jsx)(o.t, { leaderboard: p.leaderboard }),
                      (0, l.jsx)(s.Z, {
                          applicationId: t,
                          guildId: u,
                          skuIds: x,
                          variant: d.Z.MEDIUM,
                      }),
                      (0, l.jsx)(s.Z, {
                          applicationId: t,
                          guildId: u,
                          skuIds: m,
                      }),
                      null == (n = p.sections)
                          ? void 0
                          : n.map((e, n) => {
                                var i;
                                return (0, l.jsx)(
                                    s.Z,
                                    {
                                        guildId: u,
                                        applicationId: t,
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
