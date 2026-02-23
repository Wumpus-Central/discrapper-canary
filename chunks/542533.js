t.d(l, { a: () => f });
var n = t(627968),
    s = t(64700),
    i = t(158954),
    a = t(765671),
    r = t(688810),
    d = t(954571),
    o = t(439303),
    c = t(961977),
    u = t(183802),
    _ = t(748959),
    g = t(793885),
    p = t(896447),
    I = t(65356),
    x = t(652215),
    A = t(131841);
function f(e) {
    let { applicationId: l, guildId: t, page: f } = e,
        { ref: h, width: m } = (0, a.Ay)(),
        E = (0, o.jM)(),
        { analyticsLocations: j } = (0, r.Ay)(),
        S = s.useRef(null),
        { handleScroll: k } = (0, I.b)(S, E, j),
        [b, R] = s.useMemo(() => {
            if (f?.skuIds == null || 0 === f.skuIds.length) return [[], []];
            let e = Math.round(m ?? 0);
            return f?.leaderboard == null || null == e || e < 564
                ? [[], f.skuIds]
                : e < 1104
                  ? f.skuIds.length >= 2
                      ? [[], f.skuIds]
                      : [f.skuIds.slice(0, 1), f.skuIds.slice(1)]
                  : [f.skuIds.slice(0, 2), f.skuIds.slice(2)];
        }, [f, m]),
        N = 1 === b.length && null != m && m >= 834;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: i } = E;
        d.default.track(x.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: i,
            location_stack: j,
        });
    }, [E, j]),
    null == f)
        ? null
        : (0, n.jsxs)(i.ChK, {
              ref: S,
              onScroll: k,
              children: [
                  (0, n.jsx)(c.A, { location: "social_layer_storefront_page" }),
                  (0, n.jsxs)("section", {
                      ref: h,
                      className: A.k,
                      children: [
                          (0, n.jsx)(g.m, {
                              applicationId: l,
                              backgroundImageAssetId: f.leaderboard?.backgroundImageAssetId,
                          }),
                          (0, n.jsx)(_.I, {
                              analyticsSectionId: "leaderboard",
                              leaderboard: f.leaderboard,
                              skuId: N ? b[0] : void 0,
                              applicationId: l,
                              guildId: t,
                              analyticsLocations: j,
                          }),
                          (0, n.jsx)(p.A, {
                              analyticsSectionId: "featured-top-section",
                              applicationId: l,
                              guildId: t,
                              skuIds: N ? void 0 : b,
                              variant: u.s.MEDIUM,
                          }),
                          (0, n.jsx)(p.A, {
                              analyticsSectionId: "non-featured-top-section",
                              applicationId: l,
                              guildId: t,
                              skuIds: R,
                          }),
                          f.sections?.map((e, s) =>
                              (0, n.jsx)(
                                  p.A,
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
              ],
          });
}
