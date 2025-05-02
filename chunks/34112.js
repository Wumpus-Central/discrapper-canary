n.d(t, { Z: () => A }), n(781311), n(539338), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(999153),
    o = n(584922),
    c = n(866442),
    u = n(442837),
    d = n(865672),
    m = n(481060),
    g = n(239091),
    p = n(493544),
    f = n(134433),
    h = n(91218),
    x = n(646892),
    b = n(741247),
    j = n(518738),
    _ = n(549631),
    v = n(496675),
    O = n(626135),
    C = n(480608),
    y = n(243730),
    N = n(130341),
    I = n(970129),
    E = n(712181),
    S = n(203377),
    T = n(981631),
    P = n(388032),
    w = n(521219),
    R = n(587072);
function Z(e) {
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
function D(e, t) {
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
let k = 'DRAGGABLE_ROLE';
function A(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: l, otherRoles: s, setSelectedSection: a, renderHeader: o, headerHeight: c, query: d } = e,
        m = (0, u.e7)([y.Z], () => y.Z.getRoleMemberCount(n.id), [n.id]),
        g = (0, u.e7)([v.Z], () => v.Z.getHighestRole(n), [n]),
        f = d.trim();
    i.useEffect(() => {
        (0, C.E)(n.id);
    }, [n.id]);
    let h = i.useRef(!1);
    i.useEffect(() => {
        h.current || '' === d.trimStart() || (O.default.track(T.rMx.SEARCH_STARTED, { search_type: 'Roles' }), (h.current = !0));
    }, [d]);
    let x = i.useMemo(() => s.filter((e) => (0, N.uo)(e, f)), [s, f]),
        b = i.useMemo(() => [...s, l], [s, l]),
        { draggingId: j, handleDragStart: _, handleDragReset: I, handleDragComplete: S } = (0, E.Z)(b),
        P = i.useCallback(
            (e) => {
                var i;
                let { row: l } = e;
                if (0 === x.length) return (0, r.jsx)(L, {}, 'empty-role');
                let o = x[l];
                return (0, r.jsx)(
                    M,
                    {
                        role: o,
                        guild: n,
                        highestRole: g,
                        currentPosition: l,
                        memberCount: null != (i = null == m ? void 0 : m[o.id]) ? i : 0,
                        onDragStart: _,
                        onDragReset: I,
                        onDragComplete: S,
                        disableHover: null != j,
                        disableDrag: s.length !== x.length,
                        setEditRoleId: t,
                        setSelectedSection: a
                    },
                    o.id
                );
            },
            [x, n, g, m, _, I, S, j, s, t, a]
        );
    return (0, r.jsx)(p.Xi, {
        sections: [Math.max(x.length, 1)],
        sectionHeight: c,
        renderSection: o,
        rowHeight: 61,
        renderRow: P
    });
}
function L() {
    return (0, r.jsxs)('div', {
        className: w.emptyRoles,
        children: [
            (0, r.jsx)('div', { className: R.dragSpacing }),
            (0, r.jsx)(m.BFJ, {
                size: 'md',
                color: 'currentColor'
            }),
            (0, r.jsx)(m.Text, {
                className: w.emptyRolesText,
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: P.intl.string(P.t['vR7M+/'])
            })
        ]
    });
}
function M(e) {
    var t, l, c;
    let { role: u, guild: d, highestRole: p, currentPosition: h, memberCount: j, onDragStart: v, onDragReset: O, onDragComplete: C, disableHover: y, disableDrag: N, setEditRoleId: E, setSelectedSection: T } = e,
        A = (0, I.T)(d, p, u),
        L = null != A,
        [M, U] = i.useState(!1),
        B = i.useMemo(
            () => ({
                type: k,
                item: () => (
                    v(u.id),
                    {
                        id: u.id,
                        position: h
                    }
                ),
                canDrag: () => M && !L,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    if (null == n) return void O();
                    C(n.roleId);
                }
            }),
            [u, v, O, C, L, M, h]
        ),
        [{ isDragging: F }, z] = (0, a.c)(B),
        H = i.useMemo(
            () => ({
                accept: k,
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
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            D(Z({}, t), {
                                role: u,
                                guild: d
                            })
                        );
                });
            },
            [d, u]
        ),
        K = (0, b.e)(d, u);
    if (F)
        return (0, r.jsx)('div', {
            ref: (e) => {
                z(e);
            },
            className: s()(w.roleRow, w.roleRowDragging)
        });
    function X() {
        E(u.id);
    }
    function q() {
        X(), T(S.ZI.MEMBERS);
    }
    return (0, r.jsxs)(m.P3F, {
        className: s()(w.roleRow, {
            [w.roleRowDisableHover]: y,
            [w.containerDragBefore]: null != W && h < W,
            [w.containerDragAfter]: null != W && h > W
        }),
        onClick: X,
        onContextMenu: Y,
        innerRef: (e) => z(V(e)),
        'data-dnd-name': u.name,
        'aria-label': P.intl.formatToPlainString(P.t.Vu0AcX, {
            name: u.name,
            count: ''.concat(j)
        }),
        children: [
            (0, r.jsx)('div', {
                className: s()(w.dragIcon, R.dragSpacing, { [w.dragIconHidden]: L || N }),
                onMouseEnter: () => U(!0),
                onMouseLeave: () => U(!1),
                children: (0, r.jsx)(m.Vni, {
                    size: 'xs',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: s()(w.roleNameContainer, R.roleNameSpacing),
                children: [
                    (null == (t = u.tags) ? void 0 : t.guild_connections) === null
                        ? (0, r.jsx)(f.Z, {
                              className: w.roleFlowerStar,
                              color: u.colorString,
                              size: 24
                          })
                        : (0, r.jsx)(G, {
                              guildId: d.id,
                              role: u,
                              size: 24,
                              className: w.roleIcon,
                              defaultIconClassName: w.shield
                          }),
                    null != A
                        ? (0, r.jsx)(I.Z, {
                              className: w.lock,
                              tooltipText: A
                          })
                        : null,
                    (0, r.jsx)(m.Text, {
                        className: w.roleName,
                        color: 'header-primary',
                        variant: 'text-md/medium',
                        children: u.name
                    }),
                    (null == (l = u.tags) ? void 0 : l.subscription_listing_id) != null &&
                        (0, r.jsx)(_.Z, {
                            className: w.subscriptionRoleIcon,
                            'aria-label': P.intl.string(P.t.a2Ak8f)
                        }),
                    (null == (c = u.tags) ? void 0 : c.is_guild_product_role) === !0 && (0, r.jsx)(x.Z, {})
                ]
            }),
            (0, r.jsx)(m.ua7, {
                text: P.intl.string(P.t.CW75t7),
                'aria-label': P.intl.formatToPlainString(P.t.Fgs8fH, { count: ''.concat(j) }),
                position: 'right',
                children: (e) =>
                    (0, r.jsxs)(
                        m.P3F,
                        D(Z({}, e), {
                            className: s()(w.memberCountContainer, R.memberSpacing),
                            onClick: q,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    color: 'none',
                                    children: j
                                }),
                                (0, r.jsx)(m.tBG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: w.person,
                                    width: 20,
                                    height: 20
                                })
                            ]
                        })
                    )
            }),
            (0, r.jsxs)('div', {
                className: s()(w.buttonsContainer, R.buttonsSpacing),
                children: [
                    (0, r.jsx)(m.M0o, {
                        className: s()(w.circleButton, w.editButton),
                        tooltip: L ? P.intl.string(P.t['HO/oXl']) : P.intl.string(P.t.bt75u7),
                        color: m.YX$.SECONDARY,
                        size: m.tT7.SIZE_36,
                        icon: L
                            ? (0, r.jsx)(m.tEF, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              })
                            : (0, r.jsx)(m.vdY, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              }),
                        onClick: X
                    }),
                    (0, r.jsx)(m.M0o, {
                        className: w.circleButton,
                        tooltip: P.intl.string(P.t.UKOtz8),
                        color: m.YX$.SECONDARY,
                        size: m.tT7.SIZE_36,
                        icon: (0, r.jsx)(m.xhG, {
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
function G(e) {
    var t, n, i, l;
    let { guildId: a, role: o, size: u, enableTooltip: g, className: p, defaultIconClassName: f } = e,
        { hasGradient: x, stops: b, gradientId: _ } = (0, d.De)(null == (t = o.colorStrings) ? void 0 : t.primaryColor, null == (n = o.colorStrings) ? void 0 : n.secondaryColor, null == (i = o.colorStrings) ? void 0 : i.tertiaryColor),
        v = (0, j.p9)({
            guildId: a,
            roleId: o.id,
            size: u
        });
    if (null != v)
        return (0, r.jsx)(
            h.Z,
            D(Z({}, v), {
                className: p,
                enableTooltip: g
            })
        );
    let O = null != (l = o.colorString) ? l : (0, c.Rf)(T.p6O);
    return (
        x && (O = 'url(#'.concat(_, ')')),
        (0, r.jsxs)(r.Fragment, {
            children: [
                x &&
                    (0, r.jsx)('svg', {
                        width: '0',
                        height: '0',
                        style: { position: 'absolute' },
                        children: (0, r.jsx)('linearGradient', {
                            id: _,
                            x1: '0%',
                            y1: '0%',
                            x2: '0%',
                            y2: '100%',
                            children: b
                        })
                    }),
                (0, r.jsx)(m.lZ8, {
                    size: 'custom',
                    className: s()(p, f),
                    color: O,
                    width: u,
                    height: u
                })
            ]
        })
    );
}
