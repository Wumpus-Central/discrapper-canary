n.d(t, { Z: () => k }), n(781311), n(539338), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(999153),
    o = n(584922),
    c = n(866442),
    u = n(442837),
    d = n(481060),
    m = n(239091),
    g = n(493544),
    p = n(134433),
    f = n(91218),
    h = n(646892),
    x = n(741247),
    b = n(518738),
    j = n(549631),
    _ = n(496675),
    v = n(626135),
    O = n(480608),
    C = n(243730),
    y = n(130341),
    N = n(970129),
    I = n(712181),
    E = n(203377),
    S = n(981631),
    T = n(388032),
    P = n(521219),
    w = n(587072);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = 'DRAGGABLE_ROLE';
function k(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: l, otherRoles: s, setSelectedSection: a, renderHeader: o, headerHeight: c, query: d } = e,
        m = (0, u.e7)([C.Z], () => C.Z.getRoleMemberCount(n.id), [n.id]),
        p = (0, u.e7)([_.Z], () => _.Z.getHighestRole(n), [n]),
        f = d.trim();
    i.useEffect(() => {
        (0, O.E)(n.id);
    }, [n.id]);
    let h = i.useRef(!1);
    i.useEffect(() => {
        h.current || '' === d.trimStart() || (v.default.track(S.rMx.SEARCH_STARTED, { search_type: 'Roles' }), (h.current = !0));
    }, [d]);
    let x = i.useMemo(() => s.filter((e) => (0, y.uo)(e, f)), [s, f]),
        b = i.useMemo(() => [...s, l], [s, l]),
        { draggingId: j, handleDragStart: N, handleDragReset: E, handleDragComplete: T } = (0, I.Z)(b),
        P = i.useCallback(
            (e) => {
                var i;
                let { row: l } = e;
                if (0 === x.length) return (0, r.jsx)(A, {}, 'empty-role');
                let o = x[l];
                return (0, r.jsx)(
                    L,
                    {
                        role: o,
                        guild: n,
                        highestRole: p,
                        currentPosition: l,
                        memberCount: null != (i = null == m ? void 0 : m[o.id]) ? i : 0,
                        onDragStart: N,
                        onDragReset: E,
                        onDragComplete: T,
                        disableHover: null != j,
                        disableDrag: s.length !== x.length,
                        setEditRoleId: t,
                        setSelectedSection: a
                    },
                    o.id
                );
            },
            [x, n, p, m, N, E, T, j, s, t, a]
        );
    return (0, r.jsx)(g.Xi, {
        sections: [Math.max(x.length, 1)],
        sectionHeight: c,
        renderSection: o,
        rowHeight: 61,
        renderRow: P
    });
}
function A() {
    return (0, r.jsxs)('div', {
        className: P.emptyRoles,
        children: [
            (0, r.jsx)('div', { className: w.dragSpacing }),
            (0, r.jsx)(d.BFJ, {
                size: 'md',
                color: 'currentColor'
            }),
            (0, r.jsx)(d.Text, {
                className: P.emptyRolesText,
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: T.intl.string(T.t['vR7M+/'])
            })
        ]
    });
}
function L(e) {
    var t, l, c;
    let { role: u, guild: g, highestRole: f, currentPosition: b, memberCount: _, onDragStart: v, onDragReset: O, onDragComplete: C, disableHover: y, disableDrag: I, setEditRoleId: S, setSelectedSection: k } = e,
        A = (0, N.T)(g, f, u),
        L = null != A,
        [G, U] = i.useState(!1),
        B = i.useMemo(
            () => ({
                type: D,
                item: () => (
                    v(u.id),
                    {
                        id: u.id,
                        position: b
                    }
                ),
                canDrag: () => G && !L,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    if (null == n) return void O();
                    C(n.roleId);
                }
            }),
            [u, v, O, C, L, G, b]
        ),
        [{ isDragging: F }, z] = (0, a.c)(B),
        H = i.useMemo(
            () => ({
                accept: D,
                canDrop: () => !L,
                collect: (e) => {
                    let t = e.getItem();
                    return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
                },
                drop: () => ({ roleId: u.id })
            }),
            [L, u]
        ),
        [{ dragSourcePosition: W }, V] = (0, o.L)(H),
        Y = i.useCallback(
            (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            Z(R({}, t), {
                                role: u,
                                guild: g
                            })
                        );
                });
            },
            [g, u]
        ),
        K = (0, x.e)(g, u);
    if (F)
        return (0, r.jsx)('div', {
            ref: (e) => {
                z(e);
            },
            className: s()(P.roleRow, P.roleRowDragging)
        });
    function X() {
        S(u.id);
    }
    function q() {
        X(), k(E.ZI.MEMBERS);
    }
    return (0, r.jsxs)(d.P3F, {
        className: s()(P.roleRow, {
            [P.roleRowDisableHover]: y,
            [P.containerDragBefore]: null != W && b < W,
            [P.containerDragAfter]: null != W && b > W
        }),
        onClick: X,
        onContextMenu: Y,
        innerRef: (e) => z(V(e)),
        'data-dnd-name': u.name,
        'aria-label': T.intl.formatToPlainString(T.t.Vu0AcX, {
            name: u.name,
            count: ''.concat(_)
        }),
        children: [
            (0, r.jsx)('div', {
                className: s()(P.dragIcon, w.dragSpacing, { [P.dragIconHidden]: L || I }),
                onMouseEnter: () => U(!0),
                onMouseLeave: () => U(!1),
                children: (0, r.jsx)(d.Vni, {
                    size: 'xs',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: s()(P.roleNameContainer, w.roleNameSpacing),
                children: [
                    (null == (t = u.tags) ? void 0 : t.guild_connections) === null
                        ? (0, r.jsx)(p.Z, {
                              className: P.roleFlowerStar,
                              color: u.colorString,
                              size: 24
                          })
                        : (0, r.jsx)(M, {
                              guildId: g.id,
                              role: u,
                              size: 24,
                              className: P.roleIcon,
                              defaultIconClassName: P.shield
                          }),
                    null != A
                        ? (0, r.jsx)(N.Z, {
                              className: P.lock,
                              tooltipText: A
                          })
                        : null,
                    (0, r.jsx)(d.Text, {
                        className: P.roleName,
                        color: 'header-primary',
                        variant: 'text-md/medium',
                        children: u.name
                    }),
                    (null == (l = u.tags) ? void 0 : l.subscription_listing_id) != null &&
                        (0, r.jsx)(j.Z, {
                            className: P.subscriptionRoleIcon,
                            'aria-label': T.intl.string(T.t.a2Ak8f)
                        }),
                    (null == (c = u.tags) ? void 0 : c.is_guild_product_role) === !0 && (0, r.jsx)(h.Z, {})
                ]
            }),
            (0, r.jsx)(d.ua7, {
                text: T.intl.string(T.t.CW75t7),
                'aria-label': T.intl.formatToPlainString(T.t.Fgs8fH, { count: ''.concat(_) }),
                position: 'right',
                children: (e) =>
                    (0, r.jsxs)(
                        d.P3F,
                        Z(R({}, e), {
                            className: s()(P.memberCountContainer, w.memberSpacing),
                            onClick: q,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    color: 'none',
                                    children: _
                                }),
                                (0, r.jsx)(d.tBG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: P.person,
                                    width: 20,
                                    height: 20
                                })
                            ]
                        })
                    )
            }),
            (0, r.jsxs)('div', {
                className: s()(P.buttonsContainer, w.buttonsSpacing),
                children: [
                    (0, r.jsx)(d.M0o, {
                        className: s()(P.circleButton, P.editButton),
                        tooltip: L ? T.intl.string(T.t['HO/oXl']) : T.intl.string(T.t.bt75u7),
                        color: d.YX$.SECONDARY,
                        size: d.tT7.SIZE_36,
                        icon: L
                            ? (0, r.jsx)(d.tEF, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              })
                            : (0, r.jsx)(d.vdY, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              }),
                        onClick: X
                    }),
                    (0, r.jsx)(d.M0o, {
                        className: P.circleButton,
                        tooltip: T.intl.string(T.t.UKOtz8),
                        color: d.YX$.SECONDARY,
                        size: d.tT7.SIZE_36,
                        icon: (0, r.jsx)(d.xhG, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        }),
                        onClick: Y,
                        disabled: !K
                    })
                ]
            })
        ]
    });
}
function M(e) {
    var t;
    let { guildId: n, role: i, size: l, enableTooltip: a, className: o, defaultIconClassName: u } = e,
        m = (0, b.p9)({
            guildId: n,
            roleId: i.id,
            size: l
        });
    return null != m
        ? (0, r.jsx)(
              f.Z,
              Z(R({}, m), {
                  className: o,
                  enableTooltip: a
              })
          )
        : (0, r.jsx)(d.lZ8, {
              size: 'custom',
              className: s()(o, u),
              color: null != (t = i.colorString) ? t : (0, c.Rf)(S.p6O),
              width: l,
              height: l
          });
}
