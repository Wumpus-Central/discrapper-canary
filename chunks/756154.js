l.r(t), l.d(t, { default: () => z });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(311907),
    o = l(177953),
    d = l(599319),
    c = l(793574),
    u = l(688810),
    x = l(726249),
    m = l(985925),
    h = l(624458),
    j = l(513461),
    _ = l(496767),
    A = l(663997),
    g = l(417718),
    f = l(324023),
    E = l(786180),
    v = l(742589),
    b = l(976860),
    N = l(761640),
    S = l(808728),
    C = l(71393),
    p = l(836872),
    I = l(134413),
    T = l(202309),
    R = l(841933),
    M = l(836501),
    D = l(735937),
    y = l(823712),
    G = l(606326),
    L = l(856768),
    k = l(332352),
    P = l(652215),
    w = l(746080),
    B = l(985018),
    U = l(256177),
    O = l(964623);
function F(e) {
    let { guild: t, currentTab: l, onTabSelect: s } = e,
        i = (0, _.W)(t.id),
        a = B.intl.string(B.t.oclz3Z),
        r = B.intl.string(B.t.oclz3Z);
    return (
        (0, x.HU)({ location: t.name, subsection: a }),
        (0, n.jsxs)(v.A, {
            className: U.wx,
            innerClassname: U.__invalid_innerHeader,
            channelId: w.VV.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, n.jsx)(v.A.Icon, { icon: o.n, "aria-hidden": !0 }),
                (0, n.jsx)(v.A.Title, { children: r }),
                i && (0, n.jsx)(y.A, { guildId: t.id, currentTab: l, onTabSelect: s }),
            ],
        })
    );
}
function z(e) {
    let { guildId: t } = e,
        l = (0, E.H)({ guildId: t }) ?? 0,
        [i, o] = s.useState(l > 0 ? p.D.PENDING : p.D.ALL_MEMBERS),
        x = (0, r.bG)([C.A], () => C.A.getGuild(t)),
        { analyticsLocations: _ } = (0, u.Ay)(c.A.MEMBER_SAFETY_PAGE),
        v = (0, g.n)({ guildId: t }),
        { guildJoinRequests: y } = (0, f.K)({
            guildId: t,
            applicationStatus: "ALL_MEMBERS" === i ? j.B5.SUBMITTED : i,
            sortOrder: v,
        });
    s.useEffect(() => {
        x?.features.has(P.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || o(p.D.ALL_MEMBERS);
    }, [x]);
    let w = (0, I.fw)(t),
        B = (0, m.q)(t),
        z = s.useRef(null);
    (0, T.e)(t);
    let { fetchNextPage: q } = (0, A.K)({ guildId: t, guildJoinRequests: y }),
        H = s.useCallback(async () => {
            if (i === p.D.ALL_MEMBERS) return;
            let e = z.current?.getScrollerState();
            null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && (await q(v, i)));
        }, [i, i, v, q]),
        V = s.useCallback(
            async (e) => {
                i === e || (o(e), h.A.setSelectedGuildJoinRequest(t, null), "ALL_MEMBERS" !== e && (await q(v, e)));
            },
            [i, t, q, v],
        );
    s.useEffect(() => {
        if (!w && null != x) {
            let e = S.Ay.getDefaultChannel(x.id)?.id;
            (0, b.uh)(x.id, e);
        }
    }, [x, w]);
    let W = (0, r.bG)([N.Ay], () => null != N.Ay.getGuildSidebarState(t), [t]);
    return null != x && w
        ? (0, n.jsxs)(u.f5, {
              value: _,
              children: [
                  (0, n.jsxs)("div", {
                      className: a()(O.TE, U.MY, { [O.js]: W }),
                      children: [
                          (0, n.jsx)(F, { guild: x, currentTab: i, onTabSelect: V }),
                          (0, n.jsx)(d.Ch, {
                              onScroll: H,
                              ref: z,
                              orientation: "vertical",
                              children: (0, n.jsx)("div", {
                                  className: a()(O.Qs, U.kL),
                                  children:
                                      i === p.D.ALL_MEMBERS
                                          ? (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(D.A, { guild: x }),
                                                    (0, n.jsx)(k.A, { guild: x }),
                                                ],
                                            })
                                          : (0, n.jsx)(M.A, { guildId: x.id, currentTab: i }),
                              }),
                          }),
                          (0, n.jsx)(L.A, { guildId: x.id }),
                      ],
                  }),
                  B &&
                      (i === p.D.ALL_MEMBERS ? (0, n.jsx)(G.A, { guildId: x.id }) : (0, n.jsx)(R.A, { guildId: x.id })),
              ],
          })
        : null;
}
