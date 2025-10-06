n.d(t, { $: () => s }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(793030),
    i = n(393238),
    d = n(533785),
    o = n(174260),
    c = n(371160);
function s(e) {
    var t;
    let { applicationId: n, guildId: s, page: u } = e,
        { ref: g, width: f } = (0, i.ZP)(),
        [p, m] = r.useMemo(
            () =>
                (null == u ? void 0 : u.skuIds) == null || (null == u ? void 0 : u.skuIds.length) === 0
                    ? [[], []]
                    : (null == u ? void 0 : u.leaderboard) == null || null == f || f <= 516
                      ? [[], null == u ? void 0 : u.skuIds]
                      : [null == u ? void 0 : u.skuIds.slice(0, 2), null == u ? void 0 : u.skuIds.slice(2)],
            [u, f],
        );
    return null == u
        ? null
        : (0, a.jsx)(l.zJl, {
              children: (0, a.jsxs)("section", {
                  ref: g,
                  className: c.container,
                  children: [
                      (0, a.jsx)(d.t, { leaderboard: u.leaderboard }),
                      (0, a.jsx)(o.Z, {
                          applicationId: n,
                          guildId: s,
                          skuIds: p,
                          isWide: !0,
                      }),
                      (0, a.jsx)(o.Z, {
                          applicationId: n,
                          guildId: s,
                          skuIds: m,
                      }),
                      null == (t = u.sections)
                          ? void 0
                          : t.map((e, t) => {
                                var r;
                                return (0, a.jsx)(
                                    o.Z,
                                    {
                                        guildId: s,
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
