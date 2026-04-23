t.d(l, { a: () => I });
var n = t(627968),
    s = t(64700),
    a = t(599319),
    i = t(765671),
    r = t(688810),
    o = t(954571),
    d = t(439303),
    c = t(961977),
    u = t(183802),
    _ = t(748959),
    g = t(793885),
    p = t(896447),
    x = t(65356),
    A = t(652215),
    f = t(384274);
function I(e) {
    let { applicationId: l, page: t } = e,
        { ref: I, width: h } = (0, i.Ay)(),
        m = (0, d.jM)(),
        { analyticsLocations: E } = (0, r.Ay)(),
        S = s.useRef(null),
        { handleScroll: j } = (0, x.b)(S, m, E),
        [k, b] = s.useMemo(() => {
            if (t?.skuIds == null || 0 === t.skuIds.length) return [[], []];
            let e = Math.round(h ?? 0);
            return t?.leaderboard == null || null == e || e < 564
                ? [[], t.skuIds]
                : e < 1104
                  ? t.skuIds.length >= 2
                      ? [[], t.skuIds]
                      : [t.skuIds.slice(0, 1), t.skuIds.slice(1)]
                  : [t.skuIds.slice(0, 2), t.skuIds.slice(2)];
        }, [t, h]),
        R = 1 === k.length && null != h && h >= 834;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: a } = m;
        o.default.track(A.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
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
        : (0, n.jsxs)(a.Ch, {
              ref: S,
              onScroll: j,
              children: [
                  (0, n.jsx)(c.A, { location: "social_layer_storefront_page" }),
                  (0, n.jsxs)("section", {
                      ref: I,
                      className: f.k,
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
                          (0, n.jsx)(p.A, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: R ? void 0 : k,
                              variant: u.s.MEDIUM,
                          }),
                          (0, n.jsx)(p.A, { analyticsSectionId: "non-featured-top-section", skuIds: b }),
                          t.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  p.A,
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
