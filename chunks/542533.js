t.d(l, { a: () => h });
var n = t(627968),
    s = t(64700),
    a = t(158954),
    i = t(765671),
    r = t(688810),
    o = t(954571),
    d = t(439303),
    c = t(961977),
    u = t(183802),
    _ = t(748959),
    g = t(793885),
    x = t(896447),
    p = t(65356),
    f = t(652215),
    A = t(368523);
function h(e) {
    let { applicationId: l, page: t } = e,
        { ref: h, width: I } = (0, i.Ay)(),
        m = (0, d.jM)(),
        { analyticsLocations: E } = (0, r.Ay)(),
        j = s.useRef(null),
        { handleScroll: S } = (0, p.b)(j, m, E),
        [k, b] = s.useMemo(() => {
            if (t?.skuIds == null || 0 === t.skuIds.length) return [[], []];
            let e = Math.round(I ?? 0);
            return t?.leaderboard == null || null == e || e < 564
                ? [[], t.skuIds]
                : e < 1104
                  ? t.skuIds.length >= 2
                      ? [[], t.skuIds]
                      : [t.skuIds.slice(0, 1), t.skuIds.slice(1)]
                  : [t.skuIds.slice(0, 2), t.skuIds.slice(2)];
        }, [t, I]),
        R = 1 === k.length && null != I && I >= 834;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: a } = m;
        o.default.track(f.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: a,
            location_stack: E,
        });
    }, [m, E]),
    null == t)
        ? null
        : (0, n.jsxs)(a.ChK, {
              ref: j,
              onScroll: S,
              children: [
                  (0, n.jsx)(c.A, { location: "social_layer_storefront_page" }),
                  (0, n.jsxs)("section", {
                      ref: h,
                      className: A.k,
                      children: [
                          (0, n.jsx)(g.m, {
                              applicationId: l,
                              backgroundImageAssetId: t.leaderboard?.backgroundImageAssetId,
                          }),
                          (0, n.jsx)(_.I, {
                              analyticsSectionId: "leaderboard",
                              leaderboard: t.leaderboard,
                              skuId: R ? k[0] : void 0,
                              analyticsLocations: E,
                          }),
                          (0, n.jsx)(x.A, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: R ? void 0 : k,
                              variant: u.s.MEDIUM,
                          }),
                          (0, n.jsx)(x.A, { analyticsSectionId: "non-featured-top-section", skuIds: b }),
                          t.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  x.A,
                                  {
                                      analyticsSectionId: `index:${l}`,
                                      sectionTitle: e.title ?? void 0,
                                      skuIds: e.skuIds,
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      ],
                  }),
              ],
          });
}
