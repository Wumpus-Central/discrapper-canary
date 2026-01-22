n.d(t, {
    A: () => L,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    o = n.n(i),
    a = n(812729),
    s = n.n(a),
    c = n(417597),
    d = n(192308),
    u = n(397927),
    C = n(775602),
    f = n(688810),
    b = n(996439),
    m = n(218394),
    p = n(504049),
    j = n(266047),
    g = n(221950),
    h = n(809617),
    x = n(189552),
    y = n(89092),
    O = n(402218),
    v = n(17864),
    H = n(650583),
    w = n(160654);
let A = {
        transform: "translate3d(15%, 0, 0)",
        opacity: 0.3,
    },
    D = {
        transform: "translate3d(5%, 0, 0)",
        opacity: 0.5,
    },
    S = {
        transform: "translate3d(0, 0, 0)",
        opacity: 1,
    },
    _ = {
        mass: 1.1,
        friction: 24,
        tension: 260,
    },
    N = (e) => e.shiftKey || e.key === H.dh.SHIFT,
    P = (e) => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
    V = l.memo(
        function (e) {
            let {
                    members: t,
                    guild: n,
                    className: i,
                    searchState: a,
                    compact: s,
                    onSelectRow: f,
                    onResetForNewMembers: b,
                } = e,
                p = (0, c.bG)([C.A], () => C.A.useReducedMotion),
                H = (0, d.useHasAnyModalOpen)(),
                V = (0, m.j)(),
                [L, E] = l.useState(!1),
                [M, R] = l.useState(!1),
                I = !H && L && M;
            l.useEffect(() => {
                V || (E(!1), R(!1));
            }, [V]),
                l.useLayoutEffect(() => {
                    let e = (e) => {
                            N(e) && E(!0), P(e) && R(!0);
                        },
                        t = (e) => {
                            N(e) && E(!1), P(e) && R(!1);
                        };
                    return (
                        window.addEventListener("keydown", e),
                        window.addEventListener("keyup", t),
                        () => {
                            window.removeEventListener("keydown", e), window.removeEventListener("keyup", t);
                        }
                    );
                }, []),
                l.useEffect(() => {
                    (0, g.jo)(n.id, t);
                }, [n.id, t]);
            let T = t.length > 30,
                Z = (0, u.pnh)(t, {
                    key: (e) => e,
                    trail: T ? 5 : 15,
                    from(e) {
                        let t = j.A.getEnhancedMember(n.id, e),
                            r = j.A.getLastRefreshTimestamp(n.id),
                            l = null == t || 0 === r,
                            i = null != t && t.refreshTimestamp === r;
                        return l || !i ? S : T ? D : A;
                    },
                    enter: S,
                    config: _,
                }),
                k = !p && a === x.IY.LOADING;
            return (0, r.jsxs)("table", {
                className: o()(w.tp, i),
                children: [
                    (0, r.jsx)(y.A, {
                        guildId: n.id,
                        currentPagedMembers: t,
                    }),
                    (0, r.jsx)("tbody", {
                        children:
                            a === x.IY.SUCCESS_FULL || a === x.IY.LOADING
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(v.A, {
                                              guild: n,
                                              onSubmit: b,
                                          }),
                                          Z((e, t) =>
                                              (0, r.jsx)(
                                                  O.A,
                                                  {
                                                      userId: t,
                                                      guildId: n.id,
                                                      style: e,
                                                      onSelect: f,
                                                      isHoldingAdvancedInfoKey: I,
                                                      compact: s,
                                                      isLoading: k,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, r.jsx)("td", {
                                      colSpan: 7,
                                      children: (0, r.jsx)(h.A, {
                                          searchState: a,
                                      }),
                                  }),
                    }),
                ],
            });
        },
        function (e, t) {
            let n = s()(e.members, t.members),
                r = e.guild.id === t.guild.id,
                l = e.searchState === t.searchState,
                i = e.compact === t.compact;
            return n && r && l && i;
        },
    ),
    L = function (e) {
        var t, n;
        let { guild: i, className: o, searchState: a, compact: s, onSelectRow: d, onResetForNewMembers: u } = e,
            C = (0, c.cf)([j.A], () => j.A.getPaginationStateByGuildId(i.id), [i.id]),
            [m] = (0, c.bG)([j.A], () => j.A.getPagedMembersByGuildId(i.id), [i.id], b.D);
        l.useEffect(() => {
            (0, g.uO)(i.id);
        }, [i.id]);
        let h = l.useDeferredValue(null != (t = m[C.currentPage]) ? t : []),
            { analyticsLocations: x } = (0, f.Ay)(),
            y = null != (n = null == x ? void 0 : x[0]) ? n : null;
        return (
            l.useEffect(() => {
                (0, p.KW)(i.id, y);
            }, [i.id, y]),
            (0, r.jsx)(V, {
                members: h,
                guild: i,
                className: o,
                searchState: a,
                compact: s,
                onSelectRow: d,
                onResetForNewMembers: u,
            })
        );
    };
