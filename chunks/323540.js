t.d(n, { $: () => x }), t(388685);
var l = t(54381),
    i = t(473749),
    a = t(793030),
    o = t(393238),
    s = t(906732),
    r = t(626135),
    d = t(590961),
    c = t(840724),
    u = t(533785),
    f = t(171524),
    g = t(174260),
    p = t(640173),
    I = t(981631),
    h = t(380063);
function x(e) {
    var n, t;
    let { applicationId: x, guildId: _, page: m } = e,
        { ref: b, width: v } = (0, o.ZP)(),
        C = (0, d.oR)(),
        { analyticsLocations: k } = (0, s.ZP)(),
        S = i.useRef(null),
        { handleScroll: j } = (0, p.I)(S, C, k),
        [Z, E] = i.useMemo(() => {
            if ((null == m ? void 0 : m.skuIds) == null || 0 === m.skuIds.length) return [[], []];
            let e = Math.round(null != v ? v : 0);
            return (null == m ? void 0 : m.leaderboard) == null || null == e || e < 564
                ? [[], m.skuIds]
                : e < 1104
                  ? m.skuIds.length >= 2
                      ? [[], m.skuIds]
                      : [m.skuIds.slice(0, 1), m.skuIds.slice(1)]
                  : [m.skuIds.slice(0, 2), m.skuIds.slice(2)];
        }, [m, v]),
        L = 1 === Z.length && null != v && v >= 834;
    return (i.useEffect(() => {
        let { sessionId: e, guildId: n, pageIndex: t, pageTitle: l, isUserGuildMember: i, pageHasLeaderboard: a } = C;
        r.default.track(I.rMx.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: n,
            page_index: t,
            page_title: l,
            is_user_guild_member: i,
            page_has_leaderboard: a,
            location_stack: k,
        });
    }, [C, k]),
    null == m)
        ? null
        : (0, l.jsx)(a.h21, {
              ref: S,
              onScroll: j,
              children: (0, l.jsxs)("section", {
                  ref: b,
                  className: h.container,
                  children: [
                      (0, l.jsx)(f.n, {
                          applicationId: x,
                          backgroundImageAssetId: null == (n = m.leaderboard) ? void 0 : n.backgroundImageAssetId,
                      }),
                      (0, l.jsx)(u.t, {
                          analyticsSectionId: "leaderboard",
                          leaderboard: m.leaderboard,
                          skuId: L ? Z[0] : void 0,
                          applicationId: x,
                          guildId: _,
                          analyticsLocations: k,
                      }),
                      (0, l.jsx)(g.Z, {
                          analyticsSectionId: "featured-top-section",
                          applicationId: x,
                          guildId: _,
                          skuIds: L ? void 0 : Z,
                          variant: c.Zp.MEDIUM,
                      }),
                      (0, l.jsx)(g.Z, {
                          analyticsSectionId: "non-featured-top-section",
                          applicationId: x,
                          guildId: _,
                          skuIds: E,
                      }),
                      null == (t = m.sections)
                          ? void 0
                          : t.map((e, n) => {
                                var t;
                                return (0, l.jsx)(
                                    g.Z,
                                    {
                                        analyticsSectionId: "index:".concat(n),
                                        guildId: _,
                                        applicationId: x,
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
