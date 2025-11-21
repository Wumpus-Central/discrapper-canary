l.d(n, { $: () => h }), l(388685);
var t = l(54381),
    i = l(473749),
    a = l(793030),
    o = l(393238),
    d = l(906732),
    r = l(626135),
    s = l(590961),
    c = l(840724),
    u = l(533785),
    p = l(171524),
    g = l(822458),
    I = l(981631),
    x = l(329353);
function h(e) {
    var n, l;
    let { applicationId: h, guildId: m, page: _ } = e,
        { ref: f, width: v } = (0, o.ZP)(),
        j = (0, s.oR)(),
        { analyticsLocations: C } = (0, d.ZP)(),
        [k, b] = i.useMemo(() => {
            if ((null == _ ? void 0 : _.skuIds) == null || (null == _ ? void 0 : _.skuIds.length) === 0)
                return [[], []];
            let e = Math.round(null != v ? v : 0);
            return (null == _ ? void 0 : _.leaderboard) == null || null == e || e <= 516 || e < 1104
                ? [[], null == _ ? void 0 : _.skuIds]
                : [null == _ ? void 0 : _.skuIds.slice(0, 2), null == _ ? void 0 : _.skuIds.slice(2)];
        }, [_, v]);
    return (i.useEffect(() => {
        let { sessionId: e, guildId: n, pageIndex: l, pageTitle: t, isUserGuildMember: i } = j;
        r.default.track(I.rMx.SLAYER_SHOP_VIEWED, {
            slayer_shop_session_id: e,
            guild_id: n,
            page_index: l,
            page_title: t,
            is_user_guild_member: i,
            location_stack: C,
        });
    }, [j, C]),
    null == _)
        ? null
        : (0, t.jsx)(a.zJl, {
              children: (0, t.jsxs)("section", {
                  ref: f,
                  className: x.container,
                  children: [
                      (0, t.jsx)(p.n, {
                          applicationId: h,
                          backgroundImageAssetId: null == (n = _.leaderboard) ? void 0 : n.backgroundImageAssetId,
                      }),
                      (0, t.jsx)(u.t, { leaderboard: _.leaderboard }),
                      (0, t.jsx)(g.Z, {
                          analyticsSectionId: "featured-top-section",
                          applicationId: h,
                          guildId: m,
                          skuIds: k,
                          variant: c.Z.MEDIUM,
                      }),
                      (0, t.jsx)(g.Z, {
                          analyticsSectionId: "non-featured-top-section",
                          applicationId: h,
                          guildId: m,
                          skuIds: b,
                      }),
                      null == (l = _.sections)
                          ? void 0
                          : l.map((e, n) => {
                                var l;
                                return (0, t.jsx)(
                                    g.Z,
                                    {
                                        analyticsSectionId: "index:".concat(n),
                                        guildId: m,
                                        applicationId: h,
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
