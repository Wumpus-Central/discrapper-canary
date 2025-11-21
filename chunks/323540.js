l.d(n, { $: () => _ }), l(388685);
var t = l(54381),
    i = l(473749),
    a = l(793030),
    o = l(393238),
    r = l(906732),
    s = l(626135),
    d = l(590961),
    c = l(840724),
    u = l(533785),
    p = l(171524),
    g = l(822458),
    I = l(981631),
    x = l(329353);
function _(e) {
    var n, l;
    let { applicationId: _, guildId: f, page: h } = e,
        { ref: m, width: v } = (0, o.ZP)(),
        C = (0, d.oR)(),
        { analyticsLocations: j } = (0, r.ZP)(),
        [b, k] = i.useMemo(() => {
            if ((null == h ? void 0 : h.skuIds) == null || (null == h ? void 0 : h.skuIds.length) === 0)
                return [[], []];
            let e = Math.round(null != v ? v : 0);
            return (null == h ? void 0 : h.leaderboard) == null || null == e || e <= 516 || e < 1104
                ? [[], null == h ? void 0 : h.skuIds]
                : [null == h ? void 0 : h.skuIds.slice(0, 2), null == h ? void 0 : h.skuIds.slice(2)];
        }, [h, v]);
    return (i.useEffect(() => {
        let { sessionId: e, guildId: n, pageIndex: l, pageTitle: t, isUserGuildMember: i, pageHasLeaderboard: a } = C;
        s.default.track(I.rMx.SLAYER_SHOP_VIEWED, {
            slayer_shop_session_id: e,
            guild_id: n,
            page_index: l,
            page_title: t,
            is_user_guild_member: i,
            page_has_leaderboard: a,
            location_stack: j,
        });
    }, [C, j]),
    null == h)
        ? null
        : (0, t.jsx)(a.zJl, {
              children: (0, t.jsxs)("section", {
                  ref: m,
                  className: x.container,
                  children: [
                      (0, t.jsx)(p.n, {
                          applicationId: _,
                          backgroundImageAssetId: null == (n = h.leaderboard) ? void 0 : n.backgroundImageAssetId,
                      }),
                      (0, t.jsx)(u.t, { leaderboard: h.leaderboard }),
                      (0, t.jsx)(g.Z, {
                          analyticsSectionId: "featured-top-section",
                          applicationId: _,
                          guildId: f,
                          skuIds: b,
                          variant: c.Z.MEDIUM,
                      }),
                      (0, t.jsx)(g.Z, {
                          analyticsSectionId: "non-featured-top-section",
                          applicationId: _,
                          guildId: f,
                          skuIds: k,
                      }),
                      null == (l = h.sections)
                          ? void 0
                          : l.map((e, n) => {
                                var l;
                                return (0, t.jsx)(
                                    g.Z,
                                    {
                                        analyticsSectionId: "index:".concat(n),
                                        guildId: f,
                                        applicationId: _,
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
