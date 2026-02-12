l.d(t, { A: () => w });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(812729),
    o = l.n(r),
    C = l(417597),
    d = l(192308),
    c = l(397927),
    u = l(775602),
    m = l(688810),
    x = l(996439),
    h = l(218394),
    g = l(879408),
    _ = l(504049),
    H = l(266047),
    p = l(221950),
    f = l(470348),
    j = l(809617),
    b = l(189552),
    v = l(89092),
    A = l(402218),
    N = l(17864),
    L = l(650583),
    V = l(985018),
    R = l(160654);
let M = { transform: "translate3d(15%, 0, 0)", opacity: 0.3 },
    D = { transform: "translate3d(5%, 0, 0)", opacity: 0.5 },
    S = { transform: "translate3d(0, 0, 0)", opacity: 1 },
    I = { mass: 1.1, friction: 24, tension: 260 },
    E = (e) => e.shiftKey || e.key === L.dh.SHIFT,
    y = (e) => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
    T = i.memo(
        function (e) {
            let {
                    members: t,
                    guild: l,
                    className: a,
                    searchState: r,
                    compact: o,
                    onSelectRow: m,
                    onResetForNewMembers: x,
                } = e,
                _ = (0, C.bG)([u.A], () => u.A.useReducedMotion),
                { usePubSub: L } = (0, f.r)({ location: "MembersTable" }),
                T = (0, C.bG)([g.A], () => g.A.hasPendingBulkBan(l.id), [l.id]),
                w = L && T,
                Z = (0, d.useHasAnyModalOpen)(),
                U = (0, h.j)(),
                [O, k] = i.useState(!1),
                [F, B] = i.useState(!1),
                P = !Z && O && F;
            i.useEffect(() => {
                U || (k(!1), B(!1));
            }, [U]),
                i.useLayoutEffect(() => {
                    let e = (e) => {
                            E(e) && k(!0), y(e) && B(!0);
                        },
                        t = (e) => {
                            E(e) && k(!1), y(e) && B(!1);
                        };
                    return (
                        window.addEventListener("keydown", e),
                        window.addEventListener("keyup", t),
                        () => {
                            window.removeEventListener("keydown", e), window.removeEventListener("keyup", t);
                        }
                    );
                }, []),
                i.useEffect(() => {
                    (0, p.jo)(l.id, t);
                }, [l.id, t]);
            let G = t.length > 30,
                q = (0, c.pnh)(t, {
                    key: (e) => e,
                    trail: G ? 5 : 15,
                    from(e) {
                        let t = H.A.getEnhancedMember(l.id, e),
                            n = H.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            a = null != t && t.refreshTimestamp === n;
                        return i || !a ? S : G ? D : M;
                    },
                    enter: S,
                    config: I,
                }),
                z = !_ && r === b.IY.LOADING;
            return (0, n.jsxs)("table", {
                className: s()(R.tp, a),
                children: [
                    (0, n.jsx)(v.A, { guildId: l.id, currentPagedMembers: t }),
                    w &&
                        (0, n.jsx)("tbody", {
                            children: (0, n.jsx)("tr", {
                                children: (0, n.jsx)("td", {
                                    colSpan: 99,
                                    className: R.cg,
                                    children: (0, n.jsxs)("div", {
                                        className: R.pZ,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: R.sj,
                                                children: (0, n.jsx)("div", { className: R.S0 }),
                                            }),
                                            (0, n.jsx)(c.wx6, { type: "info", children: V.intl.string(V.t["UP+9QZ"]) }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    (0, n.jsx)("tbody", {
                        className: s()({ [R.u6]: w }),
                        children:
                            r === b.IY.SUCCESS_FULL || r === b.IY.LOADING
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(N.A, { guild: l, onSubmit: x }),
                                          q((e, t) =>
                                              (0, n.jsx)(
                                                  A.A,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: m,
                                                      isHoldingAdvancedInfoKey: P,
                                                      compact: o,
                                                      isLoading: z,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, n.jsx)("td", { colSpan: 7, children: (0, n.jsx)(j.A, { searchState: r }) }),
                    }),
                ],
            });
        },
        function (e, t) {
            let l = o()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                i = e.searchState === t.searchState,
                a = e.compact === t.compact;
            return l && n && i && a;
        },
    ),
    w = function (e) {
        let { guild: t, className: l, searchState: a, compact: s, onSelectRow: r, onResetForNewMembers: o } = e,
            d = (0, C.cf)([H.A], () => H.A.getPaginationStateByGuildId(t.id), [t.id]),
            [c] = (0, C.bG)([H.A], () => H.A.getPagedMembersByGuildId(t.id), [t.id], x.D);
        i.useEffect(() => {
            (0, p.uO)(t.id);
        }, [t.id]);
        let u = i.useDeferredValue(c[d.currentPage] ?? []),
            { analyticsLocations: h } = (0, m.Ay)(),
            g = h?.[0] ?? null;
        return (
            i.useEffect(() => {
                (0, _.KW)(t.id, g);
            }, [t.id, g]),
            (0, n.jsx)(T, {
                members: u,
                guild: t,
                className: l,
                searchState: a,
                compact: s,
                onSelectRow: r,
                onResetForNewMembers: o,
            })
        );
    };
