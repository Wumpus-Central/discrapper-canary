l.d(n, { $: () => h }), l(388685);
var t = l(54381),
    i = l(473749),
    a = l(793030),
    o = l(393238),
    r = l(906732),
    s = l(626135),
    d = l(590961),
    c = l(840724),
    u = l(533785),
    g = l(171524),
    p = l(822458),
    _ = l(640173),
    f = l(981631),
    I = l(329353);
function h(e) {
    var n, l;
    let { applicationId: h, guildId: x, page: m } = e,
        { ref: v, width: C } = (0, o.ZP)(),
        b = (0, d.oR)(),
        { analyticsLocations: j } = (0, r.ZP)(),
        k = i.useRef(null),
        { handleScroll: S } = (0, _.I)(k, b, j),
        [Z, N] = i.useMemo(() => {
            if ((null == m ? void 0 : m.skuIds) == null || (null == m ? void 0 : m.skuIds.length) === 0)
                return [[], []];
            let e = Math.round(null != C ? C : 0);
            return (null == m ? void 0 : m.leaderboard) == null || null == e || e <= 516 || e < 1104
                ? [[], null == m ? void 0 : m.skuIds]
                : [null == m ? void 0 : m.skuIds.slice(0, 2), null == m ? void 0 : m.skuIds.slice(2)];
        }, [m, C]);
    return (i.useEffect(() => {
        let { sessionId: e, guildId: n, pageIndex: l, pageTitle: t, isUserGuildMember: i, pageHasLeaderboard: a } = b;
        s.default.track(f.rMx.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: n,
            page_index: l,
            page_title: t,
            is_user_guild_member: i,
            page_has_leaderboard: a,
            location_stack: j,
        });
    }, [b, j]),
    null == m)
        ? null
        : (0, t.jsx)(a.h21, {
              ref: k,
              onScroll: S,
              children: (0, t.jsxs)("section", {
                  ref: v,
                  className: I.container,
                  children: [
                      (0, t.jsx)(g.n, {
                          applicationId: h,
                          backgroundImageAssetId: null == (n = m.leaderboard) ? void 0 : n.backgroundImageAssetId,
                      }),
                      (0, t.jsx)(u.t, { leaderboard: m.leaderboard }),
                      (0, t.jsx)(p.Z, {
                          analyticsSectionId: "featured-top-section",
                          applicationId: h,
                          guildId: x,
                          skuIds: Z,
                          variant: c.Z.MEDIUM,
                      }),
                      (0, t.jsx)(p.Z, {
                          analyticsSectionId: "non-featured-top-section",
                          applicationId: h,
                          guildId: x,
                          skuIds: N,
                      }),
                      null == (l = m.sections)
                          ? void 0
                          : l.map((e, n) => {
                                var l;
                                return (0, t.jsx)(
                                    p.Z,
                                    {
                                        analyticsSectionId: "index:".concat(n),
                                        guildId: x,
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
