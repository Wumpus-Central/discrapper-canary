n.d(t, { Z: () => P }), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(348327),
    s = n.n(a),
    c = n(399606),
    u = n(952265),
    d = n(481060),
    C = n(607070),
    m = n(906732),
    b = n(136015),
    p = n(506071),
    f = n(910693),
    h = n(893966),
    j = n(527379),
    g = n(827657),
    x = n(472596),
    v = n(201756),
    O = n(66747),
    y = n(852479),
    _ = n(420212),
    H = n(172796);
let w = {
        transform: 'translate3d(15%, 0, 0)',
        opacity: 0.3
    },
    N = {
        transform: 'translate3d(5%, 0, 0)',
        opacity: 0.5
    },
    S = {
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
    },
    D = {
        mass: 1.1,
        friction: 24,
        tension: 260
    },
    Z = (e) => e.shiftKey || e.key === _.vn.SHIFT,
    L = (e) => e.metaKey || e.ctrlKey || ['Meta', 'Control'].includes(e.key),
    R = l.memo(
        function (e) {
            let { members: t, guild: n, className: o, searchState: a, compact: s, onSelectRow: m, onResetForNewMembers: b } = e,
                f = (0, c.e7)([C.Z], () => C.Z.useReducedMotion),
                _ = (0, u.f9)(),
                R = (0, p.n)(),
                [P, I] = l.useState(!1),
                [M, V] = l.useState(!1),
                E = !_ && P && M;
            l.useEffect(() => {
                R || (I(!1), V(!1));
            }, [R]),
                l.useLayoutEffect(() => {
                    let e = (e) => {
                            Z(e) && I(!0), L(e) && V(!0);
                        },
                        t = (e) => {
                            Z(e) && I(!1), L(e) && V(!1);
                        };
                    return (
                        window.addEventListener('keydown', e),
                        window.addEventListener('keyup', t),
                        () => {
                            window.removeEventListener('keydown', e), window.removeEventListener('keyup', t);
                        }
                    );
                }, []),
                l.useEffect(() => {
                    (0, j.nb)(n.id, t);
                }, [n.id, t]);
            let T = t.length > 30,
                k = (0, d.Yzy)(t, {
                    key: (e) => e,
                    trail: T ? 5 : 15,
                    from(e) {
                        let t = h.Z.getEnhancedMember(n.id, e),
                            r = h.Z.getLastRefreshTimestamp(n.id),
                            l = null == t || 0 === r,
                            o = null != t && t.refreshTimestamp === r;
                        return l || !o ? S : T ? N : w;
                    },
                    enter: S,
                    config: D
                }),
                A = !f && a === x.po.LOADING;
            return (0, r.jsxs)('table', {
                className: i()(H.table, o),
                children: [
                    (0, r.jsx)(v.Z, {
                        guildId: n.id,
                        currentPagedMembers: t
                    }),
                    (0, r.jsx)('tbody', {
                        children:
                            a === x.po.SUCCESS_FULL || a === x.po.LOADING
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(y.Z, {
                                              guild: n,
                                              onSubmit: b
                                          }),
                                          k((e, t) =>
                                              (0, r.jsx)(
                                                  O.Z,
                                                  {
                                                      userId: t,
                                                      guildId: n.id,
                                                      style: e,
                                                      onSelect: m,
                                                      isHoldingAdvancedInfoKey: E,
                                                      compact: s,
                                                      isLoading: A
                                                  },
                                                  t
                                              )
                                          )
                                      ]
                                  })
                                : (0, r.jsx)('td', {
                                      colSpan: 7,
                                      children: (0, r.jsx)(g.Z, { searchState: a })
                                  })
                    })
                ]
            });
        },
        function (e, t) {
            let n = s()(e.members, t.members),
                r = e.guild.id === t.guild.id,
                l = e.searchState === t.searchState,
                o = e.compact === t.compact;
            return n && r && l && o;
        }
    ),
    P = function (e) {
        var t, n;
        let { guild: o, className: i, searchState: a, compact: s, onSelectRow: u, onResetForNewMembers: d } = e,
            C = (0, c.cj)([h.Z], () => h.Z.getPaginationStateByGuildId(o.id), [o.id]),
            [p] = (0, c.e7)([h.Z], () => h.Z.getPagedMembersByGuildId(o.id), [o.id], b.Q);
        l.useEffect(() => {
            (0, j.zO)(o.id);
        }, [o.id]);
        let g = l.useDeferredValue(null != (t = p[C.currentPage]) ? t : []),
            { analyticsLocations: x } = (0, m.ZP)(),
            v = null != (n = null == x ? void 0 : x[0]) ? n : null;
        return (
            l.useEffect(() => {
                (0, f.h1)(o.id, v);
            }, [o.id, v]),
            (0, r.jsx)(R, {
                members: g,
                guild: o,
                className: i,
                searchState: a,
                compact: s,
                onSelectRow: u,
                onResetForNewMembers: d
            })
        );
    };
