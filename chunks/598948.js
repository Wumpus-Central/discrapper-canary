l.d(t, { Z: () => T }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(348327),
    r = l.n(s),
    c = l(399606),
    C = l(952265),
    d = l(481060),
    u = l(607070),
    m = l(906732),
    h = l(136015),
    x = l(506071),
    g = l(910693),
    H = l(893966),
    b = l(527379),
    p = l(827657),
    _ = l(472596),
    j = l(201756),
    f = l(66747),
    v = l(852479),
    N = l(420212),
    Z = l(264241);
let L = {
        transform: 'translate3d(15%, 0, 0)',
        opacity: 0.3
    },
    R = {
        transform: 'translate3d(5%, 0, 0)',
        opacity: 0.5
    },
    M = {
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
    },
    I = {
        mass: 1.1,
        friction: 24,
        tension: 260
    },
    V = (e) => e.shiftKey || e.key === N.vn.SHIFT,
    D = (e) => e.metaKey || e.ctrlKey || ['Meta', 'Control'].includes(e.key),
    S = a.memo(
        function (e) {
            let { members: t, guild: l, className: i, searchState: s, compact: r, onSelectRow: m, onResetForNewMembers: h } = e,
                g = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
                N = (0, C.f9)(),
                S = (0, x.n)(),
                [T, E] = a.useState(!1),
                [w, k] = a.useState(!1),
                y = !N && T && w;
            a.useEffect(() => {
                S || (E(!1), k(!1));
            }, [S]),
                a.useLayoutEffect(() => {
                    let e = (e) => {
                            V(e) && E(!0), D(e) && k(!0);
                        },
                        t = (e) => {
                            V(e) && E(!1), D(e) && k(!1);
                        };
                    return (
                        window.addEventListener('keydown', e),
                        window.addEventListener('keyup', t),
                        () => {
                            window.removeEventListener('keydown', e), window.removeEventListener('keyup', t);
                        }
                    );
                }, []),
                a.useEffect(() => {
                    (0, b.nb)(l.id, t);
                }, [l.id, t]);
            let A = t.length > 30,
                B = (0, d.Yzy)(t, {
                    key: (e) => e,
                    trail: A ? 5 : 15,
                    from(e) {
                        let t = H.Z.getEnhancedMember(l.id, e),
                            n = H.Z.getLastRefreshTimestamp(l.id),
                            a = null == t || 0 === n,
                            i = null != t && t.refreshTimestamp === n;
                        return a || !i ? M : A ? R : L;
                    },
                    enter: M,
                    config: I
                }),
                O = !g && s === _.po.LOADING;
            return (0, n.jsxs)('table', {
                className: o()(Z.table, i),
                children: [
                    (0, n.jsx)(j.Z, {
                        guildId: l.id,
                        currentPagedMembers: t
                    }),
                    (0, n.jsx)('tbody', {
                        children:
                            s === _.po.SUCCESS_FULL || s === _.po.LOADING
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(v.Z, {
                                              guild: l,
                                              onSubmit: h
                                          }),
                                          B((e, t) =>
                                              (0, n.jsx)(
                                                  f.Z,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: m,
                                                      isHoldingAdvancedInfoKey: y,
                                                      compact: r,
                                                      isLoading: O
                                                  },
                                                  t
                                              )
                                          )
                                      ]
                                  })
                                : (0, n.jsx)('td', {
                                      colSpan: 7,
                                      children: (0, n.jsx)(p.Z, { searchState: s })
                                  })
                    })
                ]
            });
        },
        function (e, t) {
            let l = r()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                a = e.searchState === t.searchState,
                i = e.compact === t.compact;
            return l && n && a && i;
        }
    ),
    T = function (e) {
        var t, l;
        let { guild: i, className: o, searchState: s, compact: r, onSelectRow: C, onResetForNewMembers: d } = e,
            u = (0, c.cj)([H.Z], () => H.Z.getPaginationStateByGuildId(i.id), [i.id]),
            [x] = (0, c.e7)([H.Z], () => H.Z.getPagedMembersByGuildId(i.id), [i.id], h.Q);
        a.useEffect(() => {
            (0, b.zO)(i.id);
        }, [i.id]);
        let p = a.useDeferredValue(null !== (t = x[u.currentPage]) && void 0 !== t ? t : []),
            { analyticsLocations: _ } = (0, m.ZP)(),
            j = null !== (l = null == _ ? void 0 : _[0]) && void 0 !== l ? l : null;
        return (
            a.useEffect(() => {
                (0, g.h1)(i.id, j);
            }, [i.id, j]),
            (0, n.jsx)(S, {
                members: p,
                guild: i,
                className: o,
                searchState: s,
                compact: r,
                onSelectRow: C,
                onResetForNewMembers: d
            })
        );
    };
