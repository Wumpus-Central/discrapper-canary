t.d(l, { a: () => x }), t(896048);
var n = t(627968),
    a = t(64700),
    s = t(158954),
    i = t(765671),
    d = t(688810),
    r = t(954571),
    o = t(439303),
    c = t(183802),
    u = t(748959),
    f = t(793885),
    g = t(896447),
    p = t(65356),
    I = t(652215),
    _ = t(131841);
function x(e) {
    var l, t;
    let { applicationId: x, guildId: h, page: A } = e,
        { ref: b, width: m } = (0, i.Ay)(),
        k = (0, o.jM)(),
        { analyticsLocations: v } = (0, d.Ay)(),
        j = a.useRef(null),
        { handleScroll: E } = (0, p.b)(j, k, v),
        [S, N] = a.useMemo(() => {
            if ((null == A ? void 0 : A.skuIds) == null || 0 === A.skuIds.length) return [[], []];
            let e = Math.round(null != m ? m : 0);
            return (null == A ? void 0 : A.leaderboard) == null || null == e || e < 564
                ? [[], A.skuIds]
                : e < 1104
                  ? A.skuIds.length >= 2
                      ? [[], A.skuIds]
                      : [A.skuIds.slice(0, 1), A.skuIds.slice(1)]
                  : [A.skuIds.slice(0, 2), A.skuIds.slice(2)];
        }, [A, m]),
        L = 1 === S.length && null != m && m >= 834;
    return (a.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: a, pageHasLeaderboard: s } = k;
        r.default.track(I.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: n,
            is_user_guild_member: a,
            page_has_leaderboard: s,
            location_stack: v,
        });
    }, [k, v]),
    null == A)
        ? null
        : (0, n.jsx)(s.ChK, {
              ref: j,
              onScroll: E,
              children: (0, n.jsxs)("section", {
                  ref: b,
                  className: _.k,
                  children: [
                      (0, n.jsx)(f.m, {
                          applicationId: x,
                          backgroundImageAssetId: null == (l = A.leaderboard) ? void 0 : l.backgroundImageAssetId,
                      }),
                      (0, n.jsx)(u.I, {
                          analyticsSectionId: "leaderboard",
                          leaderboard: A.leaderboard,
                          skuId: L ? S[0] : void 0,
                          applicationId: x,
                          guildId: h,
                          analyticsLocations: v,
                      }),
                      (0, n.jsx)(g.A, {
                          analyticsSectionId: "featured-top-section",
                          applicationId: x,
                          guildId: h,
                          skuIds: L ? void 0 : S,
                          variant: c.s.MEDIUM,
                      }),
                      (0, n.jsx)(g.A, {
                          analyticsSectionId: "non-featured-top-section",
                          applicationId: x,
                          guildId: h,
                          skuIds: N,
                      }),
                      null == (t = A.sections)
                          ? void 0
                          : t.map((e, l) => {
                                var t;
                                return (0, n.jsx)(
                                    g.A,
                                    {
                                        analyticsSectionId: "index:".concat(l),
                                        guildId: h,
                                        applicationId: x,
                                        sectionTitle: null != (t = e.title) ? t : void 0,
                                        skuIds: e.skuIds,
                                    },
                                    "".concat(e.title, "-").concat(l),
                                );
                            }),
                  ],
              }),
          });
}
