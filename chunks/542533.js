t.d(l, { a: () => x });
var n = t(627968),
    s = t(64700),
    a = t(158954),
    i = t(765671),
    d = t(688810),
    r = t(954571),
    o = t(439303),
    c = t(183802),
    u = t(748959),
    g = t(793885),
    _ = t(896447),
    p = t(65356),
    I = t(652215),
    f = t(131841);
function x(e) {
    let { applicationId: l, guildId: t, page: x } = e,
        { ref: h, width: A } = (0, i.Ay)(),
        m = (0, o.jM)(),
        { analyticsLocations: k } = (0, d.Ay)(),
        j = s.useRef(null),
        { handleScroll: b } = (0, p.b)(j, m, k),
        [E, S] = s.useMemo(() => {
            if (x?.skuIds == null || 0 === x.skuIds.length) return [[], []];
            let e = Math.round(A ?? 0);
            return x?.leaderboard == null || null == e || e < 564
                ? [[], x.skuIds]
                : e < 1104
                  ? x.skuIds.length >= 2
                      ? [[], x.skuIds]
                      : [x.skuIds.slice(0, 1), x.skuIds.slice(1)]
                  : [x.skuIds.slice(0, 2), x.skuIds.slice(2)];
        }, [x, A]),
        v = 1 === E.length && null != A && A >= 834;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: a } = m;
        r.default.track(I.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: a,
            location_stack: k,
        });
    }, [m, k]),
    null == x)
        ? null
        : (0, n.jsx)(a.ChK, {
              ref: j,
              onScroll: b,
              children: (0, n.jsxs)("section", {
                  ref: h,
                  className: f.k,
                  children: [
                      (0, n.jsx)(g.m, {
                          applicationId: l,
                          backgroundImageAssetId: x.leaderboard?.backgroundImageAssetId,
                      }),
                      (0, n.jsx)(u.I, {
                          analyticsSectionId: "leaderboard",
                          leaderboard: x.leaderboard,
                          skuId: v ? E[0] : void 0,
                          applicationId: l,
                          guildId: t,
                          analyticsLocations: k,
                      }),
                      (0, n.jsx)(_.A, {
                          analyticsSectionId: "featured-top-section",
                          applicationId: l,
                          guildId: t,
                          skuIds: v ? void 0 : E,
                          variant: c.s.MEDIUM,
                      }),
                      (0, n.jsx)(_.A, {
                          analyticsSectionId: "non-featured-top-section",
                          applicationId: l,
                          guildId: t,
                          skuIds: S,
                      }),
                      x.sections?.map((e, s) =>
                          (0, n.jsx)(
                              _.A,
                              {
                                  analyticsSectionId: `index:${s}`,
                                  guildId: t,
                                  applicationId: l,
                                  sectionTitle: e.title ?? void 0,
                                  skuIds: e.skuIds,
                              },
                              `${e.title}-${s}`,
                          ),
                      ),
                  ],
              }),
          });
}
