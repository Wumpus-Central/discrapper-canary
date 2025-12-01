t.d(n, { $: () => f }), t(388685);
var l = t(54381),
    i = t(473749),
    a = t(793030),
    o = t(393238),
    s = t(906732),
    r = t(626135),
    d = t(590961),
    c = t(840724),
    u = t(533785),
    g = t(171524),
    p = t(822458),
    _ = t(640173),
    I = t(981631),
    h = t(329353);
function f(e) {
    var n, t;
    let { applicationId: f, guildId: x, page: m } = e,
        { ref: v, width: C } = (0, o.ZP)(),
        k = (0, d.oR)(),
        { analyticsLocations: j } = (0, s.ZP)(),
        b = i.useRef(null),
        { handleScroll: S } = (0, _.I)(b, k, j),
        [Z, L] = i.useMemo(() => {
            if ((null == m ? void 0 : m.skuIds) == null || 0 === m.skuIds.length) return [[], []];
            let e = Math.round(null != C ? C : 0);
            return (null == m ? void 0 : m.leaderboard) == null || null == e || e < 564
                ? [[], m.skuIds]
                : e < 1104
                  ? m.skuIds.length >= 2
                      ? [[], m.skuIds]
                      : [m.skuIds.slice(0, 1), m.skuIds.slice(1)]
                  : [m.skuIds.slice(0, 2), m.skuIds.slice(2)];
        }, [m, C]),
        N = 1 === Z.length && null != C && C >= 834;
    return (i.useEffect(() => {
        let { sessionId: e, guildId: n, pageIndex: t, pageTitle: l, isUserGuildMember: i, pageHasLeaderboard: a } = k;
        r.default.track(I.rMx.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: n,
            page_index: t,
            page_title: l,
            is_user_guild_member: i,
            page_has_leaderboard: a,
            location_stack: j,
        });
    }, [k, j]),
    null == m)
        ? null
        : (0, l.jsx)(a.h21, {
              ref: b,
              onScroll: S,
              children: (0, l.jsxs)("section", {
                  ref: v,
                  className: h.container,
                  children: [
                      (0, l.jsx)(g.n, {
                          applicationId: f,
                          backgroundImageAssetId: null == (n = m.leaderboard) ? void 0 : n.backgroundImageAssetId,
                      }),
                      (0, l.jsx)(u.t, {
                          analyticsSectionId: "leaderboard",
                          leaderboard: m.leaderboard,
                          skuId: N ? Z[0] : void 0,
                          applicationId: f,
                          guildId: x,
                          analyticsLocations: j,
                      }),
                      (0, l.jsx)(p.Z, {
                          analyticsSectionId: "featured-top-section",
                          applicationId: f,
                          guildId: x,
                          skuIds: N ? void 0 : Z,
                          variant: c.Z.MEDIUM,
                      }),
                      (0, l.jsx)(p.Z, {
                          analyticsSectionId: "non-featured-top-section",
                          applicationId: f,
                          guildId: x,
                          skuIds: L,
                      }),
                      null == (t = m.sections)
                          ? void 0
                          : t.map((e, n) => {
                                var t;
                                return (0, l.jsx)(
                                    p.Z,
                                    {
                                        analyticsSectionId: "index:".concat(n),
                                        guildId: x,
                                        applicationId: f,
                                        sectionTitle: null != (t = e.title) ? t : void 0,
                                        skuIds: e.skuIds,
                                    },
                                    "".concat(e.title, "-").concat(n),
                                );
                            }),
                  ],
              }),
          });
}
