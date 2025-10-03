t.d(n, { $: () => s }), t(388685);
var a = t(951288),
    l = t(647438),
    r = t(793030),
    i = t(393238),
    d = t(533785),
    o = t(174260),
    c = t(329353);
function s(e) {
    var n;
    let { applicationId: t, page: s } = e,
        { ref: u, width: g } = (0, i.ZP)(),
        [f, m] = l.useMemo(
            () =>
                (null == s ? void 0 : s.skuIds) == null || (null == s ? void 0 : s.skuIds.length) === 0
                    ? [[], []]
                    : (null == s ? void 0 : s.leaderboard) == null || null == g || g <= 516
                      ? [[], null == s ? void 0 : s.skuIds]
                      : [null == s ? void 0 : s.skuIds.slice(0, 2), null == s ? void 0 : s.skuIds.slice(2)],
            [s, g],
        );
    return null == s
        ? null
        : (0, a.jsx)(r.zJl, {
              children: (0, a.jsxs)("section", {
                  ref: u,
                  className: c.container,
                  children: [
                      (0, a.jsx)(d.t, { leaderboard: s.leaderboard }),
                      (0, a.jsx)(o.Z, {
                          applicationId: t,
                          skuIds: f,
                          isWide: !0,
                      }),
                      (0, a.jsx)(o.Z, {
                          applicationId: t,
                          skuIds: m,
                      }),
                      null == (n = s.sections)
                          ? void 0
                          : n.map((e, n) => {
                                var l;
                                return (0, a.jsx)(
                                    o.Z,
                                    {
                                        applicationId: t,
                                        sectionTitle: null != (l = e.title) ? l : void 0,
                                        skuIds: e.skuIds,
                                    },
                                    "".concat(e.title, "-").concat(n),
                                );
                            }),
                  ],
              }),
          });
}
