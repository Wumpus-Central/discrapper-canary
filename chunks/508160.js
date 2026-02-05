l.d(t, { A: () => E });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(812729),
    o = l.n(r),
    C = l(417597),
    d = l(192308),
    c = l(397927),
    u = l(775602),
    m = l(688810),
    x = l(996439),
    h = l(218394),
    g = l(504049),
    _ = l(266047),
    H = l(221950),
    p = l(809617),
    f = l(189552),
    j = l(89092),
    v = l(402218),
    b = l(17864),
    A = l(650583),
    L = l(160654);
let N = { transform: "translate3d(15%, 0, 0)", opacity: 0.3 },
    V = { transform: "translate3d(5%, 0, 0)", opacity: 0.5 },
    R = { transform: "translate3d(0, 0, 0)", opacity: 1 },
    M = { mass: 1.1, friction: 24, tension: 260 },
    D = (e) => e.shiftKey || e.key === A.dh.SHIFT,
    S = (e) => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
    I = i.memo(
        function (e) {
            let {
                    members: t,
                    guild: l,
                    className: s,
                    searchState: r,
                    compact: o,
                    onSelectRow: m,
                    onResetForNewMembers: x,
                } = e,
                g = (0, C.bG)([u.A], () => u.A.useReducedMotion),
                A = (0, d.useHasAnyModalOpen)(),
                I = (0, h.j)(),
                [E, y] = i.useState(!1),
                [T, w] = i.useState(!1),
                Z = !A && E && T;
            i.useEffect(() => {
                I || (y(!1), w(!1));
            }, [I]),
                i.useLayoutEffect(() => {
                    let e = (e) => {
                            D(e) && y(!0), S(e) && w(!0);
                        },
                        t = (e) => {
                            D(e) && y(!1), S(e) && w(!1);
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
                    (0, H.jo)(l.id, t);
                }, [l.id, t]);
            let U = t.length > 30,
                O = (0, c.pnh)(t, {
                    key: (e) => e,
                    trail: U ? 5 : 15,
                    from(e) {
                        let t = _.A.getEnhancedMember(l.id, e),
                            n = _.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            s = null != t && t.refreshTimestamp === n;
                        return i || !s ? R : U ? V : N;
                    },
                    enter: R,
                    config: M,
                }),
                k = !g && r === f.IY.LOADING;
            return (0, n.jsxs)("table", {
                className: a()(L.tp, s),
                children: [
                    (0, n.jsx)(j.A, { guildId: l.id, currentPagedMembers: t }),
                    (0, n.jsx)("tbody", {
                        children:
                            r === f.IY.SUCCESS_FULL || r === f.IY.LOADING
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(b.A, { guild: l, onSubmit: x }),
                                          O((e, t) =>
                                              (0, n.jsx)(
                                                  v.A,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: m,
                                                      isHoldingAdvancedInfoKey: Z,
                                                      compact: o,
                                                      isLoading: k,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, n.jsx)("td", { colSpan: 7, children: (0, n.jsx)(p.A, { searchState: r }) }),
                    }),
                ],
            });
        },
        function (e, t) {
            let l = o()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                i = e.searchState === t.searchState,
                s = e.compact === t.compact;
            return l && n && i && s;
        },
    ),
    E = function (e) {
        let { guild: t, className: l, searchState: s, compact: a, onSelectRow: r, onResetForNewMembers: o } = e,
            d = (0, C.cf)([_.A], () => _.A.getPaginationStateByGuildId(t.id), [t.id]),
            [c] = (0, C.bG)([_.A], () => _.A.getPagedMembersByGuildId(t.id), [t.id], x.D);
        i.useEffect(() => {
            (0, H.uO)(t.id);
        }, [t.id]);
        let u = i.useDeferredValue(c[d.currentPage] ?? []),
            { analyticsLocations: h } = (0, m.Ay)(),
            p = h?.[0] ?? null;
        return (
            i.useEffect(() => {
                (0, g.KW)(t.id, p);
            }, [t.id, p]),
            (0, n.jsx)(I, {
                members: u,
                guild: t,
                className: l,
                searchState: s,
                compact: a,
                onSelectRow: r,
                onResetForNewMembers: o,
            })
        );
    };
