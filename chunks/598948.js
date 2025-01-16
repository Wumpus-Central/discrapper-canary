n(47120);
var l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    r = n(348327),
    s = n.n(r),
    c = n(399606),
    C = n(952265),
    d = n(481060),
    u = n(607070),
    m = n(906732),
    h = n(136015),
    x = n(506071),
    b = n(910693),
    f = n(893966),
    g = n(527379),
    p = n(827657),
    H = n(472596),
    j = n(201756),
    v = n(66747),
    N = n(852479),
    L = n(420212),
    I = n(264241);
let _ = {
        transform: 'translate3d(15%, 0, 0)',
        opacity: 0.3
    },
    M = {
        transform: 'translate3d(5%, 0, 0)',
        opacity: 0.5
    },
    Z = {
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
    },
    R = {
        mass: 1.1,
        friction: 24,
        tension: 260
    },
    D = (e) => e.shiftKey || e.key === L.vn.SHIFT,
    S = (e) => e.metaKey || e.ctrlKey || ['Meta', 'Control'].includes(e.key),
    V = o.memo(
        function (e) {
            let { members: t, guild: n, className: i, searchState: r, compact: s, onSelectRow: m, onResetForNewMembers: h } = e,
                b = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
                L = (0, C.f9)(),
                V = (0, x.n)(),
                [T, E] = o.useState(!1),
                [w, A] = o.useState(!1),
                k = !L && T && w;
            o.useEffect(() => {
                !V && (E(!1), A(!1));
            }, [V]),
                o.useLayoutEffect(() => {
                    let e = (e) => {
                            D(e) && E(!0), S(e) && A(!0);
                        },
                        t = (e) => {
                            D(e) && E(!1), S(e) && A(!1);
                        };
                    return (
                        window.addEventListener('keydown', e),
                        window.addEventListener('keyup', t),
                        () => {
                            window.removeEventListener('keydown', e), window.removeEventListener('keyup', t);
                        }
                    );
                }, []),
                o.useEffect(() => {
                    (0, g.nb)(n.id, t);
                }, [n.id, t]);
            let y = t.length > 30,
                B = (0, d.useTransition)(t, {
                    key: (e) => e,
                    trail: y ? 5 : 15,
                    from(e) {
                        let t = f.Z.getEnhancedMember(n.id, e),
                            l = f.Z.getLastRefreshTimestamp(n.id),
                            o = null == t || 0 === l,
                            i = null != t && t.refreshTimestamp === l;
                        return o || !i ? Z : y ? M : _;
                    },
                    enter: Z,
                    config: R
                }),
                O = !b && r === H.po.LOADING;
            return (0, l.jsxs)('table', {
                className: a()(I.table, i),
                children: [
                    (0, l.jsx)(j.Z, {
                        guildId: n.id,
                        currentPagedMembers: t
                    }),
                    (0, l.jsx)('tbody', {
                        children:
                            r === H.po.SUCCESS_FULL || r === H.po.LOADING
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(N.Z, {
                                              guild: n,
                                              onSubmit: h
                                          }),
                                          B((e, t) =>
                                              (0, l.jsx)(
                                                  v.Z,
                                                  {
                                                      userId: t,
                                                      guildId: n.id,
                                                      style: e,
                                                      onSelect: m,
                                                      isHoldingAdvancedInfoKey: k,
                                                      compact: s,
                                                      isLoading: O
                                                  },
                                                  t
                                              )
                                          )
                                      ]
                                  })
                                : (0, l.jsx)('td', {
                                      colSpan: 7,
                                      children: (0, l.jsx)(p.Z, { searchState: r })
                                  })
                    })
                ]
            });
        },
        function (e, t) {
            let n = s()(e.members, t.members),
                l = e.guild.id === t.guild.id,
                o = e.searchState === t.searchState,
                i = e.compact === t.compact;
            return n && l && o && i;
        }
    );
t.Z = function (e) {
    var t, n;
    let { guild: i, className: a, searchState: r, compact: s, onSelectRow: C, onResetForNewMembers: d } = e,
        u = (0, c.cj)([f.Z], () => f.Z.getPaginationStateByGuildId(i.id), [i.id]),
        [x] = (0, c.e7)([f.Z], () => f.Z.getPagedMembersByGuildId(i.id), [i.id], h.Q);
    o.useEffect(() => {
        (0, g.zO)(i.id);
    }, [i.id]);
    let p = o.useDeferredValue(null !== (t = x[u.currentPage]) && void 0 !== t ? t : []),
        { analyticsLocations: H } = (0, m.ZP)(),
        j = null !== (n = null == H ? void 0 : H[0]) && void 0 !== n ? n : null;
    return (
        o.useEffect(() => {
            (0, b.h1)(i.id, j);
        }, [i.id, j]),
        (0, l.jsx)(V, {
            members: p,
            guild: i,
            className: a,
            searchState: r,
            compact: s,
            onSelectRow: C,
            onResetForNewMembers: d
        })
    );
};
