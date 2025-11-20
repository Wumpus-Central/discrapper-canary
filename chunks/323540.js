l.d(n, { $: () => p }), l(388685);
var t = l(54381),
    i = l(473749),
    a = l(793030),
    r = l(393238),
    o = l(840724),
    d = l(533785),
    s = l(171524),
    c = l(822458),
    u = l(329353);
function p(e) {
    var n, l;
    let { applicationId: p, guildId: g, page: I } = e,
        { ref: x, width: m } = (0, r.ZP)(),
        [h, f] = i.useMemo(() => {
            if ((null == I ? void 0 : I.skuIds) == null || (null == I ? void 0 : I.skuIds.length) === 0)
                return [[], []];
            let e = Math.round(null != m ? m : 0);
            return (null == I ? void 0 : I.leaderboard) == null || null == e || e <= 516 || e < 1104
                ? [[], null == I ? void 0 : I.skuIds]
                : [null == I ? void 0 : I.skuIds.slice(0, 2), null == I ? void 0 : I.skuIds.slice(2)];
        }, [I, m]);
    return null == I
        ? null
        : (0, t.jsx)(a.zJl, {
              children: (0, t.jsxs)("section", {
                  ref: x,
                  className: u.container,
                  children: [
                      (0, t.jsx)(s.n, {
                          applicationId: p,
                          backgroundImageAssetId: null == (n = I.leaderboard) ? void 0 : n.backgroundImageAssetId,
                      }),
                      (0, t.jsx)(d.t, { leaderboard: I.leaderboard }),
                      (0, t.jsx)(c.Z, {
                          applicationId: p,
                          guildId: g,
                          skuIds: h,
                          variant: o.Z.MEDIUM,
                      }),
                      (0, t.jsx)(c.Z, {
                          applicationId: p,
                          guildId: g,
                          skuIds: f,
                      }),
                      null == (l = I.sections)
                          ? void 0
                          : l.map((e, n) => {
                                var l;
                                return (0, t.jsx)(
                                    c.Z,
                                    {
                                        guildId: g,
                                        applicationId: p,
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
