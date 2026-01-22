l.r(t), l.d(t, { default: () => F }), l(896048);
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(311907),
    c = l(397927),
    d = l(793574),
    o = l(688810),
    u = l(726249),
    x = l(985925),
    m = l(624458),
    j = l(513461),
    b = l(496767),
    f = l(663997),
    h = l(417718),
    g = l(324023),
    v = l(786180),
    A = l(742589),
    p = l(976860),
    E = l(761640),
    S = l(808728),
    T = l(71393),
    y = l(836872),
    _ = l(134413),
    O = l(202309),
    N = l(841933),
    I = l(836501),
    R = l(735937),
    D = l(823712),
    P = l(606326),
    C = l(856768),
    M = l(332352),
    w = l(652215),
    G = l(746080),
    L = l(985018),
    U = l(947256),
    k = l(638990);
function B(e) {
    let { guild: t, currentTab: l, onTabSelect: r } = e,
        i = (0, b.W)(t.id),
        s = L.intl.string(L.t.oclz3Z),
        a = L.intl.string(L.t.oclz3Z);
    return (
        (0, u.HU)({
            location: t.name,
            subsection: s,
        }),
        (0, n.jsxs)(A.A, {
            className: U.wx,
            innerClassname: U.__invalid_innerHeader,
            channelId: G.VV.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, n.jsx)(A.A.Icon, {
                    icon: c.nFg,
                    "aria-hidden": !0,
                }),
                (0, n.jsx)(A.A.Title, { children: a }),
                i &&
                    (0, n.jsx)(D.A, {
                        guildId: t.id,
                        currentTab: l,
                        onTabSelect: r,
                    }),
            ],
        })
    );
}
function F(e) {
    var t;
    let { guildId: l } = e,
        i = null != (t = (0, v.H)({ guildId: l })) ? t : 0,
        [u, b] = r.useState(i > 0 ? y.D.PENDING : y.D.ALL_MEMBERS),
        A = (0, a.bG)([T.A], () => T.A.getGuild(l)),
        { analyticsLocations: D } = (0, o.Ay)(d.A.MEMBER_SAFETY_PAGE),
        G = (0, h.n)({ guildId: l }),
        { guildJoinRequests: L } = (0, g.K)({
            guildId: l,
            applicationStatus: "ALL_MEMBERS" === u ? j.B5.SUBMITTED : u,
            sortOrder: G,
        });
    r.useEffect(() => {
        (null == A ? void 0 : A.features.has(w.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) ||
            b(y.D.ALL_MEMBERS);
    }, [A]);
    let F = (0, _.fw)(l),
        V = (0, x.q)(l),
        z = r.useRef(null);
    (0, O.e)(l);
    let { fetchNextPage: H } = (0, f.K)({
            guildId: l,
            guildJoinRequests: L,
        }),
        q = r.useCallback(async () => {
            var e;
            if (u === y.D.ALL_MEMBERS) return;
            let t = null == (e = z.current) ? void 0 : e.getScrollerState();
            null == t || (t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await H(G, u)));
        }, [u, u, G, H]),
        W = r.useCallback(
            async (e) => {
                u === e || (b(e), m.A.setSelectedGuildJoinRequest(l, null), "ALL_MEMBERS" !== e && (await H(G, e)));
            },
            [u, l, H, G],
        );
    r.useEffect(() => {
        if (!F && null != A) {
            var e;
            let t = null == (e = S.Ay.getDefaultChannel(A.id)) ? void 0 : e.id;
            (0, p.uh)(A.id, t);
        }
    }, [A, F]);
    let K = (0, a.bG)([E.Ay], () => null != E.Ay.getGuildSidebarState(l), [l]);
    return null != A && F
        ? (0, n.jsxs)(o.f5, {
              value: D,
              children: [
                  (0, n.jsxs)("div", {
                      className: s()(k.TE, U.MY, { [k.js]: K }),
                      children: [
                          (0, n.jsx)(B, {
                              guild: A,
                              currentTab: u,
                              onTabSelect: W,
                          }),
                          (0, n.jsx)(c.T7Y, {
                              onScroll: q,
                              ref: z,
                              orientation: "vertical",
                              children: (0, n.jsx)("div", {
                                  className: s()(k.Qs, U.kL),
                                  children:
                                      u === y.D.ALL_MEMBERS
                                          ? (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(R.A, { guild: A }),
                                                    (0, n.jsx)(M.A, { guild: A }),
                                                ],
                                            })
                                          : (0, n.jsx)(I.A, {
                                                guildId: A.id,
                                                currentTab: u,
                                            }),
                              }),
                          }),
                          (0, n.jsx)(C.A, { guildId: A.id }),
                      ],
                  }),
                  V &&
                      (u === y.D.ALL_MEMBERS ? (0, n.jsx)(P.A, { guildId: A.id }) : (0, n.jsx)(N.A, { guildId: A.id })),
              ],
          })
        : null;
}
