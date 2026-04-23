l.d(t, { A: () => T });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    C = l(812729),
    r = l.n(C),
    o = l(417597),
    d = l(192308),
    c = l(866323),
    u = l(683071),
    m = l(775602),
    h = l(688810),
    x = l(996439),
    g = l(218394),
    H = l(879408),
    _ = l(504049),
    p = l(266047),
    f = l(221950),
    j = l(470348),
    b = l(809617),
    A = l(189552),
    v = l(89092),
    V = l(402218),
    L = l(17864),
    D = l(650583),
    R = l(985018),
    M = l(5979);
let E = { transform: "translate3d(15%, 0, 0)", opacity: 0.3 },
    N = { transform: "translate3d(5%, 0, 0)", opacity: 0.5 },
    I = { transform: "translate3d(0, 0, 0)", opacity: 1 },
    S = { mass: 1.1, friction: 24, tension: 260 },
    y = (e) => e.shiftKey || e.key === D.dh.SHIFT,
    Z = (e) => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
    w = i.memo(
        function (e) {
            let {
                    members: t,
                    guild: l,
                    className: a,
                    searchState: C,
                    compact: r,
                    onSelectRow: h,
                    onResetForNewMembers: x,
                } = e,
                _ = (0, o.bG)([m.A], () => m.A.useReducedMotion),
                { usePubSub: D } = (0, j.r)({ location: "MembersTable" }),
                w = (0, o.bG)([H.A], () => H.A.hasPendingBulkBan(l.id), [l.id]),
                T = D && w,
                U = (0, d.useHasAnyModalOpen)(),
                k = (0, g.j)(),
                [O, F] = i.useState(!1),
                [B, G] = i.useState(!1),
                P = !U && O && B;
            i.useEffect(() => {
                k || (F(!1), G(!1));
            }, [k]),
                i.useLayoutEffect(() => {
                    let e = (e) => {
                            y(e) && F(!0), Z(e) && G(!0);
                        },
                        t = (e) => {
                            y(e) && F(!1), Z(e) && G(!1);
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
                    (0, f.jo)(l.id, t);
                }, [l.id, t]);
            let Y = t.length > 30,
                z = (0, c.p)(t, {
                    key: (e) => e,
                    trail: Y ? 5 : 15,
                    from(e) {
                        let t = p.A.getEnhancedMember(l.id, e),
                            n = p.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            a = null != t && t.refreshTimestamp === n;
                        return i || !a ? I : Y ? N : E;
                    },
                    enter: I,
                    config: S,
                }),
                q = !_ && C === A.IY.LOADING;
            return (0, n.jsxs)("table", {
                className: s()(M.tp, a),
                children: [
                    (0, n.jsx)(v.A, { guildId: l.id, currentPagedMembers: t }),
                    T &&
                        (0, n.jsx)("tbody", {
                            children: (0, n.jsx)("tr", {
                                children: (0, n.jsx)("td", {
                                    colSpan: 99,
                                    className: M.cg,
                                    children: (0, n.jsxs)("div", {
                                        className: M.pZ,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: M.sj,
                                                children: (0, n.jsx)("div", { className: M.S0 }),
                                            }),
                                            (0, n.jsx)(u.w, { type: "info", children: R.intl.string(R.t["UP+9QZ"]) }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    (0, n.jsx)("tbody", {
                        className: s()({ [M.u6]: T }),
                        children:
                            C === A.IY.SUCCESS_FULL || C === A.IY.LOADING
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(L.A, { guild: l, onSubmit: x }),
                                          z((e, t) =>
                                              (0, n.jsx)(
                                                  V.A,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: h,
                                                      isHoldingAdvancedInfoKey: P,
                                                      compact: r,
                                                      isLoading: q,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, n.jsx)("td", { colSpan: 7, children: (0, n.jsx)(b.A, { searchState: C }) }),
                    }),
                ],
            });
        },
        function (e, t) {
            let l = r()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                i = e.searchState === t.searchState,
                a = e.compact === t.compact;
            return l && n && i && a;
        },
    ),
    T = function (e) {
        let { guild: t, className: l, searchState: a, compact: s, onSelectRow: C, onResetForNewMembers: r } = e,
            d = (0, o.cf)([p.A], () => p.A.getPaginationStateByGuildId(t.id), [t.id]),
            [c] = (0, o.bG)([p.A], () => p.A.getPagedMembersByGuildId(t.id), [t.id], x.D);
        i.useEffect(() => {
            (0, f.uO)(t.id);
        }, [t.id]);
        let u = i.useDeferredValue(c[d.currentPage] ?? []),
            { analyticsLocations: m } = (0, h.Ay)(),
            g = m?.[0] ?? null;
        return (
            i.useEffect(() => {
                (0, _.KW)(t.id, g);
            }, [t.id, g]),
            (0, n.jsx)(w, {
                members: u,
                guild: t,
                className: l,
                searchState: a,
                compact: s,
                onSelectRow: C,
                onResetForNewMembers: r,
            })
        );
    };
