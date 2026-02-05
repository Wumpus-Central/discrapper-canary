l.r(t), l.d(t, { default: () => F });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(311907),
    d = l(397927),
    c = l(793574),
    o = l(688810),
    u = l(726249),
    x = l(985925),
    m = l(624458),
    h = l(513461),
    j = l(496767),
    _ = l(663997),
    A = l(417718),
    g = l(324023),
    b = l(786180),
    T = l(742589),
    f = l(976860),
    E = l(761640),
    v = l(808728),
    S = l(71393),
    N = l(836872),
    I = l(134413),
    R = l(202309),
    C = l(841933),
    p = l(836501),
    M = l(735937),
    D = l(823712),
    G = l(606326),
    y = l(856768),
    L = l(332352),
    U = l(652215),
    P = l(746080),
    k = l(985018),
    B = l(947256),
    w = l(638990);
function O(e) {
    let { guild: t, currentTab: l, onTabSelect: s } = e,
        i = (0, j.W)(t.id),
        a = k.intl.string(k.t.oclz3Z),
        r = k.intl.string(k.t.oclz3Z);
    return (
        (0, u.HU)({ location: t.name, subsection: a }),
        (0, n.jsxs)(T.A, {
            className: B.wx,
            innerClassname: B.__invalid_innerHeader,
            channelId: P.VV.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, n.jsx)(T.A.Icon, { icon: d.nFg, "aria-hidden": !0 }),
                (0, n.jsx)(T.A.Title, { children: r }),
                i && (0, n.jsx)(D.A, { guildId: t.id, currentTab: l, onTabSelect: s }),
            ],
        })
    );
}
function F(e) {
    let { guildId: t } = e,
        l = (0, b.H)({ guildId: t }) ?? 0,
        [i, u] = s.useState(l > 0 ? N.D.PENDING : N.D.ALL_MEMBERS),
        j = (0, r.bG)([S.A], () => S.A.getGuild(t)),
        { analyticsLocations: T } = (0, o.Ay)(c.A.MEMBER_SAFETY_PAGE),
        D = (0, A.n)({ guildId: t }),
        { guildJoinRequests: P } = (0, g.K)({
            guildId: t,
            applicationStatus: "ALL_MEMBERS" === i ? h.B5.SUBMITTED : i,
            sortOrder: D,
        });
    s.useEffect(() => {
        j?.features.has(U.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || u(N.D.ALL_MEMBERS);
    }, [j]);
    let k = (0, I.fw)(t),
        F = (0, x.q)(t),
        V = s.useRef(null);
    (0, R.e)(t);
    let { fetchNextPage: z } = (0, _.K)({ guildId: t, guildJoinRequests: P }),
        H = s.useCallback(async () => {
            if (i === N.D.ALL_MEMBERS) return;
            let e = V.current?.getScrollerState();
            null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && (await z(D, i)));
        }, [i, i, D, z]),
        q = s.useCallback(
            async (e) => {
                i === e || (u(e), m.A.setSelectedGuildJoinRequest(t, null), "ALL_MEMBERS" !== e && (await z(D, e)));
            },
            [i, t, z, D],
        );
    s.useEffect(() => {
        if (!k && null != j) {
            let e = v.Ay.getDefaultChannel(j.id)?.id;
            (0, f.uh)(j.id, e);
        }
    }, [j, k]);
    let Q = (0, r.bG)([E.Ay], () => null != E.Ay.getGuildSidebarState(t), [t]);
    return null != j && k
        ? (0, n.jsxs)(o.f5, {
              value: T,
              children: [
                  (0, n.jsxs)("div", {
                      className: a()(w.TE, B.MY, { [w.js]: Q }),
                      children: [
                          (0, n.jsx)(O, { guild: j, currentTab: i, onTabSelect: q }),
                          (0, n.jsx)(d.T7Y, {
                              onScroll: H,
                              ref: V,
                              orientation: "vertical",
                              children: (0, n.jsx)("div", {
                                  className: a()(w.Qs, B.kL),
                                  children:
                                      i === N.D.ALL_MEMBERS
                                          ? (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(M.A, { guild: j }),
                                                    (0, n.jsx)(L.A, { guild: j }),
                                                ],
                                            })
                                          : (0, n.jsx)(p.A, { guildId: j.id, currentTab: i }),
                              }),
                          }),
                          (0, n.jsx)(y.A, { guildId: j.id }),
                      ],
                  }),
                  F &&
                      (i === N.D.ALL_MEMBERS ? (0, n.jsx)(G.A, { guildId: j.id }) : (0, n.jsx)(C.A, { guildId: j.id })),
              ],
          })
        : null;
}
